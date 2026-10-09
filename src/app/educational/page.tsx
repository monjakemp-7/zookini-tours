import { EnquireForm } from "@/components/EnquireForm";
import { PolaroidPhoto } from "@/components/PolaroidPhoto";
import { FactBar } from "@/components/FactBar";
import { PageHero } from "@/components/PageHero";
import { PhotoStrip } from "@/components/PhotoStrip";
import { photos } from "@/content/photos";
import { defaultWhatsAppMessage, educationalStory, whatsappHref } from "@/content/site";

export const metadata = {
  title: { absolute: "School and Educational Tours, South Africa, Zookini Tours" },
  description:
    "Every child remembers their school trips and tours! We ensure successful, enjoyable stress-free and unique day outings, camps and tours within South Africa.",
};

export default function EducationalPage() {
  return (
    <>
      <PageHero
        short
        eyebrow="Educational"
        title="South Africa is a treasure trove waiting to be discovered!"
        lede={educationalStory.lede}
        image={photos.educational.src}
        imageAlt={photos.educational.alt}
      />
      <FactBar
        facts={[
          { label: "Who", value: "Students of any age and at any academic stage" },
          { label: "What", value: "Day Excursions, Camps, All Inclusive Tours" },
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
              {educationalStory.offersTitle}
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
            sizes="(min-width: 768px) 640px, 92vw"
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
        <PhotoStrip photos={[photos.capeTown, photos.gardenRoute, photos.educational]} />
      </div>
      <section className="band steps-band bg-[var(--color-teal-ink)] text-white" aria-labelledby="tailor-heading">
        <div className="wrap">
          <h2 id="tailor-heading" className="section-title text-white">
            {educationalStory.tailorTitle}
          </h2>
          <p className="mt-4 max-w-xl text-white/90">{educationalStory.tailor}</p>
        </div>
      </section>
      <section id="enquire" className="band" aria-labelledby="ready-heading">
        <div className="wrap split">
          <div className="split-copy enquire-panel rounded-[var(--radius-lg)] bg-white p-5 md:p-8">
            <h2 id="ready-heading" className="section-title">
              Get in touch
            </h2>
            <div className="mt-4">
              <EnquireForm defaultTour="educational" heading="" />
            </div>
          </div>
          <PolaroidPhoto
            photo={photos.houtBay}
            tilt="right"
            className="split-photo"
            sizes="(min-width: 768px) 640px, 92vw"
          />
        </div>
      </section>
    </>
  );
}
