import { createSlice } from "@reduxjs/toolkit";
import { basketPost } from "../../hooks/postBasket";

const initialState = {
  data: [],
};

const reducerBasket = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: {
    [basketPost.pending]: (state, action) => {
      // console.log("basketPost.pending");
    },
    [basketPost.fulfilled]: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    [basketPost.rejected]: (state, action) => {
      console.log("basketPost.rejected");
    },
  },
});

export default reducerBasket.reducer;
