const Book = require("./models/book.js");  // requiring bookSchema
const Review = require("./models/review.js");  // requiring reviewSchema
const expressError = require("./utils/expressError.js");
const {bookSchema, reviewSchema, userSchema} = require("./schema.js");

// middleware to validate book
module.exports.validateBook = (req, res, next) =>{
    let {error} = bookSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new expressError(400, error);
    }
    else
    {
        next();
    }
};

// middleware to validate book
module.exports.validateStudent = (req, res, next) =>{
    let {error} = userSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new expressError(400, error);
    }
    else
    {
        next();
    }
};


// middleware to validate review
module.exports.validateReview = (req,res,next)=>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new expressError(400, error);
    }
    else
    {
        next();
    }
}; 

// middleware to check if the user is logged in or not
module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated())
    {
        req.session.redirectUrl = req.originalUrl;   // here we have saved the url where we were going to before login
        req.flash("error", "You must be logged in to make changes")
        return res.redirect("/login");
    }
    next();
};

// the passport clear all the session information after login so we have to save them in a variable using the below middleware
module.exports.saveRedirectUrl = (req, res, next) =>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}



// we have written this middleware to check if the user trying to edit the listing is the owner of the listing or not.
module.exports.isOwner = async(req, res, next)=>{
    let {id} = req.params;
    let book = await Book.findById(id);   
    if(!book.owner.equals(res.locals.currUser._id)){
        req.flash("error","You are not the owner of this book");
        return  res.redirect(`/LMS/Books/${id}`);
    }
    next();
}

module.exports.isReviewAuthor = async(req, res, next)=>{
    let {id, reviewId} = req.params;
    let review = await Review.findById(reviewId);   
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error","You are not the owner of this review");
        return  res.redirect(`/LMS/Books/${id}`);
    }
    next();
}


// middleware to check if the logged user is admin or not
module.exports.isAdmin = (req,res,next)=>{
    // console.log(req.user._id.valueOf());
    // if(req.user._id.valueOf() != "65a55093eee327c8a1c3edd7")
    if(req.user._id.valueOf() != "65aca80e4f053323d8a37381")
    {
        req.flash("error","Only admin can access this page");
        return  res.redirect(`/LMS/Books`);
    }
    // if(req.user._id)
    // {
    //     req.session.redirectUrl = req.originalUrl;   // here we have saved the url where we were going to before login
    //     req.flash("error", "You must be logged in to make changes")
    //     return res.redirect("/login");
    // }
    next();
};