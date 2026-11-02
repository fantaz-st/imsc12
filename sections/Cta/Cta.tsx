"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button/Button";
import SplitText from "@/components/SplitText/SplitText";
import styles from "./Cta.module.css";

type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const target = new Date("2027-05-19T09:00:00+02:00").getTime();

function getCountdown(): Countdown {
  let secondsLeft = Math.max(0, Math.floor((target - Date.now()) / 1000));
  const days = Math.floor(secondsLeft / 86400);
  secondsLeft -= days * 86400;
  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft -= hours * 3600;
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft - minutes * 60;

  return {
    days: String(days).padStart(3, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export default function Cta() {
  const ctaRef = useRef<HTMLElement>(null);
  const [countdown, setCountdown] = useState<Countdown>({
    days: "000",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const update = () => setCountdown(getCountdown());
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const section = ctaRef.current;
    if (!section) return;

    let active = false;
    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const renderSpotlight = () => {
      frame = 0;
      if (!active) return;

      currentX += (targetX - currentX) * 0.055;
      currentY += (targetY - currentY) * 0.055;
      section.style.setProperty("--spotlight-x", `${currentX}px`);
      section.style.setProperty("--spotlight-y", `${currentY}px`);

      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        frame = window.requestAnimationFrame(renderSpotlight);
      } else {
        currentX = targetX;
        currentY = targetY;
        section.style.setProperty("--spotlight-x", `${currentX}px`);
        section.style.setProperty("--spotlight-y", `${currentY}px`);
      }
    };

    const clearSpotlight = () => {
      active = false;
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      section.style.removeProperty("--spotlight-x");
      section.style.removeProperty("--spotlight-y");
    };

    const updateSpotlight = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        clearSpotlight();
        return;
      }

      const bounds = section.getBoundingClientRect();
      const inside = event.clientX >= bounds.left
        && event.clientX <= bounds.right
        && event.clientY >= bounds.top
        && event.clientY <= bounds.bottom;

      if (!inside) {
        clearSpotlight();
        return;
      }

      targetX = event.clientX - bounds.left;
      targetY = event.clientY - bounds.top;

      if (!active) {
        active = true;
        currentX = targetX;
        currentY = targetY;
        section.style.setProperty("--spotlight-x", `${currentX}px`);
        section.style.setProperty("--spotlight-y", `${currentY}px`);
      }

      if (!frame) frame = window.requestAnimationFrame(renderSpotlight);
    };

    window.addEventListener("pointermove", updateSpotlight);
    window.addEventListener("pointerleave", clearSpotlight);
    return () => {
      window.removeEventListener("pointermove", updateSpotlight);
      window.removeEventListener("pointerleave", clearSpotlight);
      clearSpotlight();
    };
  }, []);

  return (
    <section
      ref={ctaRef}
      className={styles.cta}
      data-cta
    >
      <div className={styles.dotField} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.left}>
          <SplitText as="h2">Get ready <span className="muted">for IMSC</span></SplitText>
          <p data-fade>19–21 May 2027 — Hotel Cornaro, Split, Croatia</p>
          <Button href="#tickets">Register now</Button>
        </div>
        <div className={styles.countdown} data-fade aria-label="Countdown to IMSC 2027">
          <div><strong>{countdown.days}</strong><span>Days</span></div>
          <div><strong>{countdown.hours}</strong><span>Hours</span></div>
          <div><strong>{countdown.minutes}</strong><span>Minutes</span></div>
          <div><strong>{countdown.seconds}</strong><span>Seconds</span></div>
        </div>
      </div>
    </section>
  );
}
