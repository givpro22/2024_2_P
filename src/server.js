import express from "express"

const morgan = require("morgan")
import videoRouter from "./routers/videoRouter" //const videoRouter = require("../Router/videoRouter");
import userRouter from "./routers/userRouter"
import globalRouter from "./routers/rootRouter"


const app = express()





app.set("view engine", "pug")
app.set("views", process.cwd() + "/src/views")
app.use(morgan("dev"))
app.use( express.urlencoded( {extended: true} ) )


app.use('/', globalRouter)
app.use("/users", userRouter)
app.use("/videos", videoRouter)

export default app;