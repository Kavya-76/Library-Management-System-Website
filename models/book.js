// Here we will write the schema of our book
const mongoose = require("mongoose");
const Schema = mongoose.Schema;   // To avoid writing mongoose.Schema again and again
const Review = require("./review.js");

const bookSchema = new Schema({
    bid: {                                   // book id
        type: Number,
        required: true,
    },

    title: {
        type: String,
        required: true,
    
    },   

    description: {
        type: String,
    },

    author: {
        type: String,
        required: true,

    },

    image: {
        url: String,
        filename: String,
    },

    noc: {                        // number of copies
        type: String,
        required: true,
    },

    yop: {                        // year of publication
        type: Number,
    },

    category: {                      
        type: String,
        // enum: ["Mountains", "Arctic", "Farms", "Camping", "Deserts"]
    },

    reviews: [{
        type: Schema.Types.ObjectId,  // instead of full review only their id will be stored
        ref: "Review",
    }],

    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});


// we have created this middleware to delete the reviews associated to a book if that book is deleted
bookSchema.post("findOneAndDelete", async(book) =>{
    if(book)
    {
        await Review.deleteMany({_id: {$in: book.reviews}});
    }
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;