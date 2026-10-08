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
};

const instagram = socials.find((social) => social.label === "Instagram");

export const communityFeed = {
  title: "From the road",
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
  }));
}

export function communityTileLabel(tile: CommunityTile) {
  return `View this post on ${socialSourceLabel(tile.source)}. ${tile.alt}`;
}
