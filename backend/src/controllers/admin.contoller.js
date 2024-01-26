const { customErrors } = require('../utils/customError')
const { sendAccessCookie } = require('../utils/sendCookie')


async function adminLogin(req,res){
    const { email, password } = req.body
    
    if(!email || !password){
        throw customErrors('email and password is required', 400)
    }

    sendAccessCookie({email, password}, res)

    res.send("admin login")
}


async function adminBlockSeller(req,res){
    res.send("seller blocked")
}


async function adminBlockUser(req,res){
    res.send("user blocked")
}


async function adminRemoveReview(req, res){
    res.send("review removed")
}


async function adminRemoveProduct(req, res){
    res.send("product removed")
}


module.exports = {
    adminLogin,
    adminBlockSeller,
    adminBlockUser,
    adminRemoveReview,
    adminRemoveProduct
}