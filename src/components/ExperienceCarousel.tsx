"use client";

import { useRef } from "react";
import type { Tour } from "@/content/tours";
import { PortraitCard } from "@/components/PortraitCard";

type ExperienceCarouselProps = {
  tours: Tour[];
  label: string;
};

export function ExperienceCarousel({ tours, label }: ExperienceCarouselProps) {
  const track = useRef<HTMLDivElement>(null);

  function step(direction: 1 | -1) {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("[role='group']");
    const delta = (card?.getBoundingClientRect().width ?? 280) + 16;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * delta, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          step(1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          step(-1);
        }
      }}
    >
      <div className="carousel-controls">
        <button type="button" className="carousel-btn" onClick={() => step(-1)} aria-label="Previous tours">
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" className="carousel-btn" onClick={() => step(1)} aria-label="Next tours">
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <div ref={track} className="carousel-track">
        {tours.map((tour, index) => (
          <div
            key={tour.slug}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${tours.length}`}
          >
            <PortraitCard tour={tour} />
          </div>
        ))}
      </div>
    </div>
  );
}
