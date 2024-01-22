class CustomApiError extends Error{
    constructor(msg, statudCode){
        super(msg)
        this.statudCode = statudCode;
        this.status = 'fail';
    }
}


// function to generate custom error
function customErrors(msg, statudCode){
    return new CustomApiError(msg, statudCode)
}


module.exports = {
    customErrors,
    CustomApiError
}