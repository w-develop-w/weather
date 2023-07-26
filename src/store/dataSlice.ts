import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface DataOfWeather {
    search: string;
}

const initialState: DataOfWeather = {
    search: ""
}

const dataOfWeatherSlice = createSlice({
    name: "dataOfWeather",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        }
    },
})

export const { setSearch } = dataOfWeatherSlice.actions
export default dataOfWeatherSlice.reducer
