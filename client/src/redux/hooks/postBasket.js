import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";

const url = "http://localhost:3001/basket";

export const basketPost = createAsyncThunk("basket", (data) => {
  api(url, "POST", { data, type: data.title });
});
