"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progress = progressRef.current;
    if (!progress) return;

    let frame = 0;

    function updateProgress() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!progress) return;

        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const percentage = scrollableHeight > 0
          ? Math.min(100, Math.round((window.scrollY / scrollableHeight) * 100))
          : 0;

        progress.style.transform = `scaleX(${percentage / 100})`;
        progress.setAttribute("aria-valuenow", String(percentage));
      });
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      aria-label="Reading progress"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={0}
      className="scroll-progress"
      ref={progressRef}
      role="progressbar"
    />
  );
}
