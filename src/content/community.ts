import { socials } from "@/content/site";

/**
 * One tile in the homepage community grid.
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

const placeholders: CommunityTile[] = [
  { id: "wine", src: "/images/wine.jpg", alt: "Red wine poured into a glass", href: profile },
  { id: "cape-town", src: "/images/cape-town.jpg", alt: "Cape Town with the mountain behind the city", href: profile },
  { id: "art", src: "/images/art.jpg", alt: "A painting hanging in a gallery", href: profile },
  { id: "fynbos", src: "/images/fynbos.jpg", alt: "Pink blooms in a garden", href: profile },
  { id: "foodie", src: "/images/foodie.jpg", alt: "A table set for a shared meal", href: profile },
  { id: "west-coast", src: "/images/west-coast.jpg", alt: "Pale sand and blue sea", href: profile },
  { id: "garden-route", src: "/images/garden-route.jpg", alt: "A wave running up a sandy shore", href: profile },
  { id: "overberg", src: "/images/overberg.jpg", alt: "Green hills in soft morning light", href: profile },
  { id: "safari", src: "/images/safari.jpg", alt: "Elephants walking through dry grass", href: profile },
  { id: "drakensberg", src: "/images/drakensberg.jpg", alt: "A mountain ridge above a green valley", href: profile },
  { id: "corporate", src: "/images/corporate.jpg", alt: "People sharing a meal around a table", href: profile },
  { id: "educational", src: "/images/educational.jpg", alt: "Learners outdoors with books", href: profile },
];

/**
 * Placeholder grid until a real Instagram feed is connected.
 * To swap sources, return tiles from the API here and leave `CommunityGrid` as it is.
 */
export function getCommunityTiles(): CommunityTile[] {
  return placeholders;
}
