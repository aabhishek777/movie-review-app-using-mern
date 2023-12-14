import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, (builder) => {
  builder.addCase("user", (state, action) => {
    state.userDetails = action.payload;
  });
  builder.addCase("LOGOUT_USER", (state, action) => {
    state.userDetails = null;
  });
});

export const movieReducer = createReducer({}, (builder) => {
  builder.addCase("ALL_MOVIES", (state, action) => {
    state.movieDetails = action.payload;
  });

  builder.addCase("SINGLE_MOVIE", (state, action) => {
    state.singleMovie = action.payload;
  });
});
