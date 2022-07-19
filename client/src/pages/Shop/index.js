import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleCatalog, List } from "../../components";
import styles from "./Shop.module.scss";

export const Shop = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.catalog.value); // directory array

  return (
    <div className={styles.container__shop}>
      <List dispatch={dispatch} />
      <ToggleCatalog selector={selector} />
    </div>
  );
};
