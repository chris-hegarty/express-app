function logger(req, res, next) {

    // if (req.ip) 
    console.log(req.ip);
    next();
    // } else {
    //We dont need an if statement becausewe 
    // }
}
module.exports = logger;
