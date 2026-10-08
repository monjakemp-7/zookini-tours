"use client";

import { useState, type FormEvent } from "react";
import { enquiryLabel, enquiryOptions } from "@/content/tours";
import { site } from "@/content/site";

type EnquireFormProps = {
  defaultTour?: string;
  heading?: string;
};

export function EnquireForm({ defaultTour = "not-sure", heading = "Send a note" }: EnquireFormProps) {
  const known = enquiryOptions.some((option) => option.value === defaultTour);
  const initialTour = known ? defaultTour : "not-sure";
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const tour = String(data.get("tour") ?? initialTour);
    const dateFrom = String(data.get("dateFrom") ?? "");
    const dateTo = String(data.get("dateTo") ?? "");
    const groupSize = String(data.get("groupSize") ?? "");
    const message = String(data.get("message") ?? "").trim();
    const tourName = enquiryLabel(tour);

    const body = [
      `Hello,`,
      ``,
      `I would like to enquire about a Zookini celebration.`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Tour or pillar: ${tourName}`,
      `Dates: ${dateFrom || "Flexible"}${dateTo ? ` to ${dateTo}` : ""}`,
      `Group size: ${groupSize || "Not sure yet"}`,
      ``,
      message || "No extra note.",
    ].join("\n");

    // TODO: Replace this mailto stub with a real enquiry backend
    // (for example a Route Handler plus an email provider). v1 only opens the guest's mail app.
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`Zookini enquiry: ${tourName}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus(
      `Your email app should open a message to ${site.email}. If it does not, write to us at that address or use WhatsApp.`,
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div>
        {heading ? (
          <h2 className="section-title" id="enquire-heading">
            {heading}
          </h2>
        ) : null}
        <p className={heading ? "mt-2 max-w-xl text-sm" : "max-w-xl text-sm"}>Fields marked * are required.</p>
      </div>
      <div className="form-groups">
        <div className="form-group">
          <label className="field" htmlFor="enquiry-name">
            <span className="field-label">Name *</span>
            <input id="enquiry-name" name="name" autoComplete="name" required />
          </label>
          <label className="field" htmlFor="enquiry-email">
            <span className="field-label">Email *</span>
            <input id="enquiry-email" name="email" type="email" autoComplete="email" required />
          </label>
          <label className="field" htmlFor="enquiry-phone">
            <span className="field-label">Phone *</span>
            <input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" required />
          </label>
          <label className="field" htmlFor="enquiry-tour">
            <span className="field-label">Tour or pillar *</span>
            <select id="enquiry-tour" name="tour" defaultValue={initialTour} required>
              {enquiryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label className="field" htmlFor="enquiry-from">
            <span className="field-label">Preferred start</span>
            <input id="enquiry-from" name="dateFrom" type="date" />
          </label>
          <label className="field" htmlFor="enquiry-to">
            <span className="field-label">Preferred end</span>
            <input id="enquiry-to" name="dateTo" type="date" />
          </label>
        </div>
        <div className="form-group">
          <label className="field field-span" htmlFor="enquiry-group">
            <span className="field-label">Group size</span>
            <input
              id="enquiry-group"
              name="groupSize"
              type="number"
              min={1}
              inputMode="numeric"
              placeholder="Usually 12 to 16"
            />
          </label>
          <label className="field field-span" htmlFor="enquiry-message">
            <span className="field-label">Message</span>
            <textarea
              id="enquiry-message"
              name="message"
              placeholder="Who is travelling, and what you hope the days will feel like."
            />
          </label>
        </div>
      </div>
      <button className="btn btn-solid w-fit" type="submit">
        Send the note
      </button>
      {status ? (
        <p role="status" className="text-sm text-[var(--color-teal-ink)]">
          {status}
        </p>
      ) : null}
    </form>
  );
}
