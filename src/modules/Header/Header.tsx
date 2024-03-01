import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}></div>
      <h2>Telegram App</h2>
    </div>
  );
};
