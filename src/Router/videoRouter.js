const express = require("express")
import {trending, watch} from "../Controller/videoController"


const videoRouter = express.Router()

videoRouter.get('/upload', watch)

videoRouter.get('/', trending)
videoRouter.get('/:id', trending)
videoRouter.get('/:id/edit', watch)
videoRouter.get('/:id/delete', watch)


export default videoRouter