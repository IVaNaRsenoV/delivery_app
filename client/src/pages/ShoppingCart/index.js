import React from "react";
import { useSelector } from "react-redux";
import { ListForm, BasketContainer } from "../../components";
import styles from "./ShoppingCart.module.scss";

export const ShoppingCart = ({ data }) => {
  const totalCost = useSelector((state) => state.getBasket.data);

  let totalCount = 0;

  totalCost.forEach((el) => {
    totalCount = totalCount + el.data.cost;
  });

  return (
    <div className={styles.container}>
      <div className={styles.shoppingCart__container}>
        <ListForm />
        <BasketContainer selector={data} />
      </div>
      <div className={styles.totalCost}>
        <h1>total cost: {totalCount} UAH</h1>
      </div>
    </div>
  );
};
