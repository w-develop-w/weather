// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { WeatherData } from "../models/models"

// const fetchDataWeather = createApi({
//     reducerPath: "fetchDataWeather",
//     baseQuery: fetchBaseQuery({ baseUrl: "https://api.openweathermap.org/data/2.5/" }),
//     endpoints: (builder) => ({
//         weather: builder.query<WeatherData[], null>({
//             query: () => "/servicing",
//         }),
//     }),
// })

// export const { useWeatherQuery } = fetchDataWeather
// export default fetchDataWeather


// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { WeatherData } from "../models/models"

// const apiBaseUrl = "https://api.openweathermap.org/data/2.5/";

// export const weatherApi = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
//   endpoints: (builder) => ({
//     getWeather: builder.query<WeatherData, string>({
//       query: (city) => `forecast?q=${city}&units=metric&APPID=YOUR_API_KEY&cnt=7`,
//     }),
//   }),
// });

// export const { useGetWeatherQuery } = weatherApi;

// Здесь предполагается, что WeatherData и другие типы данных определены в файле models.ts или models.d.ts






// import { createApi, fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query/react";
// import { WeatherData } from "../models/models";

// const apiBaseUrl = "https://api.openweathermap.org/data/2.5/";

// const baseQuery: BaseQueryFn<string | { url: string }, unknown, unknown> = async (
//   arg,
//   { baseUrl = apiBaseUrl }
// ) => {
//   const { url, ...rest } = typeof arg === "string" ? { url: arg } : arg;
//   const response = await fetch(baseUrl + url, rest);
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// };

// export const weatherApi = createApi({
//   baseQuery,
//   endpoints: (builder) => ({
//     getWeather: builder.query<WeatherData, string>({
//       query: (city) => `forecast?q=${city}&units=metric&APPID=YOUR_API_KEY&cnt=7`,
//     }),
//   }),
// });

// export const { useGetWeatherQuery } = weatherApi;




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
