import Image from "next/image";
import { EnquireForm } from "@/components/EnquireForm";
import { FactBar } from "@/components/FactBar";
import { PageHero } from "@/components/PageHero";
import { PhotoStrip } from "@/components/PhotoStrip";
import { photos } from "@/content/photos";
import { corporateStory, defaultWhatsAppMessage, whatsappHref } from "@/content/site";

export const metadata = {
  title: "Corporate",
  description:
    "Corporate breakaways, incentives, and team days. We plan the travel, the stay, and the day programme.",
};

export default function CorporatePage() {
  return (
    <>
      <PageHero
        short
        eyebrow="Corporate"
        title="Take the team somewhere with a pulse"
        lede={corporateStory.lede}
        image={photos.corporate.src}
        imageAlt={photos.corporate.alt}
      />
      <FactBar
        facts={[
          { label: "Group size", value: "Your team" },
          { label: "Typical length", value: "A day, or 2 to 5 days" },
        ]}
        whatsappHref={whatsappHref(defaultWhatsAppMessage)}
      />
      <section className="band" aria-labelledby="host-offers">
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
            <p>{corporateStory.intro}</p>
            <p>{corporateStory.clients}</p>
            <h2 id="host-offers" className="section-title">
              What we host
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              {corporateStory.offers.map((offer) => (
                <li key={offer}>{offer}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="band bg-white" aria-labelledby="kinds-heading">
        <div className="wrap">
          <h2 id="kinds-heading" className="section-title">
            How the days are shaped
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {corporateStory.kinds.map((kind) => (
              <article key={kind.title}>
                <h3 className="text-lg">{kind.title}</h3>
                <p className="mt-2 text-sm">{kind.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="band" aria-labelledby="activities-heading">
        <div className="wrap">
          <h2 id="activities-heading" className="section-title">
            A taste of the activities
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {corporateStory.activities.map((group) => (
              <article key={group.title}>
                <h3 className="eyebrow">{group.title}</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <ul className="mt-8 max-w-2xl list-disc space-y-2 pl-5">
            {corporateStory.events.map((event) => (
              <li key={event}>{event}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl">{corporateStory.outcomes}</p>
        </div>
      </section>
      <div className="wrap-wide pb-[var(--space-7)]">
        <PhotoStrip photos={[photos.corporateOutdoors, photos.winelands, photos.houtBay]} />
      </div>
      <section className="band steps-band bg-[var(--color-teal-ink)] text-white" aria-labelledby="tailor-heading">
        <div className="wrap">
          <h2 id="tailor-heading" className="section-title text-white">
            Can this breakaway be tailored?
          </h2>
          <p className="mt-4 max-w-xl text-white/90">{corporateStory.tailor}</p>
        </div>
      </section>
      <section id="enquire" className="band" aria-labelledby="ready-heading">
        <div className="wrap split reverse">
          <div className="split-copy enquire-panel rounded-[var(--radius-lg)] bg-white p-5 md:p-8">
            <h2 id="ready-heading" className="section-title">
              Ready to celebrate?
            </h2>
            <div className="mt-4">
              <EnquireForm defaultTour="corporate" heading="" />
            </div>
          </div>
          <div className="split-photo">
            <Image
              src={photos.corporate.src}
              alt={photos.corporate.alt}
              fill
              sizes="(min-width: 768px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
