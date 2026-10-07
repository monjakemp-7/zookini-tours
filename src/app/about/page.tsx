import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata = {
  title: "About",
  description:
    "Zookini Tours is a boutique house in the Cape Winelands, hand-crafting leisure, corporate, and educational journeys.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A small house with a long table"
        lede="People, food, nature, art, and wine — the things that give a day its meaning."
      />
      <section className="band">
        <div className="wrap grid items-start gap-8 md:grid-cols-[12rem_1fr]">
          <Logo variant="colour" className="h-auto w-48" />
          <div className="max-w-2xl space-y-3">
            <p>Every tour is made for the group in front of us.</p>
            <p>
              The house is at {site.address}. Journeys run through Cape Town, the West Coast, the Overberg, the
              Garden Route, the bushveld, and the Drakensberg.
            </p>
            <p>Anita is the person on the phone and in the inbox. There is no call centre between you and the plan.</p>
            <Link className="btn btn-line mt-2" href="/tours">
              Browse tours
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
