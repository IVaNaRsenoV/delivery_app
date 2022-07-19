import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../../ShopComponents/Card";
import styles from "./BasketContainer.module.scss";

export const BasketContainer = ({ selector }) => {
  const menu = useSelector((state) => state.quantity.menu);
  const chisburger = useSelector((state) => state.quantity.chisburger);
  const doubleBurger = useSelector((state) => state.quantity.doubleBurger);
  const kfcKids = useSelector((state) => state.quantity.kfcKids);
  const menuKFC = useSelector((state) => state.quantity.menuKFC);
  const potato = useSelector((state) => state.quantity.potato);

  return (
    <div className={styles.basket__container}>
      {selector.map(({ data, id }, index) => {
        return (
          <div className={styles.card__basket}>
            <Card
              img={data.img}
              title={data.title}
              cost={data.cost}
              key={index}
              toggle={"basket"}
              id={id}
            />
            {data.title === "menu" && <Quantity data={menu} />}
            {data.title === "chisburger" && <Quantity data={chisburger} />}
            {data.title === "double burger" && <Quantity data={chisburger} />}
            {data.title === "kfc kids" && <Quantity data={kfcKids} />}
            {data.title === "menu KFC" && <Quantity data={menuKFC} />}
            {data.title === "potato" && <Quantity data={potato} />}
          </div>
        );
      })}
    </div>
  );
};

const Quantity = ({ data }) => {
  return (
    <div className={styles.quantity}>
      <span>Quantity: {data.length}</span>
    </div>
  );
};
