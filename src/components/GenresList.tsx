import React from "react";

const MOCK_GENRES = [
  "Action",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Thriller",
];

interface GenresListProps {
  className?: string;
}

const GenresList = ({ className }: GenresListProps) => {
  const content = MOCK_GENRES.map((item, index) => (
    <div
      key={index}
      className="rounded-lg px-3 py-5 bg-[#231f34] hover:bg-[#2b2741] transition-all ease-in duration-200 text-white flex flex-col gap-1 min-w-[177px]"
    >
      <div className=" flex justify-center items-center mb-3 ">
        <img src="" alt="" className="w-[32px] h-[32px] bg-slate-500" />
      </div>
      <p className="text-center font-medium text-base">{item}</p>
    </div>
  ));

  return (
    <div className={`container ${className} py-6`}>
      <h1 className="text-white text-2xl mb-5 font-semibold">Genres</h1>

      <div className="flex items-start gap-6 overflow-x-auto">{content}</div>
    </div>
  );
};

export default GenresList;