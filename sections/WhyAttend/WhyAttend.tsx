import Container from "@/components/Container/Container";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { features } from "@/data/content";
import styles from "./WhyAttend.module.css";

const icons: Record<string, React.ReactNode> = {
  person: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  award: <><path d="M12 3v18M5 8l7-5 7 5" /><path d="M5 21h14" /></>,
  screen: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>,
  lines: <path d="M4 6h16M4 12h10M4 18h7" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
  people: <><circle cx="7" cy="8" r="3" /><circle cx="17" cy="8" r="3" /><path d="M2 20a5 5 0 0 1 10 0M12 20a5 5 0 0 1 10 0" /></>,
};

export default function WhyAttend() {
  return (
    <section className={styles.section} id="why-attend">
      <Container>
        <SectionHeader tag="Why Attend" title={<>Unleash the Potential of Your <span className="muted">Research</span></>} />
        <div className={styles.grid}>
          {features.map((feature) => (
            <article className={styles.feature} data-card key={feature.title}>
              <span className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24">{icons[feature.icon]}</svg>
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
