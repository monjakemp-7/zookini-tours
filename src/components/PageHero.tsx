import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lede: string;
  image?: string;
  imageAlt?: string;
  short?: boolean;
};

export function PageHero({ eyebrow, title, lede, image, imageAlt, short = false }: PageHeroProps) {
  return (
    <section className={`page-hero${image ? " has-photo" : ""}${short ? " is-short" : ""}`}>
      {image ? (
        <div className="parallax-frame" data-parallax>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="hero-scrim" aria-hidden="true" />
      <div className="intro wrap relative z-10 py-[var(--space-6)] md:py-[var(--space-7)]">
        <p className="eyebrow light">{eyebrow}</p>
        <h1 className="display text-white">{title}</h1>
        <p className="lede light">{lede}</p>
      </div>
    </section>
  );
}
