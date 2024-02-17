const User = require("../models/user.js");
const Book = require("../models/book.js");
const returnDate = require("../utils/dateDiff.js");
const cal_fine = require("../utils/fine.js");
module.exports.renderSignupForm = (req, res)=>{
    res.render("users/signup.ejs");
};

module.exports.signUp = async(req,res)=>{
    try{
        let {name, username, email, password, phone} = req.body;
        const newUser = new User({name, username, email, phone})
        const registeredUser = await User.register(newUser, password);

        // here we have added a functionality that if the user sign ups then it will automatically get logged in
        req.login(registeredUser, (err)=>{
            if(err){
                return next(err);
            } 
            req.flash("success","Wecome to Library Mangement System");
            res.redirect("/LMS/Books");
        });
        // console.log(registeredUser);
    }catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login.ejs");
};

module.exports.Login = async(req, res)=>{   // here we have used passport.authenticate middleware  that checks if the user is registered or not
    req.flash("success","Welcome back to Library Management System");
    
    let redirectUrl = res.locals.redirectUrl;
    if(redirectUrl)
    {
        res.redirect(res.locals.redirectUrl);
    }else{
        res.redirect("/LMS/Books");
    }
};

module.exports.logout = (req, res, next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success", "You are logged out now");
        res.redirect("/LMS/Books");
    })
};

module.exports.index = async(req, res)=>{
    const allUsers = await User.find({});
    res.render("./students/index.ejs", {allUsers});
};

module.exports.showStudent = async(req, res)=>{
    let {id} = req.params;
    const user = await User.findById(id)
    // here we are doing populate nesting (if reviews we are also populating author)
        // .populate({                  
        //     path: "reviews",
        //     populate: {
        //         path: "author",
        //     },
        // })
        // .populate("owner");  // we have done populate as we want full structure of reviews in show.ejs
    if(!user){
        req.flash("error","Student does not exist");
        res.redirect("/LMS/Students");
    }
    res.render("./students/show.ejs", {user});
};

module.exports.renderSearchForm = async(req, res)=>{
    res.render("./students/search.ejs");
};
  
module.exports.searchStudent = async(req, res)=>{
    let userid = req.body.user.username;
    let spstudent = await(User.find({"username":userid}));
    if(spstudent.length > 0)
    {
        for (let student of spstudent)
        {
            let id = student._id;
            res.redirect(`/LMS/Students/${id}`);
        }
    }
    else
    {
        req.flash("error", "User not found");
        res.redirect("/LMS/Students/search");
    }
};

module.exports.renderEditForm = async(req,res)=>{
    let {id} = req.params;
    const user = await User.findById(id);
    res.render("./students/edit.ejs", {user});
}; 
 
module.exports.updateStudent = async(req,res)=>{
    let {id} = req.params;
    await User.findByIdAndUpdate(id, {...req.body.user});
    req.flash("success","User Updated");
    res.redirect(`/LMS/Students/${id}`);
};

module.exports.renderIssueForm = async(req,res)=>{
    let {id} = req.params;
    const user = await User.findById(id);
    if(user.issued.length<6)
    {
        res.render("./students/issue.ejs", {user});
    }
    else
    {
        req.flash("error","Cannot issue more books");
        res.redirect(`/LMS/Students/${id}`);
    }
}; 
 
module.exports.Issued = async(req,res)=>{
    let {id} = req.params;
    const user = await User.findById(id);
    let newIssued = user.issued;                  // books array
    let newIssuedDate = user.issuedDate;          // date array
    let iDate = new Date();                       // today's date
    let flag = 1;

    let bid = req.body.book.bid;
    let spbook = await(Book.find({"bid":bid}));
    if(spbook.length>0)
    {
        for(let ibook of newIssued)
        {
            if(ibook.bid == bid) 
            {
                req.flash("error", "Book already issued");
                res.redirect(`/LMS/Students/${id}`);   
                flag = 0;
            }
        }

        if(flag == 1)
        {
            for (let book of spbook)
            {
                if(book.noc>0){
                    book.noc = book.noc-1;
                    await Book.findByIdAndUpdate(book._id, {'noc': book.noc});
                    newIssued.push(book);
                    newIssuedDate.push(iDate);
                }
                else{
                    req.flash("error", "Book not available in stock");
                    res.redirect(`/LMS/Students/${id}`);
                }
            }
            await User.findByIdAndUpdate(id, {'issued': newIssued});
            await User.findByIdAndUpdate(id, {'issuedDate': newIssuedDate});
            req.flash("success", "Book issued successfully");
            res.redirect(`/LMS/Students/${id}`);
        }
    }
    else{
        req.flash("error", "Book not found");
        res.redirect(`/LMS/Students/${id}`);
    }
}; 

module.exports.renderReturnForm = async(req,res)=>{
    let {id} = req.params;
    const user = await User.findById(id);
    if(user.issued.length>0)
    {
        res.render("./students/return.ejs", {user});
    }
    else{
        req.flash("error", "You have not issued any book");
        res.redirect(`/LMS/Students/${id}`)
    }
}; 
 
module.exports.Return = async(req,res)=>{
    let {id} = req.params;
    const user = await User.findById(id);
    let Issued = user.issued;
    let IssuedDate = user.issuedDate;
    let tDate = new Date();
    let days, fine, flag=0;

    let bid = req.body.book.bid;
    let spbook = await(Book.find({"bid":bid}));
    if(spbook.length>0)
    {
        for(let ibook of Issued)
        {
            if(ibook.bid == bid) 
            {
                flag = 1;
                break;
            }   
        }
    

        if(flag==0)
        {
            req.flash("error","Book must be issued to return it");
            res.redirect(`/LMS/Students/${id}`);   
        }

        if(flag==1)
        {

            for (let book of spbook)
            {
                let index = 0;
                book.noc++;
                await Book.findByIdAndUpdate(book._id, {'noc': book.noc});
                for(let ibook of user.issued)
                {
                    if(ibook.bid == bid)
                    {
                        days = returnDate(IssuedDate[index], tDate);
                        fine = cal_fine(days, user.fine);
                        Issued.splice(index, 1);
                        IssuedDate.splice(index, 1);
                    }
                    index++;
                }
            }
            await User.findByIdAndUpdate(id, {'issued': Issued});
            await User.findByIdAndUpdate(id, {'issuedDate': IssuedDate});
            await User.findByIdAndUpdate(id, {'fine': fine});
            req.flash("success", "Book returned successfully");
            res.redirect(`/LMS/Students/${id}`);
        }
    }
    else{
        req.flash("error", "Book not found");
        res.redirect(`/LMS/Students/${id}`);
    }

}; 
 
module.exports.resetAmt = async(req,res)=>{
    let {id} = req.params;
    const user = await User.findById(id);
    let fine = 0;
    await User.findByIdAndUpdate(id, {'fine': fine});
    res.redirect(`/LMS/Students/${id}`);
};

module.exports.destroyStudent = async(req,res)=>{
    let {id} = req.params;
    await User.findByIdAndDelete(id);
    req.flash("success","User account deleted");
    res.redirect("/LMS/Students");
};