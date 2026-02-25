import express from "express";
import { addShow, getNowPlayingMovies } from "../Controllers/show.controller.js";
import { protectAdmin } from "../Middlewares/auth.middleware.js";

const showRouter = express.Router();

showRouter.get("/now-playing", protectAdmin, getNowPlayingMovies);
showRouter.post("/add", protectAdmin, addShow);

export default showRouter;
