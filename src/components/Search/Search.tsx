import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Search.module.scss";
import { useGetWeatherQuery } from "../../api/fetchDataWeather";
import { DataOfWeather, WeatherData } from "../../models/models";
import { setSearch } from "../../store/dataSlice"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export function Search() {
    const dispatch = useAppDispatch();
    const search = useAppSelector(state => state.dataOfWeather.search)

    // console.log("dataOfWeather.search:", search);

    const { data, error, isFetching } = useGetWeatherQuery(search, {
        refetchOnMountOrArgChange: search !== "",
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
        return "img/3.png";
    };

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            weekday: "short",
            day: "numeric",
            month: "numeric",
        };
        return date.toLocaleDateString("en-US", options);
    };

    const formatTime = (dateString: string): string => {
        const date = new Date(dateString);
        const hours = date.getHours();
        const minutes = date.getMinutes();
      
        // Если время равно "24:00", то заменяем на "00:00"
        if (hours === 24 && minutes === 0) {
            return "00:00";
        }
      
        // Форматируем время обычным способом
        const formattedHours = hours.toString().padStart(2, "0");
        const formattedMinutes = minutes.toString().padStart(2, "0");
        return `${formattedHours}:${formattedMinutes}`;
    };

    //test

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <input
                    type="text"
                    placeholder="Enter your city"
                    value={search}
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                />

                <div className={styles.listDays}>
                    {/* {isFetching && <p>Loading...</p>} */}
                    {/* {error && <p>Error: {error.message}</p>} */}
                    <ul>
                        {data?.list.map((item, index) => (
                            <li key={index}>
                                <div className={styles.card}>
                                    <img
                                        src={getWeatherIconUrl(item.weather?.[0]?.main)}
                                        alt="Icon of weather"
                                    />
                                    <h3>{Math.ceil(Number(item.main?.temp))}°</h3>
                                    <h3 className={styles.date}>{formatDate(item.dt_txt)}</h3>
                                    <h3>{data?.city.name}</h3>
                                    <h3 className={styles.time}>{formatTime(item.dt_txt)}</h3>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}



