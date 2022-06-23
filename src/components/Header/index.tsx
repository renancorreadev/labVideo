import Logo from "../archives/Logo";
import styles from "./styles.module.css";
export function Header() {
  return (
    <header className={styles.header_container}>
      <Logo />
    </header>
  );
}
