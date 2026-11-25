import styles from "./ClassmateCard.module.css";

export default function ClassmateCard({ emoji, name, trait, description, category }) {
  return (
    <article className={styles.card}>
      <div className={styles.accent} style={{ backgroundColor: category.color }} />
      <div className={styles.content}>
        <div
          className={styles.emojiCircle}
          style={{
            backgroundColor: category.emojiBg,
            border: `2px solid ${category.emojiBorder}`,
          }}
        >
          {emoji}
        </div>
        <h3 className={styles.name}>{name}</h3>
        <span
          className={styles.tag}
          style={{ backgroundColor: category.bgColor, color: category.textColor }}
        >
          {category.label}
        </span>
        <p className={styles.trait}>{trait}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
