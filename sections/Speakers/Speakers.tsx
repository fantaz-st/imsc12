import Container from "@/components/Container/Container";
import RevealImage from "@/components/RevealImage/RevealImage";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { speakers } from "@/data/content";
import styles from "./Speakers.module.css";

export default function Speakers() {
  return (
    <section className={styles.section} id="speakers">
      <Container>
        <SectionHeader
          tag="Speakers"
          align="split"
          title={<>Meet the Voices Shaping <span className="muted">Maritime Futures</span></>}
          lead="Learn from researchers and practitioners who are redefining navigation, ship design and sustainable ports."
        />
        <div className={styles.grid}>
          {speakers.map((speaker) => (
            <article className={styles.speaker} data-card key={speaker.name}>
              <RevealImage
                alt={`${speaker.name} speaker portrait`}
                placeholder={`ph${speaker.tone.toUpperCase()}`}
                initials={speaker.initials}
                className={styles.portrait}
              />
              <div className={styles.info}>
                <div>
                  <h3>{speaker.name}</h3>
                  <p>{speaker.role}</p>
                </div>
                <a className={styles.link} href="#" aria-label={`${speaker.name} on LinkedIn`}>in</a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
