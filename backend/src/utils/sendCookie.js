const { generateAccessToken, generateRefreshToken } = require('./generateJwt')


function sendAccessCookie(data, res){
    const token = generateAccessToken(data)
    res.cookie('Access Token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        signed: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24)
    })
}


function sendRefreshCookie(data, res){
    const token = generateRefreshToken(data)
    res.cookie('Refresh Token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        signed: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24)
    })
}


module.exports = {
    sendAccessCookie,
    sendRefreshCookie
}