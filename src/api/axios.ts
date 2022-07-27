import axios, { AxiosRequestConfig } from "axios";
import { IGenre, IMovie } from "../types";

const getServerOptions = (method: string, path: string, params?: any) => {
  if (!method && !path) return;

  const serverOptions = {
    method,
    url: `https://movies-app1.p.rapidapi.com/api${path}`,
    params: params || {},
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_HOST_NAME,
    },
  };

  return serverOptions as AxiosRequestConfig;
};

export const getGenresList = async () => {
  const options = getServerOptions("GET", "/genres");
  const data = await axios.request(options!).then(res => res.data);

  return data.results as IGenre[];
};

export const getRatedMoviesList = async () => {
  const options = getServerOptions("GET", "/movies", {
    limit: "10",
    sort: "rating",
  });
  const data = await axios.request(options!).then(res => res.data);

  return data.results as IMovie[];
};

export const getNewMoviesList = async () => {
  const options = getServerOptions("GET", "/movies", {
    limit: "10",
    sort: "year",
  });
  const data = await axios.request(options!).then(res => res.data);

  return data.results as IMovie[];
};

export const getRatedMoviesByGenre = async (genre: string) => {
  const options = getServerOptions("GET", "/movies", {
    limit: "10",
    sort: "rating",
    genres: genre,
  });
  const data = await axios.request(options!).then(res => res.data);

  return data.results as IMovie[];
};

export const getMovieById = async (id: string) => {
  const options = getServerOptions("GET", `/movie/${id}`);
  const data = await axios.request(options!).then(res => res.data);

  return data.result as IMovie;
};
