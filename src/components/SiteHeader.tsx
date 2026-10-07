"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { defaultWhatsAppMessage, nav, whatsappHref } from "@/content/site";
import { Logo } from "@/components/Logo";

export function SiteHeader() {
  const pathname = usePathname();
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);
  const onHome = pathname === "/";
  const solid = !onHome || scrolled || open;

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${solid ? "bg-white/95 shadow-sm backdrop-blur" : "on-photo"}`}
    >
      <div className="wrap flex items-center justify-between gap-4 py-2">
        <Link href="/" aria-label="Zookini Tours home" className="shrink-0">
          <Logo
            layout="lockup"
            variant={solid ? "colour" : "white"}
            labelled={false}
            className="h-16 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/tours" ? pathname.startsWith("/tours") : pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a className="btn btn-line" href={whatsappHref(defaultWhatsAppMessage)}>
            WhatsApp
          </a>
          <Link className="btn btn-solid" href="/enquire">
            Enquire
          </Link>
        </div>
        <button
          type="button"
          className="btn btn-line lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <div id={menuId} className="menu-panel lg:hidden">
          <div className="wrap">
            <nav aria-label="Mobile">
              {nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link href="/enquire">Enquire</Link>
              <a href={whatsappHref(defaultWhatsAppMessage)}>WhatsApp</a>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
