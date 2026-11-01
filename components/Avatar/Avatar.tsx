import styles from "./Avatar.module.css";

type AvatarProps = {
  initials: string;
  tone?: string;
  className?: string;
  label?: string;
};

export default function Avatar({
  initials,
  tone = "a",
  className = "",
  label,
}: AvatarProps) {
  return (
    <span
      className={`${styles.avatar} ${styles[`tone${tone.toUpperCase()}`]} ${className}`}
      aria-label={label}
    >
      {initials}
    </span>
  );
}
