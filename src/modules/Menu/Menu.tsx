import { Link, useLocation } from "react-router-dom";
import { routes } from "../../constants/routes.data";
import styles from "./Menu.module.scss";

export const Menu = () => {
  const { pathname } = useLocation();

  return (
    <ul className={styles.menu}>
      {routes.map(({ name, path }) => (
        <li key={path}>
          <Link
            className={
              pathname === path
                ? `${styles.link_active} ${styles.link}`
                : styles.link
            }
            to={path}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
