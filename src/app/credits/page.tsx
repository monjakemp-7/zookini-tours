import type { Metadata } from "next";
import { photoLibrary } from "@/content/photos";
import { socialPosts, socialSourceLabel, weddingPhotoCredit } from "@/content/social";

export const metadata: Metadata = {
  title: "Photo credits",
  description:
    "The photographs on Zookini Tours. Most are from Unsplash, taken in South Africa. Six frames are the house's own posts.",
};

export default function CreditsPage() {
  return (
    <section className="band">
      <div className="wrap max-w-3xl">
        <p className="eyebrow">Credits</p>
        <h1 className="section-title">Photographs</h1>
        <p className="mt-4 max-w-xl">
          Most of the photographs on this site are from Unsplash, all taken in South Africa. They stand in until the
          house&apos;s own photographs take their place. They are published under the Unsplash licence. The
          photographers are credited here. The people in the pictures are not endorsing Zookini Tours.
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
        <h2 className="section-title mt-10">Zookini Tours&apos; own posts</h2>
        <p className="mt-4 max-w-xl">
          These six frames are from the house&apos;s own Facebook and Instagram. They appear in the row on the homepage.
        </p>
        <ul className="credit-list">
          {socialPosts.map((post) => (
            <li key={post.id}>
              <p className="text-[var(--color-teal-ink)]">{post.alt}</p>
              <p className="text-sm">
                <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                  View this post on {socialSourceLabel(post.source)}
                </a>
                {post.photographer ? (
                  <>
                    {". Photo by "}
                    <a href={post.photographer.href} target="_blank" rel="noopener noreferrer">
                      {post.photographer.name}
                    </a>
                    {"."}
                  </>
                ) : (
                  "."
                )}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm">
          <a href={weddingPhotoCredit.href} target="_blank" rel="noopener noreferrer">
            {weddingPhotoCredit.label}
          </a>
        </p>
      </div>
    </section>
  );
}
