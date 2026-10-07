import Image from "next/image";
import { communityFeed, type CommunityTile } from "@/content/community";

type CommunityGridProps = {
  tiles: CommunityTile[];
};

export function CommunityGrid({ tiles }: CommunityGridProps) {
  const { eyebrow, title, lede, handle, profileUrl, cta } = communityFeed;

  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="community-heading">
      <div className="wrap-wide">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="flourish">{eyebrow}</p>
            <h2 id="community-heading" className="section-title mt-2">
              {title}
            </h2>
            <p className="lede">{lede}</p>
          </div>
          <a className="btn btn-solid shrink-0" href={profileUrl} target="_blank" rel="noopener noreferrer">
            {cta}
          </a>
        </div>
        <ul className="community-grid">
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
