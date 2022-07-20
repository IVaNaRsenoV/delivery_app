import React from "react";
import { useSelector } from "react-redux";
import { selectorWithCatalog } from "../../redux/selectors";
import { ToggleCatalog, List } from "../../components";
import styles from "./Shop.module.scss";

export const Shop = () => {
  const catalogValue = useSelector(selectorWithCatalog); // directory array

  return (
    <div className={styles.container__shop}>
      <List />
      <ToggleCatalog catalogValue={catalogValue} />
    </div>
  );
};
