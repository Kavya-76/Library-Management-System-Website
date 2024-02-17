const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl, isAdmin, isLoggedIn, validateStudent} = require("../middleware.js");
const userController = require("../controllers/user.js");

router.route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signUp));

router.route("/login")
    .get(userController.renderLoginForm)
    .post(saveRedirectUrl, passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}), userController.Login);

router.get("/logout", userController.logout);

router.route("/LMS/Students")
    .get(isLoggedIn, isAdmin, wrapAsync(userController.index))

router.route("/LMS/Students/search")
    .get(isLoggedIn, isAdmin, wrapAsync(userController.renderSearchForm))
    .post(isLoggedIn, isAdmin, wrapAsync(userController.searchStudent));
    
router.route("/LMS/Students/:id")
    .get(wrapAsync(userController.showStudent))
    .put(isLoggedIn, isAdmin, validateStudent, wrapAsync(userController.updateStudent))
    .delete(isLoggedIn, isAdmin, wrapAsync(userController.destroyStudent));

router.route("/LMS/Students/:id/edit")
    .get(isLoggedIn, isAdmin, wrapAsync(userController.renderEditForm));

router.route("/LMS/Students/:id/issued")
    .get(isLoggedIn, isAdmin, wrapAsync(userController.renderIssueForm))
    .post(isLoggedIn, isAdmin, wrapAsync(userController.Issued));

router.route("/LMS/Students/:id/return")
    .get(isLoggedIn, isAdmin, wrapAsync(userController.renderReturnForm))
    .post(isLoggedIn, isAdmin, wrapAsync(userController.Return));
    
router.route("/LMS/Students/:id/resetAmt")
    .put(isLoggedIn, isAdmin, wrapAsync(userController.resetAmt));
module.exports = router;