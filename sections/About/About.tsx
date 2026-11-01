import RevealImage from "@/components/RevealImage/RevealImage";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.head}>
        <SectionHeader
          tag="About"
          align="about"
          title={<>Where Maritime Science <span className="muted">Meets Practice</span></>}
          lead="IMSC brings together scientists, engineers, educators and shipping professionals for three days of research, debate and collaboration on the future of the sea, ships and ports."
        />
      </div>
      <div className={styles.images} data-about-images>
        <RevealImage src="/img/lounge.jpg" alt="Conference lounge at the Faculty of Maritime Studies" speed={-0.15} className={styles.imageA} />
        <RevealImage src="/img/ceremony.jpg" alt="Conference ceremony in Split" className={styles.imageMain} />
        <RevealImage src="/img/simulator.jpg" alt="Maritime engineering simulator" speed={0.2} className={styles.imageB} />
        <RevealImage src="/img/posters.jpg" alt="Researchers discussing maritime studies" speed={-0.25} className={styles.imageC} />
        <RevealImage src="/img/split.jpg" alt="View of Split, Croatia" speed={0.15} className={styles.imageD} />
      </div>
    </section>
  );
}
