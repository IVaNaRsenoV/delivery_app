import styles from "./Form.module.scss";

export const Form = ({ type, name }) => {
  return (
    <div className={styles.shoppingCart__form}>
      <label htmlFor={name}>{name}</label>
      <input id={name} placeholder={name} type={type} />
    </div>
  );
};
