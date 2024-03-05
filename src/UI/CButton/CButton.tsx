import styles from "./CButton.module.scss";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const CButton = ({ children, ...props }: IButton) => {
  return (
    <button className={styles.CButton} {...props}>
      {children}
    </button>
  );
};
