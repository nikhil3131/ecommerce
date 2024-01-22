const jwt = require('jsonwebtoken');


// generate access token
function generateAccessToken(dataObject) {
    const token = jwt.sign(dataObject, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    });
    return token
}


// verify access token
function verifyAccessToken(token){
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
}


// generate refresh token
function generateRefreshToken(dataObject){
    const token = jwt.sign(dataObject, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    });
    return token
}


// verify refresh token
function verifyRefreshToken(token){
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
}


module.exports = {
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    verifyRefreshToken
}