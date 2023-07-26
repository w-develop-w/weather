import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type DataOfWeather = {
    search: string
}

const initialState: DataOfWeather = {
    search: "London",
}

export const dataOfWeatherSlice = createSlice({
    name: "dataOfWeather",
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
            // console.log(action.payload)
        },
    },
})

export const { setSearch } = dataOfWeatherSlice.actions
