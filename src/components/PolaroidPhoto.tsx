import Image from "next/image";
import type { Photo } from "@/content/photos";

type PolaroidPhotoProps = {
  photo: Pick<Photo, "src" | "alt" | "caption">;
  /** Deterministic lean. Left is about -2deg, right about +2.5deg. */
  tilt?: "left" | "right";
  /** One or two frames only. A short strip of muted tape on the top corner. */
  tape?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function PolaroidPhoto({
  photo,
  tilt = "left",
  tape = false,
  priority = false,
  sizes = "(min-width: 768px) 42vw, 92vw",
  className,
}: PolaroidPhotoProps) {
  const classes = [
    "polaroid",
    tilt === "right" ? "polaroid-right" : "polaroid-left",
    tape ? "has-tape" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <figure className={classes}>
      <div className="polaroid-photo">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
      <figcaption className="polaroid-caption">{photo.caption}</figcaption>
    </figure>
  );
}
