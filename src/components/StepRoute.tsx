"use client";

import { useLayoutEffect, useRef } from "react";

type Step = {
  number: string;
  title: string;
  body: string;
};

const scrollDriven =
  typeof CSS !== "undefined" &&
  (CSS.supports("animation-timeline: view()") || CSS.supports("animation-timeline", "view()"));

export function StepRoute({ steps }: { steps: readonly Step[] }) {
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const track = list.querySelector<HTMLElement>(".step-track");
    const bus = list.querySelector<HTMLElement>(".step-bus");
    if (reduce || scrollDriven || !track || !bus) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const route = track.getBoundingClientRect();
      if (route.height < 1) return;
      const travel = Math.max(0, route.height - bus.offsetHeight);
      const start = window.innerHeight * 0.82;
      const end = window.innerHeight * 0.22;
      const span = route.height + (start - end);
      const progress = Math.min(1, Math.max(0, (start - route.top) / span));
      bus.style.transform = `translate3d(-50%, ${(progress * travel).toFixed(1)}px, 0) rotate(-90deg)`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    const first = window.requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(first);
      if (frame) window.cancelAnimationFrame(frame);
      bus.style.transform = "";
    };
  }, []);

  return (
    <div className="step-route" ref={listRef}>
      <span className="step-track" aria-hidden="true">
        <span className="step-bus">
        <svg viewBox="0 0 32 32" focusable="false" aria-hidden="true">
          <path
            d="M9 8.7h14.2c2.5 0 4.1 1.6 4.1 4v4.6c0 1.7-1.3 3-3.1 3H9.4c-2.8 0-4.8-2-4.8-4.8v-2.1c0-2.6 2-4.7 4.4-4.7Z"
            fill="#80A6AD"
            stroke="#3E5559"
            strokeWidth="1.15"
            strokeLinejoin="round"
          />
          <rect x="13.4" y="5.7" width="7.4" height="3.1" rx="1.3" fill="#80A6AD" stroke="#3E5559" strokeWidth="1.15" />
          <rect x="2.5" y="14.7" width="3.2" height="3.2" rx="1.1" fill="#80A6AD" stroke="#3E5559" strokeWidth="1.05" />
          <rect x="6.3" y="10.5" width="4.3" height="5" rx="1.1" fill="#fff" />
          <rect x="12.1" y="10.6" width="12.6" height="4.1" rx="1" fill="#fff" />
          <path d="M16.2 10.6v4.1M20.5 10.6v4.1" stroke="#80A6AD" strokeWidth="0.9" />
          <circle cx="5.5" cy="16.3" r="0.85" fill="#fff" stroke="#3E5559" strokeWidth="0.55" />
          <circle cx="11.6" cy="22.1" r="3.15" fill="#3E5559" />
          <circle cx="11.6" cy="22.1" r="1.35" fill="#fff" />
          <circle cx="22.7" cy="22.1" r="3.15" fill="#3E5559" />
          <circle cx="22.7" cy="22.1" r="1.35" fill="#fff" />
        </svg>
        </span>
      </span>
      <ol className="step-list">
        {steps.map((step) => (
          <li key={step.number}>
            <p className="step-num">{step.number}</p>
            <div>
              <h3 className="text-lg">{step.title}</h3>
              <p className="mt-1 text-sm leading-6">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
