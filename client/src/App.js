import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "./redux/hooks/getBasket";
import { Shop, ShoppingCart } from "./pages";

const App = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.getBasket.data);
  const count = useSelector((state) => state.getBasket.count);

  const data = [];
  selector.filter((item) => {
    let i = data.findIndex((el) => el.type === item.type);
    // debugger;
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
      <ul>
        <Link to="/shop">Shop</Link>
        <Link to="/shopping_cart">Shopping cart</Link>
      </ul>
      <Routes>
        <Route path="/" element={<h1>application</h1>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopping_cart" element={<ShoppingCart data={data} />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default App;
