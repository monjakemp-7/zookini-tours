"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { PolaroidCluster } from "@/components/PolaroidCluster";
import { travelClusters } from "@/content/travel-clusters";
import { ways } from "@/content/site";

export function TravelTabs() {
  const base = useId();
  const [active, setActive] = useState<(typeof ways)[number]["id"]>("leisure");

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
            aria-controls={`${base}-panel-${way.id}`}
            className="chip"
            onClick={() => setActive(way.id)}
          >
            {way.label}
          </button>
        ))}
      </div>
      {ways.map((way) => (
        <div
          key={way.id}
          role="tabpanel"
          id={`${base}-panel-${way.id}`}
          aria-labelledby={`${base}-${way.id}`}
          hidden={active !== way.id}
          className="travel-panel"
        >
          <PolaroidCluster frames={travelClusters[way.id]} />
          <div className="travel-panel-copy">
            <h3 className="section-title">{way.title}</h3>
            <ul className="way-points">
              {way.points.map((point) => (
                <li key={point.label}>
                  <p className="eyebrow">{point.label}</p>
                  <p>{point.body}</p>
                </li>
              ))}
            </ul>
            <Link className="btn btn-line" href={way.href}>
              {way.cta}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
