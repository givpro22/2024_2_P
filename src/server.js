import express from "express"

const morgan = require("morgan")
import videoRouter from "./Router/videoRouter" //const videoRouter = require("../Router/videoRouter");
import userRouter from "./Router/userRouter"
import globalRouter from "./Router/globalRouter"


const app = express()




const gossipMiddleware = (req,res, next) => {
    console.log(`someone is goidg to ${req.url}`)
    next()
}

app.set("view engine", "pug")
app.set("views", process.cwd() + "/src/views")
app.use(morgan("dev"))
app.use( express.urlencoded( {extended: true} ) )


app.use('/', globalRouter)
app.use("/users", userRouter)
app.use("/videos", videoRouter)

export default app;