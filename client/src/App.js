import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Shop, ShoppingCart } from "./pages";

const App = () => {
  return (
    <div>
      <ul>
        <Link to="/shop">Shop</Link>
        <Link to="/shopping_cart">Shopping cart</Link>
      </ul>
      <Routes>
        <Route path="/" element={<h1>application</h1>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopping_cart" element={<ShoppingCart />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default App;
