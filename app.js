if(process.env.NODE_ENV != "production")
{
    require("dotenv").config();  // it stores the environment variables      // npm i dotenv
    // console.log(process.env.SECRET);
}
 
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Book = require("./models/book");  // requiring bookSchema
const path = require("path");
const methodOverride = require("method-override");   // helps to send put and delete request from form
const ejsMate = require("ejs-mate");    // helps to create templates (boilerPlate.ejs)
const wrapAsync = require("./utils/wrapAsync.js");
const expressError = require("./utils/expressError.js");
const {bookSchema, reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");
const bookRouter = require("./routes/book.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
// const adminRouter = require("./routes/admin.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
// const Admin = require("./models/admin.js");

const {isLoggedIn, isAdmin} = require("./middleware.js");
// This will connect the database
// const mongoURL = "mongodb://127.0.0.1:27017/LMS";
const dbUrl = process.env.ATLASDB_URL
async function main(){
    // await mongoose.connect(mongoURL);
    await mongoose.connect(dbUrl);
}

main()
    .then(()=>{
        console.log("Connected to 80");
    })
    .catch((err)=>{
        console.log(err);
    });



app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));  // setting our views folder as render path
app.use(express.urlencoded({extended: true}));  // so that all the data coming the request is able to parse
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));  // here we have set "public" folder as static so file stored in this folder can be used anywhere in program

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter: 24*3600,
});

store.on("error", ()=>{
    console.log("ERROR in MONGO SESSION STORE",err);
});

// To use session
const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    // it means if we log in once then our account will be logged in for 7 days
    cookie: {
        expires: Date.now() + 7*24*60*60*1000,          // Here we have given expiry data for 7days in miliseconds
        maxAge: 7*24*60*60*1000,
        httpOnly: true,
    },
}; 

app.use(session(sessionOptions));
app.use(flash());  // routes must be written after flash

// to use passport we require session therefore we are writing it after the session part as user credentials remains same within the same session  (it is used to prevent the user to login at each page of a website)
app.use(passport.initialize());
app.use(passport.session());  // it is used so that the user does not need to sign up at each and every page of the website
passport.use(new LocalStrategy(User.authenticate()));  // for user login and user signup
passport.serializeUser(User.serializeUser());      // to store user-related information into the session
passport.deserializeUser(User.deserializeUser());  // to remove user related information from the session
// passport.use(new LocalStrategy(Admin.authenticate()));  // for user login and user signup
// passport.serializeUser(Admin.serializeUser());      // to store user-related information into the session
// passport.deserializeUser(Admin.deserializeUser());  // to remove user related information from the session


// middleware to use flash
app.use((req, res, next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;   // saved req.user as a local variable so that it can be stored anywhere
    // res.locals.adminID = "65a55093eee327c8a1c3edd7";
    res.locals.adminID = "65aca80e4f053323d8a37381";  // atlas
    next();
});


// Root route
app.get("/",(req,res)=>{
    res.send("Hi, I am rooot");
});


// Books and Reviews routes
app.use("/LMS/Books",bookRouter);
app.use("/LMS/Books/:id/reviews",reviewRouter);
app.use("/",userRouter);
// app.use("/",adminRouter);

// Index route 
app.get("/LMS", isLoggedIn, isAdmin, wrapAsync(async(req, res)=>{
    res.render("./index.ejs");
}));

// Error route
app.all("*", (req, res, next)=>{
    next(new expressError(404, "Page not found"));
})

// this uses wrapAsync and expressError
app.use((err, req, res, next)=>{
    let {statusCode=500, message="Something went wrong!"} = err;
    res.status(statusCode).render("error.ejs", {message});
    // instead of throwing the errors directly we will use error.ejs
    // res.status(statusCode).send(message);
})

app.listen(8080, ()=>{
    console.log("Listening to port 8080");
});