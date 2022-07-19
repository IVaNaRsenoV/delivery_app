import React from "react";
import styles from "./Popup.module.scss";

export const Popup = ({ text, setToggle }) => {
  return (
    <div className={styles.popup__container}>
      <h1>
        {text}
        <span onClick={() => setToggle(false)}>Заркыть!</span>
      </h1>
    </div>
  );
};
