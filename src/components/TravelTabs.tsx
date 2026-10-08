"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { photos } from "@/content/photos";

const ways = [
  {
    id: "leisure",
    label: "Leisure",
    title: "Small-group journeys",
    body: "Theme-led days for 12 to 16 guests, on the road less travelled.",
    href: "/tours",
    cta: "Explore tours",
    photo: photos.wine,
  },
  {
    id: "corporate",
    label: "Corporate",
    title: "Take the team away",
    body: "We plan the travel, the stay, and the day programme.",
    href: "/corporate",
    cta: "Plan a breakaway",
    photo: photos.corporate,
  },
  {
    id: "schools",
    label: "Schools",
    title: "The outdoor classroom",
    body: "A plan that teachers do not have to carry alone.",
    href: "/educational",
    cta: "Plan a school trip",
    photo: photos.educational,
  },
] as const;

export function TravelTabs() {
  const base = useId();
  const [active, setActive] = useState<(typeof ways)[number]["id"]>("leisure");
  const current = ways.find((way) => way.id === active) ?? ways[0];

  return (
    <div className="travel-tabs">
      <div className="pill-row" role="tablist" aria-label="Ways to travel">
        {ways.map((way) => (
          <button
            key={way.id}
            type="button"
            role="tab"
            id={`${base}-${way.id}`}
            aria-selected={active === way.id}
            aria-controls={`${base}-panel`}
            className="chip"
            onClick={() => setActive(way.id)}
          >
            {way.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`${base}-panel`}
        aria-labelledby={`${base}-${current.id}`}
        className="travel-panel"
      >
        <div className="travel-panel-photo">
          <Image src={current.photo.src} alt={current.photo.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="travel-panel-copy">
          <h3 className="section-title">{current.title}</h3>
          <p className="lede">{current.body}</p>
          <Link className="btn btn-solid" href={current.href}>
            {current.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}
