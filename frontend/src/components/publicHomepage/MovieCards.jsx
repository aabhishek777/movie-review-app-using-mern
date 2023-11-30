import React, { useEffect } from "react";
import Card from "./Card";
import { getAllMovies } from "../../api/movies";

import { useDispatch } from "react-redux";
const MovieCards = () => {
  const [movieData, setMovieData] = useEffect([]);

  const dispatch = useDispatch();

  const getMovieData = async () => {
    const data = await getAllMovies();

    console.log(data);
    setMovieData(data);
    dispatch("ALL_MOVIE", data);

    console.log(movieData);
  };
  useEffect(() => {
    getMovieData();
  }, []);

  const movie = [11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1];
  return (
    <div className="row">
      {movie.map(() => (
        <div className="col-3">
          {movie.map(() => (
            <Card />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MovieCards;
