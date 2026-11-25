import ClassmateCard from "../components/ClassmateCard";
import styles from "./classmates.module.css";

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

const classmates = [
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
    emoji: "🎯",
    name: "The Group Leader",
    category: categories.social,
    trait: "\"Okay, here's the plan...\"",
    description:
      "Takes charge of every group project without being asked. Creates the group chat, assigns the tasks, and follows up on every single member.",
  },
  {
    emoji: "🤓",
    name: "The Walking Encyclopedia",
    category: categories.academics,
    trait: "\"Actually, the answer is...\"",
    description:
      "Always has the answer to every question the professor throws. The unofficial class tutor nobody asked for — but everyone needs.",
  },
  {
    emoji: "📱",
    name: "The Phone Addict",
    category: categories.personalities,
    trait: "\"Huh? What did the prof say?\"",
    description:
      "Always scrolling through their phone during lectures. Has never heard a full sentence from the professor. Relies entirely on seatmates for notes.",
  },
  {
    emoji: "🍜",
    name: "The Snack Dealer",
    category: categories.social,
    trait: "\"Want some chips?\"",
    description:
      "Always has a stash of snacks hidden in their bag. Shares food with everyone during long lectures. The real MVP of every 3-hour class.",
  },
  {
    emoji: "😎",
    name: "The Chill Student",
    category: categories.personalities,
    trait: "\"It'll work out, bro.\"",
    description:
      "Never stresses about anything — deadlines, exams, nothing. Goes with the flow, somehow submits everything on time, and maintains decent grades.",
  },
  {
    emoji: "🏃",
    name: "The Late Arrival",
    category: categories.wildcards,
    trait: "\"Sorry, traffic!\"",
    description:
      "Walks in 15 minutes late every single day with coffee in hand. Has a brand new excuse each time. The professor has stopped reacting.",
  },
  {
    emoji: "📝",
    name: "The Note-Taker",
    category: categories.academics,
    trait: "\"Can I borrow your notes?\" — everyone",
    description:
      "Has color-coded, perfectly organized notes for every single lecture. Their notebook is basically a published textbook. The most borrowed item on campus.",
  },
  {
    emoji: "🎨",
    name: "The Creative One",
    category: categories.personalities,
    trait: "\"Let me handle the PowerPoint.\"",
    description:
      "Turns every group presentation into a visual masterpiece. Transitions, animations, color palettes — the group's secret weapon for high grades.",
  },
  {
    emoji: "🤝",
    name: "The Connector",
    category: categories.social,
    trait: "\"I know someone who can help.\"",
    description:
      "Knows literally everyone from every course and every block. The ultimate networking machine. Need a contact? They've got one.",
  },
  {
    emoji: "🏆",
    name: "The Overachiever",
    category: categories.academics,
    trait: "\"I submitted it three days early.\"",
    description:
      "Does extra credit assignments that don't even exist. Submits everything way ahead of the deadline. Makes the entire class feel behind schedule.",
  },
];

const legend = [
  { label: "The Academics",     dot: "#60a5fa", bg: "rgba(59, 130, 246, 0.12)", text: "#93c5fd", border: "rgba(59, 130, 246, 0.35)" },
  { label: "The Personalities", dot: "#a78bfa", bg: "rgba(139, 92, 246, 0.12)", text: "#c4b5fd", border: "rgba(139, 92, 246, 0.35)" },
  { label: "The Social Ones",   dot: "#fbbf24", bg: "rgba(245, 158, 11, 0.12)", text: "#fcd34d", border: "rgba(245, 158, 11, 0.35)" },
  { label: "The Wildcards",     dot: "#fb7185", bg: "rgba(244, 63, 94, 0.12)",  text: "#fda4af", border: "rgba(244, 63, 94, 0.35)" },
];

export default function ClassmatesPage() {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.eyebrow}>Complete Collection</span>
        <h1 className={styles.title}>All Classmate Types</h1>
        <p className={styles.subtitle}>
          The full lineup of 12 classmate types across 4 categories. How many
          do you recognize from your own classroom?
        </p>
      </header>

      <div className={styles.toolbar}>
        <span className={styles.toolbarLabel}>Filter by category</span>
        <div className={styles.legend}>
          {legend.map((l) => (
            <span
              key={l.label}
              className={styles.pill}
              style={{ backgroundColor: l.bg, color: l.text, border: `1px solid ${l.border}` }}
            >
              <span className={styles.dot} style={{ backgroundColor: l.dot, color: l.dot }} />
              {l.label}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {classmates.map((c) => (
          <ClassmateCard key={c.name} {...c} />
        ))}
      </div>
    </>
  );
}
