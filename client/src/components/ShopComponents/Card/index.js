import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { basketPost } from "../../../redux/hooks/postBasket";
import { deleteItem } from "../../..//redux/hooks/deleteItem";
import { inc, dec } from "../../../redux/reducers/reducerGetBasket";
import styles from "./Card.module.scss";

const postData = (dispatch, title, img, cost) => {
  dispatch(basketPost({ title, img, cost }));
};

export const Card = ({ img, title, cost, id, toggle }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.getBasket.count);
  React.useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className={styles.card}>
      <img src={img} alt="card" />
      <div className={styles.card__footer}>
        <h3>{title}</h3>
        <h3>cost: {cost}</h3>
        {toggle === "basket" ? (
          <div className={styles.card__buttonBasket}>
            <button
              className={styles.button__basket}
              onClick={() => {
                dispatch(inc());
                dispatch(postData(dispatch, title, img, cost));
              }}
            >
              add item
            </button>
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
        ) : (
          <button
            className={styles.button__shop}
            onClick={() => {
              dispatch(inc());
              postData(dispatch, title, img, cost);
            }}
          >
            add to cart
          </button>
        )}
      </div>
    </div>
  );
};
