import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./albumSlice";
import pageReducer from "./pageSlice";

export default configureStore({
    reducer: {
    albumSearch: albumReducer,
    page: pageReducer 
  }
});