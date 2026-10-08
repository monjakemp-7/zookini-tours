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
      <section className="band">
        <div className="wrap grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <div id="enquire" className="enquire-panel rounded-[var(--radius-lg)] bg-white p-5 md:p-8">
            <Suspense fallback={<p>Loading the form…</p>}>
              <EnquireWithTour searchParams={searchParams} />
            </Suspense>
          </div>
          <aside className="hidden space-y-3 lg:block">
            <h2 className="text-xl">Prefer to talk?</h2>
            <a className="btn btn-solid btn-block" href={whatsappHref(defaultWhatsAppMessage)}>
              WhatsApp
            </a>
            <a className="btn btn-line btn-block" href={`tel:${site.phoneTel}`}>
              Call
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
  return <EnquireForm defaultTour={tour ?? "not-sure"} heading="Send a note" />;
}
