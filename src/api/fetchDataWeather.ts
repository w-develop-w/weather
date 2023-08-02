import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { WeatherData } from "../types/models"

const apiBaseUrl = "https://api.openweathermap.org/data/2.5/"
const apiKey = "18b48209d1c103adfc7e19a05457ec9e"

export const weatherApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
    endpoints: (builder) => ({
        getWeather: builder.query<WeatherData, string >({
            query: (city) =>
                `forecast?q=${city}&units=metric&APPID=${apiKey}&cnt=8`,
        }),
    }),
})

export const { useGetWeatherQuery } = weatherApi
