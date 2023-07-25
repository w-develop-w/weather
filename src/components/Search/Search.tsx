// import React, { useState, useEffect } from "react";
// import styles from "./Search.module.scss";

// const api = {
//   key: "18b48209d1c103adfc7e19a05457ec9e",
//   base: "https://api.openweathermap.org/data/2.5/",
// };

// type WeatherData = {
//   list: Array<{
//     main: {
//       temp: number;
//     };
//     weather: Array<{
//       main: string;
//       icon: string;
//     }>;
//     dt_txt: string;
//   }>;
//   city: {
//     name: string;
//   };
// };

// export function Search() {
//   const [search, setSearch] = useState("");
//   const [weather, setWeather] = useState<WeatherData>({
//     list: [],
//     city: { name: "" },
//   });

//   const getWeatherIconUrl = (main: string): string => {
//     if (main === "Sunny" || main === "Clear") {
//         return "img/2.png"
//     }
//     if (main === "Clouds") {
//         return "img/3.png"
//     }
//     if (main === "Rain" || main === "Drizzle") {
//         return "img/5.png"
//     }
//     if (main === "Snow") {
//         return "img/7.png"
//     }
//     if (main === "Thunderstorm") {
//         return "img/8.png"
//     }
//     if (main === "Mist" || main === "Fog") {
//         return "img/9.png"
//     }
//     if (main === "Smoke") {
//         return "img/10.png"
//     }
//     if (main === "Haze") {
//         return "img/11.png"
//     }
//     if (main === "Dust") {
//         return "img/12.png"
//     }
//     if (main === "Sand") {
//         return "img/13.png"
//     }
//     if (main === "Tornado") {
//         return "img/14.png"
//     } else {
//         // Возвращаем URL по умолчанию для других значений
//         return "http://openweathermap.org/img/wn/default.png"
//     }
//   };

//   const searchPressed = () => {
//     fetch(`${api.base}forecast?q=${search}&units=metric&APPID=${api.key}&cnt=7`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("City not found");
//         }
//         return res.json();
//       })
//       .then((result) => {
//         setWeather(result);
//       })
//       .catch((error) => {
//         console.error(error);
//         alert("City not found. Please enter a valid city name.");
//       });
//   };

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       if (search !== "") {
//         // Вызываем searchPressed только если search не пустая строка
//         searchPressed();
//       }
//     }, 1000); // Задержка в 1000 миллисекунд (1 секунда)

//     return () => clearTimeout(delayDebounceFn);
//   }, [search]);

//   const formatDate = (dateString: string): string => {
//     const date = new Date(dateString);
//     const options: Intl.DateTimeFormatOptions = {
//       weekday: "short",
//       day: "numeric",
//       month: "numeric",
//     };
//     return date.toLocaleDateString("en-US", options);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.modal}>
//         <input
//           type="text"
//           placeholder="Enter your city"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <div className={styles.listDays}>
//           <ul>
//             {weather.list.map((item, index) => (
//               <li key={index}>
//                 <div className={styles.card}>
//                   <h3 className={styles.date}>{formatDate(item.dt_txt)}</h3>
//                   <img
//                     src={getWeatherIconUrl(item.weather?.[0]?.main)}
//                     alt="Icon of weather"
//                   />
//                   <h3>{Math.ceil(Number(item.main?.temp))}°</h3>
//                   <h3>{weather.city.name}</h3> {/* Перемещаем это здесь */}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import styles from "./Search.module.scss";

const api = {
  key: "18b48209d1c103adfc7e19a05457ec9e",
  base: "https://api.openweathermap.org/data/2.5/",
};

type WeatherData = {
  list: Array<{
    main: {
      temp: number;
    };
    weather: Array<{
      main: string;
      icon: string;
    }>;
    dt_txt: string;
  }>;
  city: {
    name: string;
  };
};

export function Search() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState<WeatherData>({
    list: [],
    city: { name: "" },
  });

  const getWeatherIconUrl = (main: string): string => {
    if (main === "Sunny" || main === "Clear") {
      return "img/2.png";
    }
    if (main === "Clouds") {
      return "img/3.png";
    }
    // ... (другие условия без изменений)
    return "http://openweathermap.org/img/wn/default.png";
  };

  const searchPressed = () => {
    fetch(`${api.base}forecast?q=${search}&units=metric&APPID=${api.key}&cnt=7`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("City not found");
        }
        return res.json();
      })
      .then((result) => {
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
        searchPressed();
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

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
            {weather.list.map((item, index) => (
              <li key={index}>
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <img
                      src={getWeatherIconUrl(item.weather?.[0]?.main)}
                      alt="Icon of weather"
                    />
                    <h3>{Math.ceil(Number(item.main?.temp))}°</h3>
                  </div>
                  <h3 className={styles.date}>{formatDate(item.dt_txt)}</h3>
                  <h3>{weather.city.name}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
