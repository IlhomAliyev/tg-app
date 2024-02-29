import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">Main</Link>
      <Link to="/profile">Profile</Link>      
    </div>
  );
};
