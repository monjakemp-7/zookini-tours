import Link from "next/link";
import { PageHero } from "@/components/PageHero";

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
        eyebrow="Educational"
        title="The outdoor classroom"
        lede="School trips people remember: learning, laughter, and a plan that teachers do not have to carry alone."
        image="/images/educational.jpg"
        imageAlt="Learners outdoors with books"
      />
      <section className="band">
        <div className="wrap grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p>
              Every child remembers a school trip. Zookini builds those days for learners of any age — epic enough
              to matter, organised enough for the staff on the bus.
            </p>
            <h2 className="section-title pt-2">Out there, class looks like this</h2>
            <ul className="list-disc space-y-2 pl-5">
              {classroom.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 className="section-title pt-4">We can arrange</h2>
            <ul className="list-disc space-y-2 pl-5">
              {offers.map((offer) => (
                <li key={offer}>{offer}</li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-[var(--radius-lg)] bg-white p-6">
            <h2 className="text-xl">Plan a school trip</h2>
            <p className="mt-3 text-sm">
              Share the grade, the dates you hope for, and whether you need a day out or a camp. Anita will come
              back with a clear plan.
            </p>
            <Link className="btn btn-solid mt-6" href="/enquire?tour=educational">
              Plan a school trip
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
