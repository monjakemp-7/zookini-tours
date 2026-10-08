import { photos, type Photo } from "@/content/photos";
import { socials } from "@/content/site";

/**
 * One tile in the homepage Instagram row.
 * Keep this shape if the source changes: a later Instagram feed
 * only needs to map media into `{ id, src, alt, href }`.
 * `CommunityGrid` does not care whether `src` is a local file or a CDN URL.
 * Remote hosts still need to be allowed in `next.config.ts` `images.remotePatterns`.
 */
export type CommunityTile = {
  id: string;
  src: string;
  alt: string;
  href: string;
};

const instagram = socials.find((social) => social.label === "Instagram");

export const communityFeed = {
  title: "From the road",
  handle: "@zookinitours",
  profileUrl: instagram?.href ?? "https://www.instagram.com/zookinitours/",
  cta: "Follow on Instagram",
} as const;

const profile = communityFeed.profileUrl;

/** Six frames that are not the homepage hero, intro, pause, or closing band. */
const row: Photo[] = [
  photos.houtBay,
  photos.corporateOutdoors,
  photos.heritage,
  photos.overberg,
  photos.drakensberg,
  photos.westCoast,
];

/**
 * Placeholder row until a real Instagram feed is connected.
 * To swap sources, return tiles from the API here and leave `CommunityGrid` as it is.
 */
export function getCommunityTiles(): CommunityTile[] {
  return row.map((photo) => ({
    id: photo.id,
    src: photo.src,
    alt: photo.alt,
    href: profile,
  }));
}
