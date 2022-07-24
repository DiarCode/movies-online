import React, { FC } from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import MoviesListGeneric from "../components/MoviesListGeneric";
import { IMovie } from "../types";

export const mockAPI: IMovie[] = [
  { id: 1, name: "Fall Guys", price: "Free", rating: "5.5" },
  { id: 2, name: "Stalker", price: "Subscription", rating: "2.8" },
  { id: 3, name: "The Boys", price: "Free", rating: "8.3" },
];

const Home: FC = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Carousel />
      <MoviesListGeneric
        title="Recomended to see"
        moviesList={mockAPI}
        className="my-12"
      />
      <MoviesListGeneric title="New Movies" moviesList={mockAPI} />
    </div>
  );
};

export default Home;
