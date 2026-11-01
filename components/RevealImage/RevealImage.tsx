import Image from "next/image";
import styles from "./RevealImage.module.css";

type RevealImageProps = {
  src?: string;
  alt: string;
  className?: string;
  placeholder?: string;
  priority?: boolean;
  speed?: number;
  initials?: string;
};

export default function RevealImage({
  src,
  alt,
  className = "",
  placeholder = "",
  priority = false,
  speed,
  initials,
}: RevealImageProps) {
  return (
    <figure
      className={`${styles.figure} ${className}`}
      data-reveal
      data-speed={speed}
    >
      <div className={`${styles.imageInner} ${placeholder ? styles[placeholder] : ""} img-ph`}>
        {initials && <span className={styles.initials}>{initials}</span>}
        {src && (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 760px) 90vw, (max-width: 1100px) 70vw, 55vw"
          />
        )}
      </div>
    </figure>
  );
}
