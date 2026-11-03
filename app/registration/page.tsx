import type { Metadata } from "next";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import RegistrationRatesTable from "@/components/RegistrationRatesTable/RegistrationRatesTable";
import Footer from "@/sections/Footer/Footer";
import Nav from "@/sections/Nav/Nav";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Conference Registration",
  description:
    "View IMSC 2027 registration fees, participation options, payment instructions, and what is included in your conference registration.",
  alternates: {
    canonical: "/registration",
  },
  openGraph: {
    title: "Conference Registration",
    description:
      "Registration fees, participation options, and payment instructions for the 12th International Maritime Science Conference in Split.",
    url: "/registration",
  },
};

const bankDetails = [
  ["Beneficiary", "FACULTY OF MARITIME STUDIES (Pomorski fakultet u Splitu)"],
  ["Beneficiary address", "Ruđera Boškovića 37, 21000 Split, Croatia"],
  ["Bank", "OTP Banka d.d."],
  ["Bank address", "Ul. Domovinskog rata 93, 21000 Split, Croatia"],
  ["IBAN", "HR2324070001100059179"],
  ["SWIFT code", "OTPVHR2X"],
  ["Call No.", "HR00 021"],
  ["Payment purpose", "IMSC 2027 – Name & Surname"],
];

export default function RegistrationPage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <Container>
          <header className={styles.header}>
            <p className={styles.eyebrow}>[Registration]</p>
            <h1>Conference Registration</h1>
            <p className={styles.intro}>
              Registration for the conference is mandatory. Please register
              using the link in the main menu or on the homepage.
            </p>
            <Button href="/#tickets">View registration fees</Button>
          </header>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2>Before you register</h2>
              <p>
                The registration fee includes participation in the conference
                sessions. Submitting a full paper or abstract and registering
                for the conference are separate processes.
              </p>
              <p>
                Please provide your academic email address. If you are
                registering more than one person, use each person&apos;s
                individual university email address rather than reusing one
                address.
              </p>
              <p className={styles.notice}>
                Participation is confirmed only after the registration fee has
                been paid.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Registration fees</h2>
              <p className={styles.sectionIntro}>
                Fees are shown in euros. Early Bird and Regular registration
                dates will be announced.
              </p>
              <RegistrationRatesTable />
            </section>

            <section className={styles.section}>
              <h2>What the registration includes</h2>
              <div className={styles.benefitGrid}>
                <article className={styles.card}>
                  <h3>Regular participation and PhD Student</h3>
                  <ul>
                    <li>Participation in both conference days</li>
                    <li>One presentation at the conference</li>
                    <li>Digital Book of Abstracts</li>
                    <li>Lunch and coffee breaks</li>
                    <li>Participation in the official conference dinner</li>
                  </ul>
                </article>
                <article className={styles.card}>
                  <h3>General participation (1-day)</h3>
                  <ul>
                    <li>Participation on one conference day of your choice</li>
                    <li>Lunch and coffee break</li>
                    <li>Participation in the official conference dinner</li>
                  </ul>
                </article>
                <article className={styles.card}>
                  <h3>Accompanying person</h3>
                  <ul>
                    <li>Admission to lunch</li>
                    <li>Participation in the official conference dinner</li>
                  </ul>
                </article>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Method of payment</h2>
              <p>
                Please ensure that all bank costs are paid by the participant.
                An invoice will be provided by the accounting department after
                successful payment.
              </p>
              <dl className={styles.bankDetails}>
                {bankDetails.map(([label, value]) => (
                  <div className={styles.bankRow} key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className={styles.section}>
              <h2>Additional information</h2>
              <p>
                A conference fee entitles one participant to attend, and
                accommodation is not included. If a fee is paid for several
                authors of one paper, only the person who paid and completed
                the registration form is admitted as a participant. Each
                additional participant must register as an accompanying
                person.
              </p>
              <p>
                The organizers and their partners reserve the right to change
                or cancel arrangements, schedules, plans, or other matters
                related to IMSC 2027 without prior notice. They accept no
                liability for losses or inconvenience caused by cancellation,
                or for personal accidents, loss, or damage to private property
                arising from participation.
              </p>
              <p>
                Photographs and video recordings may be made during the
                conference. By participating, you grant the organizers the
                right to use resulting images and recordings, including
                reproductions or edits, for conference-related publicity,
                fundraising, social media, press releases, and funding
                applications.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
