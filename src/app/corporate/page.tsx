import Image from "next/image";
import { EnquireForm } from "@/components/EnquireForm";
import { FactBar } from "@/components/FactBar";
import { PageHero } from "@/components/PageHero";
import { PhotoStrip } from "@/components/PhotoStrip";
import { photos } from "@/content/photos";
import { defaultWhatsAppMessage, whatsappHref } from "@/content/site";

export const metadata = {
  title: "Corporate",
  description:
    "Corporate breakaways, incentives, and team days, planned with the same celebratory care as a Zookini leisure tour.",
};

const offers = [
  "Corporate breakaways",
  "Executive retreats",
  "Incentive programmes",
  "Team building",
  "End-of-year celebrations",
  "Tailor-made tours with a theme",
];

export default function CorporatePage() {
  return (
    <>
      <PageHero
        short
        eyebrow="Corporate"
        title="Take the team somewhere with a pulse"
        lede="We plan the travel, the stay, and the day programme."
        image={photos.corporate.src}
        imageAlt={photos.corporate.alt}
      />
      <FactBar
        facts={[
          { label: "Group size", value: "Your team" },
          { label: "Typical length", value: "A day or a stay" },
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
            <p>
              Organising a breakaway can swallow a month. Zookini holds the detail: coaches, rooms, excursions,
              and the moment in the itinerary that people actually remember.
            </p>
            <p>We always have something special in mind — including for a Tuesday in the Winelands.</p>
            <h2 id="host-offers" className="section-title">
              What we host
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              {offers.map((offer) => (
                <li key={offer}>{offer}</li>
              ))}
            </ul>
          </div>
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
          <p className="mt-4 max-w-xl text-white/90">You arrive to something that still feels like a celebration.</p>
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
