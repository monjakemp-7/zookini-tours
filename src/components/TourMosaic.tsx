"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { themes, type ThemeId, type Tour } from "@/content/tours";
import { TourCard } from "@/components/TourCard";

type TourMosaicProps = {
  tours: Tour[];
  initialTheme?: string;
  showDoorChips?: boolean;
};

function isTheme(value: string | undefined): value is ThemeId {
  return themes.some((theme) => theme.id === value);
}

export function TourMosaic({ tours, initialTheme, showDoorChips = true }: TourMosaicProps) {
  const [theme, setTheme] = useState<ThemeId | "all">(isTheme(initialTheme) ? initialTheme : "all");
  const visible = useMemo(
    () => (theme === "all" ? tours : tours.filter((tour) => tour.themes.includes(theme))),
    [theme, tours],
  );

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
            onClick={() => setTheme(item.id)}
          >
            {item.label}
          </button>
        ))}
        {showDoorChips ? (
          <>
            <Link className="chip" href="/corporate">
              Corporate
            </Link>
            <Link className="chip" href="/educational">
              Schools
            </Link>
          </>
        ) : null}
      </div>
      {visible.length === 0 ? (
        <p className="mt-6 max-w-lg">
          Nothing in that theme in this set. Tell Anita what you are celebrating and she will hand-craft it.
        </p>
      ) : (
        <ul className="mt-8 grid list-none gap-[var(--space-5)] p-0 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((tour, index) => {
            const large = index === 0 && theme === "all";
            return (
              <li key={tour.slug} className={large ? "sm:col-span-2" : undefined}>
                <TourCard tour={tour} large={large} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
