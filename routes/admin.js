const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Admin = require("../models/admin.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

// router.get("/adsignup", (req, res)=>{
//     res.render("admins/adsignup.ejs");
// });

// router.post("/adsignup", wrapAsync(async(req,res)=>{
//     try{
//         let {username, email, password} = req.body;
//         const newAdmin = new Admin({username, email})
//         const registeredAdmin = await Admin.register(newAdmin, password);
//         console.log(registeredAdmin);
//         req.flash("success","Wecome to Library Mangement System");
//         res.redirect("/LMS");
//     }catch(e){
//         req.flash("error", e.message);
//         res.redirect("/adsignup");
//     }
// }));

router.get("/adlogin", (req,res)=>{
    res.render("admins/adlogin.ejs");
});

router.post("/adlogin", passport.authenticate("local", {failureRedirect: "/adlogin", failureFlash: true}), async(req, res)=>{   // here we have used passport.authenticate middleware  that checks if the user is registered or not
    req.flash("success","Welcome back to Library Management System");
    res.redirect("/LMS");
});

module.exports = router;