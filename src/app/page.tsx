import Image from "next/image";
import Link from "next/link";
import { CommunityGrid } from "@/components/CommunityGrid";
import { TourMosaic } from "@/components/TourMosaic";
import { getCommunityTiles } from "@/content/community";
import {
  defaultWhatsAppMessage,
  pillars,
  senses,
  site,
  steps,
  whatsappHref,
} from "@/content/site";
import { getFeaturedTours } from "@/content/tours";

export default function HomePage() {
  const featured = getFeaturedTours();
  const communityTiles = getCommunityTiles();

  return (
    <>
      <section className="on-photo relative isolate flex min-h-[100svh] items-end overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Sunlit vineyard rows"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="wrap relative z-10 pb-16 pt-36 text-white md:pb-24">
          <p className="eyebrow light">Cape Winelands · Hand-crafted tours</p>
          <p className="flourish text-white">Come celebrate</p>
          <h1 className="display mt-2 text-white">Celebrating Life!</h1>
          <p className="lede light">
            Boutique South African tours for leisure travellers, teams, and schools. We research, we
            negotiate, we organise — you pack your bags.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link className="btn btn-light" href="/enquire">
              Enquire
            </Link>
            <a className="btn btn-line" href={whatsappHref(defaultWhatsAppMessage)}>
              WhatsApp
            </a>
            <a className="btn btn-line" href={`tel:${site.phoneTel}`}>
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section aria-label="What we celebrate" className="border-b border-[var(--color-teal-accent)] bg-white">
        <ul className="wrap flex flex-wrap justify-between gap-3 py-4 text-sm tracking-[0.16em] text-[var(--color-teal-dark)] uppercase">
          {senses.map((sense) => (
            <li key={sense}>{sense}</li>
          ))}
        </ul>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="pillars-heading">
        <div className="wrap">
          <p className="eyebrow">The house</p>
          <h2 id="pillars-heading" className="section-title">
            Three ways to celebrate
          </h2>
          <p className="lede">Leisure leads, and the same host voice holds corporate days and school trips.</p>
          <ul className="mt-8 grid list-none gap-4 p-0 md:grid-cols-3">
            {pillars.map((pillar) => (
              <li key={pillar.href}>
                <Link href={pillar.href} className="card flex h-full flex-col">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <h3 className="text-2xl">{pillar.title}</h3>
                    <p className="text-sm leading-6">{pillar.promise}</p>
                    <span className="mt-auto text-sm tracking-wide text-[var(--color-teal-dark)] uppercase">
                      Step inside
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" aria-labelledby="journeys-heading">
        <div className="wrap-wide">
          <p className="eyebrow">Journey gallery</p>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 id="journeys-heading" className="section-title">
              Find your celebration
            </h2>
            <Link href="/tours" className="text-sm tracking-wide text-[var(--color-teal-dark)] uppercase">
              See all tours
            </Link>
          </div>
          <div className="mt-8">
            <TourMosaic tours={featured} />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-teal-ink)] py-16 text-white md:py-20" aria-labelledby="steps-heading">
        <div className="wrap">
          <p className="flourish text-[var(--color-logo-sky)]">You pack your bags</p>
          <h2 id="steps-heading" className="section-title mt-2 text-white">
            We research. We negotiate. We organise.
          </h2>
          <ol className="mt-10 grid list-none gap-8 p-0 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number}>
                <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.16em] text-[var(--color-logo-sky)]">
                  {step.number}
                </p>
                <h3 className="mt-2 text-xl text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/90">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CommunityGrid tiles={communityTiles} />

      <section className="py-16 md:py-24" aria-labelledby="host-heading">
        <div className="wrap grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="flourish">A note from your host</p>
            <h2 id="host-heading" className="section-title mt-2">
              Anita still answers.
            </h2>
            <div className="mt-4 max-w-xl space-y-4">
              <p>
                Zookini is a small house in the Winelands. Every tour is built for the people in front of us —
                not pulled off a shelf.
              </p>
              <p>
                Guest stories will live here once they are theirs to share. Until then, the honest proof is a
                conversation with Anita, and the teams and schools who already travel with us.
              </p>
            </div>
            <blockquote className="mt-6 border-l-2 border-[var(--color-logo-sky)] pl-4">
              <p className="text-[var(--color-teal-ink)]">
                “A travel adventure has no substitute. It is the ultimate experience, your one big opportunity
                for flair.”
              </p>
              <footer className="mt-2 text-sm">Rosalind Massow</footer>
            </blockquote>
            <p className="mt-6 text-sm">
              <a
                className="underline decoration-[var(--color-teal-accent)] underline-offset-4"
                href="https://www.facebook.com/zookinitours/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zookini Tours on Facebook
              </a>
            </p>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-[var(--radius-lg)]">
            <Image
              src="/images/foodie.jpg"
              alt="A table laid for a shared meal"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-teal-accent)] bg-white py-14" aria-labelledby="contact-heading">
        <div className="wrap flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Say hello</p>
            <h2 id="contact-heading" className="section-title">
              {site.region}
            </h2>
            <p className="mt-2">{site.address}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a className="btn btn-solid" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
            <a className="btn btn-line" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="btn btn-line" href={whatsappHref(defaultWhatsAppMessage)}>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
