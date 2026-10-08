"use client";

import { useState, type FormEvent } from "react";
import { enquiryLabel, enquiryOptions } from "@/content/tours";
import { defaultWhatsAppMessage, site, whatsappHref } from "@/content/site";

type EnquireFormProps = {
  defaultTour?: string;
  heading?: string;
};

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  tour?: string;
  dates?: string;
};

const fieldIds = {
  name: "enquiry-name",
  email: "enquiry-email",
  phone: "enquiry-phone",
  tour: "enquiry-tour",
  dates: "enquiry-to",
} as const;

export function EnquireForm({ defaultTour = "not-sure", heading = "Send a note" }: EnquireFormProps) {
  const known = enquiryOptions.some((option) => option.value === defaultTour);
  const initialTour = known ? defaultTour : "not-sure";
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const whatsapp = whatsappHref(defaultWhatsAppMessage);

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

    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = "Add your name so we know who to reply to.";
    if (!email) nextErrors.email = "Add an email address we can reply to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "That email address does not look complete.";
    }
    if (!phone) nextErrors.phone = "Add a phone number.";
    if (!tour) nextErrors.tour = "Tell us what you are planning.";
    if (dateFrom && dateTo && dateTo < dateFrom) {
      nextErrors.dates = "The end date needs to come after the start.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      const first = (Object.keys(fieldIds) as Array<keyof typeof fieldIds>).find((key) => nextErrors[key]);
      if (first) document.getElementById(fieldIds[first])?.focus();
      return;
    }

    const body = [
      `Hello,`,
      ``,
      `I would like to enquire about a Zookini celebration.`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Planning: ${tourName}`,
      `Dates: ${dateFrom || "Flexible"}${dateTo ? ` to ${dateTo}` : ""}`,
      `Group size: ${groupSize || "Not sure yet"}`,
      ``,
      message || "No extra note.",
    ].join("\n");

    // Opens the guest's own email app. Nothing is sent until they send that message.
    try {
      const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`Zookini enquiry: ${tourName}`)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div>
        {heading ? (
          <h2 className="section-title" id="enquire-heading">
            {heading}
          </h2>
        ) : null}
        <p className={heading ? "mt-2 max-w-xl text-sm" : "max-w-xl text-sm"}>Fields marked * are required.</p>
      </div>
      {status === "error" ? (
        <p className="form-alert" role="alert">
          {Object.keys(errors).length > 0
            ? "Some fields need another look. You can also write to "
            : "The note did not open in your email app. Write to "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or <a href={whatsapp}>send a WhatsApp</a>.
        </p>
      ) : null}
      <div className="form-groups">
        <div className="form-group">
          <label className="field" htmlFor="enquiry-name">
            <span className="field-label">Name *</span>
            <input
              id="enquiry-name"
              name="name"
              autoComplete="name"
              required
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? "enquiry-name-error" : undefined}
            />
            {errors.name ? (
              <span id="enquiry-name-error" className="field-error">
                {errors.name}
              </span>
            ) : null}
          </label>
          <label className="field" htmlFor="enquiry-email">
            <span className="field-label">Email *</span>
            <input
              id="enquiry-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "enquiry-email-error" : undefined}
            />
            {errors.email ? (
              <span id="enquiry-email-error" className="field-error">
                {errors.email}
              </span>
            ) : null}
          </label>
          <label className="field" htmlFor="enquiry-phone">
            <span className="field-label">Phone *</span>
            <input
              id="enquiry-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
            />
            {errors.phone ? (
              <span id="enquiry-phone-error" className="field-error">
                {errors.phone}
              </span>
            ) : null}
          </label>
          <label className="field" htmlFor="enquiry-tour">
            <span className="field-label">What you are planning *</span>
            <select
              id="enquiry-tour"
              name="tour"
              defaultValue={initialTour}
              required
              aria-invalid={errors.tour ? true : undefined}
              aria-describedby={errors.tour ? "enquiry-tour-error" : undefined}
            >
              {enquiryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.tour ? (
              <span id="enquiry-tour-error" className="field-error">
                {errors.tour}
              </span>
            ) : null}
          </label>
        </div>
        <div className="form-group">
          <label className="field" htmlFor="enquiry-from">
            <span className="field-label">Preferred start</span>
            <input id="enquiry-from" name="dateFrom" type="date" />
          </label>
          <label className="field" htmlFor="enquiry-to">
            <span className="field-label">Preferred end</span>
            <input
              id="enquiry-to"
              name="dateTo"
              type="date"
              aria-invalid={errors.dates ? true : undefined}
              aria-describedby={errors.dates ? "enquiry-dates-error" : undefined}
            />
            {errors.dates ? (
              <span id="enquiry-dates-error" className="field-error">
                {errors.dates}
              </span>
            ) : null}
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
      {status === "success" ? (
        <p role="status" className="form-note">
          Your email app should open a message to {site.email}. Send it from there, and the note comes to our team. If
          the app does not open, write to us at that address or{" "}
          <a href={whatsapp}>send a WhatsApp</a>.
        </p>
      ) : null}
    </form>
  );
}
