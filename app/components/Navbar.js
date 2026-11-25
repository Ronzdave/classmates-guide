"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          🎓 ClassmateGuide
        </Link>
        <div className={styles.links}>
          <Link
            href="/"
            className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
          >
            Home
          </Link>
          <Link
            href="/classmates"
            className={`${styles.navLink} ${pathname === "/classmates" ? styles.active : ""}`}
          >
            All Classmates
          </Link>
        </div>
      </div>
    </nav>
  );
}
