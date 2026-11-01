"use client";

import { useState } from "react";
import Container from "@/components/Container/Container";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { committees } from "@/data/committee";
import styles from "./Committee.module.css";

const previewCount = 9;
const fadedPreviewCount = 3;

export default function Committee() {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggleCommittee = (title: string) => {
    setExpanded((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  };

  return (
    <section className={styles.section} id="committee">
      <Container>
        <SectionHeader
          tag="Committees"
          title="Committees"
          lead="Meet the organizing and scientific committees bringing the conference together."
        />
        <div className={styles.grid}>
          {committees.map(({ title, members }) => {
            const isExpanded = expanded.includes(title);
            const preview = members.slice(0, previewCount);
            const remaining = members.slice(previewCount);
            const panelId = `committee-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

            return (
              <article className={styles.card} key={title}>
                <h3 className={styles.heading}>{title}</h3>
                <ol className={styles.preview} aria-label={`${title} preview`}>
                  {preview.map((member, index) => (
                    <li
                      className={
                        !isExpanded && index >= previewCount - fadedPreviewCount
                          ? styles.faded
                          : undefined
                      }
                      key={member.name}
                    >
                      <strong>{member.name}</strong>
                      <span>{member.affiliation}</span>
                    </li>
                  ))}
                </ol>
                <div
                  className={`${styles.more} ${isExpanded ? styles.expanded : ""}`}
                  id={panelId}
                  aria-hidden={!isExpanded}
                >
                  <ol className={styles.list} start={previewCount + 1}>
                    {remaining.map((member) => (
                      <li key={member.name}>
                        <strong>{member.name}</strong>
                        <span>{member.affiliation}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <button
                  className={styles.toggle}
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  onClick={() => toggleCommittee(title)}
                >
                  {isExpanded ? "Read less" : "Read all"}
                  <span className={styles.icon} aria-hidden="true" />
                </button>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
