import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { photos } from "@/content/photos";
import { aboutStory } from "@/content/site";

export const metadata = {
  title: "About",
  description:
    "Zookini Tours plans leisure, corporate, and school journeys from Paarl. Someone on the team answers every enquiry.",
};

export default function AboutPage() {
  return (
    <>
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
              {aboutStory.title}
            </h1>
            {aboutStory.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link className="text-link" href="/tours">
              See the journeys
            </Link>
          </div>
        </div>
      </section>
      <section className="band bg-white" aria-labelledby="approach-heading">
        <div className="wrap">
          <h2 id="approach-heading" className="section-title">
            {aboutStory.approachTitle}
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {aboutStory.approach.map((item) => (
              <li key={item} className="rounded-[var(--radius-md)] border border-[var(--color-teal-accent)] bg-[var(--color-surface-offwhite)] p-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
