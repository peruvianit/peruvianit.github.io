"use client";

import { useEffect } from "react";

export default function HeroVisualObserver() {
  useEffect(() => {
    const visual = document.querySelector<HTMLElement>(".hero-visual");
    if (!visual) return;

    const observer = new IntersectionObserver(
      ([entry]) => visual.classList.toggle("is-visible", entry.isIntersecting),
      { threshold: 0.05 },
    );

    observer.observe(visual);
    return () => observer.disconnect();
  }, []);

  return null;
}
