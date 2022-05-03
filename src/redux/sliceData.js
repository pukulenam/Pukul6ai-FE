import { createSlice } from "@reduxjs/toolkit";

const globalState = {
    id: "",
    full_name: "",
    username: "",
    email: "",
    role: "",
    image: "",
    describtion: "",
}

export const sliceData = createSlice({
    name: "data",
    initialState: {
        datas: globalState
    },
    reducers: {
        ADD_USER: (state, action) => {
            const newData = {...action.payload}
            state.datas = newData
        },
        REMOVE_USER: (state) => {
            state.datas = globalState
        }
    }
})

export const { ADD_USER, REMOVE_USER } = sliceData.actions;
export default sliceData.reducer;