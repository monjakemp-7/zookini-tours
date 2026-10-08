"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, tourWhatsAppMessage, whatsappHref, defaultWhatsAppMessage } from "@/content/site";
import { getTour } from "@/content/tours";

export function MobileEnquireBar() {
  const pathname = usePathname();
  const slug = pathname.startsWith("/tours/") ? pathname.slice("/tours/".length) : "";
  const tour = slug ? getTour(slug) : undefined;
  const enquireHref = tour ? "#enquire" : "/enquire";
  const message = tour ? tourWhatsAppMessage(tour.title) : defaultWhatsAppMessage;

  return (
    <div className="mobile-bar" role="region" aria-label="Quick contact">
      {tour ? (
        <a className="btn btn-solid" href={enquireHref}>
          Get in touch
        </a>
      ) : (
        <Link className="btn btn-solid" href={enquireHref}>
          Get in touch
        </Link>
      )}
      <a className="btn btn-line" href={whatsappHref(message)}>
        WhatsApp
      </a>
      <a className="btn btn-line" href={`tel:${site.phoneTel}`}>
        Phone us
      </a>
    </div>
  );
}
