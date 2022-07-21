import { FC } from "react";
import { IMovie } from "../types";
import MovieItem from "./MovieItem";

interface MoviesListGenericProps {
  moviesList: IMovie[];
  title: string;
  className?: string;
}

const MoviesListGeneric: FC<MoviesListGenericProps> = ({
  moviesList,
  title,
  className,
}) => {
  const content = moviesList.map(item => (
    <MovieItem item={item} key={item.id} />
  ));

  return (
    <div className={`container ${className}`}>
      <div className="flex gap-1 items-center mb-5 cursor-pointer w-fit">
        <h1 className="text-white text-xl sm:text-2xl font-semibold ">{title}</h1>
        <svg
          className="w-[25px]"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
        >
          <polygon
            fill="#fff"
            points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 "
          />
        </svg>
      </div>

      <div className="flex items-start gap-6 overflow-x-auto">{content}</div>
    </div>
  );
};

export default MoviesListGeneric;
