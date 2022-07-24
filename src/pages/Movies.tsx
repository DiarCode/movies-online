import React from "react";
import GenresList from "../components/GenresList";
import Header from "../components/Header";
import MoviesFilter from "../components/MoviesFilter";
import MoviesListGeneric from "../components/MoviesListGeneric";
import { mockAPI } from "./Home";

const Movies = () => {
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
        moviesList={mockAPI}
        className="mt-6"
      />

      <GenresList />

      <MoviesListGeneric
        title="Popular now"
        moviesList={mockAPI}
        className="mt-6"
      />
    </div>
  );
};

export default Movies;
