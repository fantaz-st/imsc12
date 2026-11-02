import Image from "next/image";
import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import SplitText from "@/components/SplitText/SplitText";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top" data-hero>
      <div className={styles.background} data-hero-bg>
        <Image src="/images/hero.webp" alt="" fill priority sizes="100vw" className={styles.backgroundImage} />
      </div>
      <div className={styles.shade} />
      <Container className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.meta}>
            <div className={styles.metaRow} data-hero-fade>
              <span className={styles.metaIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="16" rx="3" />
                  <path d="M3 10h18M8 3v4M16 3v4" />
                </svg>
              </span>
              <span>19–21 May 2027</span>
            </div>
            <div className={styles.metaRow} data-hero-fade>
              <span className={styles.metaIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
              </span>
              <span>Split, Croatia</span>
            </div>
          </div>
          <SplitText as="h1" splitName="hero" className={styles.title}>
            IMSC 2027
          </SplitText>
          <SplitText as="p" splitName="hero-lead" className={styles.lead}>
            Join 100+ researchers, engineers and industry leaders at the 12th International Maritime Science Conference.
          </SplitText>
        </div>
        <div className={styles.side} data-hero-side>
          <Button href="#tickets" icon>
            Register now
          </Button>
          <Button href="/welcome" variant="light">
            Welcome from the committee
          </Button>
          <Button href="/authors" variant="light">
            Instructions for authors
          </Button>
          <div className={styles.proof}>
            <div className={styles.faces}>
              <Avatar initials="AK" tone="a" />
              <Avatar initials="MB" tone="b" />
              <Avatar initials="JR" tone="c" />
              <Avatar initials="+" tone="d" className={styles.more} />
            </div>
            <p>
              <strong>30+ countries</strong> represented
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
