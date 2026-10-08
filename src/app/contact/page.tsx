import { EnquireForm } from "@/components/EnquireForm";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";
import { defaultWhatsAppMessage, site, whatsappHref } from "@/content/site";

export const metadata = {
  title: "Contact",
  description: "Call, email, or send a note to Zookini Tours in Paarl, in the Cape Winelands.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        lede="Call, email, or send a note. Someone on the team replies in person."
      />
      <section className="band">
        <div className="wrap contact-layout">
          <div className="contact-details">
            <h2 className="section-title">Talk to us</h2>
            <p>A note, a call, or a WhatsApp reaches our team directly.</p>
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
            <p>{site.address}</p>
            <a className="btn btn-line" href={whatsappHref(defaultWhatsAppMessage)}>
              WhatsApp
            </a>
            <SocialLinks />
          </div>
          <div className="contact-card">
            <EnquireForm heading="Send a note" />
          </div>
        </div>
      </section>
    </>
  );
}
