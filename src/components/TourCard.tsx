import Image from "next/image";
import Link from "next/link";
import { themeLabel, type Tour } from "@/content/tours";

export function TourCard({ tour, large = false }: { tour: Tour; large?: boolean }) {
  return (
    <article className={`card h-full ${large ? "sm:min-h-[420px]" : ""}`}>
      <Link href={`/tours/${tour.slug}`} className="flex h-full flex-col text-inherit no-underline">
        <div className={`relative ${large ? "min-h-64 sm:min-h-80" : "aspect-[4/3]"}`}>
          <Image
            src={tour.image}
            alt={tour.imageAlt}
            fill
            sizes={large ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 30vw, 100vw"}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <p className="eyebrow">{themeLabel(tour.themes[0])}</p>
          <h3 className="card-title text-xl">{tour.title}</h3>
          <p className="text-sm leading-6">{tour.hook}</p>
          <p className="text-sm text-[var(--color-teal-dark)]">
            {tour.duration}
            <span aria-hidden="true"> · </span>
            {tour.groupSize} guests
          </p>
        </div>
      </Link>
    </article>
  );
}
