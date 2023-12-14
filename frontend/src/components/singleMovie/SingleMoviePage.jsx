import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleMOvie } from "../../api/movies";
import Container from "../utility/Container";

const SingleMoviePage = () => {
  const { movieId } = useParams();

  const [singleMovieData, setSingleMovieData] = useState({});

  const movieData = async (movieId) => {
    const { data } = await getSingleMOvie(movieId);
    console.log(data?.data);
    setSingleMovieData(data?.data);
  };

  useEffect(() => {
    movieData(movieId);
  }, []);

   const {poster,trailer} = singleMovieData;

  return (
    <div
      className="container"
    >
      <div className="row mt-4 h-auto">
        <div className="col  ">
          <video className="h-90 rounded" controls src={trailer?.url}/>
        </div>
      </div>
    </div>
  );
};

export default SingleMoviePage;
