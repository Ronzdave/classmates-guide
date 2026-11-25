import Link from "next/link";
import ClassmateCard from "./components/ClassmateCard";
import styles from "./page.module.css";

const featured = [
  {
    emoji: "😴",
    name: "The Crammer",
    trait: "\"I\'ll start studying tonight.\"",
    description:
      "Studies everything the night before the exam. Survives on coffee and sheer panic — but somehow still manages to pass.",
  },
  {
    emoji: "🤓",
    name: "The Walking Encyclopedia",
    trait: "\"Actually, the answer is...\"",
    description:
      "Always has the answer to every question the professor throws. The unofficial class tutor nobody asked for — but everyone needs.",
  },
  {
    emoji: "👻",
    name: "The Ghost",
    trait: "\"Wait, who\'s that?\"",
    description:
      "Officially enrolled but never physically present. Only appears during exams, group photos, and clearance signing.",
  },
];

export default function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Types of Classmates You&apos;ll Meet in College
        </h1>
        <p className={styles.heroSubtitle}>
          Every college classroom is a mix of personalities. Here&apos;s a fun
          and relatable guide to the classmates we all know, love, and
          sometimes struggle with.
        </p>
        <Link href="/classmates" className={styles.cta}>
          Explore All Types →
        </Link>
      </section>

      <section className={styles.featured}>
        <h2 className={styles.sectionTitle}>Meet a Few of Them</h2>
        <div className={styles.grid}>
          {featured.map((c) => (
            <ClassmateCard
              key={c.name}
              emoji={c.emoji}
              name={c.name}
              trait={c.trait}
              description={c.description}
            />
          ))}
        </div>
      </section>

      <section className={styles.about}>
        <h2 className={styles.aboutTitle}>What This Guide Is About</h2>
        <p className={styles.aboutText}>
          This website is a lighthearted look at the different personalities
          you&apos;ll find in any college classroom. Whether you&apos;re a
          freshman just starting out or a senior who&apos;s seen it all,
          you&apos;ll probably recognize every single one of these types — and
          you might even be one of them.
        </p>
      </section>
    </div>
  );
}
