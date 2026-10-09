import { BrushHeading } from "@/components/BrushHeading";
import { RoadCollage } from "@/components/RoadCollage";
import { SocialLinks } from "@/components/SocialLinks";
import { communityFeed, type CommunityTile } from "@/content/community";

type CommunityGridProps = {
  tiles: CommunityTile[];
};

export function CommunityGrid({ tiles }: CommunityGridProps) {
  const { title, handle } = communityFeed;

  return (
    <section className="band road-band" aria-labelledby="community-heading">
      <div className="wrap-wide">
        <div className="road-intro">
          <div>
            <BrushHeading id="community-heading" className="section-title">
              {title}
            </BrushHeading>
            <p className="road-line">{handle}</p>
          </div>
          <SocialLinks include={["Facebook", "Instagram"]} className="shrink-0" />
        </div>
        <RoadCollage tiles={tiles} />
      </div>
    </section>
  );
}
