// MVC model (model, view, controller)

const Book = require("../models/book.js");

 
module.exports.renderSearchForm = async(req, res)=>{
    res.render("./books/search.ejs");
};

module.exports.searchBook = async(req, res)=>{
    let bid = req.body.book.bid;
    let spbook = await(Book.find({"bid":bid}));
    if(spbook.length>0)
    {
        for (let book of spbook)
        {
            let id = book._id;
            res.redirect(`/LMS/Books/${id}`);
        }
    }
    else{
        req.flash("error", "Book not found");
        res.redirect("/LMS/Books/search");
    }
};

module.exports.searchBookName = async(req, res)=>{
    // console.log(req.body);
    let bname = req.body.book.title;
    let spbook = await(Book.find({"title":bname}));
    if(spbook.length==1)
    {
        for (let book of spbook)
        {
            let id = book._id;
            res.redirect(`/LMS/Books/${id}`);
        }
    }
    else
    {
        req.flash("error","Book you requested for does not exist");
        res.redirect("/LMS/Books");
    }
};

module.exports.index = async(req, res)=>{
    const allBooks = await Book.find({});
    res.render("./books/index.ejs", {allBooks});
};

module.exports.renderNewForm = (req,res)=>{
    // console.log(req.user);
    res.render("./books/new.ejs");
};

module.exports.showBook = async(req, res)=>{
    let {id} = req.params;
    const book = await Book.findById(id)
    // here we are doing populate nesting (if reviews we are also populating author)
        .populate({                  
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");  // we have done populate as we want full structure of reviews in show.ejs
    if(!book){
        req.flash("error","Book you requested for does not exist");
        res.redirect("/LMS/Books");
    }
    res.render("./books/show.ejs", {book});
};

module.exports.createBook = async(req, res, next)=>{
    let url = req.file.path;
    let filename = req.file.filename;

    const newBook = new Book(req.body.book);
    newBook.owner = req.user._id;
    newBook.image = {url, filename};
    await newBook.save();
    req.flash("success","New Book created");
    res.redirect("/LMS/Books");
};

module.exports.renderEditForm = async(req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id);
    res.render("./books/edit.ejs", {book});
};
 
module.exports.updateBook = async(req,res)=>{
    let {id} = req.params;
    let book = await Book.findByIdAndUpdate(id, {...req.body.book});

    console.log(req.file);
    if(typeof req.file !== "undefined")   // here we are checking that the code in "If" will only run when we will pass an image
    {
        let url = req.file.path;
        let filename = req.file.filename;
        book.image = {url, filename};
        await book.save();
    }
    req.flash("success","Book Updated");
    res.redirect(`/LMS/Books/${id}`);
};

module.exports.destroyBook = async(req,res)=>{
    let {id} = req.params;
    await Book.findByIdAndDelete(id);
    req.flash("success","Book created");
    res.redirect("/LMS/Books");
};