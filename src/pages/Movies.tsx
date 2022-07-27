import React from "react";
import GenresList from "../components/GenresList";
import Header from "../components/Header";
import MoviesFilter from "../components/MoviesFilter";
import { useQuery } from "@tanstack/react-query";

import MoviesListGeneric from "../components/MoviesListGeneric";
import {
  getNewMoviesList,
  getRatedMoviesByGenre,
  getRatedMoviesList,
} from "../api/axios";

const Movies = () => {
  const {
    data: newMovies,
    isLoading: isNewLoading,
    isSuccess: isNewSuccess,
    isError: isNewError,
  } = useQuery(["newMovies"], getNewMoviesList);

  const {
    data: ratedMovies,
    isLoading: isRatedLoading,
    isSuccess: isRatedSuccess,
    isError: isRatedError,
  } = useQuery(["ratedMovies"], getRatedMoviesList);

  const {
    data: ratedDramaMovies,
    isLoading: isRatedDramaLoading,
    isSuccess: isRatedDramaSuccess,
    isError: isRatedDramaError,
  } = useQuery(["ratedGenredMovies"], () => getRatedMoviesByGenre("accion"));

  return (
    <div className="lg:container mx-auto ">
      <Header />

      <div className="pt-7">
        <h1 className="font-bold text-white text-2xl sm:text-4xl mb-5">
          Watch movies online
        </h1>
        <h2 className="w-full sm:w-[60%] font-normal text-gray-400 text-xs sm:text-sm">
          The selection of films is very wide and varied, so everyone will find
          something interesting for themselves, whatever their tastes are. Do
          you prefer only foreign films? We have plenty of them: the golden
          classics of Hollywood, soulful French comedies, temperamental Italian
          dramas and noisy Indian musical films.
        </h2>
      </div>

      <MoviesFilter />

      <MoviesListGeneric
        title="Movie premieres"
        data={newMovies}
        isLoading={isNewLoading}
        isSuccess={isNewSuccess}
        isError={isNewError}
        className="mt-6"
      />

      <GenresList />

      <MoviesListGeneric
        title="Popular now"
        data={ratedMovies}
        isLoading={isRatedLoading}
        isSuccess={isRatedSuccess}
        isError={isRatedError}
        className="mt-6"
      />

      <MoviesListGeneric
        title="The Best in Action"
        data={ratedDramaMovies}
        isLoading={isRatedDramaLoading}
        isSuccess={isRatedDramaSuccess}
        isError={isRatedDramaError}
        className="mt-6"
      />
    </div>
  );
};

export default Movies;
