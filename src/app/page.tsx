import Image from "next/image";
import Link from "next/link";
import { BrushHeading } from "@/components/BrushHeading";
import { CommunityGrid } from "@/components/CommunityGrid";
import { ExperienceCarousel } from "@/components/ExperienceCarousel";
import { HomeHero } from "@/components/HomeHero";
import { PolaroidCluster } from "@/components/PolaroidCluster";
import { PolaroidPhoto } from "@/components/PolaroidPhoto";
import { TravelTabs } from "@/components/TravelTabs";
import { StepRoute } from "@/components/StepRoute";
import { getCommunityTiles } from "@/content/community";
import { photos } from "@/content/photos";
import { houseCluster } from "@/content/travel-clusters";
import { clients, defaultWhatsAppMessage, homeQuote, hostStory, houseStory, steps, whatsappHref } from "@/content/site";
import { getFeaturedTours } from "@/content/tours";

export default function HomePage() {
  const featured = getFeaturedTours();

  return (
    <>
      <HomeHero />

      <section className="band" aria-labelledby="house-heading">
        <div className="wrap split">
          <PolaroidCluster frames={houseCluster} />
          <div className="split-copy">
            <BrushHeading id="house-heading" className="section-title">
              {houseStory.title}
            </BrushHeading>
            {houseStory.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link className="text-link" href="/about">
              {houseStory.link}
            </Link>
          </div>
        </div>
      </section>

      <section id="tours" className="band bg-white" aria-labelledby="journeys-heading">
        <div className="wrap-wide">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <BrushHeading id="journeys-heading" className="section-title">
              Leisure
            </BrushHeading>
            <Link className="text-link" href="/tours">
              Leisure Tours
            </Link>
          </div>
          <div className="mt-6">
            <ExperienceCarousel tours={featured} label="Featured tours" />
          </div>
        </div>
      </section>

      <section className="photo-break on-photo" aria-label="South Africa is one of the most diverse countries in the world.">
        <div className="parallax-frame" data-parallax>
          <Image
            src={photos.winelands.src}
            alt={photos.winelands.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="wrap">
          <p className="section-title text-white">South Africa is one of the most diverse countries in the world.</p>
        </div>
      </section>

      <section className="band contour-band" aria-labelledby="ways-heading">
        <div className="wrap">
          <BrushHeading id="ways-heading" className="section-title">
            Leisure, Educational, Corporate
          </BrushHeading>
          <div className="mt-8">
            <TravelTabs />
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="host-heading">
        <div className="wrap split reverse">
          <div className="split-copy">
            <BrushHeading id="host-heading" className="section-title">
              {hostStory.title}
            </BrushHeading>
            {hostStory.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <StepRoute steps={steps} />
          </div>
          <div className="host-photo">
            <div className="host-wash" aria-hidden="true" />
            <PolaroidPhoto
              photo={photos.foodie}
              tilt="left"
              tape
              className="host-frame split-photo"
              sizes="(min-width: 768px) 40vw, 92vw"
            />
          </div>
        </div>
      </section>

      <section className="band client-strip" aria-label="Clients">
        <div className="wrap relative z-10">
          <blockquote className="quote-block">
            <p>{homeQuote.text}</p>
            <footer>{homeQuote.name}</footer>
          </blockquote>
          <ul className="client-names">
            {clients.map((client) => (
              <li key={client.name}>
                <span className="client-mark">
                  {/* Official marks, sized in CSS so they share one optical height. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="client-logo"
                    src={client.logo}
                    alt={"alt" in client ? client.alt : client.name}
                  />
                  {"colorLogo" in client && client.colorLogo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="client-logo is-color" src={client.colorLogo} alt="" />
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="photo-break is-close on-photo" aria-labelledby="close-heading">
        <div className="parallax-frame" data-parallax>
          <Image
            src={photos.enquireBand.src}
            alt={photos.enquireBand.alt}
            fill
            sizes="100vw"
            className="object-cover object-close"
          />
        </div>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="wrap center-block">
          <BrushHeading id="close-heading" className="display text-white">
            Come celebrate life with us!
          </BrushHeading>
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

      <CommunityGrid tiles={getCommunityTiles()} />
    </>
  );
}
