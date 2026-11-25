import Link from "next/link";
import ClassmateCard from "./components/ClassmateCard";
import styles from "./page.module.css";

const categories = {
  academics: {
    label: "The Academics",
    color: "#3b82f6",
    bgColor: "#eff6ff",
    textColor: "#1d4ed8",
    emojiBg: "#dbeafe",
    emojiBorder: "#93c5fd",
  },
  personalities: {
    label: "The Personalities",
    color: "#8b5cf6",
    bgColor: "#f5f3ff",
    textColor: "#6d28d9",
    emojiBg: "#ede9fe",
    emojiBorder: "#c4b5fd",
  },
  social: {
    label: "The Social Ones",
    color: "#f59e0b",
    bgColor: "#fffbeb",
    textColor: "#b45309",
    emojiBg: "#fef3c7",
    emojiBorder: "#fcd34d",
  },
  wildcards: {
    label: "The Wildcards",
    color: "#f43f5e",
    bgColor: "#fff1f2",
    textColor: "#be123c",
    emojiBg: "#ffe4e6",
    emojiBorder: "#fda4af",
  },
};

const featured = [
  {
    emoji: "😴",
    name: "The Crammer",
    category: categories.academics,
    trait: "\"I'll start studying tonight.\"",
    description:
      "Studies everything the night before the exam. Survives on coffee and sheer panic — but somehow still manages to pass.",
  },
  {
    emoji: "👻",
    name: "The Ghost",
    category: categories.wildcards,
    trait: "\"Wait, who's that?\"",
    description:
      "Officially enrolled but never physically present. Only appears during exams, group photos, and clearance signing.",
  },
  {
    emoji: "🤝",
    name: "The Connector",
    category: categories.social,
    trait: "\"I know someone who can help.\"",
    description:
      "Knows literally everyone from every course and every block. The ultimate networking machine. Need a contact? They've got one.",
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <span className={`${styles.floatEmoji} ${styles.float1}`} aria-hidden="true">📚</span>
        <span className={`${styles.floatEmoji} ${styles.float2}`} aria-hidden="true">🎭</span>
        <span className={`${styles.floatEmoji} ${styles.float3}`} aria-hidden="true">👻</span>
        <span className={`${styles.floatEmoji} ${styles.float4}`} aria-hidden="true">✏️</span>

        <p className={styles.eyebrow}>THE COLLEGE SURVIVAL GUIDE</p>
        <h1 className={styles.heroHeading}>
          Types of Classmates You&apos;ll Meet in College
        </h1>
        <p className={styles.heroSubtitle}>
          Every college classroom is a mix of unique personalities. Here&apos;s a
          lighthearted guide to the classmates we all know, love, and sometimes
          struggle with during group projects.
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>12</div>
            <div className={styles.statLabel}>Classmate Types</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>4</div>
            <div className={styles.statLabel}>Categories</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Relatable</div>
          </div>
        </div>
        <Link href="/classmates" className={styles.cta}>
          See All Classmates →
        </Link>
      </section>

      <section className={styles.featured}>
        <h2 className={styles.featuredHeading}>Meet a Few of Them</h2>
        <p className={styles.featuredSubtext}>
          Here are three types you&apos;ll definitely recognize.
        </p>
        <div className={styles.grid}>
          {featured.map((c) => (
            <ClassmateCard key={c.name} {...c} />
          ))}
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.accentBar} />
        <h2 className={styles.aboutHeading}>What This Guide Is About</h2>
        <p className={styles.aboutBody}>
          This website is a lighthearted look at the different personalities
          you&apos;ll find in any college classroom. Whether you&apos;re a
          freshman just starting out or a senior who&apos;s seen it all, chances
          are you&apos;ll recognize every single one of these types — and you
          might even be one of them.
        </p>
      </section>
    </>
  );
}
