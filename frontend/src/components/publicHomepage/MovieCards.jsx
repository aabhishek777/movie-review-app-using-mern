import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getAllMovies, getTopRatingMovies } from "../../api/movies";
import { useDispatch, useSelector } from "react-redux";
import GridItems from "../utility/GridItems";

const MovieCards = ({ type }) => {
  const [movieData, setMovieData] = useState([]); // Correcting the usage of useState for initializing state

  const [flag, setFlag] = useState(false);
  // const dispatch = useDispatch();

  const getMovieData = async (type) => {
    try {
      const { data } = await getTopRatingMovies(type);
      console.log(data);
      setFlag(true);
      setMovieData(data?.data);
      // dispatch({ type: "ALL_MOVIES", payload: allMovies?.data?.data });
    } catch (error) {
      console.error("Error in fetching movies:", error);
    }
  };

  useEffect(() => {
    getMovieData((type = "Film"));
  }, []);

  return (
    <div className="row">
      {flag &&
        movieData?.map((movie, index) => (
          <GridItems key={index} className="hi">
            <Card movie={movie} />
          </GridItems>
        ))}
    </div>
  );
};

export default MovieCards;
