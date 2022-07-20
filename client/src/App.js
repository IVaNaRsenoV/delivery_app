import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "./redux/hooks/getBasket";
import { Shop, ShoppingCart } from "./pages";
import { Header } from "./components";

import selectorWithFilterData from "./redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.getBasket.count); // count is needed in order to force the page to be rendered and load the data when it changes
  let data = useSelector(selectorWithFilterData);

  React.useEffect(() => {
    dispatch(getBasket()); // Loading products for the shopping cart page from the database
  }, [dispatch, count]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shopping_cart" element={<ShoppingCart data={data} />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default App;
