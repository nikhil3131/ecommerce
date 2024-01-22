const { CustomApiError } = require('../utils/customError')


async function globalErrorHandler(err, req, res, next){
    console.log('error generated from global error handler',err)
    // custom errors
    if(err instanceof CustomApiError){
        return res.status(err.statudCode).json({
            status: err.status,
            msg: err.message
        })
    }

    // default error response
    res.status(500).json({
        status: "error",
        msg: "something went wrong"
    })
}


module.exports = {globalErrorHandler}