import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { programme } from "@/data/content";
import styles from "./Programme.module.css";

export default function Programme() {
  return (
    <section className={styles.section} id="schedule">
      <Container>
        <SectionHeader
          tag="Programme"
          align="row"
          title={<>Fuel Your Curiosity — <span className="muted">Discover the Programme</span></>}
          action={<Button href="#tickets">Register now</Button>}
        />
        {programme.map((day) => (
          <div className={styles.day} key={day.label}>
            <div className={styles.dayBar} data-fade>
              <span>{day.label}</span><span>{day.date}</span>
            </div>
            {day.entries.map((entry) => (
              <article
                className={`${styles.row} ${entry.description ? "" : styles.plain}`}
                data-row
                key={`${day.label}-${entry.time}`}
              >
                <span className={styles.time}>{entry.time}</span>
                {entry.description ? (
                  <>
                    <div className={styles.body}>
                      <h3>{entry.title}</h3>
                      <p>{entry.description}</p>
                    </div>
                    <Avatar initials={entry.initials ?? ""} tone={entry.tone} className={styles.face} />
                  </>
                ) : <h3>{entry.title}</h3>}
              </article>
            ))}
          </div>
        ))}
      </Container>
    </section>
  );
}
