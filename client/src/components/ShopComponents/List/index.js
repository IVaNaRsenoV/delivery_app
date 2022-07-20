import { useDispatch } from "react-redux";
import { getValue } from "../../../redux/reducers/reducerCatalog";
import styles from "./List.module.scss";

export const List = () => {
  const dispatch = useDispatch();
  const get = (name) => dispatch(getValue(name));

  return (
    <nav className={styles.shop__menu}>
      <ul>
        <li onClick={() => get("adapter")}>adapter</li>
        <li onClick={() => get("KFC")}>KFC</li>
      </ul>
    </nav>
  );
};
