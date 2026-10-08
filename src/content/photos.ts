/**
 * Placeholder photography for the marketing site.
 * Swap the house's own pictures by replacing `src` (and clearing the Unsplash
 * credit fields when the photo is no longer from Unsplash).
 * Components read this file only. They do not hard-code photo paths.
 */
export type Photo = {
  id: string;
  src: string;
  alt: string;
  photographer: string;
  profile: string;
  page: string;
  location: string;
  /** Short place name for a polaroid caption. Empty when the place is unknown. */
  caption: string;
};

export const photos = {
  hero: {
    id: "hero",
    src: "/images/hero.jpg",
    alt: "A Cape Dutch homestead among vineyard rows in Franschhoek",
    photographer: "Matthijs van Schuppen",
    profile: "https://unsplash.com/@mattvs",
    page: "https://unsplash.com/photos/green-forest-AJjaMQeLUak",
    location: "Holden Manz Country House, Franschhoek",
    caption: "Franschhoek",
  },
  wine: {
    id: "wine",
    src: "/images/wine.jpg",
    alt: "Two women toasting with wine glasses",
    photographer: "Anna Fothergill",
    profile: "https://unsplash.com/@anna_fothers",
    page: "https://unsplash.com/photos/a-woman-holding-a-glass-of-wine-in-front-of-another-woman-fHq5Jsop01c",
    location: "Cape Town",
    caption: "Cape Town",
  },
  capeTown: {
    id: "cape-town",
    src: "/images/cape-town.jpg",
    alt: "Table Mountain across the water at dusk",
    photographer: "Brent Ninaber",
    profile: "https://unsplash.com/@brentninaber",
    page: "https://unsplash.com/photos/a-rocky-beach-with-a-body-of-water-and-mountains-in-the-background-with-table-mountain-in-the-background-zrOjcQXAdvk",
    location: "Cape Town",
    caption: "Cape Town",
  },
  art: {
    id: "art",
    src: "/images/art.jpg",
    alt: "A sculpture resting in the grass at a Franschhoek wine estate",
    photographer: "Sheila C",
    profile: "https://unsplash.com/@qld_traveller",
    page: "https://unsplash.com/photos/a-statue-of-a-person-laying-on-the-ground-pxzn1QO4lZw",
    location: "Leeu Estates, Franschhoek",
    caption: "Franschhoek",
  },
  fynbos: {
    id: "fynbos",
    src: "/images/fynbos.jpg",
    alt: "Pale protea blooms at Kirstenbosch",
    photographer: "Laura Flint",
    profile: "https://unsplash.com/@lauraflint",
    page: "https://unsplash.com/photos/purple-flower-buds-in-tilt-shift-lens-IHKycOIfWf4",
    location: "Kirstenbosch, Cape Town",
    caption: "Kirstenbosch, Cape Town",
  },
  foodie: {
    id: "foodie",
    src: "/images/foodie.jpg",
    alt: "Bright houses along a Bo-Kaap street",
    photographer: "Loyiso Mali",
    profile: "https://unsplash.com/@umfoti",
    page: "https://unsplash.com/photos/a-row-of-multi-colored-houses-on-a-street-5oYjOEsK0iw",
    location: "Bo-Kaap, Cape Town",
    caption: "Bo-Kaap, Cape Town",
  },
  westCoast: {
    id: "west-coast",
    src: "/images/west-coast.jpg",
    alt: "A whitewashed cottage above the sea at Paternoster",
    photographer: "Grant Durr",
    profile: "https://unsplash.com/@grant_durr",
    page: "https://unsplash.com/photos/a-house-on-a-hill-overlooking-a-body-of-water-NaJ1yAMVrkA",
    location: "Paternoster",
    caption: "Paternoster",
  },
  gardenRoute: {
    id: "garden-route",
    src: "/images/garden-route.jpg",
    alt: "Mist over the Knysna Heads",
    photographer: "Jana Warrington",
    profile: "https://unsplash.com/@janaawarrington01",
    page: "https://unsplash.com/photos/green-trees-on-mountain-near-body-of-water-during-daytime-HKK_aO22SIg",
    location: "Knysna",
    caption: "Knysna",
  },
  overberg: {
    id: "overberg",
    src: "/images/overberg.jpg",
    alt: "Vineyard rows with a mountain behind them",
    photographer: "Devon Janse van Rensburg",
    profile: "https://unsplash.com/@huntleytography",
    page: "https://unsplash.com/photos/grapes-field-viewing-mountain-b-Tr-l0iGLQ",
    location: "Hermanus",
    caption: "Hermanus",
  },
  safari: {
    id: "safari",
    src: "/images/safari.jpg",
    alt: "Guests on an open game-drive vehicle at sunset",
    photographer: "Gilley Aguilar",
    profile: "https://unsplash.com/@gilleyaguilar",
    page: "https://unsplash.com/photos/people-on-a-safari-game-drive-at-sunset-09vynThd8EI",
    location: "Madikwe",
    caption: "Madikwe",
  },
  drakensberg: {
    id: "drakensberg",
    src: "/images/drakensberg.jpg",
    alt: "A golden grass ridge under a pale sky",
    photographer: "Rosan Harmens",
    profile: "https://unsplash.com/@rooszan",
    page: "https://unsplash.com/photos/landscape-photo-of-brown-mountain-during-daytime-_wI8FVyZB3M",
    location: "Drakensberg",
    caption: "Drakensberg",
  },
  corporate: {
    id: "corporate",
    src: "/images/corporate.jpg",
    alt: "A group sharing a terrace lunch",
    photographer: "Anna Fothergill",
    profile: "https://unsplash.com/@anna_fothers",
    page: "https://unsplash.com/photos/a-group-of-people-sitting-at-a-table-with-wine-glasses-sRl4Azjob8I",
    location: "Cape Town",
    caption: "Cape Town",
  },
  educational: {
    id: "educational",
    src: "/images/educational.jpg",
    alt: "A child with binoculars in the fynbos",
    photographer: "Frank",
    profile: "https://unsplash.com/@generein",
    page: "https://unsplash.com/photos/a-young-boy-standing-in-a-field-looking-at-the-sun-D_NHk96lNG4",
    location: "Gondwana Private Game Reserve",
    caption: "Gondwana Private Game Reserve",
  },
  signature: {
    id: "signature",
    src: "/images/signature-long-lunch.jpg",
    alt: "A toast with the Simonsberg behind the glasses",
    photographer: "Matthieu Joannon",
    profile: "https://unsplash.com/@matt_j",
    page: "https://unsplash.com/photos/three-person-holding-wine-glasses-ZvqoxOrIiYI",
    location: "Delaire Graff Estate, Stellenbosch",
    caption: "Stellenbosch",
  },
  winelands: {
    id: "winelands",
    src: "/images/winelands.jpg",
    alt: "People walking through an oak-lined gateway in Stellenbosch",
    photographer: "Omar",
    profile: "https://unsplash.com/@ommyjay",
    page: "https://unsplash.com/photos/view-through-a-white-archway-to-people-walking-among-trees-8ErSaR6zpqM",
    location: "Stellenbosch",
    caption: "Stellenbosch",
  },
  houtBay: {
    id: "hout-bay",
    src: "/images/hout-bay.jpg",
    alt: "Hout Bay and the Sentinel in calm light",
    photographer: "Matthieu Joannon",
    profile: "https://unsplash.com/@matt_j",
    page: "https://unsplash.com/photos/photo-of-mountain-near-body-of-water-7y-7d7i1NPM",
    location: "Hout Bay, Cape Town",
    caption: "Hout Bay, Cape Town",
  },
  corporateOutdoors: {
    id: "corporate-outdoors",
    src: "/images/corporate-outdoors.jpg",
    alt: "A small group walking through grassland at golden hour",
    photographer: "Arthur Hickinbotham",
    profile: "https://unsplash.com/@arthurhick",
    page: "https://unsplash.com/photos/group-of-people-walking-on-grass-field-during-golden-hour-MVT0Nz9YClY",
    location: "Wild Coast",
    caption: "Wild Coast",
  },
  heritage: {
    id: "heritage",
    src: "/images/heritage-visit.jpg",
    alt: "Visitors among exhibits at the Apartheid Museum",
    photographer: "Michael Schofield",
    profile: "https://unsplash.com/@coachpotatoes",
    page: "https://unsplash.com/photos/people-walking-on-sidewalk-during-daytime-IR-64Oe8S7A",
    location: "Apartheid Museum, Johannesburg",
    caption: "Johannesburg",
  },
  enquireBand: {
    id: "enquire-band",
    src: "/images/enquire-band.jpg",
    alt: "Evening sky over farmland near Stellenbosch",
    photographer: "Ben",
    profile: "https://unsplash.com/@bengerber05",
    page: "https://unsplash.com/photos/a-view-of-a-field-with-a-mountain-in-the-background-IOjs8WutjtM",
    location: "Stellenbosch",
    caption: "Stellenbosch",
  },
} as const satisfies Record<string, Photo>;

