"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

const PIECE =
  ".split, .portrait-card, .card, .community-tile, section.photo-break, section.client-strip, .fact-bar, .contact-details, .contact-card";

function inView(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

export function MotionEffects() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.querySelector("main");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
    const html = document.documentElement;
    html.classList.remove("motion-ok");

    const cleanups: Array<() => void> = [];

    if (root && !reduce) {
      const nodes: HTMLElement[] = [];
      root.querySelectorAll<HTMLElement>(PIECE).forEach((el) => {
        if (el.closest(".home-hero, .page-hero")) return;
        if (el.classList.contains("split") && el.querySelector(".polaroid")) {
          el.querySelectorAll<HTMLElement>(":scope > .split-copy").forEach((copy) => nodes.push(copy));
          return;
        }
        nodes.push(el);
      });
      root.querySelectorAll<HTMLElement>("section.band").forEach((section) => {
        if (section.querySelector(".split, .portrait-card, .card, .community-tile, .contact-details")) return;
        nodes.push(section);
      });
      root.querySelectorAll<HTMLElement>("h1, h2, h3").forEach((heading) => {
        if (heading.classList.contains("brush-title")) return;
        if (heading.closest(".home-hero, .page-hero")) return;
        if (nodes.some((node) => node === heading || node.contains(heading))) return;
        nodes.push(heading);
      });

      const groups = new Map<Element, HTMLElement[]>();
      nodes.forEach((node) => {
        node.classList.add("reveal");
        const group = node.matches(".community-tile")
          ? node.closest("ul")
          : node.matches(".portrait-card")
            ? node.closest(".carousel-track")
            : node.matches(".card")
              ? node.closest("ul")
              : null;
        if (group) {
          const list = groups.get(group) ?? [];
          list.push(node);
          groups.set(group, list);
        }
        if (inView(node)) node.classList.add("is-in");
      });
      groups.forEach((list) => {
        list.forEach((node, index) => {
          node.style.transitionDelay = `${Math.min(index, 5) * 80}ms`;
        });
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -6% 0px" },
      );
      nodes.forEach((node) => {
        if (!node.classList.contains("is-in")) observer.observe(node);
      });
      const brushes = [...root.querySelectorAll<HTMLElement>(".brush-title")];
      const brushObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-drawn");
            brushObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.5, rootMargin: "0px 0px -8% 0px" },
      );
      brushes.forEach((heading) => {
        if (inView(heading)) heading.classList.add("is-drawn");
        else brushObserver.observe(heading);
      });

      const polaroids = [...root.querySelectorAll<HTMLElement>(".polaroid")];
      const polaroidGroups = new Map<Element, HTMLElement[]>();
      polaroids.forEach((frame) => {
        frame.classList.add("drop");
        const group = frame.closest("section") ?? frame.parentElement;
        if (!group) return;
        const list = polaroidGroups.get(group) ?? [];
        list.push(frame);
        polaroidGroups.set(group, list);
      });
      polaroidGroups.forEach((list) => {
        list.forEach((frame, index) => {
          frame.style.setProperty("--drop-delay", `${Math.min(index, 4) * 90}ms`);
        });
      });
      const polaroidObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-settled");
            polaroidObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -2% 0px" },
      );
      polaroids.forEach((frame) => {
        if (inView(frame)) frame.classList.add("is-settled");
        else polaroidObserver.observe(frame);
      });
      const onSettleEnd = (event: AnimationEvent) => {
        const frame = event.target;
        if (!(frame instanceof HTMLElement) || event.animationName !== "polaroid-settle") return;
        frame.classList.remove("drop", "is-settled");
        frame.style.removeProperty("--drop-delay");
      };
      root.addEventListener("animationend", onSettleEnd);

      html.classList.add("motion-ok");
      cleanups.push(() => {
        observer.disconnect();
        brushObserver.disconnect();
        polaroidObserver.disconnect();
        root.removeEventListener("animationend", onSettleEnd);
        nodes.forEach((node) => {
          node.classList.remove("reveal", "is-in");
          node.style.transitionDelay = "";
        });
        brushes.forEach((heading) => heading.classList.remove("is-drawn"));
        polaroids.forEach((frame) => {
          frame.classList.remove("drop", "is-settled");
          frame.style.removeProperty("--drop-delay");
        });
        html.classList.remove("motion-ok");
      });
    }

    if (!reduce && !coarse) {
      const frames = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
      let frameId = 0;
      const update = () => {
        frameId = 0;
        frames.forEach((frame) => {
          const parent = frame.parentElement;
          if (!parent) return;
          const shift = parent.getBoundingClientRect().top * -0.1;
          frame.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
        });
      };
      const onScroll = () => {
        if (!frameId) frameId = window.requestAnimationFrame(update);
      };
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      cleanups.push(() => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        if (frameId) window.cancelAnimationFrame(frameId);
        frames.forEach((frame) => {
          frame.style.transform = "";
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
