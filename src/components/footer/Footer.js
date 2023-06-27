import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Designed by{" "}
        <a
          className={styles.emanojbishtLink}
          href="https://github.com/emanojbisht"
        >
          @emanojbisht
        </a>
      </p>
    </footer>
  );
}

export default Footer;
