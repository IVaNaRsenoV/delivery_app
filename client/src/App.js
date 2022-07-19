import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "./redux/hooks/getBasket";
import { Shop, ShoppingCart } from "./pages";
import { Header } from "./components";

const App = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.getBasket.data);
  const count = useSelector((state) => state.getBasket.count); // count is needed in order to force the page to be rendered and load the data when it changes

  // Algorithm for sorting unique objects in an array by type
  const data = [];
  selector.filter((item) => {
    let i = data.findIndex((el) => el.type === item.type);
    if (i <= -1) {
      data.push(item);
    }
    return null;
  });

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
