import {createSlice} from "@reduxjs/toolkit";

export const albumSlice = createSlice({
    name: "albumSearch",
    initialState: {
        input: ""
    },
    reducers: {
        updateInput: (state, action) => {
            state.input = action.payload;
        }
    }
});

export const { updateInput } = albumSlice.actions;

export default albumSlice.reducer;