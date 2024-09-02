import express from "express";
import { watch, getEdit, postEdit, getUpload, postUpload} from "../Controller/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload",getUpload)

videoRouter.get("/:id", watch);

videoRouter.route("/:id/edit").get(getEdit).post(postEdit)

videoRouter.post("/upload",postUpload)
//videoRouter.route("/upload").get(getUpload).post(postUpload)


export default videoRouter;