import Image from "next/image";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { sponsors } from "@/data/content";
import styles from "./Partners.module.css";

export default function Partners() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader
          tag="Partners"
          align="row"
          title={<>Supported by Leading <span className="muted">Maritime Partners</span></>}
          action={<Button href="#">Become a sponsor</Button>}
        />
        <div className={styles.logos}>
          {sponsors.map((partner) => (
            <div className={styles.logo} data-card key={partner.name}>
              <Image src={partner.image} alt={partner.name} fill sizes="(max-width: 760px) 40vw, 20vw" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
