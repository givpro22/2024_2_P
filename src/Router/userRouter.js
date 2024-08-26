const express = require("express")
import {id, logout, edit, delete1} from "../Controller/userController";

const userRouter = express.Router()

userRouter.get('/:id', id)
userRouter.get('/logout', logout)
userRouter.get('/edit', edit)
userRouter.get('/delete', delete1)


export default userRouter