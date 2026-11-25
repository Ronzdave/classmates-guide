import styles from "./Logo.module.css";

export default function Logo({ size = 32 }) {
  return (
    <span
      className={styles.mark}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <defs>
          <linearGradient id="capGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#dbeafe" />
          </linearGradient>
        </defs>
        {/* mortarboard top */}
        <path
          d="M12 3L22 8L12 13L2 8L12 3Z"
          fill="url(#capGrad)"
        />
        {/* cap base */}
        <path
          d="M6 10.5V14.5C6 15.3 6.5 16 7.4 16.4C8.8 17 10.3 17.3 12 17.3C13.7 17.3 15.2 17 16.6 16.4C17.5 16 18 15.3 18 14.5V10.5L12 13.5L6 10.5Z"
          fill="url(#capGrad)"
          fillOpacity="0.85"
        />
        {/* tassel */}
        <path
          d="M20.5 8.5V13.5"
          stroke="#fbbf24"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="20.5" cy="14.8" r="1.3" fill="#fbbf24" />
      </svg>
    </span>
  );
}
