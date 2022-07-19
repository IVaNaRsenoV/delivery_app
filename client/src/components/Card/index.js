import React from "react";
import { useDispatch } from "react-redux";
import { CardFooter } from "../CardFooter";
import styles from "./Card.module.scss";

export const Card = ({ img, title, cost, id, toggle }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <img src={img} alt="card" />
      <CardFooter
        toggle={toggle}
        title={title}
        img={img}
        id={id}
        cost={cost}
        dispatch={dispatch}
      />
    </div>
  );
};
