"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AnimationRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const heroTitle = gsap.utils.toArray<HTMLElement>('[data-split="hero"] [data-word-inner]');
      const heroLead = gsap.utils.toArray<HTMLElement>('[data-split="hero-lead"] [data-word-inner]');
      const intro = gsap.timeline({ defaults: { ease: "expo.out" } });

      intro
        .fromTo("[data-hero-bg] img", { scale: 1.25, filter: "brightness(.4)" }, { scale: 1, filter: "brightness(1)", duration: 2.2 })
        .from("[data-nav]", { y: -40, opacity: 0, duration: 1.2 }, 0.3)
        .fromTo("[data-hero-fade]", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 1.2 }, 0.5)
        .from(heroTitle, { yPercent: 115, rotate: 4, duration: 1.4, stagger: 0.08 }, 0.6)
        .from(heroLead, { yPercent: 110, duration: 1.1, stagger: 0.015 }, 0.85)
        .fromTo("[data-hero-side]", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, 1.05);

      document.documentElement.dataset.heroIntroReady = "true";

      gsap.to("[data-hero-bg] img", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: true },
      });

      gsap.utils.toArray<HTMLElement>('[data-split]:not([data-split="hero"]):not([data-split="hero-lead"])').forEach((element) => {
        const words = element.querySelectorAll("[data-word-inner]");
        const large = element.tagName === "H2";
        gsap.from(words, {
          yPercent: 110,
          rotate: large ? 3 : 0,
          duration: large ? 1.2 : 1,
          ease: "expo.out",
          stagger: large ? 0.06 : 0.012,
          scrollTrigger: { trigger: element, start: "top 88%" },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((element) => {
        gsap.fromTo(element, { y: 24, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 90%" },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((figure) => {
        const inner = figure.querySelector(".img-ph");
        if (!inner) return;
        const timeline = gsap.timeline({ scrollTrigger: { trigger: figure, start: "top 88%" } });
        timeline
          .fromTo(figure, { clipPath: "inset(100% 0% 0% 0% round var(--size-image-round))" }, { clipPath: "inset(0% 0% 0% 0% round var(--size-image-round))", duration: 1.4, ease: "expo.inOut" })
          .fromTo(inner, { scale: 1.35 }, { scale: 1, duration: 1.8, ease: "expo.out" }, 0.2);
      });

      gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((element) => {
        const speed = Number.parseFloat(element.dataset.speed ?? "0");
        gsap.to(element, {
          y: () => speed * 400,
          ease: "none",
          scrollTrigger: { trigger: "[data-about-images]", start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      ScrollTrigger.batch("[data-card]", {
        start: "top 90%",
        onEnter: (batch) => {
          if (contextSafe) {
            contextSafe((elements: Element[]) => gsap.fromTo(elements, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "expo.out", stagger: 0.09 }))(batch);
          }
        },
      });
      ScrollTrigger.batch("[data-row]", {
        start: "top 92%",
        onEnter: (batch) => {
          if (contextSafe) {
            contextSafe((elements: Element[]) => gsap.fromTo(elements, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.07 }))(batch);
          }
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-marquee]").forEach((track) => {
        const galleryTrack = track.matches("[data-gallery-track]");
        if (galleryTrack) {
          const galleryFrame = track.parentElement;
          gsap.fromTo(
            galleryFrame,
            {
              "--gallery-entry-y": "80px",
              "--gallery-entry-scale": 0.9,
              "--gallery-entry-rotation-x": "20deg",
              "--gallery-entry-rotation-y": "40deg",
              opacity: 0.5,
            },
            {
              "--gallery-entry-y": "0px",
              "--gallery-entry-scale": 1,
              "--gallery-entry-rotation-x": "0deg",
              "--gallery-entry-rotation-y": "20deg",
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: track.closest("section"),
                start: "top bottom",
                end: "center center",
                scrub: true,
              },
            },
          );
        }
      });

      gsap.from("[data-footer-word] span", {
        yPercent: 60,
        opacity: 0,
        duration: 1.6,
        ease: "expo.out",
        scrollTrigger: { trigger: "[data-footer-word]", start: "top 95%" },
      });

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      root.current?.setAttribute("data-animation-ready", "");

      return () => {
        window.removeEventListener("load", refresh);
        delete document.documentElement.dataset.heroIntro;
        delete document.documentElement.dataset.heroIntroReady;
        root.current?.removeAttribute("data-animation-ready");
      };
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
