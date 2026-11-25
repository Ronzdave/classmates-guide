import styles from "./ClassmateCard.module.css";

export default function ClassmateCard({ emoji, name, trait, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.emojiCircle}>{emoji}</div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.trait}>{trait}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
