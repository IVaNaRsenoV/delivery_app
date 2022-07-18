import { createSlice } from "@reduxjs/toolkit";
import { getBasket } from "../../hooks/getBasket";

const initialState = {
  data: [],
  count: 0,
};

const reducerGetBasket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    inc: (state) => {
      state.count = state.count + 1;
    },
    dec: (state) => {
      state.count = state.count - 1;
    },
  },
  extraReducers: {
    [getBasket.pending]: () => {},
    [getBasket.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [getBasket.rejected]: () => console.error("error"),
  },
});

export default reducerGetBasket.reducer;
export const { inc, dec } = reducerGetBasket.actions;
