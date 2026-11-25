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
  { label: "The Academics", dot: "#3b82f6", bg: "#eff6ff", text: "#1d4ed8" },
  { label: "The Personalities", dot: "#8b5cf6", bg: "#f5f3ff", text: "#6d28d9" },
  { label: "The Social Ones", dot: "#f59e0b", bg: "#fffbeb", text: "#b45309" },
  { label: "The Wildcards", dot: "#f43f5e", bg: "#fff1f2", text: "#be123c" },
];

export default function ClassmatesPage() {
  return (
    <>
      <header className={styles.header}>
        <p className={styles.eyebrow}>COMPLETE COLLECTION</p>
        <h1 className={styles.title}>All Classmate Types</h1>
        <p className={styles.subtitle}>
          The full lineup of 12 classmate types across 4 categories. How many do
          you recognize?
        </p>
      </header>

      <div className={styles.legend}>
        {legend.map((l) => (
          <span
            key={l.label}
            className={styles.pill}
            style={{ backgroundColor: l.bg, color: l.text }}
          >
            <span className={styles.dot} style={{ backgroundColor: l.dot }} />
            {l.label}
          </span>
        ))}
      </div>

      <div className={styles.grid}>
        {classmates.map((c) => (
          <ClassmateCard key={c.name} {...c} />
        ))}
      </div>
    </>
  );
}
