// import { configureStore } from "@reduxjs/toolkit";
// import dataOfWeatherReducer from "./dataSlice";

// // Создайте хранилище и добавьте сюда редьюсер dataOfWeatherSlice
// const store = configureStore({
//   reducer: {
//     dataOfWeather: dataOfWeatherReducer,
//   },
// });

// export default store;



// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { api as weatherApi } from '../api/fetchDataWeather'; // Путь к вашему RTK-Query API
// import dataOfWeatherReducer from "./dataSlice";

// // Создайте хранилище и добавьте сюда редьюсер dataOfWeatherSlice
// const store = configureStore({
//   reducer: {
//     dataOfWeather: dataOfWeatherReducer,
//     [weatherApi.reducerPath]: weatherApi.reducer, // Добавляем редюсер для RTK-Query API
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(weatherApi.middleware), // Добавляем Middleware для RTK-Query API
// });

// export default store;



import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { weatherApi } from '../api/fetchDataWeather'; // Обратите внимание на исправленный импорт

import dataOfWeatherReducer from "./dataSlice";

// Создайте хранилище и добавьте сюда редьюсер dataOfWeatherSlice
const store = configureStore({
  reducer: {
    dataOfWeather: dataOfWeatherReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export default store;

