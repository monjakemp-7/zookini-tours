import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site, socials, whatsappHref, defaultWhatsAppMessage } from "@/content/site";

export const metadata = {
  title: "Contact",
  description: "Call, email, or WhatsApp Zookini Tours in the Cape Winelands.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        lede="Call, email, or send a WhatsApp. We look forward to helping you bring a trip to life."
      />
      <section className="band">
        <div className="wrap max-w-xl space-y-4">
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
          <a className="btn btn-line hidden lg:inline-flex" href={whatsappHref(defaultWhatsAppMessage)}>
            WhatsApp
          </a>
          <ul className="flex flex-wrap gap-4 pt-1 text-sm">
            {socials.map((social) => (
              <li key={social.href}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm">
            <Link href="/enquire" className="underline underline-offset-4">
              Send dates and a group size
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
