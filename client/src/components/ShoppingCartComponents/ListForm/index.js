import React from "react";
import { Form } from "../Form";
import { useDispatch, useSelector } from "react-redux";
import { postOffer } from "../../../redux/hooks/postOffer";
import styles from "./ListForm.module.scss";

import { useForm } from "react-hook-form";

export const ListForm = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.getBasket.data);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (basket.length > 0) {
      dispatch(postOffer(data, basket));
      alert("Заказ оформлен!");
    } else {
      alert("Пожалуйста добавте продукты в корзину!");
    }
    reset();
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form register={register} errors={errors} name={"name"} />
        <Form register={register} errors={errors} name={"surname"} />
        <Form register={register} errors={errors} name={"email"} />
        <Form register={register} errors={errors} name={"address"} />
        <button className={styles.button__form}>Send</button>
      </form>
    </div>
  );
};
