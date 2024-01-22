// necessary js packages
require('dotenv')
require('express-async-errors')
const express = require('express')


// importing methods and properties 
const { connect } = require('./db/config')


const app = express()


/*
this function makes sure that
we are connecting with the database first
then going forward
*/
const PORT = process.env.PORT || 3000;
;(async function(){
    try {
        await connect()
        app.listen(PORT, function(){console.log('server is listening at port', PORT)})
    } catch (error) {
        console.log('Unable to connect to the database', error)
    }
})()