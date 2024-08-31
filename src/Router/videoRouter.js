import express from "express";
import { watch, getedit, postEdit, getUpload, postUpload} from "../Controller/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);

videoRouter.route("/:id(\\d+)/edit").get(getedit).post(postEdit)

videoRouter.get("/upload",getUpload)
videoRouter.post("/upload",postUpload)
//videoRouter.route("/upload").get(getUpload).post(postUpload)


export default videoRouter;