import Logo from "../archives/Logo";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className={styles.header_container}>
      <Link to="/">
        <Logo />
      </Link>
    </header>
  );
}
