import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "./redux/hooks/getBasket";
import { Shop, ShoppingCart } from "./pages";
import { Header } from "./components";

const App = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.getBasket.data);
  const count = useSelector((state) => state.getBasket.count);

  const data = [];
  selector.filter((item) => {
    let i = data.findIndex((el) => el.type === item.type);
    if (i <= -1) {
      data.push(item);
    }
    return null;
  });

  React.useEffect(() => {
    dispatch(getBasket());
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
