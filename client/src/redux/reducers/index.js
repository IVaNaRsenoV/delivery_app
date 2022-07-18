import { combineReducers } from "redux";
import reducerCatalog from "./reducerCatalog";
import reducerBasket from "./reducerBasket";
import reducerGetBasket from "./reducerGetBasket";
import reducerQuantity from "./getQuantity";

const reducer = combineReducers({
  catalog: reducerCatalog,
  basket: reducerBasket,
  getBasket: reducerGetBasket,
  quantity: reducerQuantity,
});

export default reducer;
