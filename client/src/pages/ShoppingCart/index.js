import React from "react";
import { ListForm, BasketContainer } from "../../components";
import styles from "./ShoppingCart.module.scss";

export const ShoppingCart = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.shoppingCart__container}>
        <ListForm />
        <BasketContainer selector={data} />
      </div>
      <div>
        <h1>total cost</h1>
      </div>
    </div>
  );
};
