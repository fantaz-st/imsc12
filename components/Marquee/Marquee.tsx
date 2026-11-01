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
    if (!galleryTrack || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = containerRef.current?.querySelectorAll<HTMLElement>("[data-gallery-image]");
    if (!cards?.length || loopRef.current) return;

    loopRef.current = horizontalLoop(cards, {
      repeat: -1,
      speed: 2,
      paddingRight: 64,
    });

    return () => {
      loopRef.current?.kill();
      loopRef.current = null;
    };
  }, [galleryTrack]);

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
