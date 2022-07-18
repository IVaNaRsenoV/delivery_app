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
          <>
            <Card
              img={data.img}
              title={data.title}
              key={index}
              toggle={"basket"}
              id={id}
            />
            {data.title === "menu" && <span>{menu.length}</span>}
            {data.title === "chisburger" && <span>{chisburger.length}</span>}
            {data.title === "double burger" && (
              <span>{doubleBurger.length}</span>
            )}
            {data.title === "kfc kids" && <span>{kfcKids.length}</span>}
            {data.title === "menu KFC" && <span>{menuKFC.length}</span>}
            {data.title === "potato" && <span>{potato.length}</span>}
          </>
        );
      })}
    </div>
  );
};
