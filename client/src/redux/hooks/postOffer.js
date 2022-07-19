import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";

const url = "http://localhost:3001/people";

export const postOffer = createAsyncThunk("post offer", (data, basket) => {
  console.log(basket.getState().getBasket.data);
  // debugger;
  // const a = JSON.stringify(arr);
  // console.log(typeof a);
  api(url, "POST", {
    offer: {
      data,
      basket: basket.getState().getBasket.data,
    },
  });
});
