const express = require("express") //import express from "express"
const morgan = require("morgan")
import videoRouter from "./Router/videoRouter" //const videoRouter = require("../Router/videoRouter");
import userRouter from "./Router/userRouter"
import globalRouter from "./Router/globalRouter"


const app = express()

const PORT = 4000



const gossipMiddleware = (req,res, next) => {
    console.log(`someone is goidg to ${req.url}`)
    next()
}




app.set("view engine", "pug")
app.set("views", process.cwd() + "/src/views")
app.use(morgan("dev"))


app.use('/', globalRouter)
app.use("/users", userRouter)
app.use("/videos", videoRouter)


app.listen(PORT,function(){
    console.log(`http://localhost:${PORT}`)
})