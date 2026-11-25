import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.line1}>
        Made for IT 415 — Application Development &amp; Emerging Technologies
      </p>
      <p className={styles.line2}>
        © 2024 Types of Classmates You&apos;ll Meet in College
      </p>
    </footer>
  );
}
