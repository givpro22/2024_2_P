import express from "express";
import { getJoin, postJoin, login } from "../Controller/userController";
import { home, search } from "../Controller/videoController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);
rootRouter.get("/search", search);


export default rootRouter;