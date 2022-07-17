import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getValue } from "../../redux/reducers/reducerBakset";
import { mcDenny, KFC } from "../../assets/data";
import styles from "./Shop.module.scss";

const Card = ({ img, title }) => {
  return (
    <div className={styles.card}>
      <img style={{ width: "200px" }} src={img} />
      <h3>{title}</h3>
      <button>add to cart</button>
    </div>
  );
};

export const Shop = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.basket.value);

  return (
    <div className={styles.container__shop}>
      <nav className={styles.shop__menu}>
        <ul>
          <li onClick={() => dispatch(getValue("adapter"))}>adapter</li>
          <li onClick={() => dispatch(getValue("KFC"))}>KFC</li>
        </ul>
      </nav>
      <div className={styles.shop__catalog}>
        {selector === "adapter" ? (
          <>
            {mcDenny.map((el) => {
              return <Card img={el.img} title={el.title} key={el.id} />;
            })}
          </>
        ) : (
          <>
            {KFC.map((el) => {
              return <Card img={el.img} title={el.title} key={el.id} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};
