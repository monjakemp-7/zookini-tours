import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site, socials } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start">
        <Logo variant="white" className="h-auto w-36" />
        <div>
          <p className="eyebrow light">Anita</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              {site.address}, {site.region}
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap gap-4 text-sm md:justify-end">
          {socials.map((social) => (
            <li key={social.href}>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="wrap mt-6 flex flex-col gap-2 border-t border-white/20 pt-4 text-sm text-white/80 sm:flex-row sm:justify-between">
        <p>{site.copyright}</p>
        <Link href="/policies">Policies</Link>
      </div>
    </footer>
  );
}
