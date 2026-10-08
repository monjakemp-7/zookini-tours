import Link from "next/link";
import { BrushHeading } from "@/components/BrushHeading";
import { Logo } from "@/components/Logo";
import { PolaroidPhoto } from "@/components/PolaroidPhoto";
import { photos } from "@/content/photos";
import { aboutStory } from "@/content/site";

export const metadata = {
  title: { absolute: "About Zookini Tours, South Africa, Zookini Tours" },
  description:
    "Zookini Tours believe in celebrating life! We celebrate people, food, nature, art, wine, all the finer things in life that give meaning to our souls!",
};

export default function AboutPage() {
  return (
    <>
      <section className="band" aria-labelledby="about-heading">
        <div className="wrap split">
          <PolaroidPhoto
            photo={photos.overberg}
            tilt="right"
            tape
            priority
            className="split-photo"
            sizes="(min-width: 768px) 42vw, 92vw"
          />
          <div className="split-copy">
            <Logo variant="colour" className="h-auto w-40" />
            <p className="eyebrow">About</p>
            <BrushHeading as="h1" id="about-heading" className="section-title">
              {aboutStory.title}
            </BrushHeading>
            {aboutStory.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link className="text-link" href="/tours">
              {aboutStory.link}
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
