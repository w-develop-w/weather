import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherData } from "../models/models";

const apiBaseUrl = "https://api.openweathermap.org/data/2.5/";

export const weatherApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherData, string>({
      query: (city) => `forecast?q=${city}&units=metric&APPID=YOUR_API_KEY&cnt=7`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
