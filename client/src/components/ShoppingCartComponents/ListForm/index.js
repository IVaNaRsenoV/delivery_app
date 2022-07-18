import React from "react";
import { Form } from "../Form";
import styles from "./ListForm.module.scss";

export const ListForm = () => {
  return (
    <div className={styles.form}>
      <Form name={"name"} type={"text"} />
      <Form name={"surname"} type={"text"} />
      <Form name={"email"} type={"email"} />
      <Form name={"address"} type={"text"} />
    </div>
  );
};
