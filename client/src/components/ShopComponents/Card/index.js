import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { basketPost } from "../../../redux/hooks/postBasket";
import { deleteItem } from "../../..//redux/hooks/deleteItem";
import { inc, dec } from "../../../redux/reducers/reducerGetBasket";
import styles from "./Card.module.scss";

const postData = (dispatch, title, img) => {
  dispatch(basketPost({ title, img }));
};

export const Card = ({ img, title, id, toggle }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.getBasket.count);
  React.useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className={styles.card}>
      <img src={img} alt="card" />
      <h3>{title}</h3>
      {toggle === "basket" ? (
        <>
          <button
            onClick={() => {
              dispatch(inc());
              dispatch(postData(dispatch, title, img));
            }}
          >
            add item
          </button>
          <button
            onClick={() => {
              dispatch(dec());
              dispatch(deleteItem(id));
            }}
          >
            delete item
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            dispatch(inc());
            postData(dispatch, title, img);
          }}
        >
          add to cart
        </button>
      )}
    </div>
  );
};
