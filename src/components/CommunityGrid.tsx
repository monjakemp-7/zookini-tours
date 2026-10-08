import Image from "next/image";
import { communityFeed, type CommunityTile } from "@/content/community";

type CommunityGridProps = {
  tiles: CommunityTile[];
};

export function CommunityGrid({ tiles }: CommunityGridProps) {
  const { title, handle, profileUrl, cta } = communityFeed;

  return (
    <section className="band ig-band bg-white" aria-labelledby="community-heading">
      <div className="wrap-wide">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <h2 id="community-heading" className="section-title">
            {title}
          </h2>
          <a className="btn btn-solid shrink-0" href={profileUrl} target="_blank" rel="noopener noreferrer">
            {cta}
          </a>
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
