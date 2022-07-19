import { ButtonBasket, Button } from "../ShoppingCartComponents/ButtonBasket";
import styles from "./TogglePage.module.scss";

export const TogglePage = ({ toggle, title, cost, img, id, dispatch }) => {
  return (
    <>
      {toggle === "basket" ? (
        <ButtonBasket
          dispatch={dispatch}
          title={title}
          id={id}
          img={img}
          cost={cost}
        />
      ) : (
        <Button
          className={styles.button__shop}
          dispatch={dispatch}
          data={{ title, img, cost }}
        >
          add to cart
        </Button>
      )}
    </>
  );
};
