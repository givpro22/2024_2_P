const express = require("express")
import {home, join, login, search} from "../Controller/globalController"

const globalRouter = express.Router();

globalRouter.get('/', home)
globalRouter.get('/join', join)
globalRouter.get('/login', login)
globalRouter.get('/search', search)


export default globalRouter