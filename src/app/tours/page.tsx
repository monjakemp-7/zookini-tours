import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { TourMosaic } from "@/components/TourMosaic";
import { tours } from "@/content/tours";

export const metadata = {
  title: "Tours",
  description:
    "Hand-crafted Zookini journeys: Cape Town, fynbos, food, art, wine, the Garden Route, bushveld, and the Drakensberg.",
};

export default function ToursPage({
  searchParams,
}: {
  searchParams: Promise<{ theme?: string }>;
}) {
  return (
    <>
      <PageHero
        eyebrow="Leisure"
        title="Tours with a point of view"
        lede="Theme-led journeys for 12 to 16 guests. Anita shapes the quote."
        image="/images/cape-town.jpg"
        imageAlt="Cape Town beneath Table Mountain"
      />
      <section className="band">
        <div className="wrap-wide">
          <Suspense fallback={<TourMosaic tours={tours} />}>
            <FilteredTours searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </>
  );
}

async function FilteredTours({
  searchParams,
}: {
  searchParams: Promise<{ theme?: string }>;
}) {
  const { theme } = await searchParams;
  return <TourMosaic tours={tours} initialTheme={theme} />;
}
