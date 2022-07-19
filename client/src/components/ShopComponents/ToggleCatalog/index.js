import { Catalog } from "../Catalog";
import { mcDenny, KFC } from "../../../assets/data";
import styles from "./ToggleCatalog.module.scss";

// depending on name, data is loaded into the catalog window
export const ToggleCatalog = ({ selector }) => {
  return (
    <div className={styles.shop__catalog}>
      {selector === "adapter" ? (
        <Catalog name={mcDenny} />
      ) : (
        <Catalog name={KFC} />
      )}
    </div>
  );
};
