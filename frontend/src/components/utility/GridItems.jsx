import React, { Children } from "react";

const GridItems = ({ children, className }) => {
  return (
    <div
      className={
        `col-12 col-sm-6 col-md-4 gap-md-5 col-lg-3 col-xl-3 mt-5 ` + className
      }
    >
      {children}
    </div>
  );
};

export default GridItems;
