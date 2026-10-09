"use client";

import { useLayoutEffect, useRef } from "react";
import { PolaroidPhoto } from "@/components/PolaroidPhoto";
import type { ClusterFrame } from "@/content/travel-clusters";

const tilts = ["left", "right", "left", "right", "left"] as const;

export function PolaroidCluster({ frames }: { frames: readonly ClusterFrame[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const photos = [...root.querySelectorAll<HTMLElement>(".polaroid")];
    if (reduce) return;

    photos.forEach((frame, index) => {
      frame.classList.add("drop");
      frame.style.setProperty("--drop-delay", `${Math.min(index, 4) * 90}ms`);
    });

    // Settle the whole pile together. A frame sitting in the mobile scroll
    // row is outside the viewport until you swipe, and a hidden tab panel
    // has no box until it is shown. Watching the cluster covers both.
    let settled = false;
    const settle = () => {
      if (settled) return;
      const rect = root.getBoundingClientRect();
      if (rect.width === 0 || rect.bottom <= 0 || rect.top >= window.innerHeight * 0.92) return;
      settled = true;
      photos.forEach((frame) => frame.classList.add("is-settled"));
      observer?.disconnect();
      resize?.disconnect();
    };

    let observer: IntersectionObserver | undefined;
    let resize: ResizeObserver | undefined;
    const rect = root.getBoundingClientRect();
    const visible = rect.width > 0 && rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (visible) {
      settled = true;
      photos.forEach((frame) => frame.classList.add("is-settled"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) settle();
        },
        { threshold: 0.12, rootMargin: "0px 0px -2% 0px" },
      );
      observer.observe(root);
      resize = new ResizeObserver(() => settle());
      resize.observe(root);
    }

    const onEnd = (event: AnimationEvent) => {
      const frame = event.target;
      if (!(frame instanceof HTMLElement) || event.animationName !== "polaroid-settle") return;
      frame.classList.remove("drop", "is-settled");
      frame.style.removeProperty("--drop-delay");
    };
    root.addEventListener("animationend", onEnd);
    return () => {
      observer?.disconnect();
      resize?.disconnect();
      root.removeEventListener("animationend", onEnd);
      photos.forEach((frame) => {
        frame.classList.remove("drop", "is-settled");
        frame.style.removeProperty("--drop-delay");
      });
    };
  }, []);

  return (
    <div className={frames.length === 4 ? "polaroid-cluster is-four" : "polaroid-cluster"} ref={ref}>
      {frames.map((frame, index) => (
        <PolaroidPhoto
          key={frame.src}
          photo={frame}
          tilt={tilts[index] ?? "left"}
          tape
          sizes="(min-width: 1024px) 480px, (min-width: 768px) 40vw, 72vw"
          className={`cluster-frame cluster-frame-${index + 1}`}
        />
      ))}
    </div>
  );
}
