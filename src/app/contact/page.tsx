import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";
import { site, whatsappHref, defaultWhatsAppMessage } from "@/content/site";

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
        lede="Call, email, or send a WhatsApp. Someone on the team will reply."
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
          <SocialLinks className="pt-1" />
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
