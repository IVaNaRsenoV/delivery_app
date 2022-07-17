import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "adapter",
};

const reducerBasket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    getValue: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: {},
});

export default reducerBasket.reducer;
export const { getValue } = reducerBasket.actions;
