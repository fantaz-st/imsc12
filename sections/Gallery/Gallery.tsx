import Image from "next/image";
import Container from "@/components/Container/Container";
import Marquee from "@/components/Marquee/Marquee";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { gallery } from "@/data/content";
import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader
          tag="Gallery"
          align="center"
          title={
            <>
              A glimpse from previous <span className="muted">IMSC editions.</span>
            </>
          }
        />
      </Container>
      <div className={styles.trackFrame}>
        <Marquee className={styles.track} direction={1} duration={20} galleryTrack>
          {[...gallery, ...gallery, ...gallery].map((item, index) => (
            <figure className={`${styles.image} ${styles[item.size]}`} data-gallery-image key={`${item.alt}-${index}`}>
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 80vw, 35vw" />
            </figure>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
