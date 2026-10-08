import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/content/tours";

export function PortraitCard({ tour, showRegion = false }: { tour: Tour; showRegion?: boolean }) {
  return (
    <Link href={`/tours/${tour.slug}`} className="portrait-card">
      <Image
        src={tour.image}
        alt={tour.imageAlt}
        fill
        sizes="(min-width: 1024px) 320px, 78vw"
        className="card-photo object-cover"
      />
      <span className="portrait-scrim" aria-hidden="true" />
      <span className="portrait-copy">
        <span className="portrait-title">{tour.title}</span>
        <span className="portrait-line">{tour.atmosphere}</span>
        <span className="card-meta light">
          {tour.duration}
          <span aria-hidden="true"> · </span>
          {tour.groupSize}
          {showRegion ? (
            <>
              <span aria-hidden="true"> · </span>
              {tour.region}
            </>
          ) : null}
        </span>
      </span>
    </Link>
  );
}
