import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lede: string;
  image?: string;
  imageAlt?: string;
};

export function PageHero({ eyebrow, title, lede, image, imageAlt }: PageHeroProps) {
  return (
    <section className="page-hero">
      {image ? (
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : null}
      <div className="hero-scrim" aria-hidden="true" />
      <div className="intro wrap relative z-10 py-8 md:py-10">
        <p className="eyebrow light">{eyebrow}</p>
        <h1 className="display text-white">{title}</h1>
        <p className="lede light">{lede}</p>
      </div>
    </section>
  );
}
