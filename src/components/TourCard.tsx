import Image from "next/image";
import Link from "next/link";
import { themeLabel, type Tour } from "@/content/tours";

export function TourCard({ tour, large = false }: { tour: Tour; large?: boolean }) {
  return (
    <article className={`card h-full ${large ? "sm:min-h-[420px]" : ""}`}>
      <Link href={`/tours/${tour.slug}`} className="flex h-full flex-col text-inherit no-underline">
        <div className={`card-media relative ${large ? "min-h-72 sm:min-h-96" : "aspect-[4/3]"}`}>
          <Image
            src={tour.image}
            alt={tour.imageAlt}
            fill
            sizes={large ? "(min-width: 1024px) 720px, 100vw" : "(min-width: 1024px) 480px, 100vw"}
            quality={82}
            className="card-photo object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 p-5">
          <p className="eyebrow">{themeLabel(tour.themes[0])}</p>
          <h3 className="card-title text-xl">{tour.title}</h3>
          <p className="text-sm leading-6">{tour.hook}</p>
          <p className="card-meta">
            {tour.duration}
            <span aria-hidden="true"> · </span>
            {tour.groupSize}
          </p>
        </div>
      </Link>
    </article>
  );
}
