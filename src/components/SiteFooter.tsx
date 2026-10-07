import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, site, socials } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo variant="white" className="h-auto w-52" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/90">
            Hand-crafted tours from the Cape Winelands. We always have something special in mind.
          </p>
        </div>
        <div>
          <p className="eyebrow light">Visit</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/enquire">Enquire</Link>
            </li>
            <li>
              <Link href="/policies">Policies</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow light">Anita</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.address}</li>
            <li>{site.region}</li>
          </ul>
          <ul className="mt-4 flex flex-wrap gap-4 text-sm">
            {socials.map((social) => (
              <li key={social.href}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap mt-10 flex flex-col gap-2 border-t border-white/20 pt-4 text-sm text-white/80 sm:flex-row sm:justify-between">
        <p>{site.copyright}</p>
        <p>Celebrating Life!</p>
      </div>
    </footer>
  );
}
