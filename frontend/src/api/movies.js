import axios from "axios";
import { api } from "./baseApi";

export const uploadTrailer = async (formData, onUploadProgress) => {
  try {
    return await api.post("/movie/upload-trailer", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: ({ loaded, total }) => {
        if (onUploadProgress)
          onUploadProgress(Math.floor((loaded / total) * 100));
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTopFiveMovies = async (limit) => {
  try {
    return await api.get(`/movie/public/latest-upload?limit=${limit}`);
  } catch (error) {
    console.log(error);
  }
};

export const getAllMovies = async () => {
  try {
    return await api.get("/movie/public/all-movie");
  } catch (error) {
    console.error(error.message);
  }
};

export const getTopRatingMovies = async (type) => {
  try {
    return await api.get(`/movie/public/top-reviews?type=${type}`);
  } catch (error) {
    console.error(error.message);
  }
};

export const getSingleMOvie = async (movieId) => {
  try {
    console.log(movieId);
    return api.get(`/movie/public/single-movie/${movieId}`);
  } catch (error) {
    console.error(error);
  }
};
