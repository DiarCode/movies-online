import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import ProfileServicesList from "../ProfileServicesList";

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
        className="w-[20px] sm:w-[25px]"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
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
        className={`cursor-default absolute rounded-xl bg-[#1f1b2e] top-2 -left-4 -right-4 -z-10 transition-all duration-300 delay-200 ${movieDropdownVisibility} `}
      >
        <div className="p-12 h-full mt-14 gap-6 flex justify-between">
          <div className="flex flex-wrap gap-4 w-fit">
            <ProfileServicesList />
          </div>

          <span className="w-[2px] h-[250px] mx-2 bg-gray-400"></span>

          <div className="flex flex-col justify-start w-[30%]">
            <div className="w-full flex-grow">
              <button className="bg-[#ff0f4d] hover:bg-[#fc2158] transition-all duration-200 w-full text-white py-2 px-4 text-base font-medium text-center rounded-lg">
                Signup or Login
              </button>
            </div>

            <div className="flex flex-col text-sm font-normal text-gray-400 ">
              <p className="hover:text-white transition-all duration-200">
                Notification preferences
              </p>
              <p className="hover:text-white transition-all duration-200">
                FAQ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
