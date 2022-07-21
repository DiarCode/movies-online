import React, { useState } from "react";
import { Link } from "react-router-dom";

import classNames from "classnames";
import SearchHeader from "./UI/SearchHeader";
import ProfileHeader from "./UI/ProfileHeader";
import Burger from "./UI/Burger";

const Header = () => {
  const [isMoviesHovered, setIsMoviesHovered] = useState(false);

  const movieDropdownVisibility = classNames({
    "visible opacity-100": isMoviesHovered,
    "invisible opacity-0": !isMoviesHovered,
  });

  const onMovieLeave = () => setIsMoviesHovered(false);
  const onMovieEnter = () => setIsMoviesHovered(true);

  return (
    <div className="w-full">
      <div className=" w-full relative container flex items-center mx-auto py-5 z-20">
        <div className="flex mr-6 flex-grow sm:flex-grow-0">
          <Link to="/">
            <div className="text-md font-semibold cursor-pointer text-white p-3 bg-red-600 rounded-md">
              FavMovie
            </div>
          </Link>
        </div>

        <ul className="hidden sm:flex text-base text-gray-400 flex-shrink flex-grow items-center gap-4 font-normal ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li onMouseEnter={onMovieEnter} onMouseLeave={onMovieLeave}>
            <Link to="/movies">Movies</Link>

            <div
              onMouseLeave={onMovieLeave}
              className={`cursor-default absolute rounded-xl bg-[#1f1b2e] top-2 -left-4 -right-4 h-[450px] -z-10 transition-all duration-300 delay-200 ${movieDropdownVisibility} `}
            >
              <div className="p-12  mt-14 flex flex-col flex-wrap gap-x-24 gap-y-6 ">
                <div className="flex flex-col gap-1 px-2">
                  <h1 className="text-white font-semibold">Genres</h1>
                  <div className="flex flex-col gap-1 text-gray-400 text-base font-normal ">
                    <div>
                      <Link to="/genres">Horror</Link>
                    </div>
                    <div>
                      <Link to="/genres">Horror</Link>
                    </div>
                    <div>
                      <Link to="/genres">Horror</Link>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1 px-2">
                  <h1 className="text-white font-semibold">Countries</h1>
                  <div className="flex flex-col gap-1 text-gray-400 text-base font-normal ">
                    <div>
                      <Link to="/genres">Russia</Link>
                    </div>
                    <div>
                      <Link to="/genres">USA</Link>
                    </div>
                    <div>
                      <Link to="/genres">United Kingdom</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>Upcoming</li>
          <li>Serials</li>
        </ul>

        <div className="flex gap-6 items-center mr-6 sm:mr-0">
          <SearchHeader />
          <ProfileHeader />
        </div>

        <Burger />
      </div>
    </div>
  );
};

export default Header;
