import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const dataOfBarbershopSlice = createSlice({
    name: "dataOfBarbershop",
    initialState,
    reducers: {
        setAllServices: (state, action: PayloadAction<Service[]>) => {
            state.allServices = action.payload
        }
    },
})

export const { setAllServices } = dataOfBarbershopSlice.actions
export default dataOfBarbershopSlice.reducer
