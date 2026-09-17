"use client";

import { useState, type FormEvent } from "react";
import { experienceTracks } from "@/lib/content";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`
  : null;

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "h-[54px] w-full rounded-control border border-input-border bg-ink px-4 font-body text-form-field text-white outline-none placeholder:text-muted";

function Field({ label, name, type }: { label: string; name: string; type: string }) {
  return (
    <div className="flex flex-col items-start">
      <label htmlFor={name} className="pb-2 font-space-grotesk text-form-label font-medium text-white">
        {label}
      </label>
      <input id={name} name={name} type={type} placeholder={label} required className={fieldClasses} />
    </div>
  );
}

export default function RegisterForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!FORMSPREE_ENDPOINT) {
      console.error(
        "RegisterForm: NEXT_PUBLIC_FORMSPREE_FORM_ID is not set. See .env.local.example.",
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-[768px] flex-col px-6">
      <div className="flex flex-col gap-0 rounded-panel p-10 text-left">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Full Name" name="fullName" type="text" />
          <Field label="Email Address" name="email" type="email" />
          <Field label="Phone / WhatsApp Number" name="phone" type="tel" />
          <Field label="Organisation / Company" name="organisation" type="text" />
          <Field label="Job Title / Role" name="jobTitle" type="text" />
          <Field label="Country" name="country" type="text" />
        </div>

        <div className="flex flex-col items-start gap-2 py-5">
          <label htmlFor="interest" className="font-space-grotesk text-form-label font-medium text-white">
            I am primarily interested in
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue=""
            required
            className="h-[54px] w-full rounded-control border border-input-border bg-ink px-4 font-body text-form-field text-white outline-none"
          >
            <option value="" disabled>
              Select an option
            </option>
            {experienceTracks.map((track) => (
              <option key={track.id} value={track.title}>
                {track.title}
              </option>
            ))}
          </select>
        </div>

        <label className="flex items-start gap-3 py-7">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 h-5 w-5 shrink-0 rounded-checkbox border-0 bg-white accent-accent"
          />
          <span className="max-w-[608px] font-body text-consent text-muted">
            I agree to receive information and updates relating to Blockchain &amp; Crypto
            Conference Ghana.
          </span>
        </label>

        <div className="py-8">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="h-[54px] w-full rounded-control bg-accent font-space-grotesk text-btn-form font-medium text-white hover:bg-accent-hover disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting…" : "Submit registration"}
          </button>
        </div>

        {status === "success" && (
          <p className="text-center font-body text-sm text-accent-deep">
            Thanks &mdash; your registration has been received.
          </p>
        )}
        {status === "error" && (
          <p className="text-center font-body text-sm text-[#ff6b6b]">
            Something went wrong. Please try again, or email us directly.
          </p>
        )}
      </div>

      <p className="py-8 text-center font-playfair text-register-note italic text-white/90">
        Final venue information will be announced following confirmation.
      </p>
    </form>
  );
}
