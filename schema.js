// Here we are validating our listing schema using the joi tool
// this will automatically validate our schema 

const Joi = require('joi');

const bookSchema = Joi.object({
    book: Joi.object({
        bid: Joi.number().required().min(0),
        title: Joi.string().required(),
        description: Joi.string(),
        author: Joi.string().required(),
        image: Joi.string().allow("",null),   // it means we have allowed an empty string or null value for image
        noc: Joi.number().min(0),
        yop: Joi.number().min(0),
        category: Joi.string(),
    }).required(),
});

const userSchema = Joi.object({
    user: Joi.object({
        username: Joi.number().required().min(0),
        name: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.number().required(),
    }).required(),
});

const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),
});

module.exports.reviewSchema = reviewSchema;
module.exports.bookSchema = bookSchema;
module.exports.userSchema = userSchema;