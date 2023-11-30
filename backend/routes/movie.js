import { Router } from "express";
import { isAuth, isAdmin } from "../middlewares/user.js";

import { uploadImage, uploadVideo } from "../middlewares/multer.js";
import {
  createMovie,
  getAllMovies,
  getLatestUploads,
  searchMovie,
  updateMovieWithoutPoster,
  uploadTrailer,
} from "../controllers/movie.js";
import { parseData } from "../middlewares/helper.js";

const router = Router();

router.post(
  "/upload-trailer",
  isAuth,
  isAdmin,
  uploadVideo.single("video"),
  uploadTrailer
);

router.post(
  "/create",
  isAuth,
  isAdmin,
  uploadImage.single("poster"),
  parseData,
  createMovie
);

router.post(
  "/update-movie-without-poster",
  isAuth,
  isAdmin,
  updateMovieWithoutPoster
);

router.get("/search/:title", searchMovie);
router.get("/public/latest-upload", getLatestUploads);
router.get("/public/all-movie", getAllMovies);

export default router;
