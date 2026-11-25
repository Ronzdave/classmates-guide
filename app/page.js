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
        <span className={`${styles.floatEmoji} ${styles.float2}`} aria-hidden="true">🎓</span>
        <span className={`${styles.floatEmoji} ${styles.float3}`} aria-hidden="true">👻</span>
        <span className={`${styles.floatEmoji} ${styles.float4}`} aria-hidden="true">✏️</span>
        <span className={`${styles.floatEmoji} ${styles.float5}`} aria-hidden="true">☕</span>
        <span className={`${styles.floatEmoji} ${styles.float6}`} aria-hidden="true">🎨</span>
        <span className={`${styles.floatEmoji} ${styles.float7}`} aria-hidden="true">💡</span>
        <span className={`${styles.floatEmoji} ${styles.float8}`} aria-hidden="true">✨</span>

        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          The College Survival Guide
        </div>
        <h1 className={styles.heroHeading}>
          Types of Classmates You&apos;ll Meet{" "}
          <span className={styles.accent}>in College</span>
        </h1>
        <p className={styles.heroSubtitle}>
          A lighthearted field guide to the personalities you&apos;ll inevitably
          share a classroom with — from the overachievers to the ghosts you
          only see on exam day.
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
        <div className={styles.ctaRow}>
          <Link href="/classmates" className={styles.cta}>
            Browse all classmates
            <span className={styles.arrow}>→</span>
          </Link>
          <a href="#about" className={styles.ctaGhost}>
            Learn more
          </a>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Featured picks</span>
          <h2 className={styles.featuredHeading}>Meet a Few of Them</h2>
          <p className={styles.featuredSubtext}>
            A quick preview of three types you&apos;ll definitely recognize —
            one from three different corners of the classroom.
          </p>
        </div>
        <div className={styles.grid}>
          {featured.map((c) => (
            <ClassmateCard key={c.name} {...c} />
          ))}
        </div>
      </section>

      <section id="about" className={styles.about}>
        <span className={styles.eyebrow}>About the guide</span>
        <h2 className={styles.aboutHeading}>What This Guide Is About</h2>
        <p className={styles.aboutBody}>
          ClassmateGuide is a lighthearted look at the personalities you&apos;ll
          find in any college classroom. Whether you&apos;re a freshman just
          starting out or a senior who&apos;s seen it all, chances are
          you&apos;ll recognize every single one of these types — and you might
          even be one of them.
        </p>

        <div className={styles.strip}>
          <div className={styles.stripItem}>
            <div className={styles.stripIcon}>✦</div>
            <div>
              <div className={styles.stripTitle}>Four color-coded categories</div>
              <p className={styles.stripText}>
                Academics, Personalities, Social Ones, and Wildcards — grouped
                the way students actually see them.
              </p>
            </div>
          </div>
          <div className={styles.stripItem}>
            <div className={styles.stripIcon}>◈</div>
            <div>
              <div className={styles.stripTitle}>Built on Next.js</div>
              <p className={styles.stripText}>
                Fast page transitions and a reusable card system powered by
                the App Router.
              </p>
            </div>
          </div>
          <div className={styles.stripItem}>
            <div className={styles.stripIcon}>❤</div>
            <div>
              <div className={styles.stripTitle}>Made for students</div>
              <p className={styles.stripText}>
                Written in casual language, designed to feel like a yearbook
                more than a textbook.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
