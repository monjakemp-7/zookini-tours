import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { photos } from "@/content/photos";
import { site } from "@/content/site";

export const metadata = {
  title: "About",
  description:
    "Zookini Tours is a boutique house in the Cape Winelands, hand-crafting leisure, corporate, and educational journeys.",
};

export default function AboutPage() {
  return (
    <section className="band" aria-labelledby="about-heading">
      <div className="wrap split">
        <div className="split-photo">
          <Image
            src={photos.overberg.src}
            alt={photos.overberg.alt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="split-copy">
          <Logo variant="colour" className="h-auto w-40" />
          <p className="eyebrow">About</p>
          <h1 id="about-heading" className="section-title">
            Every tour is made for the group in front of us.
          </h1>
          <p>
            The house is at {site.address}. Journeys run through Cape Town, the West Coast, the Overberg, the
            Garden Route, the bushveld, and the Drakensberg.
          </p>
          <p>Anita is the person on the phone and in the inbox. There is no call centre between you and the plan.</p>
          <Link className="text-link" href="/tours">
            Browse tours
          </Link>
        </div>
      </div>
    </section>
  );
}
