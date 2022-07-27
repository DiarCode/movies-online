import React, { FC } from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import MoviesListGeneric from "../components/MoviesListGeneric";
import { useQuery } from "@tanstack/react-query";
import { getNewMoviesList, getRatedMoviesList } from "../api/axios";

const Home: FC = () => {
  const {
    data: ratedMovies,
    isLoading: isRatedLoading,
    isSuccess: isRatedSuccess,
    isError: isRatedError,
  } = useQuery(["ratedMovies"], getRatedMoviesList);

  const {
    data: newMovies,
    isLoading: isNewLoading,
    isSuccess: isNewSuccess,
    isError: isNewError,
  } = useQuery(["newMovies"], getNewMoviesList);

  return (
    <div className="container mx-auto">
      <Header />
      <Carousel />
      <MoviesListGeneric
        title="Recomended to see"
        data={ratedMovies}
        className="my-12"
        isLoading={isRatedLoading}
        isSuccess={isRatedSuccess}
        isError={isRatedError}
      />
      <MoviesListGeneric
        title="New Movies"
        data={newMovies}
        isLoading={isNewLoading}
        isSuccess={isNewSuccess}
        isError={isNewError}
      />
    </div>
  );
};

export default Home;
