import React from "react";
import styles from "./ShoppingCart.module.scss";

export const ShoppingCart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.shoppingCart__container}>
        <div className={styles.form}>
          <div className={styles.shoppingCart__form}>
            <label for="name">Name</label>
            <input id="name" placeholder="name" type="text" />
          </div>

          <div className={styles.shoppingCart__form}>
            <label for="surname">Surname</label>
            <input id="surname" placeholder="surname" type="text" />
          </div>

          <div className={styles.shoppingCart__form}>
            <label for="email">Email</label>
            <input id="email" placeholder="email" type="email" />
          </div>

          <div className={styles.shoppingCart__form}>
            <label for="address">Address</label>
            <input id="address" placeholder="address" type="text" />
          </div>
        </div>

        <div className={styles.basket__container}>
          <div>basket</div>
        </div>
      </div>
      <div>
        <h1>total cost</h1>
        <button>Send</button>
      </div>
    </div>
  );
};
