"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  registrationForms,
  type FieldConfig,
  type RegistrationType,
} from "@/lib/registration-forms";

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
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (status === "success") dialogRef.current?.showModal();
  }, [status]);

  function selectType(next: RegistrationType) {
    setType(next);
    setStatus("idle");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus("submitting");
    try {
      const res = await fetch(config.formspreeEndpoint, {
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
    <>
      <form onSubmit={handleSubmit} className="mx-auto flex max-w-[768px] flex-col px-4 sm:px-6">
        <div className="flex flex-col gap-0 rounded-panel p-2 text-left sm:p-10">
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
                    active
                      ? "bg-accent text-white"
                      : "text-muted hover:bg-white/10 hover:text-white"
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

      <dialog
        ref={dialogRef}
        aria-labelledby="register-success-title"
        onClose={() => setStatus("idle")}
        onClick={(e) => {
          // Clicks on the backdrop land on the <dialog> itself, not its inner panel.
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-[480px] rounded-panel border border-input-border bg-ink p-0 text-white backdrop:bg-black/70"
      >
        <div className="flex flex-col items-center gap-6 px-6 py-10 text-center sm:px-10">
          <h2
            id="register-success-title"
            className="font-space-grotesk text-experience-title font-medium text-white"
          >
            Registration received
          </h2>
          <p className="font-body text-base text-muted">
            Thank you for your interest in the Blockchain Conference. Your registration has been
            received.
          </p>
          <button
            type="button"
            autoFocus
            onClick={() => dialogRef.current?.close()}
            className="h-[54px] w-full rounded-control bg-accent font-space-grotesk text-btn-form font-medium text-white hover:bg-accent-hover"
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}
