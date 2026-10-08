import Image from "next/image";
import { SocialLinks } from "@/components/SocialLinks";
import { communityFeed, type CommunityTile } from "@/content/community";

type CommunityGridProps = {
  tiles: CommunityTile[];
};

export function CommunityGrid({ tiles }: CommunityGridProps) {
  const { title, handle } = communityFeed;

  return (
    <section className="band ig-band bg-white" aria-labelledby="community-heading">
      <div className="wrap-wide">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <h2 id="community-heading" className="section-title">
            {title}
          </h2>
          <SocialLinks only="Instagram" className="shrink-0" />
        </div>
        <ul className="ig-row">
          {tiles.map((tile) => (
            <li key={tile.id}>
              <a
                className="community-tile"
                href={tile.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${tile.alt}. ${handle} on Instagram`}
              >
                <Image
                  src={tile.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
                <span className="community-scrim" aria-hidden="true" />
                <span className="community-handle">{handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
