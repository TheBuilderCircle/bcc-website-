"use client";

import { useState, type FormEvent } from "react";
import {
  registrationForms,
  type FieldConfig,
  type RegistrationType,
} from "@/lib/registration-forms";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`
  : null;

type Status = "idle" | "submitting" | "success" | "error";

const controlClasses =
  "w-full rounded-control border border-input-border bg-ink px-4 font-body text-form-field text-white outline-none placeholder:text-muted focus:border-accent";

function Field({ field }: { field: FieldConfig }) {
  const { name, label, kind, options, required, wide, placeholder } = field;
  return (
    <div className={`flex flex-col items-start ${wide ? "sm:col-span-2" : ""}`}>
      <label htmlFor={name} className="pb-2 font-space-grotesk text-form-label font-medium text-white">
        {label}
        {!required && <span className="pl-2 font-body text-sm text-muted">Optional</span>}
      </label>
      {kind === "select" ? (
        <select
          id={name}
          name={name}
          defaultValue=""
          required={required}
          className={`${controlClasses} h-[54px]`}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : kind === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          required={required}
          placeholder={placeholder ?? label}
          className={`${controlClasses} resize-y py-3`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={kind}
          required={required}
          placeholder={placeholder ?? label}
          className={`${controlClasses} h-[54px]`}
        />
      )}
    </div>
  );
}

export default function RegisterForm({
  initialType = "delegate",
}: {
  initialType?: RegistrationType;
}) {
  const [type, setType] = useState<RegistrationType>(initialType);
  const [status, setStatus] = useState<Status>("idle");
  const config = registrationForms.find((f) => f.type === type)!;

  function selectType(next: RegistrationType) {
    setType(next);
    setStatus("idle");
  }

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
        <div
          role="tablist"
          aria-label="Registration type"
          className="mb-8 grid grid-cols-2 gap-2 rounded-control border border-input-border p-1.5 sm:grid-cols-4"
        >
          {registrationForms.map((f) => {
            const active = f.type === type;
            return (
              <button
                key={f.type}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => selectType(f.type)}
                className={`h-11 rounded-[8px] font-space-grotesk text-form-label font-medium transition-colors ${
                  active ? "bg-accent text-white" : "text-muted hover:bg-white/10 hover:text-white"
                }`}
              >
                {f.tab}
              </button>
            );
          })}
        </div>

        <div className="pb-6">
          <h2 className="font-space-grotesk text-experience-title font-medium text-white">
            {config.heading}
          </h2>
          <p className="pt-2 font-body text-base text-muted">{config.blurb}</p>
        </div>

        <input type="hidden" name="registrationType" value={type} />
        <div key={type} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {config.fields.map((field) => (
            <Field key={field.name} field={field} />
          ))}
        </div>

        <label className="flex items-start gap-3 py-7">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 h-5 w-5 shrink-0 rounded-checkbox border border-[#767676] bg-white accent-accent"
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
            {status === "submitting" ? "Submitting…" : config.submitLabel}
          </button>
        </div>

        {status === "success" && (
          <p className="text-center font-body text-sm text-accent-deep">
            {config.successMessage}
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
