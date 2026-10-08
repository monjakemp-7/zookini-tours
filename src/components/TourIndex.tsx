"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { PortraitCard } from "@/components/PortraitCard";
import { themes, type ThemeId, type Tour } from "@/content/tours";

const signatureSlug = "women-and-wine-weekend";

function isTheme(value: string): value is ThemeId {
  return themes.some((theme) => theme.id === value);
}

export function TourIndex({ tours }: { tours: Tour[] }) {
  const signature = tours.find((tour) => tour.slug === signatureSlug);
  const [theme, setTheme] = useState<ThemeId | "all">("all");

  const showSignature = Boolean(signature && (theme === "all" || signature.themes.includes(theme as ThemeId)));

  const visible = useMemo(() => {
    const filtered = theme === "all" ? tours : tours.filter((tour) => tour.themes.includes(theme));
    if (!showSignature) return filtered;
    return filtered.filter((tour) => tour.slug !== signatureSlug);
  }, [showSignature, theme, tours]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter tours by theme">
        <button type="button" className="chip" aria-pressed={theme === "all"} onClick={() => setTheme("all")}>
          All
        </button>
        {themes.map((item) => (
          <button
            key={item.id}
            type="button"
            className="chip"
            aria-pressed={theme === item.id}
            onClick={() => setTheme(isTheme(item.id) ? item.id : "all")}
          >
            {item.label}
          </button>
        ))}
      </div>

      {showSignature && signature ? (
        <article className="split signature-split">
          <div className="split-photo">
            <Image
              src={signature.image}
              alt={signature.imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="split-copy">
            <p className="eyebrow">Signature</p>
            <h2 className="section-title">{signature.title}</h2>
            <p>{signature.hook}</p>
            <p>{signature.story[0]}</p>
            <Link className="btn btn-solid" href={`/tours/${signature.slug}`}>
              View tour
            </Link>
          </div>
        </article>
      ) : null}

      {visible.length === 0 ? (
        <p className="mt-8 max-w-lg">
          {showSignature
            ? "That celebration is the signature tour above."
            : "Nothing in that theme in this set. Tell Anita what you are celebrating and she will hand-craft it."}
        </p>
      ) : (
        <ul className="portrait-grid">
          {visible.map((tour) => (
            <li key={tour.slug}>
              <PortraitCard tour={tour} showRegion />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
