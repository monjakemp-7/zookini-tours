import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { TourIndex } from "@/components/TourIndex";
import { photos } from "@/content/photos";
import { defaultWhatsAppMessage, whatsappHref } from "@/content/site";
import { tours } from "@/content/tours";

export const metadata = {
  title: "Tours",
  description:
    "Hand-crafted Zookini journeys: Cape Town, fynbos, food, art, wine, the Garden Route, bushveld, and the Drakensberg.",
};

export default function ToursPage() {
  return (
    <>
      <PageHero
        short
        eyebrow="Leisure"
        title="Tours with a point of view"
        lede="Theme-led journeys for 12 to 16 guests."
        image={photos.capeTown.src}
        imageAlt={photos.capeTown.alt}
      />
      <nav className="door-row wrap" aria-label="Ways to travel">
        <Link className="door-link" href="/tours" aria-current="page">
          See the journeys
        </Link>
        <Link className="door-link" href="/corporate">
          Plan a team trip
        </Link>
        <Link className="door-link" href="/educational">
          Plan a school trip
        </Link>
      </nav>
      <section className="band contour-band">
        <div className="wrap-wide">
          <TourIndex tours={tours} />
        </div>
      </section>
      <section className="band steps-band bg-[var(--color-teal-ink)] text-white" aria-labelledby="handcraft-heading">
        <div className="wrap center-block">
          <h2 id="handcraft-heading" className="section-title text-white">
            Don&apos;t see your celebration? Anita will hand-craft it
          </h2>
          <div className="hero-actions">
            <Link className="btn btn-light" href="/enquire">
              Enquire
            </Link>
            <a className="btn btn-line" href={whatsappHref(defaultWhatsAppMessage)}>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
