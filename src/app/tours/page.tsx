import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { TourIndex } from "@/components/TourIndex";
import { photos } from "@/content/photos";
import { defaultWhatsAppMessage, whatsappHref } from "@/content/site";
import { tours } from "@/content/tours";

export const metadata = {
  title: { absolute: "Leisure Tours, South Africa, Zookini Tours" },
  description:
    "Come and celebrate our beautiful country, South Africa! We offer boutique styled and unique tours with exceptional quality and personalised service.",
};

export default function ToursPage() {
  return (
    <>
      <PageHero
        short
        eyebrow="Leisure"
        title="Come celebrate life with us!"
        lede="South Africa is one of the most diverse countries in the world. It is a country of beauty and splendour, a unique and inspiring experience!"
        image={photos.capeTown.src}
        imageAlt={photos.capeTown.alt}
      />
      <nav className="door-row wrap" aria-label="Ways to travel">
        <Link className="door-link" href="/tours" aria-current="page">
          Leisure
        </Link>
        <Link className="door-link" href="/corporate">
          Corporate
        </Link>
        <Link className="door-link" href="/educational">
          Educational
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
            Tailor Made Tours with a specific theme in mind
          </h2>
          <div className="hero-actions">
            <Link className="btn btn-solid" href="/enquire">
              Get in touch
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
