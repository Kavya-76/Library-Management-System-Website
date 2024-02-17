const Book = require("../models/book.js");
const Review = require("../models/review.js");

module.exports.createReview = async(req, res)=>{
    let book = await Book.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    book.reviews.push(newReview);
    await newReview.save();
    await book.save();
    req.flash("success","New Review created");
    res.redirect(`/LMS/Books/${book._id}`)
};

module.exports.destroyReview = async (req,res)=>{
    let {id, reviewId} = req.params;

    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});    // we have used $pull so that it also deletes(removes) the review from listingSchema as well.
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted");
    res.redirect(`/LMS/Books/${id}`);
};