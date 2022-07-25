import React, { memo } from "react";
import { Link } from "react-router-dom";

const ProfileServicesList = memo(() => {
  return (
    <>
      <Link to="/" className="flex">
        <div className="flex flex-col items-start p-3 bg-[#3e3758] hover:bg-[#494067] rounded-lg min-h-[108px] w-[160px] cursor-pointer transition-all duration-200">
          <div className="flex-grow">
            <img src="" alt="" className="w-[25px] h-[25px]" />
          </div>
          <p className="text-base text-white font-medium">Purchases</p>
        </div>
      </Link>

      <Link to="/" className="flex">
        <div className="flex flex-col items-start p-3 bg-[#3e3758] hover:bg-[#494067] rounded-lg min-h-[108px] w-[160px] cursor-pointer transition-all duration-200">
          <div className="flex-grow">
            <img src="" alt="" className="w-[25px] h-[25px]" />
          </div>
          <p className="text-base text-white font-medium">See later</p>
        </div>
      </Link>

      <Link to="/" className="flex">
        <div className="flex flex-col items-start p-3 bg-[#3e3758] hover:bg-[#494067] rounded-lg min-h-[108px] w-[160px] cursor-pointer transition-all duration-200">
          <div className="flex-grow">
            <img src="" alt="" className="w-[25px] h-[25px]" />
          </div>
          <p className="text-base text-white font-medium">View history</p>
        </div>
      </Link>

      <Link to="/" className="flex">
        <div className="flex flex-col items-start p-3 bg-[#3e3758] hover:bg-[#494067] rounded-lg min-h-[108px] w-[160px] cursor-pointer transition-all duration-200">
          <div className="flex-grow">
            <img src="" alt="" className="w-[25px] h-[25px]" />
          </div>
          <p className="text-base text-white font-medium">Subscriptions</p>
        </div>
      </Link>

      <Link to="/" className="flex">
        <div className="flex flex-col items-start p-3 bg-[#3e3758] hover:bg-[#494067] rounded-lg min-h-[108px] w-[160px] cursor-pointer transition-all duration-200">
          <div className="flex-grow">
            <img src="" alt="" className="w-[25px] h-[25px]" />
          </div>
          <p className="text-base text-white font-medium">
            Activate sertificate
          </p>
        </div>
      </Link>

      <Link to="/" className="flex">
        <div className="flex flex-col items-start p-3 bg-[#3e3758] hover:bg-[#494067] rounded-lg min-h-[108px] w-[160px] cursor-pointer transition-all duration-200">
          <div className="flex-grow">
            <img src="" alt="" className="w-[25px] h-[25px]" />
          </div>
          <p className="text-base text-white font-medium">Code entry</p>
        </div>
      </Link>

      <Link to="/" className="flex">
        <div className="flex flex-col items-start p-3 bg-[#3e3758] hover:bg-[#494067] rounded-lg min-h-[108px] w-[160px] cursor-pointer transition-all duration-200">
          <div className="flex-grow">
            <img src="" alt="" className="w-[25px] h-[25px]" />
          </div>
          <p className="text-base text-white font-medium">Payment options</p>
        </div>
      </Link>
    </>
  );
});

export default ProfileServicesList;
