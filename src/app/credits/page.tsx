import type { Metadata } from "next";
import { photoLibrary } from "@/content/photos";

export const metadata: Metadata = {
  title: "Photo credits",
  description: "Photographers behind the placeholder pictures on Zookini Tours, all from Unsplash and all taken in South Africa.",
};

export default function CreditsPage() {
  return (
    <section className="band">
      <div className="wrap max-w-3xl">
        <p className="eyebrow">Credits</p>
        <h1 className="section-title">Photographs</h1>
        <p className="mt-4 max-w-xl">
          These are placeholder pictures from Unsplash, all taken in South Africa, until Anita&apos;s own photographs
          take their place. They are published under the Unsplash licence. The photographers are credited here.
          The people in the pictures are not endorsing Zookini Tours.
        </p>
        <ul className="credit-list">
          {photoLibrary.map((photo) => (
            <li key={photo.id}>
              <p className="text-[var(--color-teal-ink)]">{photo.alt}</p>
              <p className="text-sm">
                {photo.location}. Photo by{" "}
                <a href={photo.profile} target="_blank" rel="noopener noreferrer">
                  {photo.photographer}
                </a>{" "}
                on{" "}
                <a href={photo.page} target="_blank" rel="noopener noreferrer">
                  Unsplash
                </a>
                .
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
