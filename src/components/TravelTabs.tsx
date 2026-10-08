"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { photos } from "@/content/photos";
import { ways } from "@/content/site";

export function TravelTabs() {
  const base = useId();
  const [active, setActive] = useState<(typeof ways)[number]["id"]>("leisure");
  const current = ways.find((way) => way.id === active) ?? ways[0];
  const photo = photos[current.photo];

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
          <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="travel-panel-copy">
          <h3 className="section-title">{current.title}</h3>
          <ul className="way-points">
            {current.points.map((point) => (
              <li key={point.label}>
                <p className="eyebrow">{point.label}</p>
                <p>{point.body}</p>
              </li>
            ))}
          </ul>
          <Link className="btn btn-line" href={current.href}>
            {current.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}
