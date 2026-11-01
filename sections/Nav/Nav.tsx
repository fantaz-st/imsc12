"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Nav.module.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Conference Program" },
  { href: "#speakers", label: "Keynote Speakers" },
  { href: "#commercial-presentations", label: "Commercial-technical presentations" },
  { href: "#committee", label: "Committees" },
  { href: "#venue", label: "Venue" },
  { href: "#tickets", label: "Registration" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`${styles.nav} ${open ? styles.open : ""}`} data-nav>
      <div className={styles.pill}>
        <Link href="#top" className={styles.logo} aria-label="IMSC home">
          <Image src="/assets/logo.svg" alt="IMSC" width={84} height={30} priority />
        </Link>
        <button
          className={styles.menu}
          aria-expanded={open}
          aria-controls="nav-panel"
          onClick={() => setOpen((current) => !current)}
        >
          Menu <span className={styles.burger} aria-hidden="true"><i /><i /></span>
        </button>
      </div>
      <nav className={styles.panel} id="nav-panel" aria-label="Main navigation">
        {links.map(({ href, label }) => (
          <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}
