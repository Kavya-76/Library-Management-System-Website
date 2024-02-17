const express = require("express");
const router = express.Router({mergeParams: true});
// here merge params means that when we try to add a new review then we require the id of the listing in which the review is to be added
// now here as we removed the common path so the /Listings/:id will not come to review.js and will its scope will remain till router.js
// therefore to get the id in review.js we have set mergeParams: true so that all the parameters will also be shared to review.js

const wrapAsync = require("../utils/wrapAsync.js");
const expressError = require("../utils/expressError.js");
const Review = require("../models/review.js");
const Book = require("../models/book.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/review.js")

// Create review
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// Delete review
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;