import Image from "next/image";
import { EnquireForm } from "@/components/EnquireForm";
import { FactBar } from "@/components/FactBar";
import { PageHero } from "@/components/PageHero";
import { PhotoStrip } from "@/components/PhotoStrip";
import { photos } from "@/content/photos";
import { defaultWhatsAppMessage, whatsappHref } from "@/content/site";

export const metadata = {
  title: "Educational",
  description:
    "School trips, camps, and curriculum days with Zookini. The outdoor classroom, planned with care for learners and staff.",
};

const classroom = [
  "Education can be fun without being thin",
  "Ideas show up more clearly outside the classroom",
  "Learners practise looking, asking, and looking after one another",
];

const offers = [
  "Curriculum day excursions",
  "Sport groups: the day, the stay, and the transport",
  "Camps for adventure, leadership, choir, sport, or mother and daughter weekends",
  "All-inclusive tours for achievers, art, consumer studies, and recreation",
  "Grade farewells and end-of-year functions",
];

export default function EducationalPage() {
  return (
    <>
      <PageHero
        short
        eyebrow="Educational"
        title="The outdoor classroom"
        lede="A plan that teachers do not have to carry alone."
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
            <p>
              Every child remembers a school trip. Zookini builds those days for learners of any age — epic enough
              to matter, organised enough for the staff on the bus.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              {classroom.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 id="arrange-heading" className="section-title">
              We can arrange
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              {offers.map((offer) => (
                <li key={offer}>{offer}</li>
              ))}
            </ul>
          </div>
          <div className="split-photo">
            <Image
              src={photos.fynbos.src}
              alt={photos.fynbos.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <div className="wrap-wide pb-[var(--space-7)]">
        <PhotoStrip photos={[photos.heritage, photos.gardenRoute, photos.educational]} />
      </div>
      <section className="band steps-band bg-[var(--color-teal-ink)] text-white" aria-labelledby="tailor-heading">
        <div className="wrap">
          <h2 id="tailor-heading" className="section-title text-white">
            Can this trip be tailored?
          </h2>
          <p className="mt-4 max-w-xl text-white/90">
            Share the grade, the dates you hope for, and whether you need a day out or a camp.
          </p>
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
          <div className="split-photo">
            <Image
              src={photos.houtBay.src}
              alt={photos.houtBay.alt}
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
