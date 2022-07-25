import React, { memo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getGenresList } from "../api/axios";

interface GenresListProps {
  className?: string;
}

const GenresList = memo(({ className }: GenresListProps) => {
  const { data } = useQuery(["genresList"], getGenresList);

  const content = data?.map(item => (
    <div
      key={item.uuid}
      className="rounded-lg px-3 py-5 bg-[#231f34] hover:bg-[#2b2741] transition-all ease-in duration-200 text-white flex flex-col gap-1 min-w-[120px] sm:min-w-[177px]"
    >
      <div className=" flex justify-center items-center mb-2 sm:mb-3 ">
        <img src="" alt="" className="w-[32px] h-[32px] bg-slate-500" />
      </div>
      <p className="overflow-x-hidden whitespace-nowrap text-ellipsis text-center font-medium text-base">
        {item.name}
      </p>
    </div>
  ));

  return (
    <div className={`container ${className} py-6`}>
      <h1 className="text-white text-xl sm:text-2xl mb-5 font-semibold">
        Genres
      </h1>

      <div className="flex items-start gap-4 overflow-x-auto">{content}</div>
    </div>
  );
});

export default GenresList;
