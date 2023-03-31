import { createSlice } from "@reduxjs/toolkit";

type typeInitialState = {
    postId: number
}

const initialState: typeInitialState = {
    postId: 0
}

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostId: (state, action) => {
      state.postId = action.payload;
    },
  },
});

export const postReducer = postSlice.reducer
export const {setPostId} = postSlice.actions
