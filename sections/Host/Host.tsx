import Container from "@/components/Container/Container";
import RevealImage from "@/components/RevealImage/RevealImage";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import SplitText from "@/components/SplitText/SplitText";
import styles from "./Host.module.css";

export default function Host() {
  return (
    <section className={styles.section} id="venue">
      <Container className={styles.inner}>
        <div className={styles.text}>
          <SectionHeader
            tag="Venue"
            title={<>Meet the Hosts Behind <span className="muted">IMSC 2027</span></>}
          />
          <SplitText as="p" className={styles.big}>
            The Faculty of Maritime Studies in Split has trained seafarers and maritime experts for over seven decades.
          </SplitText>
          <SplitText as="p" className={styles.small}>
            As host of the 12th edition, the faculty welcomes the IMSC community to Split — a port city where research, education and the shipping industry meet every day.
          </SplitText>
          <div className={styles.sign} data-fade>
            <strong>Organising Committee</strong>
            <span>Faculty of Maritime Studies, University of Split</span>
          </div>
        </div>
        <RevealImage src="/images/split croatia.jpg" alt="Panoramic view of Split and the Adriatic coast" className={styles.image} />
      </Container>
    </section>
  );
}
