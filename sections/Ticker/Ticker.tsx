import { tickerItems } from "@/data/content";
import Marquee from "@/components/Marquee/Marquee";
import styles from "./Ticker.module.css";

export default function Ticker() {
  return (
    <div className={styles.ticker} aria-label="Conference announcements">
      <Marquee className={styles.track} duration={32}>
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span
            className={styles.item}
            key={`${item}-${index}`}
            aria-hidden={index >= tickerItems.length}
          >
            {item}<i aria-hidden="true">✦</i>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
