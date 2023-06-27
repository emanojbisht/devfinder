import DarkMode from "./DarkMode";
import styles from "./Header.module.css";
function Header({ themeMode, dispatch }) {
  return (
    <header className={styles.flex}>
      <h1 className={styles.heading}>devfinder</h1>
      <DarkMode themeMode={themeMode} dispatch={dispatch} />
    </header>
  );
}

export default Header;
