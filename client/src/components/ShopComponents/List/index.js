import { getValue } from "../../../redux/reducers/reducerCatalog";
import styles from "./List.module.scss";

export const List = ({ dispatch }) => {
  return (
    <nav className={styles.shop__menu}>
      <ul>
        <li onClick={() => dispatch(getValue("adapter"))}>adapter</li>
        <li onClick={() => dispatch(getValue("KFC"))}>KFC</li>
      </ul>
    </nav>
  );
};
