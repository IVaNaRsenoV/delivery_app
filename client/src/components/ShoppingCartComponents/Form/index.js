import styles from "./Form.module.scss";

export const Form = ({ register, errors, name }) => {
  return (
    <div className={styles.shoppingCart__form}>
      <label>
        <span>{name[0].toUpperCase() + name.slice(1, name.length)}</span>
        <br />
        {name === "email" ? (
          <input
            placeholder="email"
            {...register("email", {
              required: "This is field required!",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Email invalid",
              },
            })}
          />
        ) : (
          <input
            placeholder={name}
            {...register(name, {
              required: "This is field required",
              minLength: {
                value: 4,
                message: "Length must be more 4 symbols!",
              },
            })}
          />
        )}
      </label>
      <div className={styles.error__container}>
        {errors?.[`${name}`] && (
          <h4 style={{ color: "red" }}>{errors?.[`${name}`]?.message}</h4>
        )}
      </div>
      <br />
    </div>
  );
};
