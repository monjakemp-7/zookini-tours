"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/content/photos";
import { doors } from "@/content/site";

const HOLD_MS = 6000;

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [held, setHeld] = useState(false);
  const [hover, setHover] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    const frame = window.requestAnimationFrame(() => {
      apply();
      setReady(true);
    });
    media.addEventListener("change", apply);
    return () => {
      window.cancelAnimationFrame(frame);
      media.removeEventListener("change", apply);
    };
  }, []);

  const paused = reduced || held || hover || focusWithin;
  const shown = reduced ? 0 : index;

  useEffect(() => {
    if (paused || heroSlides.length < 2) return;
    const timer = window.setTimeout(() => {
      setPrevious(index);
      setIndex((index + 1) % heroSlides.length);
    }, HOLD_MS);
    return () => window.clearTimeout(timer);
  }, [paused, index]);

  return (
    <section
      className={`home-hero on-photo relative isolate overflow-hidden${paused ? " is-paused" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocusCapture={(event) => {
        const target = event.target as HTMLElement;
        if (target.closest(".hero-toggle")) return;
        setFocusWithin(true);
      }}
      onBlurCapture={(event) => {
        const next = event.relatedTarget;
        if (next instanceof Node && event.currentTarget.contains(next)) return;
        setFocusWithin(false);
      }}
    >
      <div className="hero-stage" data-parallax>
        <div className={`hero-slides${ready && !reduced ? " is-live" : ""}`}>
          {heroSlides.map((slide, slideIndex) => {
            if (slideIndex > 0 && (!ready || reduced)) return null;
            const active = slideIndex === shown;
            const leaving = slideIndex === previous && !active;
            return (
              <div
                key={slide.id}
                className={`hero-slide${active ? " is-active" : ""}${leaving ? " is-previous" : ""}`}
                aria-hidden={active ? undefined : true}
              >
                <div className="hero-ken">
                  <Image
                    src={slide.src}
                    alt={active ? slide.alt : ""}
                    fill
                    priority={slideIndex === 0}
                    loading={slideIndex === 0 ? undefined : "lazy"}
                    sizes="100vw"
                    quality={slideIndex === 0 ? 75 : 68}
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="intro center relative z-10 text-white">
        <p className="eyebrow light">Cape Winelands. Small-group tours.</p>
        <h1 className="display text-white">Celebrating Life!</h1>
        <p className="lede light">Small South African tours for leisure travellers, teams, and schools.</p>
        <div className="hero-actions">
          <Link className="btn btn-solid" href="/enquire">
            Enquire
          </Link>
          <a className="btn btn-line" href="#tours">
            Explore tours
          </a>
        </div>
      </div>
      <nav className="offer-bar" aria-label="Ways to travel">
        <ul className="offer-doors">
          {doors.map((door) => (
            <li key={door.href}>
              <Link className="offer-door" href={door.href}>
                <span className="offer-label">{door.label}</span>
                <span className="offer-line">{door.line}</span>
                <span className="offer-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        type="button"
        className="hero-toggle"
        aria-pressed={held}
        onClick={() => {
          if (reduced) return;
          if (paused) {
            setHeld(false);
            setHover(false);
            setFocusWithin(false);
          } else {
            setHeld(true);
          }
        }}
      >
        {paused ? "Play" : "Pause"}
      </button>
    </section>
  );
}
