import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getAllMovies } from "../../api/movies";
import { useDispatch, useSelector } from "react-redux";

const MovieCards = () => {
  const [movieData, setMovieData] = useState([]); // Correcting the usage of useState for initializing state

  const dispatch = useDispatch();

  const getMovieData = async () => {
    try {
      const { data } = await getAllMovies();
      console.log(data?.data);
      setMovieData(data?.data);
      dispatch({ type: "ALL_MOVIES", payload: data?.data });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  const movies = useSelector((state) => state?.movie?.movieDetails);
  console.log(movies);

  return (
    <div className="row">
      {movies.map((movie, index) => (
        <div className="col-3 mt-5" key={index}>
          <Card movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieCards;
