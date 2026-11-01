import Avatar from "@/components/Avatar/Avatar";
import Marquee from "@/components/Marquee/Marquee";
import { testimonials } from "@/data/content";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.section} aria-label="Testimonials">
      <Marquee className={styles.track}>
        {[...testimonials, ...testimonials].map((item, index) => (
          <article className={styles.quote} key={`${item.name}-${index}`}>
            <p>{item.quote}</p>
            <div className={styles.by}>
              <Avatar initials={item.initials} tone={item.tone} className={styles.face} />
              <div><strong>{item.name}</strong><small>{item.role}</small></div>
            </div>
          </article>
        ))}
      </Marquee>
    </section>
  );
}
