import React from "react";
import { TogglePage } from "../TogglePage";
import styles from "./CardFooter.module.scss";

export const CardFooter = ({ title, cost, toggle, img, id }) => {
  return (
    <div className={styles.card__footer}>
      <h3>{title}</h3>
      <h3>cost: {cost}</h3>
      <TogglePage toggle={toggle} title={title} cost={cost} img={img} id={id} />
    </div>
  );
};
