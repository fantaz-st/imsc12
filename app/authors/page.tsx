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
                    Write in English using the mandatory{" "}
                    <a href="/documents/IMSC-2027-extended-abstract-template_v1.1.docx" download>
                      extended abstract template
                    </a>
                    . Prepare the document on A4 paper using Arial and the
                    template styles; do not add page numbers. Authors are
                    responsible for the quality of the English.
                  </li>
                  <li>
                    The main text must be 500–800 words. The title, author
                    information, keywords, references, tables, figures, and
                    captions are excluded from the word count. Include four to
                    six relevant keywords, separated by semicolons.
                  </li>
                  <li>
                    The complete abstract, including title, authors,
                    affiliations, tables, figures, acknowledgements, and
                    references, must not exceed three pages, regardless of
                    word count.
                  </li>
                  <li>
                    Use Harvard-style in-text citations and an alphabetically
                    sorted reference list. Every cited source must appear in
                    the list and every listed source must be cited. DOI links
                    are mandatory.
                  </li>
                  <li>
                    Create equations, symbols, and superscripts or subscripts
                    with MathType or the Word Equation Editor.
                  </li>
                  <li>
                    A conflict-of-interest statement is mandatory; state any
                    conflict or declare that there is none. Acknowledgements
                    are optional.
                  </li>
                  <li>
                    Number tables and figures in sequence with Arabic
                    numerals. Put table captions above tables and use the
                    template styles. Graphics must be at least 300 dpi (600
                    dpi is preferred); charts must be embedded as
                    Excel-compatible graphs, not low-resolution raster
                    images. Use only images you have rights to use or
                    public-domain illustrations.
                  </li>
                  <li>
                    Submit only as a Microsoft Word document (.docx) by email
                    to <a href="mailto:imsc@pfst.hr">imsc@pfst.hr</a>. State
                    the paper topic in the subject line. The deadline is{" "}
                    <strong>1 February 2027</strong>; authors will be notified
                    of acceptance by <strong>10 March 2027</strong>.
                  </li>
                  <li>
                    The International Programme Committee will assign
                    accepted abstracts to oral or poster presentations based
                    on abstract quality and the number of available oral
                    presentation slots.
                  </li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>Conference topics</h2>
                <p>Extended abstracts may address the following topics:</p>
                <ul>
                  <li>Marine Engineering and Ship Energy Systems</li>
                  <li>Navigation and Maritime Safety</li>
                  <li>
                    Marine Environment, Environmental Protection and
                    Sustainability
                  </li>
                  <li>
                    Marine Electrical Engineering, Electronics and Informatics
                  </li>
                  <li>Maritime Law</li>
                  <li>Maritime Economics and Management</li>
                  <li>Maritime Transport and Logistics</li>
                  <li>
                    Interdisciplinary and Social Sciences in Maritime Studies
                  </li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>Optional full paper submission</h2>
                <p>
                  Submitting a full paper is optional and is not required to
                  participate in IMSC 2027. Full papers undergo international
                  peer review for possible publication in a special issue of{" "}
                  <em>Transactions on Maritime Science (ToMS)</em>, published
                  by the Faculty of Maritime Studies, University of Split, and
                  indexed in Web of Science (ESCI). Submission does not
                  guarantee publication.
                </p>
                <p>
                  Submit full papers directly through the ToMS journal
                  website by <strong>1 March 2027</strong>. The full-paper and
                  extended-abstract submissions are separate processes: you
                  may submit a full paper before receiving your abstract
                  decision, but it can be included in the ToMS special issue
                  only if its corresponding extended abstract is accepted for
                  IMSC 2027.
                </p>
                <p>
                  The full paper must have the same title, authors, and
                  affiliations as its extended abstract. Its abstract does not
                  have to match the extended abstract in length. If any of
                  these details change, inform the Organizing Committee
                  immediately at <a href="mailto:imsc@pfst.hr">imsc@pfst.hr</a>.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Poster submissions</h2>
                <p>
                  Prepare posters using the official poster template (to be
                  announced) and email them to{" "}
                  <a href="mailto:imsc@pfst.hr">imsc@pfst.hr</a>. The
                  submission deadline will be announced.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Student Session</h2>
                <p>
                  BSc and MSc students present their work in a separate
                  Student Session. Student extended abstracts follow the same
                  submission rules and review process as all other extended
                  abstracts.
                </p>
                <p>
                  As with all other authors, students are welcome to submit a
                  full paper for international peer review and publication in
                  the special issue of Transactions on Maritime Science (ToMS).
                </p>
              </section>

              <section className={styles.section}>
                <h2>Oral presentations</h2>
                <ul>
                  <li>
                    Presentations are 15 minutes, including questions (12
                    minutes for the presentation and 3 minutes for Q&amp;A).
                    Aim to present for 10–12 minutes.
                  </li>
                  <li>
                    Prepare your slides using the official PowerPoint
                    template.
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
                    in the IMSC 2027 Book of Abstracts, which will be
                    available before the conference and assigned an ISSN/ISBN.
                  </li>
                  <li>
                    Authors may submit full papers for international peer
                    review and possible publication in a Web of Science
                    (ESCI)-indexed special issue of ToMS. See the full-paper
                    submission requirements above.
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
