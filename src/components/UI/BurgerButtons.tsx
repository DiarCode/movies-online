import React from "react";

interface BurgerButtonsProps {
  isOpen: boolean;
}

const BurgerButtons = ({ isOpen }: BurgerButtonsProps) => {
  const handledButton = isOpen ? (
    <svg
      className="w-[25px] h-[25px]"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#9CA3AF"
        d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"
      />
    </svg>
  ) : (
    <svg
      className="w-[35px] h-[35px]"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19,8H5A1,1,0,0,1,5,6H19a1,1,0,0,1,0,2Z" fill="#9CA3AF" />
      <path d="M19,13H5a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z" fill="#9CA3AF" />
      <path d="M19,18H5a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z" fill="#9CA3AF" />
    </svg>
  );
  return <>{handledButton}</>;
};

export default BurgerButtons;
