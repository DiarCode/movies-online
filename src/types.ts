export interface IMovie {
  _id: string;
  image: string;
  title: string;
  description: string;
  genres: IGenre[];
  rating: string;
  year: string;
  countries: ICountry[];
}

export interface ICountry {
  name: string;
  uuid: string;
}

export interface IGenre {
  name: string;
  uuid: string;
}
