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
    console.log(data);
    console.log(`${JSON.stringify(basket)}`);
    const arr = `${JSON.stringify(basket)}`;
    // basket.forEach((el) => arr.push(el));
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

        <div className={styles.form__container}>
          <label>
            <span>Email</span>
            <input
              style={{
                marginLeft: "10px",
                width: "80%",
                height: "40px",
                fontSize: "25px",
                padding: "4x",
                outline: "0",
                marginTop: "10px",
              }}
              placeholder="email"
              {...register("email", {
                required: "This is field required!",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Email invalid",
                },
              })}
            />
          </label>
          <div style={{ position: "absolute", bottom: "-25px" }}>
            {errors?.email && (
              <h4 style={{ color: "red" }}>{errors?.email?.message}</h4>
            )}
          </div>
        </div>

        <Form register={register} errors={errors} name={"address"} />
        <button className={styles.button__form}>Send</button>
      </form>
    </div>
  );
};
