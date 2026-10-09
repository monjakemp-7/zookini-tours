import Image from "next/image";

type StripPhoto = {
  id: string;
  src: string;
  alt: string;
};

export function PhotoStrip({ photos }: { photos: readonly StripPhoto[] }) {
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
