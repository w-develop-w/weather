
export type WeatherData = {
    list: Array<{
        main: {
            temp: number
        }
        weather: Array<{
            main: string
            icon: string
        }>
        dt_txt: string
    }>
    city: {
        name: string
    }
}


export type DataOfWeather = {
    search: string;
}
