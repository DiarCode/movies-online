import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import BurgerButtons from "./BurgerButtons";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const movieDropdownVisibility = classNames({
    "visible opacity-100": isOpen,
    "invisible opacity-0": !isOpen,
  });

  const handleBurgerOpen = () => {
    setIsOpen(!isOpen);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };
  const onMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className="block lg:hidden">
      <div
        className="cursor-pointer"
        onClick={handleBurgerOpen}
        onMouseLeave={onMouseLeave}
        onMouseOver={onMouseEnter}
      >
        <BurgerButtons isHovered={isHovered} isOpen={isOpen} />
      </div>

      <div
        className={`cursor-default absolute rounded-xl bg-[#1f1b2e] top-2 -left-3 -right-3 -z-10 transition-all duration-200 delay-200 ${movieDropdownVisibility}`}
      >
        <div className="p-5 pt-6 mt-14 mb-3 flex justify-center items-center flex-col">
          <ul className=" flex flex-col gap-3 text-center text-lg text-gray-400">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/">Upcoming</Link>
            </li>
            <li>
              <Link to="/">TV shows</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Burger;
