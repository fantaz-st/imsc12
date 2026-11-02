import type { Metadata } from "next";
import Container from "@/components/Container/Container";
import Footer from "@/sections/Footer/Footer";
import Nav from "@/sections/Nav/Nav";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Instructions for Authors",
  description:
    "Find IMSC 2027 extended abstract submission requirements, presentation guidance, deadlines, and publication opportunities.",
  alternates: {
    canonical: "/authors",
  },
  openGraph: {
    title: "Instructions for Authors",
    description:
      "Extended abstract submission requirements, presentation guidance, and publication opportunities for IMSC 2027.",
    url: "/authors",
  },
};

export default function AuthorsPage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <Container>
          <article className={styles.article}>
            <header className={styles.header}>
              <p className={styles.eyebrow}>[IMSC 2027]</p>
              <h1>Instructions for Authors</h1>
              <p className={styles.intro}>
                Contributions to IMSC 2027 are submitted as extended abstracts.
                Submitting a full paper is optional and is not required to
                participate in the conference.
              </p>
            </header>

            <div className={styles.content}>
              <section className={styles.section}>
                <h2>Submission overview</h2>
                <p>
                  All accepted and presented extended abstracts will be
                  published in the IMSC 2027 Book of Abstracts, with an
                  assigned ISSN/ISBN, available before the conference begins.
                </p>
                <p>
                  Submitting an extended abstract and registering for the
                  conference are separate processes. Please use the same email
                  address for both. A participant registered as the main
                  author may submit up to two extended abstracts.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Extended abstract submission</h2>
                <ul>
                  <li>
                    Write in English using the official extended abstract
                    template. The template is mandatory; its download link will
                    be provided when available.
                  </li>
                  <li>
                    The main text must be 500–800 words. The title, author
                    information, keywords, references, tables, figures, and
                    captions are excluded from the word count.
                  </li>
                  <li>
                    The complete extended abstract must not exceed three
                    pages, regardless of word count.
                  </li>
                  <li>
                    Submit exclusively as a Microsoft Word document (.docx) by
                    email to <a href="mailto:imsc@pfst.hr">imsc@pfst.hr</a>.
                    State the paper topic in the email subject line.
                  </li>
                  <li>
                    The submission deadline and acceptance notification date
                    will be announced.
                  </li>
                  <li>
                    The International Programme Committee will assign
                    accepted abstracts to oral or poster presentations based
                    on abstract quality and available oral presentation slots.
                  </li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>Optional full paper submission</h2>
                <p>
                  Authors of accepted extended abstracts are welcome to submit
                  a full paper. Full papers will undergo international peer
                  review for possible publication in a special issue of{" "}
                  <em>Transactions on Maritime Science (ToMS)</em>, published
                  by the Faculty of Maritime Studies, University of Split, and
                  indexed in Web of Science (ESCI).
                </p>
                <p>
                  Instructions for preparing full papers will be sent with the
                  acceptance notification. The full paper deadline will be
                  announced.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Poster submissions</h2>
                <p>
                  Prepare posters using the official poster template and email
                  them to <a href="mailto:imsc@pfst.hr">imsc@pfst.hr</a>. The
                  template and submission deadline will be announced.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Student participation</h2>
                <p>
                  BSc, MSc, and PhD students are welcome to participate on
                  equal terms with all other authors. Student contributions
                  follow the same submission rules, review process, and
                  publication opportunities as other extended abstracts.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Oral presentations</h2>
                <ul>
                  <li>
                    Presentations are 15 minutes, including questions (12
                    minutes presentation and 3 minutes Q&amp;A). Aim for a
                    presentation of 10–12 minutes.
                  </li>
                  <li>
                    Prepare your slides using the official PowerPoint
                    template. Its download link will be provided when
                    available.
                  </li>
                  <li>
                    Bring your presentation to the conference on a USB flash
                    drive and submit it before your session starts. A
                    technician will be available to assist.
                  </li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>Publication opportunities</h2>
                <ul>
                  <li>
                    All accepted and presented extended abstracts will appear
                    in the IMSC 2027 Book of Abstracts.
                  </li>
                  <li>
                    Authors may submit full papers for international peer
                    review and possible publication in a Web of Science
                    (ESCI)-indexed special issue of ToMS.
                  </li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>Event awards</h2>
                <ul>
                  <li>
                    The Best Oral Presentation Award recognizes the oral
                    presentation making the most significant contribution to
                    the conference.
                  </li>
                  <li>
                    The Best Student Presentation Award recognizes the
                    student oral presentation making the most significant
                    contribution to the conference.
                  </li>
                </ul>
              </section>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
