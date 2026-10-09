import { socialPosts, socialSourceLabel, type SocialSource } from "@/content/social";
import { socials } from "@/content/site";

/**
 * One tile in the homepage social row.
 * The frames themselves live in `src/content/social.ts`.
 */
export type CommunityTile = {
  id: string;
  src: string;
  alt: string;
  href: string;
  source: SocialSource;
  objectPosition: string;
  /** Place or subject already named in the photograph's alt text. */
  caption: string;
};

const roadCaptions: Record<string, string> = {
  "post-01": "Cape Town City Hall",
  "post-02": "Aquarium",
  "post-03": "Wedding",
  "post-04": "Botanical garden",
  "post-05": "Newlands",
  "post-08": "Flowering garden",
};

const instagram = socials.find((social) => social.label === "Instagram");

export const communityFeed = {
  title: "Follow us on Instagram",
  handle: "@zookinitours",
  profileUrl: instagram?.href ?? "https://www.instagram.com/zookinitours/",
} as const;

export function getCommunityTiles(): CommunityTile[] {
  return socialPosts.map((post) => ({
    id: post.id,
    src: post.src,
    alt: post.alt,
    href: post.permalink,
    source: post.source,
    objectPosition: post.objectPosition,
    caption: roadCaptions[post.id] ?? post.alt,
  }));
}

export function communityTileLabel(tile: CommunityTile) {
  return `View this post on ${socialSourceLabel(tile.source)}. ${tile.alt}`;
}
