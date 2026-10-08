"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { nav } from "@/content/site";
import { Logo } from "@/components/Logo";

export function SiteHeader() {
  const pathname = usePathname();
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);
  const solid = true;

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
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur ${scrolled || open ? "shadow-sm" : ""}`}
    >
      <div className="wrap flex h-20 items-center justify-between gap-4 sm:h-24">
        <Link href="/" aria-label="Zookini Tours home" className="shrink-0">
          <Logo
            variant={solid ? "colour" : "white"}
            labelled={false}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>
        <nav className="hidden items-center gap-4 lg:flex" aria-label="Primary">
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
        <Link className="btn btn-solid hidden lg:inline-flex" href="/enquire">
          Enquire
        </Link>
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
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
