import type { Metadata } from "next";
import Container from "@/components/Container/Container";
import Footer from "@/sections/Footer/Footer";
import Nav from "@/sections/Nav/Nav";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Welcome from the Organizing Committee",
  description:
    "A welcome to the 12th International Maritime Science Conference in Split, Croatia.",
  alternates: {
    canonical: "/welcome",
  },
  openGraph: {
    title: "Welcome from the Organizing Committee",
    description:
      "Read the welcome from the organizing committee of the 12th International Maritime Science Conference in Split, Croatia.",
    url: "/welcome",
  },
};

export default function WelcomePage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <Container>
          <article className={styles.article}>
            <header className={styles.header}>
              <p className={styles.eyebrow}>[A message from the committee]</p>
              <h1>Welcome from the Organizing Committee</h1>
            </header>

            <div className={styles.copy}>
              <p>Dear colleagues,</p>

              <p>
                Welcome to the 12th International Maritime Science Conference —
                IMSC 2027. The conference is organized by the University of
                Split, Faculty of Maritime Studies (Split, Croatia), and
                co-organized by the University of Ljubljana, Faculty of
                Maritime Studies and Transport (Portorož, Slovenia), together
                with other renowned institutions and supporting organizations.
              </p>

              <p>
                As globalization brings increasing challenges to shipping and
                the wider maritime sector, safe, digitalized, contemporary,
                and sustainable development is more important than ever. IMSC
                provides an academic platform for discussing scientific and
                engineering solutions that can help the industry meet its
                goals. The conference encourages constructive exchange between
                academics and maritime professionals, with a focus on
                interdisciplinary research and development. By presenting and
                sharing research findings and operational experience, we can
                shape long-term strategies for maritime science, education,
                and the shipping industry.
              </p>

              <p>
                This work depends on the engagement of researchers, engineers,
                instructors, and professionals from maritime organizations.
                Together, by sharing knowledge, experience, and ideas, we can
                navigate the waves of excellence.
              </p>

              <p>
                IMSC 2027 will take place in the beautiful city of Split,
                Croatia, a magnificent coastal destination on the eastern
                Adriatic. The city is set between the sea and surrounding
                mountains: Mosor to the northeast, Kozjak to the northwest,
                and Marjan Hill, one of Split&apos;s most recognizable symbols,
                on the western side of the peninsula.
              </p>

              <p>
                Split welcomes visitors with its rich tradition, remarkable
                history, and natural and cultural heritage. Diocletian&apos;s
                Palace and the historic center are part of the UNESCO World
                Heritage List. The city also offers memorable food, cultural
                events, entertainment, sporting traditions, and beautiful
                views of the nearby islands of Brač, Hvar, Šolta, and Čiovo.
                With its mild Mediterranean climate and easy access from
                Kaštela Airport, about 20 km away, Split is a wonderful place
                to meet and exchange ideas.
              </p>

              <p>We look forward to seeing you in May in beautiful Split.</p>

              <p className={styles.signature}>
                IMSC 2027 Organizing Committee
              </p>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
