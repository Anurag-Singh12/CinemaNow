import express from "express";
import { getNowPlayingMovies } from "../Controllers/show.controller.js";

const showRouter = express.Router();

showRouter.get("/now-playing", getNowPlayingMovies);

export default showRouter;
