import { tickerItems } from "@/data/content";
import styles from "./Ticker.module.css";

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className={styles.ticker} aria-label="Conference announcements">
      <div className={styles.track}>
        {items.map((item, index) => (
          <span className={styles.item} key={`${item}-${index}`}>
            {item}<i aria-hidden="true">✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
