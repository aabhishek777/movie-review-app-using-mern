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
    console.log();
  }
};
