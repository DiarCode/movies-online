import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MovieExcerpt from "./MovieExcerpt";
import Movies from "./Movies";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/watch/:id" element={<MovieExcerpt />} />
    </Routes>
  );
};

export default index;
