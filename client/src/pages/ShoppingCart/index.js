import React from "react";
import { useSelector } from "react-redux";
import { ListForm, BasketContainer } from "../../components";
import styles from "./ShoppingCart.module.scss";

export const ShoppingCart = ({ data }) => {
  const totalCost = useSelector((state) => state.getBasket.data);

  let totalCount = 0;

  totalCost.forEach((el) => {
    console.log(el.data.cost, " xxxx");
    totalCount = totalCount + el.data.cost;
  });

  return (
    <div className={styles.container}>
      <div className={styles.shoppingCart__container}>
        <ListForm />
        <BasketContainer selector={data} />
      </div>
      <div style={{ paddingTop: "20px" }}>
        <h1>total cost: {totalCount}</h1>
      </div>
    </div>
  );
};
