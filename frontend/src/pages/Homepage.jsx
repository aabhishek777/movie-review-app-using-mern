import React from "react";
import TopFiveMovies from "../components/publicHomepage/TopFiveMovies";
import MovieCards from "../components/publicHomepage/MovieCards";

const Homepage = () => {
  return (
    <div className="text-white container mt-3">
      <TopFiveMovies />
      <MovieCards />
    </div>
  );
};

export default Homepage;
