"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Nav.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/welcome", label: "Welcome from the committee" },
  { href: "/registration", label: "Registration procedure" },
  { href: "/authors", label: "Instructions for authors" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`${styles.nav} ${open ? styles.open : ""}`} data-nav>
      <div className={styles.pill}>
        <Link href="/" className={styles.logo} aria-label="IMSC home">
          <Image src="/assets/logo.svg" alt="IMSC" width={84} height={30} priority />
        </Link>
        <button className={styles.menu} aria-expanded={open} aria-controls="nav-panel" onClick={() => setOpen((current) => !current)}>
          Menu{" "}
          <span className={styles.burger} aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>
      <nav className={styles.panel} id="nav-panel" aria-label="Main navigation">
        {links.map(({ href, label }) => (
          <Link href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
