/*
// (The functions using which we make changes in the database are set to be async)

// Search form route
app.get("/LMS/Books/search", async(req, res)=>{
    res.render("./books/search.ejs");
});
  
// Search route
app.post("/LMS/Books/search", wrapAsync(async(req, res)=>{
    let bid = req.body.book.bid;
    let spbook = await(Book.find({"bid":bid}));
    for (let book of spbook)
    {
      let id = book._id;
      res.redirect(`/LMS/Books/${id}`);
    }
}));

// Books index route
app.get("/LMS/Books", wrapAsync(async(req, res)=>{
    const allBooks = await Book.find({});
    res.render("./books/index.ejs", {allBooks});
}));
  
// Books new route
app.get("/LMS/Books/new", (req,res)=>{
    res.render("./books/new.ejs");
});

// Books show route
app.get("/LMS/Books/:id", wrapAsync(async(req, res)=>{
    let {id} = req.params;
    const book = await Book.findById(id).populate("reviews");   // we have done populate as we want full structure of reviews in show.ejs
    res.render("./books/show.ejs", {book});
}));

// Books create route
app.post("/LMS/Books", validateBook, wrapAsync(async(req, res, next)=>{
    let newBook = new Book(req.body.book);
    await newBook.save();
    res.redirect("/LMS/Books");
}));

// Books edit route
app.get("/LMS/Books/:id/edit", wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id);
    res.render("./books/edit.ejs", {book});
}));

// Books update route
app.put("/LMS/Books/:id", validateBook, wrapAsync(async(req,res)=>{
    if(!req.body.book)
    {
        throw new expressError(400, "Send valid data for listing");
    }
    let {id} = req.params;
    await Book.findByIdAndUpdate(id, {...req.body.book});
    res.redirect(`/LMS/Books/${id}`);
}));

// Books delete route
app.delete("/LMS/Books/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    await Book.findByIdAndDelete(id);
    res.redirect("/LMS/Books");
}));



// Reviews post route
app.post("/LMS/Books/:id/reviews", validateReview, wrapAsync(async(req, res)=>{
    let book = await Book.findById(req.params.id);
    let newReview = new Review(req.body.review);
    book.reviews.push(newReview);

    await newReview.save();
    await book.save();
    res.redirect(`/LMS/Books/${book._id}`)
})); 

// Delete review
app.delete("/LMS/Books/:id/reviews/:reviewId", wrapAsync(async (req,res)=>{
        let {id, reviewId} = req.params;

        await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});    // we have used $pull so that it also deletes(removes) the review from listingSchema as well.
        await Review.findByIdAndDelete(reviewId);

        res.redirect(`/LMS/Books/${id}`);
    })
);
*/

/*
app.get("/testing", async(req,res)=>{
    let sample = new Book({
        bid: 12344321,
        title: "New Book",
        description: "A new book",
        author: "New author",
        noc: 12,
        category: "New type"
    });

    await sample.save();
    console.log("LIsting saved");
    res.send("Testing successful");
});
*/