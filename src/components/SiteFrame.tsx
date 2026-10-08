"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { MobileEnquireBar } from "@/components/MobileEnquireBar";
import { MotionEffects } from "@/components/MotionEffects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const home = pathname === "/";

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <SiteHeader />
      <MotionEffects />
      <main id="content" className={home ? undefined : "pt-20 sm:pt-24"}>
        {children}
      </main>
      <SiteFooter />
      <MobileEnquireBar />
    </>
  );
}
