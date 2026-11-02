import Container from "@/components/Container/Container";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { mainTopic, topics } from "@/data/content";
import styles from "./Topics.module.css";

export default function Topics() {
  return (
    <section className={styles.section} id="topics" aria-label="Conference topics">
      <Container>
        <SectionHeader tag="Main Topic" title={mainTopic} />
        <div className={styles.topics}>
          <h3 className={styles.subheading}>Topics of interest</h3>
          <ol className={styles.list}>
            {topics.map((topic, index) => (
              <li className={styles.item} data-row key={topic}>
                <span className={styles.number} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{topic}</span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
