import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container/Container";
import styles from "./Footer.module.css";

const conferenceLinks = [
  { href: "/welcome", text: "Welcome from the Organizing Committee" },
  { href: "/#about", text: "About IMSC" },
  { href: "/#topics", text: "Conference topics" },
  { href: "/#venue", text: "Venue" },
  { href: "/#tickets", text: "Registration fees" },
  { href: "/registration", text: "Registration procedure" },
  { href: "/authors", text: "Instructions for authors" },
];

const supportLinks = [
  { href: "/#faq", text: "FAQ" },
  { href: "mailto:imsc@pfst.hr", text: "Contact" },
  { href: "/authors", text: "Call for Papers" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/#top" aria-label="IMSC home">
              <Image src="/images/logo.svg" alt="IMSC" width={112} height={40} />
            </Link>
            <p>IMSC 2027 — where maritime research, education and industry meet.</p>
            <div className={styles.social}>
              <a href="#" aria-label="LinkedIn">
                in
              </a>
              <a href="#" aria-label="X">
                X
              </a>
              <a href="#" aria-label="Facebook">
                f
              </a>
            </div>
          </div>
          <div className={styles.columns}>
            <div>
              <h4>Conference</h4>
              {conferenceLinks.map((item) => (
                <Link href={item.href} key={item.text}>
                  {item.text}
                </Link>
              ))}
            </div>
            <div>
              <h4>Support</h4>
              {supportLinks.map((item) => (
                <Link href={item.href} key={item.text}>
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.word} data-footer-word aria-hidden="true">
        <span>IMSC</span>
        <span>IMSC</span>
        <span>IMSC</span>
      </div>
      <Container className={styles.bottom}>
        <span>© 2027 IMSC. All rights reserved.</span>
        <span>Faculty of Maritime Studies, Split</span>
      </Container>
    </footer>
  );
}
