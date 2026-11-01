"use client";

import { useEffect, useRef } from "react";
import horizontalLoop from "@/helpers/horizontalScroll";
import styles from "./Marquee.module.css";

export default function Marquee({
  children,
  className = "",
  direction = 1,
  duration = 50,
  galleryTrack = false,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: 1 | -1;
  duration?: number;
  galleryTrack?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef<ReturnType<typeof horizontalLoop> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = containerRef.current;
    if (!container) return;

    const items = galleryTrack
      ? container.querySelectorAll<HTMLElement>("[data-gallery-image]")
      : Array.from(container.children).filter(
          (item): item is HTMLElement => item instanceof HTMLElement,
        );
    if (items.length < 2) return;

    const speed = galleryTrack
      ? 2
      : container.scrollWidth / 2 / duration / 100;
    loopRef.current = horizontalLoop(items, {
      repeat: -1,
      speed,
      paddingRight: 64,
      reversed: direction < 0,
    });

    return () => {
      loopRef.current?.kill();
      loopRef.current = null;
    };
  }, [direction, duration, galleryTrack]);

  return (
    <div
      ref={containerRef}
      className={`${styles.marquee} ${className}`}
      data-marquee
      data-direction={direction}
      data-duration={duration}
      data-gallery-track={galleryTrack ? "" : undefined}
    >
      {children}
    </div>
  );
}
