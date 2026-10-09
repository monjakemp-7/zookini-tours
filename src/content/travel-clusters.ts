import { photos, type Photo } from "@/content/photos";
import { socialPosts } from "@/content/social";

export type ClusterFrame = Pick<Photo, "src" | "alt" | "caption"> & {
  objectPosition?: string;
};

function socialFrame(id: string, caption: string): ClusterFrame {
  const post = socialPosts.find((item) => item.id === id);
  if (!post) throw new Error(`Missing social photo ${id}`);
  return {
    src: post.src,
    alt: post.alt,
    caption,
    objectPosition: post.objectPosition,
  };
}

/**
 * Five frames for the home "Every tour is unique" block.
 * None of these photographs are in the Leisure, Corporate, or Educational piles.
 * The Stellenbosch lunch stays at the front. Back photos are listed first.
 */
export const houseCluster = [
  photos.drakensberg,
  photos.gardenRoute,
  photos.overberg,
  photos.hero,
  photos.signature,
] as const satisfies readonly ClusterFrame[];

/**
 * Five frames for the home Leisure, Corporate, and Educational panels.
 * Back photos are listed first so the existing drop settles the front frame last.
 * Captions are place names or what the photograph shows.
 */
export const travelClusters = {
  leisure: [
    photos.winelands,
    photos.safari,
    photos.westCoast,
    photos.houtBay,
    photos.wine,
  ],
  corporate: [
    photos.corporateOutdoors,
    socialFrame("post-08", "Flowering garden"),
    socialFrame("post-04", "Botanical garden"),
    socialFrame("post-03", "Wedding"),
    photos.corporate,
  ],
  schools: [
    photos.fynbos,
    photos.art,
    socialFrame("post-02", "Aquarium"),
    photos.educational,
    socialFrame("post-01", "Cape Town City Hall"),
  ],
} as const satisfies Record<string, readonly ClusterFrame[]>;
