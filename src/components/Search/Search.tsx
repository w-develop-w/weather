import React, { useState, useEffect } from "react";
import styles from "./Search.module.scss";

const api = {
  key: "18b48209d1c103adfc7e19a05457ec9e",
  base: "https://api.openweathermap.org/data/2.5/",
};

type WeatherData = {
  main: {
    temp: string;
  };
  name: string;
  weather: Array<{
    main: string;
    icon: string;
  }>;
};

export function Search() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState<WeatherData>({
    main: { temp: "" },
    name: "",
    weather: [],
  });

  const getWeatherIconUrl = (main: string): string => {
    if (main === "Sunny" || main === "Clear") {
      return "img/2.png";
    } 
    if (main === "Clouds") {
      return "img/3.png";
    } 
    if (main === "Rain" || main === "Drizzle") {
      return "img/5.png";
    } 
    if (main === "Snow") {
      return "img/7.png";
    } 
    if (main === "Thunderstorm") {
      return "img/8.png";
    } 
    if (main === "Mist" || main === "Fog") {
      return "img/9.png";
    } 
    if (main === "Smoke") {
      return "img/10.png";
    } 
    if (main === "Haze") {
      return "img/11.png";
    } 
    if (main === "Dust") {
      return "img/12.png";
    } 
    if (main === "Sand") {
      return "img/13.png";
    } 
    if (main === "Tornado") {
      return "img/14.png";
    } 
    else {
      // Возвращаем URL по умолчанию для других значений
      return "http://openweathermap.org/img/wn/default.png";
    }
  };

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("City not found");
        }
        return res.json();
      })
      .then((result) => {
        console.log(result)
        setWeather(result);
      })
      .catch((error) => {
        console.error(error);
        alert("City not found. Please enter a valid city name.");
      });
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search !== "") {
        // Вызываем searchPressed только если search не пустая строка
        searchPressed();
      }
    }, 500); // Задержка в 500 миллисекунд (0.5 секунды)

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <input
          type="text"
          placeholder="Enter your city"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={styles.listDays}>
          <ul>
            <li>
              <div className={styles.card}>
                <img
                  src={getWeatherIconUrl(weather.weather?.[0]?.main)}
                  alt=""
                />
                <h3>{Math.ceil(Number(weather.main?.temp))}°</h3>
                <h3>{weather.name}</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
