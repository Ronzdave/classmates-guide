import Link from "next/link";
import Logo from "./Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              <Logo size={36} />
              <span className={styles.wordmark}>
                Classmate<span className={styles.wordmarkAccent}>Guide</span>
              </span>
            </div>
            <p className={styles.tagline}>
              A lighthearted field guide to the twelve classmates every
              college student will eventually meet.
            </p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Explore</h4>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/classmates" className={styles.link}>All Classmates</Link>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Categories</h4>
            <span className={styles.link}>The Academics</span>
            <span className={styles.link}>The Personalities</span>
            <span className={styles.link}>The Social Ones</span>
            <span className={styles.link}>The Wildcards</span>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Built With</h4>
            <span className={styles.link}>Next.js App Router</span>
            <span className={styles.link}>React Server Components</span>
            <span className={styles.link}>CSS Modules</span>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyline}>
            © 2024 ClassmateGuide · Made for IT 415 — Application Development
            &amp; Emerging Technologies
          </p>
          <p className={styles.sub}>
            Crafted with care by a BSIT student · All personalities are
            affectionately fictional.
          </p>
        </div>
      </div>
    </footer>
  );
}
