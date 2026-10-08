import { EnquireForm } from "@/components/EnquireForm";
import { PolaroidPhoto } from "@/components/PolaroidPhoto";
import { FactBar } from "@/components/FactBar";
import { PageHero } from "@/components/PageHero";
import { PhotoStrip } from "@/components/PhotoStrip";
import { photos } from "@/content/photos";
import { corporateStory, defaultWhatsAppMessage, whatsappHref } from "@/content/site";

export const metadata = {
  title: { absolute: "Corporate Tours, South Africa, Zookini Tours" },
  description:
    "We will organise every detail of your itinerary. This includes travel arrangements; accommodation, day excursions etc. We always have something special in mind!",
};

export default function CorporatePage() {
  return (
    <>
      <PageHero
        short
        eyebrow="Corporate"
        title="Corporate Tours"
        lede={corporateStory.lede}
        image={photos.corporate.src}
        imageAlt={photos.corporate.alt}
      />
      <FactBar
        facts={[
          { label: "Group size", value: "Your team" },
          { label: "Business Retreats", value: "two to five days" },
        ]}
        whatsappHref={whatsappHref(defaultWhatsAppMessage)}
      />
      <nav className="door-row wrap" aria-label="Corporate">
        <a className="door-link" href="#tours-retreats">
          Tours & Retreats
        </a>
        <a className="door-link" href="#team-building">
          Team Building
        </a>
        <a className="door-link" href="#events">
          Events
        </a>
      </nav>
      <section className="band" aria-labelledby="host-offers">
        <div className="wrap split">
          <PolaroidPhoto
            photo={photos.signature}
            tilt="left"
            className="split-photo"
            sizes="(min-width: 768px) 42vw, 92vw"
          />
          <div className="split-copy">
            <p>{corporateStory.intro}</p>
            <p>{corporateStory.clients}</p>
            <h2 id="host-offers" className="section-title">
              {corporateStory.offersTitle}
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              {corporateStory.offers.map((offer) => (
                <li key={offer}>{offer}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="tours-retreats" className="band bg-white" aria-labelledby="kinds-heading">
        <div className="wrap">
          <h2 id="kinds-heading" className="section-title">
            {corporateStory.kindsTitle}
          </h2>
          <p className="mt-4 max-w-3xl">{corporateStory.kindsIntro}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {corporateStory.kinds.map((kind) => (
              <article key={kind.title}>
                <h3 className="text-lg">{kind.title}</h3>
                <p className="mt-2">{kind.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="team-building" className="band" aria-labelledby="activities-heading">
        <div className="wrap">
          <p className="max-w-3xl">{corporateStory.teamIntro}</p>
          <h2 id="activities-heading" className="section-title mt-8">
            {corporateStory.activitiesTitle}
          </h2>
          <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-5">
            {corporateStory.activities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </div>
      </section>
      <section id="events" className="band bg-white" aria-labelledby="events-heading">
        <div className="wrap">
          <h2 id="events-heading" className="section-title">
            {corporateStory.eventsTitle}
          </h2>
          <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-5">
            {corporateStory.events.map((event) => (
              <li key={event}>{event}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl">{corporateStory.outcomes}</p>
        </div>
      </section>
      <div className="wrap-wide pb-[var(--space-7)]">
        <PhotoStrip photos={[photos.corporateOutdoors, photos.winelands, photos.houtBay]} />
      </div>
      <section className="band steps-band bg-[var(--color-teal-ink)] text-white" aria-labelledby="tailor-heading">
        <div className="wrap">
          <h2 id="tailor-heading" className="section-title text-white">
            {corporateStory.tailorTitle}
          </h2>
          <p className="mt-4 max-w-xl text-white/90">{corporateStory.tailor}</p>
        </div>
      </section>
      <section id="enquire" className="band" aria-labelledby="ready-heading">
        <div className="wrap split reverse">
          <div className="split-copy enquire-panel rounded-[var(--radius-lg)] bg-white p-5 md:p-8">
            <h2 id="ready-heading" className="section-title">
              Get in touch
            </h2>
            <div className="mt-4">
              <EnquireForm defaultTour="corporate" heading="" />
            </div>
          </div>
          <PolaroidPhoto
            photo={photos.corporate}
            tilt="right"
            className="split-photo"
            sizes="(min-width: 768px) 40vw, 92vw"
          />
        </div>
      </section>
    </>
  );
}
