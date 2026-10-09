import type { ClusterFrame } from "@/content/travel-clusters";
import { lifeArtCluster, lifeArtGallery, lifeArtHero } from "@/content/life-art";

export type TourPhoto = ClusterFrame & { id: string };

export type TourFrameSet = {
  cluster: readonly TourPhoto[];
  /** Three frames for the photo strip. The third sits beside the enquire form. */
  gallery: readonly TourPhoto[];
  hero: { src: string; alt: string; position?: string };
};

function photo(
  id: string,
  src: string,
  alt: string,
  caption: string,
): TourPhoto {
  return { id, src, alt, caption };
}

const cheers = photo(
  "cheers",
  "/images/tours/women-and-wine-weekend/cheers.jpg",
  "Two women toasting with wine glasses outdoors",
  "Cheers!",
);
const cottage = photo(
  "winelands-cottage",
  "/images/tours/women-and-wine-weekend/winelands-cottage.jpg",
  "An oak garden with a white gabled cottage",
  "Winelands",
);
const statue = photo(
  "winelands-statue",
  "/images/tours/women-and-wine-weekend/winelands-statue.jpg",
  "A statue in a garden with mountains behind",
  "Winelands",
);
const lavender = photo(
  "lavender",
  "/images/tours/women-and-wine-weekend/lavender.jpg",
  "Rows of lavender with mountains behind them",
  "Lavender",
);
const capeDutch = photo(
  "cape-dutch",
  "/images/tours/women-and-wine-weekend/cape-dutch.jpg",
  "A Cape Dutch manor house",
  "Cape Dutch homestead",
);
const vineyards = photo(
  "vineyards",
  "/images/tours/women-and-wine-weekend/vineyards.jpg",
  "A vineyard valley with mountains beyond",
  "Vineyards",
);
const goldenHour = photo(
  "golden-hour",
  "/images/tours/women-and-wine-weekend/golden-hour.jpg",
  "A statue fountain at sunset",
  "Golden hour",
);

const fynbos = photo(
  "fynbos-cliffs",
  "/images/tours/i-love-cape-town/fynbos.jpg",
  "Fynbos under mountain cliffs",
  "Fynbos",
);
const tableMountain = photo(
  "table-mountain-lawn",
  "/images/tours/i-love-cape-town/table-mountain.jpg",
  "A lawn with Table Mountain behind it",
  "Table Mountain",
);
const capeWheel = photo(
  "cape-wheel",
  "/images/tours/i-love-cape-town/cape-wheel.jpg",
  "A ferris wheel",
  "Cape Wheel",
);
const waterfront = photo(
  "va-waterfront",
  "/images/tours/i-love-cape-town/va-waterfront.jpg",
  "The Clock Tower with Table Mountain behind it",
  "V&A Waterfront",
);
const penguins = photo(
  "penguins",
  "/images/tours/i-love-cape-town/penguins.jpg",
  "Penguins at sunset",
  "Penguins",
);
const lionsHead = photo(
  "lions-head",
  "/images/tours/i-love-cape-town/lions-head.jpg",
  "A cable car and Lion's Head above the clouds",
  "Lion's Head",
);
const aquarium = photo(
  "aquarium",
  "/images/tours/i-love-cape-town/aquarium.jpg",
  "An aquarium tunnel",
  "Aquarium",
);
const kingProtea = photo(
  "king-protea",
  "/images/tours/i-love-cape-town/king-protea.jpg",
  "A king protea flower",
  "King Protea",
);

/**
 * Five prints, back to front, so the front frame drops last.
 * These photographs are Monja's and are not listed on the credits page.
 */
const wineWeekend: TourFrameSet = {
  cluster: [cottage, vineyards, capeDutch, lavender, cheers],
  gallery: [statue, lavender, goldenHour],
  hero: {
    src: vineyards.src,
    alt: vineyards.alt,
    position: "center 60%",
  },
};

const capeTown: TourFrameSet = {
  cluster: [capeWheel, waterfront, penguins, tableMountain, lionsHead],
  gallery: [fynbos, aquarium, kingProtea],
  hero: {
    src: tableMountain.src,
    alt: tableMountain.alt,
    position: "center 55%",
  },
};

const lifeArt: TourFrameSet = {
  cluster: lifeArtCluster,
  gallery: lifeArtGallery,
  hero: {
    src: lifeArtHero.src,
    alt: lifeArtHero.alt,
    position: lifeArtHero.position,
  },
};

const sets: Record<string, TourFrameSet> = {
  "women-and-wine-weekend": wineWeekend,
  "i-love-cape-town": capeTown,
  "life-is-art": lifeArt,
};

export function framesFor(slug: string): TourFrameSet | undefined {
  return sets[slug];
}

export const wineWeekendHero = wineWeekend.hero;
export const capeTownHero = capeTown.hero;
export { lifeArtHero };
