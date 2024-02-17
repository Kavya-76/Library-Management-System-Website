const express = require("express");
const router = express.Router();
const Book = require("../models/book");  // requiring bookSchema
const wrapAsync = require("../utils/wrapAsync.js");
const expressError = require("../utils/expressError.js");
const {validateBook, isLoggedIn, isOwner, isAdmin} = require("../middleware.js");
const bookController = require("../controllers/book.js");
  
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});  // now our files/images will be stored on cloudinary and therefore we do not need our uploads folder anymore

// (The functions using which we make changes in the database are set to be async)
// A more easy way to define the paths is by using router.route method (by this we can combine the routes haveing the same path)
router.route("/")
    .get(wrapAsync(bookController.index))
    .post(isLoggedIn, isAdmin, upload.single("book[image]"),  validateBook, wrapAsync(bookController.createBook));

router.route("/search")
    .get(wrapAsync(bookController.renderSearchForm))
    .post(wrapAsync(bookController.searchBook));
     
router.route("/searchName")
    .post(wrapAsync(bookController.searchBookName));

router.route("/new")
    .get(isLoggedIn, isAdmin, bookController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(bookController.showBook))
    .put(isLoggedIn, isOwner, upload.single("book[image]"), validateBook, wrapAsync(bookController.updateBook))
    .delete(isLoggedIn, isOwner, wrapAsync(bookController.destroyBook));

router.route("/:id/edit")
    .get(isLoggedIn, isOwner, wrapAsync(bookController.renderEditForm));

module.exports = router;