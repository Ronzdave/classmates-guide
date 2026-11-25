import ClassmateCard from "../components/ClassmateCard";
import styles from "./classmates.module.css";

const classmates = [
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
  {
    emoji: "🎯",
    name: "The Group Leader",
    trait: "\"Okay, here\'s the plan...\"",
    description:
      "Takes charge of every group project without being asked. Creates the group chat, assigns the tasks, and follows up on every single member.",
  },
  {
    emoji: "📱",
    name: "The Phone Addict",
    trait: "\"Huh? What did the prof say?\"",
    description:
      "Always scrolling through their phone during lectures. Has never heard a full sentence from the professor. Relies entirely on seatmates for notes.",
  },
  {
    emoji: "🎨",
    name: "The Creative One",
    trait: "\"Let me handle the PowerPoint.\"",
    description:
      "Turns every group presentation into a visual masterpiece. Transitions, animations, color palettes — the group\'s secret weapon for high grades.",
  },
  {
    emoji: "😎",
    name: "The Chill Student",
    trait: "\"It\'ll work out, bro.\"",
    description:
      "Never stresses about anything — deadlines, exams, nothing. Goes with the flow, somehow submits everything on time, and maintains decent grades.",
  },
  {
    emoji: "🤝",
    name: "The Connector",
    trait: "\"I know someone who can help.\"",
    description:
      "Knows literally everyone from every course and every block. The ultimate networking machine. Need a contact? They\'ve got one.",
  },
  {
    emoji: "📝",
    name: "The Note-Taker",
    trait: "\"Can I borrow your notes?\" — everyone",
    description:
      "Has color-coded, perfectly organized notes for every single lecture. Their notebook is basically a published textbook. The most borrowed item on campus.",
  },
  {
    emoji: "🏃",
    name: "The Late Arrival",
    trait: "\"Sorry, traffic!\"",
    description:
      "Walks in 15 minutes late every single day with coffee in hand. Has a brand new excuse each time. The professor has stopped reacting.",
  },
  {
    emoji: "🍜",
    name: "The Snack Dealer",
    trait: "\"Want some chips?\"",
    description:
      "Always has a stash of snacks hidden in their bag. Shares food with everyone during long lectures. The real MVP of every 3-hour class.",
  },
  {
    emoji: "🏆",
    name: "The Overachiever",
    trait: "\"I submitted it three days early.\"",
    description:
      "Does extra credit assignments that don\'t even exist. Submits everything way ahead of the deadline. Makes the entire class feel behind schedule.",
  },
];

export default function ClassmatesPage() {
  return (
    <div>
      <section className={styles.header}>
        <h1 className={styles.title}>All Classmate Types</h1>
        <p className={styles.subtitle}>
          The complete collection. See how many you recognize from your own
          classroom.
        </p>
      </section>

      <section>
        <div className={styles.grid}>
          {classmates.map((c) => (
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
    </div>
  );
}
