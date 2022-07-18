import React from "react";
import { Form } from "../Form";
import styles from "./ListForm.module.scss";

import { useForm } from "react-hook-form";

export const ListForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form register={register} errors={errors} name={"name"} />
        <Form register={register} errors={errors} name={"surname"} />

        <div
          style={{
            marginBottom: "20px",
            paddingLeft: "60px",
            position: "relative",
          }}
        >
          <label>
            <span style={{ fontSize: "25px" }}>Email</span>
            <input
              style={{
                marginLeft: "10px",
                width: "400.5px",
                height: "40px",
                fontSize: "25px",
                padding: "10px",
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
        <button
          style={{
            position: "absolute",
            right: "0px",
            bottom: "-30px",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};
