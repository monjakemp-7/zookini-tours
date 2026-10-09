import type { ClusterFrame } from "@/content/travel-clusters";

export type LifeArtPhoto = ClusterFrame & { id: string };

const zeitz: LifeArtPhoto = {
  id: "zeitz-mocaa",
  src: "/images/tours/life-is-art/zeitz-mocaa.jpg",
  alt: "Spiral concrete atrium inside Zeitz MOCAA",
  caption: "Zeitz MOCAA",
};

const silo: LifeArtPhoto = {
  id: "the-silo",
  src: "/images/tours/life-is-art/the-silo.jpg",
  alt: "Bulging pillow windows in the concrete facade of The Silo",
  caption: "The Silo",
};

const canvases: LifeArtPhoto = {
  id: "canvases",
  src: "/images/tours/life-is-art/canvases.jpg",
  alt: "Painted canvases of a zebra, an elephant, and a woman with bananas",
  caption: "Life is Art",
};

const boKaap: LifeArtPhoto = {
  id: "bo-kaap",
  src: "/images/tours/life-is-art/bo-kaap.jpg",
  alt: "A Bo-Kaap street of brightly painted houses with Table Mountain behind",
  caption: "Bo-Kaap",
};

const streetArt: LifeArtPhoto = {
  id: "street-art",
  src: "/images/tours/life-is-art/street-art.jpg",
  alt: "Street art mural of two boys in beaded caps on a gable wall",
  caption: "Street art",
};

/**
 * Five prints for the Life is Art highlights pile.
 * Back photos are listed first so the front print drops last.
 * These photographs are Monja's and are not listed on the credits page.
 */
export const lifeArtCluster = [canvases, boKaap, zeitz, silo, streetArt] as const satisfies readonly LifeArtPhoto[];

/** Replaces the generic gallery. The third frame sits beside the enquire form. */
export const lifeArtGallery = [zeitz, silo, canvases] as const satisfies readonly LifeArtPhoto[];

export const lifeArtHero = {
  src: boKaap.src,
  alt: boKaap.alt,
  /** Keep Table Mountain and the painted houses in the short hero crop. */
  position: "center 34%",
};
