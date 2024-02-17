const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    
    email: {
        type: String,
        required: true,
    },

    phone: {
        type: Number,
        required: true,
    },

    issued: { 
        type: Array,
    },

    issuedDate: {
        type: Array,
    },

    fine: {
        type: Number,
        default: 0,
    }
});

userSchema.plugin(passportLocalMongoose);  //we have used this plugin as it will automatically perform username, hashing, salting and hash password
// it will also provide other methods like set password , reset password etc.

module.exports = mongoose.model("User", userSchema);