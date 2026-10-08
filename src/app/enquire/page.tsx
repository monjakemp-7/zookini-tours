import { Suspense } from "react";
import { EnquireForm } from "@/components/EnquireForm";
import { PageHero } from "@/components/PageHero";
import { site, whatsappHref, defaultWhatsAppMessage } from "@/content/site";

export const metadata = {
  title: { absolute: "Enquire, South Africa, Zookini Tours" },
  description:
    "We look forward to assist on bringing your dream to life. Please complete the form, send us an e-mail or phone us. We look forward to hear from you!",
};

export default function EnquirePage({
  searchParams,
}: {
  searchParams: Promise<{ tour?: string }>;
}) {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in Touch"
        lede="We look forward to assist on bringing your dream to life."
      />
      <section className="band">
        <div className="wrap grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <div id="enquire" className="enquire-panel rounded-[var(--radius-lg)] bg-white p-5 md:p-8">
            <Suspense fallback={<p>Loading the form.</p>}>
              <EnquireWithTour searchParams={searchParams} />
            </Suspense>
          </div>
          <aside className="hidden space-y-3 lg:block">
            <h2 className="text-xl">Prefer to talk?</h2>
            <a className="btn btn-line btn-block" href={whatsappHref(defaultWhatsAppMessage)}>
              WhatsApp
            </a>
            <a className="btn btn-line btn-block" href={`tel:${site.phoneTel}`}>
              Phone us
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
  return <EnquireForm defaultTour={tour ?? "not-sure"} heading="Get in Touch" />;
}
