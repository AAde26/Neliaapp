import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: "page",
    initialState: {
        currentPage: 1
    },
 reducers: {
    setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
    }
 }

});

export const { setCurrentPage } = pageSlice.actions;

export default pageSlice.reducer;