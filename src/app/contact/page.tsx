import { EnquireForm } from "@/components/EnquireForm";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";
import { defaultWhatsAppMessage, homeQuote, site, whatsappHref } from "@/content/site";

export const metadata = {
  title: { absolute: "Contact Us, Winelands, South Africa, Zookini Tours" },
  description:
    "We look forward to assist on bringing your dream to life. Please complete the form, send us an e-mail or phone us. We look forward to hear from you!",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in Touch"
        lede="We look forward to assist on bringing your dream to life. Please complete the form, send us an e-mail or phone us. We look forward to hear from you!"
      />
      <section className="band">
        <div className="wrap contact-layout">
          <div className="contact-details">
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
            <p>
              <a className="text-link" href="#enquire">
                Complete the enquiry form
              </a>
            </p>
            <blockquote className="quote-block">
              <p>{homeQuote.text}</p>
              <footer>{homeQuote.name}</footer>
            </blockquote>
            <SocialLinks />
          </div>
          <div className="contact-card" id="enquire">
            <EnquireForm heading="Get in Touch" />
          </div>
        </div>
      </section>
    </>
  );
}
