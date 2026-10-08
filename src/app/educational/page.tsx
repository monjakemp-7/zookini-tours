import { EnquireForm } from "@/components/EnquireForm";
import { PolaroidPhoto } from "@/components/PolaroidPhoto";
import { FactBar } from "@/components/FactBar";
import { PageHero } from "@/components/PageHero";
import { PhotoStrip } from "@/components/PhotoStrip";
import { photos } from "@/content/photos";
import { defaultWhatsAppMessage, educationalStory, whatsappHref } from "@/content/site";

export const metadata = {
  title: "Educational",
  description:
    "School trips, camps, and curriculum days. We hold the plan so teachers are not carrying it alone.",
};

export default function EducationalPage() {
  return (
    <>
      <PageHero
        short
        eyebrow="Educational"
        title="The outdoor classroom"
        lede={educationalStory.lede}
        image={photos.educational.src}
        imageAlt={photos.educational.alt}
      />
      <FactBar
        facts={[
          { label: "Group size", value: "A class or a camp" },
          { label: "Typical length", value: "A day out, or a camp" },
        ]}
        whatsappHref={whatsappHref(defaultWhatsAppMessage)}
      />
      <section className="band" aria-labelledby="arrange-heading">
        <div className="wrap split reverse">
          <div className="split-copy">
            <p>{educationalStory.intro}</p>
            <ul className="list-disc space-y-2 pl-5">
              {educationalStory.classroom.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 id="arrange-heading" className="section-title">
              We can arrange
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              {educationalStory.offers.map((offer) => (
                <li key={offer}>{offer}</li>
              ))}
            </ul>
          </div>
          <PolaroidPhoto
            photo={photos.fynbos}
            tilt="left"
            className="split-photo"
            sizes="(min-width: 768px) 42vw, 92vw"
          />
        </div>
      </section>
      <section className="band bg-white">
        <div className="wrap max-w-3xl">
          <p>{educationalStory.journeys}</p>
          <p className="mt-4">{educationalStory.outcomes}</p>
        </div>
      </section>
      <div className="wrap-wide pb-[var(--space-7)]">
        <PhotoStrip photos={[photos.heritage, photos.gardenRoute, photos.educational]} />
      </div>
      <section className="band steps-band bg-[var(--color-teal-ink)] text-white" aria-labelledby="tailor-heading">
        <div className="wrap">
          <h2 id="tailor-heading" className="section-title text-white">
            Can we change this trip?
          </h2>
          <p className="mt-4 max-w-xl text-white/90">{educationalStory.tailor}</p>
        </div>
      </section>
      <section id="enquire" className="band" aria-labelledby="ready-heading">
        <div className="wrap split">
          <div className="split-copy enquire-panel rounded-[var(--radius-lg)] bg-white p-5 md:p-8">
            <h2 id="ready-heading" className="section-title">
              Ready to celebrate?
            </h2>
            <div className="mt-4">
              <EnquireForm defaultTour="educational" heading="" />
            </div>
          </div>
          <PolaroidPhoto
            photo={photos.houtBay}
            tilt="right"
            className="split-photo"
            sizes="(min-width: 768px) 40vw, 92vw"
          />
        </div>
      </section>
    </>
  );
}
