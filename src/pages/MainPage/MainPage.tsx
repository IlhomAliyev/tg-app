import styles from "./MainPage.module.scss";

const token = import.meta.env.VITE_TELEGRAM_TOKEN;

export const MainPage = () => {
  console.log("token", token);

  return (
    <div className={styles.MainPage}>
      <h1>Main</h1>
      <p>TOKEN: {token}</p>
    </div>
  );
};
