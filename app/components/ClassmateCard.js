import styles from "./ClassmateCard.module.css";

export default function ClassmateCard({ emoji, name, trait, description, category }) {
  return (
    <article
      className={styles.card}
      style={{ "--cat-color": category.color }}
    >
      <div className={styles.accent} style={{ backgroundColor: category.color }} />
      <div className={styles.content}>
        <div className={styles.emojiStage}>
          <div
            className={styles.emojiCircle}
            style={{
              background: `radial-gradient(circle at 30% 30%, ${category.emojiBorder}, ${category.color} 90%)`,
              boxShadow: `0 10px 28px -6px ${category.color}80, inset 0 -4px 0 rgba(0,0,0,0.15), inset 0 2px 0 rgba(255,255,255,0.3)`,
            }}
          >
            <span className={styles.emoji}>{emoji}</span>
            <span
              className={styles.ring}
              style={{ borderColor: `${category.color}80` }}
              aria-hidden="true"
            />
          </div>
          <span className={`${styles.sparkle} ${styles.sparkle1}`} aria-hidden="true">✦</span>
          <span className={`${styles.sparkle} ${styles.sparkle2}`} aria-hidden="true">✧</span>
          <span className={`${styles.sparkle} ${styles.sparkle3}`} aria-hidden="true">✦</span>
          <span className={`${styles.sparkle} ${styles.sparkle4}`} aria-hidden="true">✧</span>
        </div>
        <h3 className={styles.name}>{name}</h3>
        <span
          className={styles.tag}
          style={{
            backgroundColor: `${category.color}20`,
            color: category.emojiBorder,
            border: `1px solid ${category.color}40`,
          }}
        >
          {category.label}
        </span>
        <p className={styles.trait}>{trait}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
