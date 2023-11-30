import React from "react";

const Card = () => {
  return (
    <div
      className="m-1 p-3"
      style={{
        border: "2px solid white",
        borderRadius: "10px",
      }}
    >
      <img src="" alt="hi" />
      <div className="d-flex justify-content-between">
        {" "}
        <h1>movie name</h1>
        <div>ratings</div>
      </div>
      <p>
        About movie Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reprehenderit quas officiis perferendis sed ex asperiores animi maxime
        soluta reiciendis ea ipsa velit iste cum officia fugiat ipsum, dicta
        nostrum dolorem?
      </p>
    </div>
  );
};

export default Card;
