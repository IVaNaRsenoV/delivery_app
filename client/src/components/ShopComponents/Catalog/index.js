import { Card } from "../../Card";

export const Catalog = ({ name }) => {
  return (
    <>
      {name.map((el) => {
        return (
          <Card
            img={el.img}
            title={el.title}
            key={el.id}
            id={el.id}
            cost={el.cost}
          />
        );
      })}
    </>
  );
};
