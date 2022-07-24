import React from "react";
import { Link } from "react-router-dom";

const LinkedLogo = () => {
  return (
    <>
      <Link to="/">
        <div className="text-xs sm:text-base font-semibold cursor-pointer text-white p-3 bg-red-600 rounded-md sm:rounded-xl">
          FavMovie
        </div>
      </Link>
    </>
  );
};

export default LinkedLogo;
