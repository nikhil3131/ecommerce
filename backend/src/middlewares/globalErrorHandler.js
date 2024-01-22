async function globalErrorHandler(err, req, res, next){
    console.log('error generated from global error handler',err)

    // default error response
    res.status(500).json({
        status: "error",
        msg: "something went wrong"
    })
}

module.exports = {globalErrorHandler}