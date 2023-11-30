import { configureStore } from "@reduxjs/toolkit";
import { movieReducer, userReducer } from "./reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default store;
