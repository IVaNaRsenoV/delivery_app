import { createSlice } from "@reduxjs/toolkit";
import { getQuantity } from "../../hooks/getQuantity";

const initialState = {
  chisburger: [],
  menu: [],
  doubleBurger: [],
  kfcKids: [],
  menuKFC: [],
  potato: [],
};

const reducerQuantity = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: {
    [getQuantity.pending]: (state, action) => {
      // console.log("getQuantity.pending");
    },
    [getQuantity.fulfilled]: (state, action) => {
      state.chisburger = action.payload.filter(
        (el) => el.type === "chisburger"
      );
      state.menu = action.payload.filter((el) => el.type === "menu");
      state.doubleBurger = action.payload.filter(
        (el) => el.type === "double burger"
      );
      state.kfcKids = action.payload.filter((el) => el.type === "kfc kids");
      state.menuKFC = action.payload.filter((el) => el.type === "menu KFC");
      state.potato = action.payload.filter((el) => el.type === "potato");
    },
    [getQuantity.rejected]: (state, action) => {
      console.log("getQuantity.rejected");
    },
  },
});

export default reducerQuantity.reducer;
