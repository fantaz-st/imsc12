import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import RegistrationRatesTable from "@/components/RegistrationRatesTable/RegistrationRatesTable";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import styles from "./Registration.module.css";

export default function Registration() {
  return (
    <section className={styles.section} id="tickets">
      <Container>
        <SectionHeader
          tag="Registration"
          align="center"
          title={<>Registration <span className="muted">Fees</span></>}
        />
        <RegistrationRatesTable />
        <div className={styles.action}>
          <p>Review the registration steps, participation details, and payment instructions.</p>
          <Button href="/registration">Registration procedure</Button>
        </div>
      </Container>
    </section>
  );
}
