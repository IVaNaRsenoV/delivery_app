import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "adapter",
};

const reducerCatalog = createSlice({
  name: "basket",
  initialState,
  reducers: {
    getValue: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: {},
});

export default reducerCatalog.reducer;
export const { getValue } = reducerCatalog.actions;
