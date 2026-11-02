import { registrationRates } from "@/data/content";
import styles from "./RegistrationRatesTable.module.css";

export default function RegistrationRatesTable() {
  return (
    <div className={styles.frame}>
      <table className={styles.table}>
        <caption className={styles.caption}>
          Registration fees in euros. Early Bird and Regular registration dates
          will be announced.
        </caption>
        <thead>
          <tr>
            <th scope="col">Participation type</th>
            <th scope="col">Early Bird</th>
            <th scope="col">Regular</th>
            <th scope="col">Supported documents</th>
          </tr>
        </thead>
        <tbody>
          {registrationRates.map((rate) => (
            <tr key={rate.title}>
              <th scope="row">{rate.title}</th>
              <td>{rate.earlyBird}</td>
              <td>{rate.regular}</td>
              <td>{rate.supportedDocuments ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
