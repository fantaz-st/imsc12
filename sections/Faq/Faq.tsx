"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Container from "@/components/Container/Container";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { faq } from "@/data/content";
import styles from "./Faq.module.css";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: root });

  const toggle = (index: number, panel: HTMLDivElement) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOpenIndex(openIndex === index ? null : index);
      return;
    }

    if (openIndex === index) {
      gsap.to(panel, {
        height: 0,
        duration: 0.45,
        ease: "power3.inOut",
        onComplete: () => setOpenIndex(null),
      });
      return;
    }

    const previous = openIndex === null
      ? null
      : root.current?.querySelector<HTMLDivElement>(`#faq-answer-${openIndex}`);
    const openPanel = () => {
      setOpenIndex(index);
      gsap.fromTo(panel, { height: 0 }, { height: "auto", duration: 0.55, ease: "expo.out" });
      const answer = panel.firstElementChild;
      if (answer) {
        gsap.fromTo(answer, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" });
      }
    };

    if (previous) {
      gsap.to(previous, { height: 0, duration: 0.45, ease: "power3.inOut", onComplete: openPanel });
      return;
    }

    openPanel();
  };

  return (
    <section className={styles.section} id="faq">
      <Container className={styles.inner}>
        <SectionHeader
          tag="FAQ"
          align="center"
          small
          title="Questions Answered"
          lead="Find answers to commonly asked questions about the conference."
        />
        <div className={styles.list} ref={root}>
          {faq.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <article className={styles.item} data-row key={question}>
                <button
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={(event) => {
                    const panel = event.currentTarget.nextElementSibling;
                    if (panel instanceof HTMLDivElement) {
                      contextSafe(() => toggle(index, panel))();
                    }
                  }}
                >
                  {question}<span className={styles.plus} aria-hidden="true" />
                </button>
                <div
                  className={styles.answer}
                  id={`faq-answer-${index}`}
                  aria-hidden={!isOpen}
                >
                  <p>{answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
