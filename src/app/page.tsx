import Image from "next/image";
import Link from "next/link";
import { CommunityGrid } from "@/components/CommunityGrid";
import { ExperienceCarousel } from "@/components/ExperienceCarousel";
import { TravelTabs } from "@/components/TravelTabs";
import { getCommunityTiles } from "@/content/community";
import { photos } from "@/content/photos";
import { clients, defaultWhatsAppMessage, doors, hostStory, houseStory, steps, whatsappHref } from "@/content/site";
import { getFeaturedTours } from "@/content/tours";

export default function HomePage() {
  const featured = getFeaturedTours();

  return (
    <>
      <section className="home-hero on-photo relative isolate overflow-hidden">
        <Image
          src={photos.hero.src}
          alt={photos.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="intro center relative z-10 text-white">
          <p className="eyebrow light">Cape Winelands. Small-group tours.</p>
          <h1 className="display text-white">Celebrating Life!</h1>
          <p className="lede light">
            Small South African tours for leisure travellers, teams, and schools.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-solid" href="/enquire">
              Enquire
            </Link>
            <a className="btn btn-line" href="#tours">
              Explore tours
            </a>
          </div>
        </div>
        <nav className="offer-bar" aria-label="Ways to travel">
          <ul className="offer-doors">
            {doors.map((door) => (
              <li key={door.href}>
                <Link className="offer-door" href={door.href}>
                  <span className="offer-label">{door.label}</span>
                  <span className="offer-line">{door.line}</span>
                  <span className="offer-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section className="band" aria-labelledby="house-heading">
        <div className="wrap split">
          <div className="split-photo">
            <Image
              src={photos.signature.src}
              alt={photos.signature.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="split-copy">
            <h2 id="house-heading" className="section-title">
              {houseStory.title}
            </h2>
            {houseStory.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link className="text-link" href="/about">
              Read our story
            </Link>
          </div>
        </div>
      </section>

      <section id="tours" className="band bg-white" aria-labelledby="journeys-heading">
        <div className="wrap-wide">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h2 id="journeys-heading" className="section-title">
              Find your celebration
            </h2>
            <Link className="text-link" href="/tours">
              See the journeys
            </Link>
          </div>
          <div className="mt-6">
            <ExperienceCarousel tours={featured} label="Featured tours" />
          </div>
        </div>
      </section>

      <section className="photo-break on-photo" aria-label="People, food, nature, art, and wine">
        <Image
          src={photos.winelands.src}
          alt={photos.winelands.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="wrap">
          <p className="section-title text-white">People, food, nature, art, and wine.</p>
        </div>
      </section>

      <section className="band contour-band" aria-labelledby="ways-heading">
        <div className="wrap">
          <h2 id="ways-heading" className="section-title">
            Ways to travel
          </h2>
          <div className="mt-8">
            <TravelTabs />
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="host-heading">
        <div className="wrap split reverse">
          <div className="split-copy">
            <h2 id="host-heading" className="section-title">
              {hostStory.title}
            </h2>
            {hostStory.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ol className="step-inline">
              {steps.map((step) => (
                <li key={step.number}>
                  <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.16em] text-[var(--color-teal-ink)]">
                    {step.number}
                  </p>
                  <div>
                    <h3 className="text-lg">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="host-photo">
            <div className="host-wash" aria-hidden="true" />
            <div className="host-frame split-photo">
              <Image
                src={photos.foodie.src}
                alt={photos.foodie.alt}
                fill
                sizes="(min-width: 768px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="band client-strip" aria-label="Clients">
        <div className="wrap relative z-10">
          <blockquote className="quote-block">
            <p>
              “A travel adventure has no substitute. It is the ultimate experience, your one big opportunity for
              flair.”
            </p>
            <footer>Rosalind Massow</footer>
          </blockquote>
          <ul className="client-names">
            {clients.map((client) => (
              <li key={client.name}>
                {"logo" in client && client.logo ? (
                  <span className="client-mark">
                    {/* Official SVG/PNG marks, sized in CSS so they share one optical height. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="client-logo" src={client.logo} alt={client.name} />
                    {"colorLogo" in client && client.colorLogo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img className="client-logo is-color" src={client.colorLogo} alt="" />
                    ) : null}
                  </span>
                ) : (
                  client.name
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="photo-break is-close on-photo" aria-labelledby="close-heading">
        <Image
          src={photos.enquireBand.src}
          alt={photos.enquireBand.alt}
          fill
          sizes="100vw"
          className="object-cover object-close"
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="wrap center-block">
          <h2 id="close-heading" className="display text-white">
            Tell us what you&apos;re celebrating
          </h2>
          <div className="hero-actions">
            <Link className="btn btn-solid" href="/enquire">
              Enquire
            </Link>
            <a className="btn btn-line" href={whatsappHref(defaultWhatsAppMessage)}>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CommunityGrid tiles={getCommunityTiles()} />
    </>
  );
}
