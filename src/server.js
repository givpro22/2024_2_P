const express = require("express") //import express from "express"
const app = express()

const PORT = 4000


const gossipMiddleware = (req,res, next) => {
    console.log("someone is goidg to ")
    next()
}

const appget = (req,res) => {return res.send("<h1>fuck</h1>")}

app.use(gossipMiddleware)
app.get('/',appget)



app.listen(PORT,function(){
    console.log(`http://localhost:${PORT}`)
})