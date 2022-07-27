import axios, { AxiosRequestConfig } from "axios";
import { IGenre } from "../types";

const getServerOptions = (method: string, path: string) => {
  if (!method && !path) return;

  const serverOptions = {
    method,
    url: `https://movies-app1.p.rapidapi.com/api${path}`,
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
