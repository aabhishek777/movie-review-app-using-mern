import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  // owner //parentMovie //content // rating

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  parentMovie: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    red: "Movie",
  },

  content: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Review = mongoose.Model("review", reviewSchema);

export default Review;
