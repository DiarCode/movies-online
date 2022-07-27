import React, { FC, memo, useState } from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../types";

// const SUBS_STYLE = "text-[#ea003d]";
const FREE_STYLE = "text-[#a5a1b2]";
// const PAID_STYLE = "text-blue";

interface MovieItemProps {
  item: IMovie;
}

const MovieItem: FC<MovieItemProps> = memo(({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaveHovered, setIsSaveHovered] = useState(false);

  const countriesNamesList = item.countries.map(country => country.name);
  const movieDetails = [item.year, countriesNamesList].join(", ");

  const hoveredDetailsContent = isHovered && (
    <div className="rounded-xl absolute top-0 right-0 bottom-0 left-0 p-4 cursor-pointer bg-opacity-70 bg-black">
      <div className="rounded-xl flex flex-col justify-between h-full">
        <div className="rounded-xl flex flex-col gap-1 items-end h-full">
          <p
            className="cursor-pointer"
            onMouseOver={() => setIsSaveHovered(true)}
            onMouseLeave={() => setIsSaveHovered(false)}
          >
            <svg
              height="27"
              viewBox="0 0 24 24"
              width="27"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition-all duration-200"
                fill={isSaveHovered ? "#ffff" : "#d9d7e0"}
                d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z"
              />
            </svg>
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-white text-xl font-bold">{item.rating}</p>
          <p className="text-[#d9d7e0] text-xs font-normal overflow-x-hidden whitespace-nowrap text-ellipsis">
            {movieDetails}
          </p>
          <p className="text-[#d9d7e0] text-xs font-normal overflow-x-hidden whitespace-nowrap text-ellipsis">
            101 minutes
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Link
      to={`/watch/${item._id}`}
      className="min-w-[120px] sm:min-w-[177px] pl-2 pt-2"
    >
      <div
        className="relative cursor-pointer w-full h-[183px] sm:h-[240px] bg-black rounded-xl hover:scale-105 duration-200"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {hoveredDetailsContent}

        <img
          src={item.image}
          className="rounded-xl duration-200 bg-gray-500 object-cover h-full w-[120px] sm:w-[177px] "
          alt=""
        />
      </div>
      <div className="py-3">
        <p className="cursor-pointer overflow-x-hidden whitespace-nowrap text-ellipsis text-sm sm:text-base  text-white font-medium ">
          {item.title}
        </p>
        <p className={`cursor-pointer text-xs sm:text-sm ${FREE_STYLE}`}>
          Free
        </p>
      </div>
    </Link>
  );
});

export default MovieItem;
