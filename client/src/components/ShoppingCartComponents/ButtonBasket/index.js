import React from "react";
import { basketPost } from "../../../redux/hooks/postBasket";
import { deleteItem } from "../../../redux/hooks/deleteItem";
import { inc, dec } from "../../../redux/reducers/reducerGetBasket";
import styles from "./ButtonBasket.module.scss";

const postData = (dispatch, title, img, cost) => {
  dispatch(basketPost({ title, img, cost }));
};

export const Button = (props) => {
  return (
    <button
      {...props}
      onClick={() => {
        props.dispatch(inc());
        postData(
          props.dispatch,
          props.data.title,
          props.data.img,
          props.data.cost
        );
      }}
    >
      {props.children}
    </button>
  );
};

export const ButtonBasket = ({ dispatch, title, img, cost, id }) => {
  return (
    <div className={styles.card__buttonBasket}>
      <Button
        className={styles.button__basket}
        dispatch={dispatch}
        data={{ title, img, cost }}
      >
        add item
      </Button>
      <button
        className={styles.button__basket}
        onClick={() => {
          dispatch(dec());
          dispatch(deleteItem(id));
        }}
      >
        delete item
      </button>
    </div>
  );
};
