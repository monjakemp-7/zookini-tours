import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrushHeading } from "@/components/BrushHeading";
import { EnquireForm } from "@/components/EnquireForm";
import { ExperienceCarousel } from "@/components/ExperienceCarousel";
import { FactBar } from "@/components/FactBar";
import { PhotoStrip } from "@/components/PhotoStrip";
import { PolaroidCluster } from "@/components/PolaroidCluster";
import { PolaroidPhoto } from "@/components/PolaroidPhoto";
import { TourListen } from "@/components/TourListen";
import { lifeArtCluster, lifeArtGallery } from "@/content/life-art";
import { galleryFor } from "@/content/photos";
import { bookingGlance, tourTailor, tourWhatsAppMessage, whatsappHref } from "@/content/site";
import { getRelatedTours, getTour, tours } from "@/content/tours";

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return { title: "Tour" };
  return {
    title: { absolute: tour.tabTitle },
    description: tour.hook,
  };
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  const lifeArt = tour.slug === "life-is-art";
  const gallery = lifeArt ? lifeArtGallery : galleryFor(tour.slug);
  const highlightsPhoto = gallery[0];
  const enquirePhoto = gallery[2] ?? gallery[1];
  const lead = tour.story.slice(0, 2);
  const more = tour.story.slice(2);
  const related = getRelatedTours(tour.slug);

  return (
    <article>
      <section className="page-hero has-photo is-short">
        <div className="parallax-frame" data-parallax>
          <Image
            src={tour.image}
            alt={tour.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={tour.imagePosition ? { objectPosition: tour.imagePosition } : undefined}
          />
        </div>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="intro wrap relative z-10 py-8 md:py-10">
          <p className="eyebrow light">{tour.eyebrow}</p>
          <BrushHeading as="h1" className="display text-white">
            {tour.title}
          </BrushHeading>
          <p className="lede light">{tour.hook}</p>
          <TourListen slug={tour.slug} title={tour.title} />
        </div>
      </section>

      <FactBar
        facts={[
          { label: "Duration", value: tour.duration },
          { label: "Group size", value: tour.groupSize },
          { label: "Region", value: tour.region },
        ]}
        whatsappHref={whatsappHref(tourWhatsAppMessage(tour.title))}
      />
      <section className="band" aria-labelledby="highlights-heading">
        <div className="wrap">
          <div className="split">
            <div className="split-copy">
              {tour.note ? <p className="text-sm">{tour.note}</p> : null}
              <h2 id="highlights-heading" className="section-title">
                Highlights of the Tour
              </h2>
              <p>{tour.special}</p>
              <ul className="list-disc space-y-2 pl-5">
                {tour.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {lifeArt ? (
              <PolaroidCluster frames={lifeArtCluster} />
            ) : (
              <PolaroidPhoto
                photo={highlightsPhoto}
                tilt="left"
                className="split-photo"
                sizes="(min-width: 768px) 42vw, 92vw"
              />
            )}
          </div>
          <div className="story">
            {lead.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {more.length > 0 ? (
              <details className="read-more">
                <summary>Read more</summary>
                <div className="mt-3 space-y-3">
                  {more.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </details>
            ) : null}
          </div>
        </div>
      </section>

      <div className="wrap-wide pb-[var(--space-7)]">
        <PhotoStrip photos={gallery} />
      </div>

      <section className="band bg-white" aria-labelledby="itinerary-heading">
        <div className="wrap">
          <h2 id="itinerary-heading" className="section-title">
            Itinerary outline
          </h2>
          <p className="mt-2 max-w-xl text-sm">
            These are the highlights of this tour. Every tour is tailor made, so the order of the days is planned with
            you.
          </p>
          <div className="timeline">
            {tour.itinerary.map((day, index) => (
              <details key={day.day} className="day" open={index === 0}>
                <summary>
                  <span className="day-node" aria-hidden="true" />
                  <span className="day-copy">
                    <span className="day-kicker">{day.day}</span>
                    <span className="day-title">{day.title}</span>
                  </span>
                  <span className="day-mark" aria-hidden="true" />
                </summary>
                <p className="day-body">{day.body}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="included-heading">
        <div className="wrap grid gap-[var(--space-6)] md:grid-cols-2">
          <div>
            <h2 id="included-heading" className="section-title">
              Package Includes
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
              {tour.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 className="section-title mt-8">Package Excludes</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
              {tour.excludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-title">Booking Conditions</h2>
            {tour.suits ? <p className="mt-3">{tour.suits}</p> : null}
            {tour.practical.length > 0 ? (
              <ul className="mt-4 list-disc space-y-2 pl-5">
                {tour.practical.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            <h2 className="section-title mt-8">Terms and Conditions</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              {bookingGlance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">
              <Link className="text-link" href="/terms">
                Terms and Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="band steps-band bg-[var(--color-teal-ink)] text-white" aria-labelledby="tailor-heading">
        <div className="wrap">
          <h2 id="tailor-heading" className="section-title text-white">
            Tailor Made Tours with a specific theme in mind
          </h2>
          <p className="mt-4 max-w-xl text-white/90">{tourTailor}</p>
        </div>
      </section>

      <section id="enquire" className="band" aria-labelledby="ready-heading">
        <div className="wrap split">
          <div className="enquire-panel rounded-[var(--radius-lg)] bg-white p-5 md:p-8">
            <h2 id="ready-heading" className="section-title">
              Come celebrate life with us!
            </h2>
            <div className="mt-4">
              <EnquireForm defaultTour={tour.slug} heading="" />
            </div>
          </div>
          <PolaroidPhoto
            photo={enquirePhoto}
            tilt="right"
            className="split-photo"
            sizes="(min-width: 768px) 40vw, 92vw"
          />
        </div>
      </section>

      <section className="band bg-white" aria-labelledby="related-heading">
        <div className="wrap-wide">
          <h2 id="related-heading" className="section-title">
            Other tours you may like
          </h2>
          <div className="mt-6">
            <ExperienceCarousel tours={related} label="Other tours you may like" />
          </div>
        </div>
      </section>
    </article>
  );
}
