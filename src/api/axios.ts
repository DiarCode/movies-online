import axios, { AxiosRequestConfig } from "axios";
import { IGenre } from "../types";

interface IPromiseResults {
  results?: any;
}

const getServerOptions = (method: string, path: string) => {
  if (!method && !path) return;

  const serverOptions = {
    method,
    url: `https://movies-app1.p.rapidapi.com/api${path}`,
    headers: {
      "X-RapidAPI-Key": "ead1815035msh64c02657aaa8896p1fb548jsn31715607626a",
      "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
    },
  };

  return serverOptions as AxiosRequestConfig;
};

export const getGenresList = async () => {
  const options = getServerOptions("GET", "/genres");
  const data = await axios.request(options!).then(res => res.data);

  return data.results as IGenre[];
};
