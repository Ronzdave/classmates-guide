"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        🎓 Classmate Guide
      </Link>
      <div className={styles.links}>
        <Link
          href="/"
          className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        >
          Home
        </Link>
        <Link
          href="/classmates"
          className={`${styles.link} ${
            pathname === "/classmates" ? styles.active : ""
          }`}
        >
          All Classmates
        </Link>
      </div>
    </nav>
  );
}
