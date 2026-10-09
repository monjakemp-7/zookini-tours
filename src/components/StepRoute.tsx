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
      bus.style.transform = `translate3d(-50%, ${(progress * travel).toFixed(1)}px, 0)`;
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
          <img src="/route/van.png" alt="" width={56} height={126} decoding="async" />
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
