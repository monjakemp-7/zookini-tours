import Image from "next/image";
import Link from "next/link";
import { CommunityGrid } from "@/components/CommunityGrid";
import { TourMosaic } from "@/components/TourMosaic";
import { getCommunityTiles } from "@/content/community";
import { pillars, senses, steps } from "@/content/site";
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
        <div className="intro wrap relative z-10 pb-24 text-white lg:pb-16">
          <p className="eyebrow light">Cape Winelands · Hand-crafted tours</p>
          <h1 className="display text-white">Celebrating Life!</h1>
          <p className="lede light">
            Boutique South African tours for leisure travellers, teams, and schools.
          </p>
        </div>
      </section>

      <section aria-label="What we celebrate" className="senses">
        <ul className="wrap relative z-10 flex flex-wrap justify-between gap-x-6 gap-y-2 px-0 pt-4 pb-10 text-sm tracking-[0.2em] text-[var(--color-teal-ink)] uppercase">
          {senses.map((sense) => (
            <li key={sense}>{sense}</li>
          ))}
        </ul>
      </section>

      <section className="band contour-band" aria-labelledby="pillars-heading">
        <div className="wrap">
          <h2 id="pillars-heading" className="section-title">
            Three ways to celebrate
          </h2>
          <ul className="mt-8 grid list-none gap-[var(--space-5)] p-0 md:grid-cols-3">
            {pillars.map((pillar) => (
              <li key={pillar.href}>
                <Link href={pillar.href} className="card flex h-full flex-col">
                  <div className="card-media relative aspect-[4/3]">
                    <Image
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="card-photo object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <h3 className="text-2xl">{pillar.title}</h3>
                    <p className="text-sm leading-6">{pillar.promise}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band bg-white" aria-labelledby="journeys-heading">
        <div className="wrap-wide">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h2 id="journeys-heading" className="section-title">
              Find your celebration
            </h2>
            <Link href="/tours" className="text-sm tracking-[0.16em] text-[var(--color-teal-ink)] uppercase">
              See all tours
            </Link>
          </div>
          <div className="mt-6">
            <TourMosaic tours={featured} />
          </div>
        </div>
      </section>

      <section className="band steps-band bg-[var(--color-teal-ink)] text-white" aria-labelledby="steps-heading">
        <div className="wrap">
          <h2 id="steps-heading" className="section-title text-white">
            How a tour comes together
          </h2>
          <ol className="steps-list mt-8 grid list-none gap-[var(--space-6)] p-0 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number}>
                <p className="step-index font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-white">
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

      <section className="band" aria-labelledby="host-heading">
        <div className="wrap grid items-center gap-[var(--space-6)] md:grid-cols-[1.05fr_0.95fr] md:gap-[var(--space-8)]">
          <div>
            <h2 id="host-heading" className="section-title">
              Anita still answers.
            </h2>
            <div className="mt-4 max-w-xl space-y-3">
              <p>
                Zookini is a small house in the Winelands. Every tour is built for the people in front of us —
                not pulled off a shelf.
              </p>
              <p>Guest stories will live here once they are theirs to share.</p>
            </div>
            <blockquote className="mt-5 border-l-2 border-[var(--color-logo-sky)] pl-4">
              <p className="text-[var(--color-teal-ink)]">
                “A travel adventure has no substitute. It is the ultimate experience, your one big opportunity
                for flair.”
              </p>
              <footer className="mt-2 text-sm">Rosalind Massow</footer>
            </blockquote>
          </div>
          <div className="host-photo">
            <div className="host-wash" aria-hidden="true" />
            <div className="host-frame relative min-h-80 overflow-hidden rounded-[var(--radius-lg)] md:min-h-[28rem]">
              <Image
                src="/images/foodie.jpg"
                alt="A table laid for a shared meal"
                fill
                sizes="(min-width: 768px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
