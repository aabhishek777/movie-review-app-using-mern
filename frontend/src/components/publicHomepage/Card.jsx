import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie?._id}`}
      className="m-1 p-1"
      style={{
        // border: "2px solid white",
        borderRadius: "10px",
      }}
    >
      <img src={movie?.poster} alt="hi" className=" rounded" />
      <div className="d-flex mt-2 justify-content-between">
        {" "}
        <h1>{movie?.title}</h1>
        {movie.reviewCount === 0 ? (
          <div>Not Rated</div>
        ) : (
          <div className="flex align-items-center">
            <FaStar className="mr-2" style={{ color: "yellow" }} />
            {movie?.avgRating}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
