import Container from "@/components/Container/Container";
import RevealImage from "@/components/RevealImage/RevealImage";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import {
  commercialTechnicalPresentations,
  keynoteSpeakers,
  type Speaker,
} from "@/data/content";
import styles from "./Speakers.module.css";

function SpeakerSection({
  id,
  tag,
  title,
  lead,
  speakers,
}: {
  id: string;
  tag: string;
  title: string;
  lead: string;
  speakers: Speaker[];
}) {
  return (
    <section className={styles.section} id={id}>
      <Container>
        <SectionHeader tag={tag} align="split" title={title} lead={lead} />
        <div className={styles.grid}>
          {speakers.map((speaker) => (
            <article className={styles.speaker} data-card key={speaker.name}>
              <RevealImage
                src={speaker.image}
                alt={`${speaker.name} portrait`}
                className={styles.portrait}
              />
              <div className={styles.info}>
                <h3>{speaker.name}</h3>
                <p>{speaker.role}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function KeynoteSpeakers() {
  return (
    <SpeakerSection
      id="speakers"
      tag="Speakers"
      title="Keynote Speakers"
      lead="Meet the keynote voices shaping maritime futures."
      speakers={keynoteSpeakers}
    />
  );
}

export function CommercialTechnicalPresentations() {
  return (
    <SpeakerSection
      id="commercial-presentations"
      tag="Presentations"
      title="Commercial-technical presentations"
      lead="Discover practical perspectives from maritime industry professionals."
      speakers={commercialTechnicalPresentations}
    />
  );
}
