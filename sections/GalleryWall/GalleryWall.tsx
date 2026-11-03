"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { galleryWall, type GalleryWallItem } from "@/data/content";
import styles from "./GalleryWall.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const GAP = 10;
const MID_LAG = 0.09;
const MID_START = -95;

type GalleryLayout = {
  count: number;
  columns: GalleryWallItem[][];
  columnWidth: number;
  heightCorrections: number[];
};

function getColumnCount(viewportWidth: number) {
  if (viewportWidth <= 600) return 1;
  if (viewportWidth <= 1024) return 2;
  return 3;
}

function getDisplayHeightPerWidth(item: GalleryWallItem) {
  return item.portrait ? 4 / 3 : 2 / 3;
}

function columnHeight(items: GalleryWallItem[], columnWidth: number) {
  const imageHeight = items.reduce((total, item) => total + getDisplayHeightPerWidth(item) * columnWidth, 0);
  return imageHeight + Math.max(0, items.length - 1) * GAP;
}

function distributeImages(items: GalleryWallItem[], count: number, gridWidth: number): GalleryLayout {
  const columnWidth = Math.max(1, (gridWidth - GAP * (count - 1)) / count);
  if (count === 1) {
    return { count, columns: [items], columnWidth, heightCorrections: [0] };
  }

  const targets = count === 3 ? [1, 1 - MID_LAG, 1] : [1, 1];
  const totalHeight = items.reduce((total, item) => total + getDisplayHeightPerWidth(item) * columnWidth, 0)
    + Math.max(0, items.length - count) * GAP;
  const targetHeights = targets.map((target) => (totalHeight * target) / targets.reduce((sum, value) => sum + value, 0));
  const columns = Array.from({ length: count }, () => [] as GalleryWallItem[]);
  const heights = Array.from({ length: count }, () => 0);

  const largestFirst = items
    .map((item, index) => ({ item, index, weight: getDisplayHeightPerWidth(item) + GAP / columnWidth }))
    .sort((a, b) => b.weight - a.weight);

  for (const { item } of largestFirst) {
    let destination = 0;
    for (let index = 1; index < count; index += 1) {
      if (targetHeights[index] - heights[index] > targetHeights[destination] - heights[destination]) {
        destination = index;
      }
    }

    heights[destination] += getDisplayHeightPerWidth(item) * columnWidth + (columns[destination].length > 0 ? GAP : 0);
    columns[destination].push(item);
  }

  const score = (candidateColumns: GalleryWallItem[][]) => {
    const columnHeights = candidateColumns.map((column) => columnHeight(column, columnWidth));
    const targetError = columnHeights.reduce((total, height, index) => {
      const difference = height - targetHeights[index];
      return total + difference * difference;
    }, 0);
    if (count !== 3) return targetError;

    const sideDifference = columnHeights[0] - columnHeights[2];
    return targetError + sideDifference * sideDifference;
  };

  let currentScore = score(columns);
  let improved = true;
  while (improved) {
    improved = false;
    let bestChange:
      | { type: "move"; sourceColumn: number; sourceItem: number; destinationColumn: number }
      | { type: "swap"; firstColumn: number; firstItem: number; secondColumn: number; secondItem: number }
      | undefined;
    let bestScore = currentScore;

    for (let sourceColumn = 0; sourceColumn < count; sourceColumn += 1) {
      if (columns[sourceColumn].length < 2) continue;

      for (let destinationColumn = 0; destinationColumn < count; destinationColumn += 1) {
        if (sourceColumn === destinationColumn) continue;

        for (let sourceItem = 0; sourceItem < columns[sourceColumn].length; sourceItem += 1) {
          const [item] = columns[sourceColumn].splice(sourceItem, 1);
          columns[destinationColumn].push(item);
          const candidateScore = score(columns);
          columns[destinationColumn].pop();
          columns[sourceColumn].splice(sourceItem, 0, item);

          if (candidateScore < bestScore) {
            bestScore = candidateScore;
            bestChange = { type: "move", sourceColumn, sourceItem, destinationColumn };
          }
        }
      }
    }

    for (let firstColumn = 0; firstColumn < count; firstColumn += 1) {
      for (let secondColumn = firstColumn + 1; secondColumn < count; secondColumn += 1) {
        for (let firstItem = 0; firstItem < columns[firstColumn].length; firstItem += 1) {
          for (let secondItem = 0; secondItem < columns[secondColumn].length; secondItem += 1) {
            [columns[firstColumn][firstItem], columns[secondColumn][secondItem]] =
              [columns[secondColumn][secondItem], columns[firstColumn][firstItem]];
            const candidateScore = score(columns);
            [columns[firstColumn][firstItem], columns[secondColumn][secondItem]] =
              [columns[secondColumn][secondItem], columns[firstColumn][firstItem]];

            if (candidateScore < bestScore) {
              bestScore = candidateScore;
              bestChange = { type: "swap", firstColumn, firstItem, secondColumn, secondItem };
            }
          }
        }
      }
    }

    if (bestChange?.type === "move") {
      const { sourceColumn, sourceItem, destinationColumn } = bestChange;
      columns[destinationColumn].push(columns[sourceColumn].splice(sourceItem, 1)[0]);
      currentScore = bestScore;
      improved = true;
    } else if (bestChange?.type === "swap") {
      const { firstColumn, firstItem, secondColumn, secondItem } = bestChange;
      [columns[firstColumn][firstItem], columns[secondColumn][secondItem]] =
        [columns[secondColumn][secondItem], columns[firstColumn][firstItem]];
      currentScore = bestScore;
      improved = true;
    }
  }

  const originalOrder = new Map(items.map((item, index) => [item.image, index]));
  const orderedColumns = columns.map((column) => column.sort((a, b) => originalOrder.get(a.image)! - originalOrder.get(b.image)!));
  const heightCorrections = Array.from({ length: count }, () => 0);
  const sideColumns = count === 3 ? [0, 2] : [0, 1];
  const sideHeights = sideColumns.map((columnIndex) => columnHeight(orderedColumns[columnIndex], columnWidth));
  const tallestSide = Math.max(...sideHeights);
  sideColumns.forEach((columnIndex, index) => {
    heightCorrections[columnIndex] = tallestSide - sideHeights[index];
  });

  return { count, columns: orderedColumns, columnWidth, heightCorrections };
}

function isReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function GalleryWall() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const revealedImages = useRef(new Set<string>());
  const [layout, setLayout] = useState<GalleryLayout>(() => distributeImages(galleryWall, 3, 1280));
  const [imagesReady, setImagesReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const rebuildLayout = useCallback(() => {
    const width = gridRef.current?.clientWidth ?? window.innerWidth;
    const count = getColumnCount(window.innerWidth);
    setLayout(distributeImages(galleryWall, count, width));
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(motionPreference.matches);
    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);

    let resizeFrame = 0;
    const handleResize = () => {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(rebuildLayout);
    };
    window.addEventListener("resize", handleResize);
    rebuildLayout();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(resizeFrame);
      motionPreference.removeEventListener("change", updateMotionPreference);
    };
  }, [rebuildLayout]);

  useEffect(() => {
    if (imagesReady) return;

    const images = Array.from(gridRef.current?.querySelectorAll("img") ?? []);
    const checkImagesLoaded = () => {
      if (!images.every((image) => image.complete)) return;
      rebuildLayout();
      setImagesReady(true);
    };
    images.forEach((image) => {
      image.addEventListener("load", checkImagesLoaded);
      image.addEventListener("error", checkImagesLoaded);
    });
    checkImagesLoaded();

    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", checkImagesLoaded);
        image.removeEventListener("error", checkImagesLoaded);
      });
    };
  }, [imagesReady, layout, rebuildLayout]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const images = Array.from(grid.querySelectorAll<HTMLImageElement>("[data-gallery-reveal]"));
    if (reducedMotion) {
      images.forEach((image) => gsap.set(image, { opacity: 1, y: 0 }));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const image = entry.target as HTMLImageElement;
        revealedImages.current.add(image.dataset.galleryReveal ?? "");
        gsap.to(image, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", overwrite: "auto" });
        observer.unobserve(image);
      });
    }, { threshold: 0.01 });

    images.forEach((image) => {
      const key = image.dataset.galleryReveal ?? "";
      if (revealedImages.current.has(key)) {
        gsap.set(image, { opacity: 1, y: 0 });
      } else {
        gsap.set(image, { opacity: 0, y: 30 });
        observer.observe(image);
      }
    });

    return () => observer.disconnect();
  }, [layout, reducedMotion]);

  useGSAP(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const columns = Array.from(grid.querySelectorAll<HTMLElement>("[data-gallery-column]"));
    grid.style.height = "auto";
    if (reducedMotion || layout.count === 1) {
      gsap.set(columns, { y: 0 });
      ScrollTrigger.refresh();
      return;
    }

    const heights = columns.map((column) => column.getBoundingClientRect().height);
    const tallestColumn = Math.max(...heights);
    grid.style.height = `${tallestColumn}px`;
    columns.forEach((column, index) => {
      const from = layout.count === 3 && index === 1 ? MID_START : 0;
      const to = tallestColumn - heights[index];
      if (from === to) return;

      gsap.fromTo(column, { y: from }, {
        y: to,
        ease: "none",
        scrollTrigger: {
          trigger: grid,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });
    ScrollTrigger.refresh();
  }, {
    dependencies: [imagesReady, layout, reducedMotion],
    scope: sectionRef,
    revertOnUpdate: true,
  });

  return (
    <section id="gallery" ref={sectionRef} className={styles.section} aria-label="Conference photo gallery">
      <div ref={gridRef} className={styles.grid}>
        {layout.columns.map((column, columnIndex) => (
          <div
            className={styles.column}
            data-gallery-column
            key={`column-${columnIndex}`}
          >
            {column.map((item, itemIndex) => (
              <figure
                className={`${styles.imageFrame} ${item.portrait ? styles.portrait : ""}`}
                key={item.image}
                style={itemIndex === column.length - 1 && layout.heightCorrections[columnIndex] > 0
                  ? { height: layout.columnWidth * getDisplayHeightPerWidth(item) + layout.heightCorrections[columnIndex] }
                  : undefined}
              >
                <Image
                  className={styles.image}
                  data-gallery-reveal={item.image}
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </figure>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
