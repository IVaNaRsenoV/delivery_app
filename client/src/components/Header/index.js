import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <ul>
        <Link to="/shop">Shop</Link>
        <Link to="/shopping_cart">Shopping cart</Link>
      </ul>
    </div>
  );
};
