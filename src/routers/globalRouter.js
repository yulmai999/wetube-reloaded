import express from "express";
import { join } from "../controllers/userController";
import { tranding } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);

export default globalRouter;
