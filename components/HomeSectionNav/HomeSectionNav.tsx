"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./HomeSectionNav.module.css";

const sections = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#topics", label: "Topics" },
  // { href: "#why-attend", label: "Why attend" },
  { href: "#venue", label: "Venue" },
  { href: "#tickets", label: "Registration" },
  { href: "#faq", label: "FAQ" },
  { href: "#gallery", label: "Gallery" },
];

export default function HomeSectionNav() {
  const [activeSection, setActiveSection] = useState("top");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionElements = sections.map(({ href }) => document.getElementById(href.slice(1))).filter((element): element is HTMLElement => element !== null);
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const footer = document.querySelector<HTMLElement>("footer");

    const updateActiveSection = () => {
      if (hero && footer) {
        const heroHasPassed = hero.getBoundingClientRect().bottom <= 0;
        const footerIsVisible = footer.getBoundingClientRect().top < window.innerHeight;
        setIsVisible(heroHasPassed && !footerIsVisible);
      }

      const viewportCenter = window.innerHeight / 2;
      const visibleSections = sectionElements
        .map((element) => {
          const bounds = element.getBoundingClientRect();
          const visibleHeight = Math.max(0, Math.min(bounds.bottom, window.innerHeight) - Math.max(bounds.top, 0));
          const center = (bounds.top + bounds.bottom) / 2;

          return {
            element,
            visibleHeight,
            centerDistance: Math.abs(center - viewportCenter),
          };
        })
        .filter(({ visibleHeight }) => visibleHeight > 0)
        .sort((a, b) => b.visibleHeight - a.visibleHeight || a.centerDistance - b.centerDistance);

      if (visibleSections[0]) {
        setActiveSection(visibleSections[0].element.id);
      }
    };

    const observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: "-1px 0px -1px 0px",
    });

    sectionElements.forEach((element) => observer.observe(element));
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${isVisible ? styles.visible : ""}`} aria-label="Homepage sections" aria-hidden={!isVisible} inert={!isVisible}>
      {sections.map(({ href, label }) => {
        const isActive = activeSection === href.slice(1);

        return (
          <Link className={`${styles.link} ${isActive ? styles.active : ""}`} href={href} key={href} aria-current={isActive ? "location" : undefined}>
            <span className={styles.label}>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