export type PhotoId = keyof typeof photos;

export const photoLibrary: Photo[] = Object.values(photos);

/**
 * Home hero sequence. Swap a frame by editing this list.
 * The group frame is the approved terrace lunch. The social posts are
 * portrait, or narrower than a full-bleed hero.
 */
export const heroSlides: readonly Photo[] = [
  photos.hero,
  photos.westCoast,
  photos.safari,
  photos.corporate,
];

/** Three supporting frames per tour. The hero image stays separate. */
export const tourGalleries: Record<string, readonly Photo[]> = {
  "women-and-wine-weekend": [photos.winelands, photos.signature, photos.overberg],
  "i-love-cape-town": [photos.houtBay, photos.foodie, photos.fynbos],
  "life-is-art": [photos.art, photos.winelands, photos.heritage],
  "protea-and-fynbos": [photos.fynbos, photos.gardenRoute, photos.overberg],
  "time-to-taste-foodie": [photos.foodie, photos.wine, photos.winelands],
  "wondrous-west-coast": [photos.westCoast, photos.houtBay, photos.gardenRoute],
  "glorious-garden-route": [photos.gardenRoute, photos.westCoast, photos.drakensberg],
  "overwhelming-overberg": [photos.overberg, photos.winelands, photos.fynbos],
  "bushveld-safari": [photos.safari, photos.drakensberg, photos.corporateOutdoors],
  "drakensberg-adventure": [photos.drakensberg, photos.safari, photos.overberg],
};

export function galleryFor(slug: string): Photo[] {
  return [...(tourGalleries[slug] ?? [photos.winelands, photos.houtBay, photos.capeTown])];
}

export function photoBySrc(src: string): Photo | undefined {
  return photoLibrary.find((photo) => photo.src === src);
}
