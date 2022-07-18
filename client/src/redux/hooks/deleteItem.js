import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";

const url = "http://localhost:3001/basket/";

export const deleteItem = createAsyncThunk("delete", (id) => {
  api(url + id, "DELETE");
});
