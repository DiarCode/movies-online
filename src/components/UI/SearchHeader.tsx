import React, { useState } from "react";

const SearchHeader = () => {
  const [isSearchHovered, setIsSearchHovered] = useState(false);

  const onSearchLeave = () => setIsSearchHovered(false);
  const onSearchEnter = () => setIsSearchHovered(true);

  return (
    <div
      className="flex items-center gap-1 cursor-pointer"
      onMouseOver={onSearchEnter}
      onMouseLeave={onSearchLeave}
    >
      <span>
        <svg
          className={`w-[20px] h-[20px] transition-all duration-200`}
          enableBackground="new 0 0 32 32"
          id="Glyph"
          version="1.1"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="transition-all duration-200"
            fill={!isSearchHovered ? "#9CA3AF" : "#FFFF"}
            d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
            id="XMLID_223_"
          />
        </svg>
      </span>
      <p
        className={`${
          !isSearchHovered ? "text-gray-400 " : "text-white"
        } transition-all duration-200`}
      >
        Search
      </p>
    </div>
  );
};

export default SearchHeader;
