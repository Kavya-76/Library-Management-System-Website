// js to initialize database
const mongoose = require("mongoose");
const initData = require("./data.js");
const Book = require("../models/book.js");
const mongoURL = "mongodb://127.0.0.1:27017/LMS";
// const dbUrl = process.env.ATLASDB_URL
main()
    .then(() => {
        console.log("Connected to 80");
    })
    .catch((err) => {
        console.log(err); 
    })

// to establish connection with mongoose database
async function main()
{
    await mongoose.connect(mongoURL);  // this is our url (we have given database name as LMS)
    // await mongoose.connect(dbUrl);  // this is our url (we have given database name as LMS)
};

const initDB = async() => {
    await Book.deleteMany({});   // first we have deleted all the existing data
    initData.data = initData.data.map((obj)=>({...obj, owner: "65a55093eee327c8a1c3edd7"}))  // this will this new property(owner) to all the items of the array
    // initData.data = initData.data.map((obj)=>({...obj, owner: "65aca80e4f053323d8a37381"}))  // this will this new property(owner) to all the items of the array
    await Book.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();