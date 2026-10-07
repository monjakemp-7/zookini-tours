import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site, socials, whatsappHref, defaultWhatsAppMessage } from "@/content/site";

export const metadata = {
  title: "Contact",
  description: "Call, email, or WhatsApp Anita at Zookini Tours in the Cape Winelands.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        lede="The shortest path to a Zookini tour is a conversation with Anita."
      />
      <section className="py-14">
        <div className="wrap grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p>
              <a className="text-lg text-[var(--color-teal-ink)]" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="text-lg text-[var(--color-teal-ink)]" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>
              {site.address}
              <br />
              {site.region}
            </p>
            <a className="btn btn-solid" href={whatsappHref(defaultWhatsAppMessage)}>
              WhatsApp Anita
            </a>
            <ul className="flex flex-wrap gap-4 pt-2 text-sm">
              {socials.map((social) => (
                <li key={social.href}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <blockquote className="rounded-[var(--radius-lg)] bg-white p-6">
            <p className="text-lg text-[var(--color-teal-ink)]">
              “A travel adventure has no substitute. It is the ultimate experience, your one big opportunity for
              flair.”
            </p>
            <footer className="mt-4 text-sm">Rosalind Massow</footer>
            <p className="mt-6 text-sm">
              Ready with dates and a group size?{" "}
              <Link href="/enquire" className="underline underline-offset-4">
                Use the enquiry form
              </Link>
              .
            </p>
          </blockquote>
        </div>
      </section>
    </>
  );
}
