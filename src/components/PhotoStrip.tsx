import Image from "next/image";
import type { Photo } from "@/content/photos";

export function PhotoStrip({ photos }: { photos: Photo[] }) {
  return (
    <ul className="photo-strip">
      {photos.map((photo) => (
        <li key={photo.id}>
          <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
        </li>
      ))}
    </ul>
  );
}
