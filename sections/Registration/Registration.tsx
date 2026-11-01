import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { tickets } from "@/data/content";
import styles from "./Registration.module.css";

export default function Registration() {
  return (
    <section className={styles.section} id="tickets">
      <Container>
        <SectionHeader
          tag="Registration"
          align="center"
          title={<>Choose the Registration That <span className="muted">Suits You</span></>}
        />
        <div className={styles.grid}>
          {tickets.map((ticket) => (
            <article className={`${styles.ticket} ${ticket.featured ? styles.featured : ""}`} data-card key={ticket.title}>
              <div className={styles.top}>
                <h3>{ticket.title}</h3>
                <p>{ticket.description}</p>
                <div className={styles.price}>{ticket.price}</div>
                <small>“{ticket.earlyBird}”</small>
                <Button href="#" variant={ticket.featured ? "primary" : "light"} block>{ticket.action}</Button>
                <span className={styles.note}>⏳ {ticket.note}</span>
              </div>
              <div className={styles.list}>
                <h4>What&apos;s included</h4>
                <ul>
                  {ticket.includes.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
