import { isValidObjectId } from "mongoose";
import Movie from "../schema/movie";
import Review from "../schema/review";

export const addReview = async (req, res) => {
  const { movieId } = req.params;

  const userId = req.user._id;

  const { content, rating } = req.body;

  if (!isValidObjectId(movieId))
    return res.status(400).json({ msg: "Not a valid ObjectId" });

  //find movie->//check weather already reviewed or not // update in  movie because we have refernence of that // save reviews and movies;

  const movie = await Movie.findOne({ _id: movieId });

  if (!movie) return res.status(400).json({ msg: "No movie found" });

  //checking if already exist or not

  const alreadyReviewed = await Review.findOne({
    owner: userId,
    parentMovie: movie._id,
  });

  if (alreadyReviewed) return res.status(400).json({ msg: "Already reviewed" });

  //creating review

  const newReview = new Review({
    owner: userId,
    parentMovie: movie._id,
    content,
    rating,
  });
  //updating movie

  movie.reviews.push(newReview);

  await movie.save();
  await newReview.save();

  res.status(200).json({ msg: "sucess", data: newReview });
};
