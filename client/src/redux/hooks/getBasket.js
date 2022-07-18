import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";

const url = "http://localhost:3001/basket";

export const getBasket = createAsyncThunk("basketGet", async () => {
  const data = await api(url, "GET");
  return data;
});
