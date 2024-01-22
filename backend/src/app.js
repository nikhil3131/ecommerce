// necessary js packages
require('dotenv').config()
require('express-async-errors')
const express = require('express')


// importing methods and properties 
const { connect } = require('./db/config')
const { globalErrorHandler } = require('./middlewares/globalErrorHandler')


const app = express()


// route doesnot exists
app.use('*', function(req, res){
    res.status(404).send("route does not exists")
})


// global error handler
app.use(globalErrorHandler)


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