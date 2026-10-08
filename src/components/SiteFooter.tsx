import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <>
      <div className="footer-ridge" aria-hidden="true" />
      <footer className="site-footer">
      <div className="wrap grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start">
        <Logo variant="white" className="h-auto w-36" />
        <div>
          <p className="eyebrow light">Get in touch</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.address}</li>
          </ul>
        </div>
        <SocialLinks tone="on-dark" className="md:justify-end" />
      </div>
      <div className="wrap mt-6 flex flex-col gap-2 border-t border-white/20 pt-4 text-sm text-white/80 sm:flex-row sm:justify-between">
        <p>{site.copyright}</p>
        <p className="flex gap-4">
          <Link href="/credits">Photo credits</Link>
          <Link href="/policies">How booking works</Link>
        </p>
      </div>
    </footer>
    </>
  );
}
