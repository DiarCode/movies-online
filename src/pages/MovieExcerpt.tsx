import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import MoviesListGeneric from "../components/MoviesListGeneric";
import { useQuery } from "@tanstack/react-query";
import { getMovieById, getRatedMoviesByGenre } from "../api/axios";

const MovieExcerpt = () => {
  const { id } = useParams();

  const { data, isLoading, isSuccess, isError } = useQuery(
    ["movieExcerpt"],
    () => getMovieById(id!),
    { enabled: Boolean(id) }
  );

  const {
    data: ratedMovies,
    isLoading: isRatedLoading,
    isSuccess: isRatedSuccess,
    isError: isRatedError,
  } = useQuery(
    ["ratedMovie"],
    () => getRatedMoviesByGenre(data?.genres[0]?.uuid || "accion"),
    { enabled: Boolean(data) }
  );

  const renderCountries = data?.countries?.map(item => (
    <p className="text-base font-normal text-[#ffffffc1]" key={item.uuid}>
      {item.name}
    </p>
  ));

  const renderedGenres = data?.genres?.map(item => (
    <p className="text-base font-normal text-[#ffffffc1]" key={item.uuid}>
      {item.name}
    </p>
  ));

  const actersList = [...new Array<null>(6)].map((_, index) => (
    <div className="flex flex-col items-center px-2" key={index}>
      <div className="w-[56px] h-[56px] p-1 bg-[#ffffff17] rounded-lg mb-2">
        <img src="" alt="" className="w-full h-full bg-gray-500 rounded-lg" />
      </div>
      <p className="text-center text-[#ffffff47] font-normal text-xs overflow-x-hidden whitespace-nowrap text-ellipsis">
        Hayat <br /> Mirzulin
      </p>
    </div>
  ));

  return (
    <div className="container mx-auto">
      <Header />

      <div className="w-full flex-wrap relative flex py-5 justify-between lg:gap-5 items-start">
        <div className="lg:max-w-[57%] order-2 lg:order-1 w-full lg:sticky lg:top-10">
          <div className="mb-6 bg-gray-600 rounded-lg w-full">
            <img
              src={data?.image}
              alt={data?.title}
              className=" max-h-[400px] min-h-[220px] object-cover sm:min-h-[400px] w-full rounded-lg"
            />
          </div>

          <div className="gap-4 flex items-center justify-center lg:justify-start">
            <div className="rounded-lg px-5 py-2 bg-[#ffffff17]">
              <p className="text-base font-medium text-[#ffffffd0]">Trailer</p>
            </div>
            <div className="rounded-lg px-5 py-2 bg-[#ffffff17]">
              <p className="text-base font-medium text-[#ffffffd0]">Save</p>
            </div>
            <div className="rounded-lg px-5 py-2 bg-[#ffffff17]">
              <p className="text-base font-medium text-[#ffffffd0]">Share</p>
            </div>
          </div>
        </div>

        <div className="w-full order-1 lg:order-2 lg:max-w-[40%] px-4 flex flex-col items-center">
          <h1 className="text-center font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-3 sm:mb-6">
            {data?.title}
          </h1>

          <div className="mb-4 sm:mb-7 flex flex-col items-center">
            <div className="flex gap-3 items-center">
              <p className="text-base font-normal text-[#ffffffc1]">
                {data?.year}
              </p>
              <p className="text-base font-normal text-[#ffffffc1]">130 min.</p>

              <p className="text-base font-normal text-[#ffffffc1]">
                {data?.rating}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-3 items-center">
              {renderCountries}
              {renderedGenres}
            </div>
          </div>

          <div className="lg:flex gap-2 hidden items-center overflow-auto w-[80%] mb-7">
            {actersList}
          </div>

          <div className="lg:block hidden px-3">
            <p className="text-[#ffffffc1] text-sm">{data?.description}</p>
          </div>
        </div>

        <div className="w-full flex flex-col mt-11 items-center lg:hidden order-3">
          <div className="flex gap-2 sm:justify-center items-center overflow-x-auto w-full mb-10">
            {actersList}
          </div>

          <div className="block px-3">
            <p className="text-[#ffffffc1] text-sm">{data?.description}</p>
          </div>
        </div>
      </div>

      <div>
        <MoviesListGeneric
          title="Popular in this genre"
          className="mt-6"
          data={ratedMovies}
          isLoading={isRatedLoading}
          isSuccess={isRatedSuccess}
          isError={isRatedError}
        />
      </div>
    </div>
  );
};

export default MovieExcerpt;
