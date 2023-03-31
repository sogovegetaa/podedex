import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pokemonsApi } from "./utils/apiSlice";
import { postReducer } from "./utils/postSlice";
export const store = configureStore({
  reducer: {
    post: postReducer,
    // [postReducer.reducerPath]: postReducer.reducer, 
    [pokemonsApi.reducerPath]: pokemonsApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:false
    }).concat(pokemonsApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>