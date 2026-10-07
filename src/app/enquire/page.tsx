import { Suspense } from "react";
import { EnquireForm } from "@/components/EnquireForm";
import { PageHero } from "@/components/PageHero";
import { site, whatsappHref, defaultWhatsAppMessage } from "@/content/site";

export const metadata = {
  title: "Enquire",
  description: "Ask Anita about a Zookini tour, a corporate breakaway, or a school trip.",
};

export default function EnquirePage({
  searchParams,
}: {
  searchParams: Promise<{ tour?: string }>;
}) {
  return (
    <>
      <PageHero
        eyebrow="Enquire"
        title="Tell us what you want to celebrate"
        lede="A short note is enough. Anita replies in person — there is no cart and no calendar to fight with."
      />
      <section className="py-14">
        <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div id="enquire" className="rounded-[var(--radius-lg)] bg-white p-5 md:p-8">
            <Suspense fallback={<p>Loading the form…</p>}>
              <EnquireWithTour searchParams={searchParams} />
            </Suspense>
          </div>
          <aside className="space-y-4">
            <h2 className="text-xl">Prefer to talk?</h2>
            <p className="text-sm">WhatsApp and the phone are both Anita. Use whichever is easier.</p>
            <a className="btn btn-solid btn-block" href={whatsappHref(defaultWhatsAppMessage)}>
              WhatsApp {site.phoneDisplay}
            </a>
            <a className="btn btn-line btn-block" href={`tel:${site.phoneTel}`}>
              Call
            </a>
            <a className="btn btn-line btn-block" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}

async function EnquireWithTour({
  searchParams,
}: {
  searchParams: Promise<{ tour?: string }>;
}) {
  const { tour } = await searchParams;
  return <EnquireForm defaultTour={tour ?? "not-sure"} />;
}
