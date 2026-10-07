import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { clients } from "@/content/site";

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
        eyebrow="Corporate"
        title="Take the team somewhere with a pulse"
        lede="We plan the travel, the stay, and the day programme. You arrive to something that still feels like a celebration."
        image="/images/corporate.jpg"
        imageAlt="People sharing a meal around a long table"
      />
      <section className="band">
        <div className="wrap grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p>
              Organising a breakaway can swallow a month. Zookini holds the detail: coaches, rooms, excursions,
              and the moment in the itinerary that people actually remember.
            </p>
            <p>We always have something special in mind — including for a Tuesday in the Winelands.</p>
            <h2 className="section-title pt-4">What we host</h2>
            <ul className="list-disc space-y-2 pl-5">
              {offers.map((offer) => (
                <li key={offer}>{offer}</li>
              ))}
            </ul>
          </div>
          <aside className="rounded-[var(--radius-lg)] bg-white p-6">
            <h2 className="text-xl">Teams we have hosted</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {clients.map((client) => (
                <li key={client} className="chip">
                  {client}
                </li>
              ))}
            </ul>
            <Link className="btn btn-solid mt-6" href="/enquire?tour=corporate">
              Plan a corporate breakaway
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
