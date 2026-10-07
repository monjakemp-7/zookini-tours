import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquireForm } from "@/components/EnquireForm";
import { bookingGlance, site, tourWhatsAppMessage, whatsappHref } from "@/content/site";
import { getTour, themeLabel, tours } from "@/content/tours";

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
    title: tour.title,
    description: tour.hook,
  };
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  return (
    <article>
      <section className="page-hero min-h-[420px]">
        <Image
          src={tour.image}
          alt={tour.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="wrap relative z-10 py-16">
          <p className="eyebrow light">{themeLabel(tour.themes[0])}</p>
          <h1 className="display text-white">{tour.title}</h1>
          <p className="lede light">{tour.hook}</p>
        </div>
      </section>

      <div className="wrap grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:py-16">
        <div className="space-y-12">
          <div className="max-w-2xl space-y-4">
            {tour.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="fact-strip">
            <div>
              <dt>Duration</dt>
              <dd>{tour.duration}</dd>
            </div>
            <div>
              <dt>Group size</dt>
              <dd>{tour.groupSize}</dd>
            </div>
            <div>
              <dt>Region</dt>
              <dd>{tour.region}</dd>
            </div>
            <div>
              <dt>With you</dt>
              <dd>Tour Director</dd>
            </div>
          </dl>
          {tour.note ? <p className="text-sm">{tour.note}</p> : null}

          <section aria-labelledby="highlights-heading">
            <h2 id="highlights-heading" className="section-title">
              Highlights
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              {tour.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="itinerary-heading">
            <h2 id="itinerary-heading" className="section-title">
              Itinerary outline
            </h2>
            <p className="mt-2 max-w-xl text-sm">
              A sketch of the days, not a fixed clock. Anita shapes the final plan around your group.
            </p>
            <div className="mt-2">
              {tour.itinerary.map((day, index) => (
                <details key={day.day} className="day" open={index === 0}>
                  <summary>
                    <span>
                      {day.day} — {day.title}
                    </span>
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p className="pb-4 text-sm">{day.body}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="grid gap-8 md:grid-cols-2" aria-labelledby="included-heading">
            <div>
              <h2 id="included-heading" className="text-xl">
                Includes
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                {tour.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl">Excludes</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                {tour.excludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section aria-labelledby="glance-heading">
            <h2 id="glance-heading" className="section-title">
              Booking at a glance
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              {bookingGlance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">
              <Link href="/policies" className="underline underline-offset-4">
                Read the booking policies
              </Link>
            </p>
          </section>

          <section id="enquire" className="rounded-[var(--radius-lg)] bg-white p-5 md:p-8" aria-labelledby="enquire-heading">
            <EnquireForm defaultTour={tour.slug} heading={`Enquire about ${tour.title}`} />
          </section>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-[var(--radius-lg)] bg-white p-6 shadow-sm">
            <p className="eyebrow">This tour</p>
            <h2 className="text-2xl">{tour.title}</h2>
            <p className="mt-2 text-sm">
              {tour.duration} · {tour.groupSize} guests · {tour.region}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a className="btn btn-solid" href="#enquire">
                Enquire about this tour
              </a>
              <a className="btn btn-line" href={whatsappHref(tourWhatsAppMessage(tour.title))}>
                WhatsApp Anita
              </a>
              <a className="btn btn-line" href={`tel:${site.phoneTel}`}>
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
