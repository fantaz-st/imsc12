import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "light";
  icon?: boolean;
  block?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon = false,
  block = false,
  className = "",
}: ButtonProps) {
  return (
    <Link
      className={`${styles.button} ${styles[variant]} ${icon ? styles.iconButton : ""} ${block ? styles.block : ""} ${className}`}
      href={href}
    >
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
      )}
      <span>{children}</span>
    </Link>
  );
}
