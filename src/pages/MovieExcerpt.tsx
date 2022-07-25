import React from "react";
import Header from "../components/Header";
import MoviesListGeneric from "../components/MoviesListGeneric";
import { mockAPI } from "./Home";

const MovieExcerpt = () => {
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
              src=""
              alt=""
              className=" max-h-[400px] min-h-[220px] sm:min-h-[400px] w-full rounded-lg"
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
            Movie Crualla watch online
          </h1>

          <div className="mb-4 sm:mb-7 flex flex-col items-center">
            <div className="flex gap-3 items-center">
              <p className="text-base font-normal text-[#ffffffc1]">2021</p>
              <p className="text-base font-normal text-[#ffffffc1]">213 min.</p>
              <p className="text-base font-normal text-[#ffffffc1]">16+</p>
            </div>

            <div className="flex gap-3 items-center">
              <p className="text-base font-normal text-[#ffffffc1]">Russia</p>
              <p className="text-base font-normal text-[#ffffffc1]">Drama</p>
              <p className="text-base font-normal text-[#ffffffc1]">Russians</p>
            </div>
          </div>

          <div className="lg:flex gap-2 hidden items-center overflow-auto w-[80%] mb-7">
            {actersList}
          </div>

          <div className="lg:block hidden px-3">
            <p className="text-[#ffffffc1] text-sm">
              Драма Алексея Германа-младшего о борьбе интеллигента с суровой
              системой, участвовавшая в программе «Особый взгляд» Каннского
              фестиваля. Университетский профессор обвиняет мэра в коррупции,
              после чего сам становится фигурантом уголовного дела. Сможет ли
              невиновный филолог отстоять свои идеалы и репутацию?Драма Алексея
              Германа-младшего о борьбе интеллигента с суровой системой,
              участвовавшая в программе «Особый взгляд» Каннского фестиваля.
              Университетский профессор обвиняет мэра в коррупции, после чего
              сам становится фигурантом уголовного дела. Сможет ли невиновный
              филолог отстоять свои идеалы и репутацию?
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col mt-11 items-center lg:hidden order-3">
          <div className="flex gap-2 sm:justify-center items-center overflow-x-auto w-full mb-10">
            {actersList}
          </div>

          <div className="block px-3">
            <p className="text-[#ffffffc1] text-sm">
              Драма Алексея Германа-младшего о борьбе интеллигента с суровой
              системой, участвовавшая в программе «Особый взгляд» Каннского
              фестиваля. Университетский профессор обвиняет мэра в коррупции,
              после чего сам становится фигурантом уголовного дела. Сможет ли
              невиновный филолог отстоять свои идеалы и репутацию?
            </p>
          </div>
        </div>
      </div>

      <div>
        <MoviesListGeneric
          title="Recomended to see"
          moviesList={mockAPI}
          className="my-12"
        />
        <MoviesListGeneric title="New Movies" moviesList={mockAPI} />
      </div>
    </div>
  );
};

export default MovieExcerpt;
