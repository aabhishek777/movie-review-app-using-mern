import React from "react";

const Card = ({ movie }) => {
  return (
    <div
      className="m-1 p-1"
      style={{
        border: "2px solid white",
        borderRadius: "10px",
      }}
    >
      <img src={movie?.poster?.url} alt="hi" className=" rounded" />
      <div className="d-flex justify-content-between">
        {" "}
        <h1>{movie?.title}</h1>
        <div>ratings</div>
      </div>
    </div>
  );
};

export default Card;
