import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { weatherApi } from '../api/fetchDataWeather'; 
import { dataOfWeatherSlice } from "./dataSlice";


export const store = configureStore({
  reducer: {
    dataOfWeather: dataOfWeatherSlice.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
