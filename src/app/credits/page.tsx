import type { Metadata } from "next";
import { photoLibrary } from "@/content/photos";
import { socialPosts, socialSourceLabel, weddingPhotoCredit } from "@/content/social";
import { soundCredits } from "@/content/sounds";

export const metadata: Metadata = {
  title: { absolute: "Photo credits, South Africa, Zookini Tours" },
  description:
    "The photographs and tour sounds on the Zookini Tours website. Most photographs are from Unsplash and were taken in South Africa. Six are from our own Facebook and Instagram.",
};

export default function CreditsPage() {
  return (
    <section className="band">
      <div className="wrap max-w-3xl">
        <p className="eyebrow">Credits</p>
        <h1 className="section-title">Photographs</h1>
        <p className="mt-4 max-w-3xl">
          Most of the photographs on this website are from Unsplash. They were all taken in South Africa and are used
          under the Unsplash licence. The photographers are credited below. The people in the photographs do not
          endorse Zookini Tours.
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
        <h2 className="section-title mt-10">From our own Facebook and Instagram</h2>
        <p className="mt-4 max-w-3xl">
          These six photographs are from our own Facebook and Instagram pages and appear on our home page.
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
        <h2 id="sounds" className="section-title mt-10">
          Sounds
        </h2>
        <p className="mt-4 max-w-3xl">
          The listen buttons on the tour pages play short loops mixed for Zookini Tours. These Freesound recordings
          require attribution.
        </p>
        <ul className="credit-list">
          {soundCredits.required.map((sound) => (
            <li key={sound.page}>
              <p className="text-sm">
                &quot;
                <a href={sound.page} target="_blank" rel="noopener noreferrer">
                  {sound.title}
                </a>
                &quot; by{" "}
                <a href={sound.authorUrl} target="_blank" rel="noopener noreferrer">
                  {sound.author}
                </a>
                , licensed under{" "}
                <a href={sound.licenceUrl} target="_blank" rel="noopener noreferrer">
                  {sound.licence}
                </a>
                . {sound.note}
              </p>
            </li>
          ))}
        </ul>
        <h3 className="sounds-subhead">Public domain recordings</h3>
        <p className="mt-3 max-w-3xl text-sm">
          These public domain recordings were also used. Attribution is not required.
        </p>
        <ul className="credit-list">
          {soundCredits.courtesy.map((sound) => (
            <li key={sound.page}>
              <p className="text-sm">
                &quot;
                <a href={sound.page} target="_blank" rel="noopener noreferrer">
                  {sound.title}
                </a>
                &quot; by{" "}
                <a href={sound.authorUrl} target="_blank" rel="noopener noreferrer">
                  {sound.author}
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
