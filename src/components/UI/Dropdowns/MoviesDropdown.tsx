import React, { memo } from "react";
import { Link } from "react-router-dom";

const MOCK_GENRES = [
  "Action",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Thriller",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Action",
  "Comedy",
];

const MoviesDropdown = memo(() => {
  const genersList = MOCK_GENRES.map((item, index) => (
    <div className="mb-2" key={index}>
      <Link to="/">{item}</Link>
    </div>
  ));

  return (
    <div className="w-full h-full max-h-[300px] flex justify-between items-center">
      <div className="flex columns-auto flex-wrap gap-x-14">
        <div className="flex flex-col gap-3 px-2">
          <h1 className="text-white font-semibold">Genres</h1>
          <div className="h-full columns-2 gap-x-14 text-gray-400 text-sm font-normal ">
            {genersList}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="h-fit flex flex-col gap-2 px-2">
            <h1 className="text-white font-semibold">Countries</h1>
            <div className="columns-auto gap-x-[70px] text-gray-400 text-sm font-normal ">
              <div className="mb-2">
                <Link to="/">Russian</Link>
              </div>
              <div className="mb-2">
                <Link to="/">Foreign</Link>
              </div>
              <div className="mb-2">
                <Link to="/">Soviet</Link>
              </div>
            </div>
          </div>

          <div className="h-fit flex flex-col gap-3 px-2">
            <h1 className="text-white font-semibold">Years</h1>
            <div className="columns-auto gap-x-14 text-gray-400 text-sm font-normal ">
              <div className="mb-2">
                <Link to="/">Movies of 2022</Link>
              </div>
              <div className="mb-2">
                <Link to="/">Movies of 2021</Link>
              </div>
              <div className="mb-2">
                <Link to="/">Movies of 2022</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="w-[2px] h-[350px] bg-gray-400 xx-2"></span>

      <div className="flex flex-col gap-3 text-gray-400 text-sm px-2">
        <div>
          <Link to="/">New movies</Link>
        </div>
        <div>
          <Link to="/">Selections</Link>
        </div>
        <div>
          <Link to="/">FavMovie Ratings</Link>
        </div>
        <div>
          <Link to="/">Trailers</Link>
        </div>
        <div>
          <Link to="/">What to watch</Link>
        </div>
        <div>
          <Link to="/">Movies in HD</Link>
        </div>
        <div>
          <Link to="/">FavMovie selections</Link>
        </div>
        <div>
          <Link to="/">New in subscription</Link>
        </div>
      </div>

      <div className="bg-slate-500 rounded-lg px-2">
        <img src="" alt="" className="w-[300px] h-[300px] rounded-lg" />
      </div>
    </div>
  );
});

export default MoviesDropdown;
