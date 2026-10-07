import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Policies",
  description: "Zookini Tours booking conditions: deposits, payment, changes, and cancellations.",
};

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Booking conditions"
        lede="One page for the terms. Tour pages keep a short summary and send you here."
      />
      <section className="py-14">
        <div className="wrap max-w-3xl space-y-8">
          <p>
            These notes follow the conditions published by Zookini Tours. A quote is not a contract until the
            deposit arrives. Prices are given as a lump sum for the tour.
          </p>
          <section>
            <h2 className="section-title">Deposit and balance</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Confirming a reservation asks for a 50% non-refundable deposit of the tour price.</li>
              <li>The contract starts when that deposit is received.</li>
              <li>Until then, correspondence is a quotation and can change with price or availability.</li>
              <li>The balance is due six weeks before departure. Email proof of the EFT.</li>
            </ul>
          </section>
          <section>
            <h2 className="section-title">Cancellation</h2>
            <p className="mt-2 text-sm">Cancel in writing. From the day Zookini receives it:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>41 days or more before departure: 25% deposit is forfeited.</li>
              <li>40 to 14 days before departure: 50% of the tour price is forfeited.</li>
              <li>13 days or fewer before departure: 100% of the tour price is forfeited.</li>
            </ul>
          </section>
          <section>
            <h2 className="section-title">Changes</h2>
            <p className="mt-3">
              There is no refund for unused services or a change of plan during the trip. Amendments to a
              confirmed booking are charged at R1 000, subject to change, plus the cost of the new arrangements.
            </p>
          </section>
          <section>
            <h2 className="section-title">Insurance, care, and travel documents</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Please take out travel and cancellation insurance, and cover health, luggage, and money.</li>
              <li>
                Zookini takes care with the plan, the itinerary, and the suppliers it chooses. It does not accept
                liability for death, injury, illness, or loss, or for a supplier’s own shortcomings.
              </li>
              <li>Visas, customs, fitness to travel, and any malaria advice are the guest’s responsibility.</li>
              <li>Self-drive guests need a valid licence, including one from their home country if a rental asks.</li>
              <li>The agreement is governed by South African law.</li>
            </ul>
          </section>
          <section>
            <h2 className="section-title">Group size</h2>
            <p className="mt-3">
              Most tours run with a minimum of 12 and a maximum of 16 guests, with a Tour Director. Women & Wine
              Weekend is for women only. I Love Cape Town can host a larger group — ask before you assume.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
