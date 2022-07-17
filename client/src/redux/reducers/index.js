import { combineReducers } from "redux";
import reducerBasket from "./reducerBakset";

const reducer = combineReducers({
  basket: reducerBasket,
});

export default reducer;
