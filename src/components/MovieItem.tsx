import React, { FC, memo, useState } from "react";
import { IMovie } from "../types";

const SUBS_STYLE = "text-[#ea003d]";
const FREE_STYLE = "text-[#a5a1b2]";
const PAID_STYLE = "text-blue";

interface MovieItemProps {
  item: IMovie;
}

const MovieItem: FC<MovieItemProps> = memo(({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-w-[120px] sm:min-w-[177px]">
      <div
        className="relative cursor-pointer w-full h-[183px] sm:h-[240px] bg-black rounded-xl hover:scale-105 duration-200"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div className="rounded-xl absolute top-0 right-0 bottom-0 left-0 p-3">
            <p className="text-white">{item.rating}</p>
          </div>
        )}
        <img className="hover:opacity-70 duration-200 bg-gray-50" alt="" />
      </div>
      <div className="py-3">
        <p className="cursor-pointer overflow-x-hidden whitespace-nowrap text-sm sm:text-base text-ellipsis text-white font-medium ">
          {item.name}
        </p>
        <p
          className={`cursor-pointer text-xs sm:text-sm ${
            item.price === "Free" ? FREE_STYLE : SUBS_STYLE
          }`}
        >
          {item.price}
        </p>
      </div>
    </div>
  );
});

export default MovieItem;
