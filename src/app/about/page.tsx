import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata = {
  title: "About",
  description:
    "Zookini Tours is a boutique house in the Cape Winelands, hand-crafting leisure, corporate, and educational journeys. Celebrating Life!",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A small house with a long table"
        lede="Zookini believes in celebrating life — people, food, nature, art, and wine. The things that give a day its meaning."
      />
      <section className="py-14 md:py-20">
        <div className="wrap grid items-start gap-12 md:grid-cols-[180px_1fr]">
          <Logo variant="colour" className="h-auto w-56" />
          <div className="max-w-2xl space-y-4">
            <p>
              Every tour is made for the group in front of us. We research, we negotiate, we organise. You pack
              your bags.
            </p>
            <p>
              The house sits in the Cape Winelands, at {site.address}. From there the journeys run through Cape
              Town, the West Coast, the Overberg, the Garden Route, the bushveld, and the Drakensberg.
            </p>
            <p>
              Anita is the person on the phone and in the inbox. There is no call centre between you and the
              plan.
            </p>
            <p className="flourish text-[var(--color-teal-dark)]">Celebrating Life!</p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link className="btn btn-solid" href="/enquire">
                Enquire
              </Link>
              <Link className="btn btn-line" href="/tours">
                Browse tours
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
