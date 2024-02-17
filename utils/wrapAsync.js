// It is a utility related folder

// it is a middleware to handle the errors
function wrapAsync(fn) {
    return (req, res, next)=>{
        fn(req, res, next).catch(next);
    }
}

module.exports = wrapAsync;