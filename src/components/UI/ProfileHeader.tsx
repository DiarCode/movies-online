import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const ProfileHeader = () => {
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [isHoverd, setIsHoverd] = useState(false);

  const movieDropdownVisibility = classNames({
    "visible opacity-100": isDropdownHovered,
    "invisible opacity-0": !isDropdownHovered,
  });

  const onMovieLeave = () => {
    setIsDropdownHovered(false);
    setIsHoverd(false);
  };
  const onMovieEnter = () => {
    setIsDropdownHovered(true);
    setIsHoverd(true);
  };

  return (
    <div
      onMouseEnter={onMovieEnter}
      onMouseLeave={onMovieLeave}
      className={`border-2 p-2 rounded-md cursor-pointer transition-all duration-200 ${
        isHoverd ? "border-white" : "border-gray-400"
      }`}
    >
      <svg
        className="w-[25px]"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            className="transition-all duration-200"
            fill={!isHoverd ? "#9CA3AF" : "#FFFF"}
            d="M30,49c0,18.7,15.3,34,34,34s34-15.3,34-34S82.7,15,64,15S30,30.3,30,49z M90,49c0,14.3-11.7,26-26,26S38,63.3,38,49   s11.7-26,26-26S90,34.7,90,49z"
          />
          <path
            className="transition-all duration-200"
            fill={!isHoverd ? "#9CA3AF" : "#FFFF"}
            d="M24.4,119.4C35,108.8,49,103,64,103s29,5.8,39.6,16.4l5.7-5.7C97.2,101.7,81.1,95,64,95s-33.2,6.7-45.3,18.7L24.4,119.4z"
          />
        </g>
      </svg>

      <div
        onMouseLeave={onMovieLeave}
        className={`cursor-default absolute rounded-xl bg-[#1f1b2e] top-2 -left-4 -right-4 h-[450px] -z-10 transition-all duration-300 delay-200 ${movieDropdownVisibility} `}
      >
        <div className="p-12  mt-14 flex flex-col flex-wrap gap-5 ">
          <Link to="/" className="flex">
            <div className="flex flex-col items-start p-3 bg-[#3e3758] hover:bg-[#494067] rounded-lg min-h-[108px] min-w-[177px] cursor-pointer transition-all duration-200">
              <div className="flex-grow">
                <img src="" alt="" className="w-[25px] h-[25px]" />
              </div>
              <p className="text-base text-white font-medium">See later</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
