import { experienceTracks } from "@/lib/content";

export type RegistrationType = "delegate" | "partner" | "volunteer" | "speaker";

export type FieldConfig = {
  name: string;
  label: string;
  kind: "text" | "email" | "tel" | "url" | "select" | "textarea";
  options?: string[];
  required?: boolean;
  /** Spans both columns on wide screens. */
  wide?: boolean;
  placeholder?: string;
};

export type RegistrationForm = {
  type: RegistrationType;
  tab: string;
  heading: string;
  blurb: string;
  submitLabel: string;
  formspreeEndpoint: string;
  fields: FieldConfig[];
};

const trackTitles = experienceTracks.map((t) => t.title);

const country: FieldConfig = { name: "country", label: "Country", kind: "text", required: true };
const phone: FieldConfig = {
  name: "phone",
  label: "Phone / WhatsApp Number",
  kind: "tel",
  required: true,
};

export const registrationForms: RegistrationForm[] = [
  {
    type: "delegate",
    formspreeEndpoint: "https://formspree.io/f/xzezedvd",
    tab: "Delegate",
    heading: "Attend as a delegate",
    blurb: "Join two days of conversations, workshops and connections across Africa's blockchain ecosystem.",
    submitLabel: "Register as a delegate",
    fields: [
      { name: "fullName", label: "Full Name", kind: "text", required: true },
      { name: "email", label: "Email Address", kind: "email", required: true },
      phone,
      { name: "organisation", label: "Organisation / Company", kind: "text", required: true },
      { name: "jobTitle", label: "Job Title / Role", kind: "text", required: true },
      country,
      {
        name: "interest",
        label: "I am primarily interested in",
        kind: "select",
        options: trackTitles,
        required: true,
        wide: true,
      },
      {
        name: "heardFrom",
        label: "How did you hear about BCCG?",
        kind: "select",
        options: ["Social media", "Friend or colleague", "Email", "Event or community", "Other"],
        wide: true,
      },
    ],
  },
  {
    type: "partner",
    formspreeEndpoint: "https://formspree.io/f/xnpnpjzr",
    tab: "Partner",
    heading: "Partner with BCCG",
    blurb: "Tell us about your organisation and how you would like to be part of BCCG 2026.",
    submitLabel: "Submit partnership enquiry",
    fields: [
      { name: "fullName", label: "Contact Person", kind: "text", required: true },
      { name: "email", label: "Work Email", kind: "email", required: true },
      phone,
      { name: "organisation", label: "Organisation / Company", kind: "text", required: true },
      { name: "jobTitle", label: "Job Title / Role", kind: "text", required: true },
      { name: "website", label: "Company Website", kind: "url", placeholder: "https://" },
      country,
      {
        name: "partnershipType",
        label: "Partnership type",
        kind: "select",
        options: [
          "Title / headline sponsor",
          "Session or track sponsor",
          "Exhibitor",
          "Media partner",
          "Community partner",
          "Other",
        ],
        required: true,
      },
      {
        name: "message",
        label: "How would you like to partner with us?",
        kind: "textarea",
        wide: true,
        required: true,
      },
    ],
  },
  {
    type: "volunteer",
    formspreeEndpoint: "https://formspree.io/f/xaeneqbr",
    tab: "Volunteer",
    heading: "Volunteer at BCCG",
    blurb: "Help us run a great conference and get a behind-the-scenes look at the event.",
    submitLabel: "Apply to volunteer",
    fields: [
      { name: "fullName", label: "Full Name", kind: "text", required: true },
      { name: "email", label: "Email Address", kind: "email", required: true },
      phone,
      { name: "city", label: "City of Residence", kind: "text", required: true },
      { name: "occupation", label: "Occupation / School", kind: "text", required: true },
      {
        name: "tshirtSize",
        label: "T-shirt size",
        kind: "select",
        options: ["S", "M", "L", "XL", "XXL"],
        required: true,
      },
      {
        name: "volunteerArea",
        label: "Where would you like to help?",
        kind: "select",
        options: [
          "Registration & guest welcome",
          "Logistics & venue operations",
          "Media, content & photography",
          "Speaker & VIP liaison",
          "Tech & AV support",
          "Wherever I'm needed",
        ],
        required: true,
      },
      {
        name: "availability",
        label: "Availability",
        kind: "select",
        options: ["Both days (13–14 Nov)", "13 November only", "14 November only"],
        required: true,
      },
      {
        name: "experience",
        label: "Previous volunteering or event experience",
        kind: "textarea",
        wide: true,
      },
    ],
  },
  {
    type: "speaker",
    formspreeEndpoint: "https://formspree.io/f/mqpapedz",
    tab: "Speaker",
    heading: "Speak at BCCG",
    blurb: "Share your expertise with builders, investors and policymakers. Submissions are reviewed by our programme team.",
    submitLabel: "Submit speaker proposal",
    fields: [
      { name: "fullName", label: "Full Name", kind: "text", required: true },
      { name: "email", label: "Email Address", kind: "email", required: true },
      phone,
      { name: "organisation", label: "Organisation / Company", kind: "text", required: true },
      { name: "jobTitle", label: "Job Title / Role", kind: "text", required: true },
      country,
      {
        name: "profileUrl",
        label: "LinkedIn or X profile",
        kind: "url",
        placeholder: "https://",
        required: true,
        wide: true,
      },
      { name: "talkTitle", label: "Proposed talk title", kind: "text", required: true, wide: true },
      {
        name: "track",
        label: "Topic track",
        kind: "select",
        options: trackTitles,
        required: true,
      },
      {
        name: "format",
        label: "Session format",
        kind: "select",
        options: ["Keynote", "Panel", "Fireside chat", "Workshop", "Lightning talk"],
        required: true,
      },
      { name: "abstract", label: "Talk abstract", kind: "textarea", required: true, wide: true },
      { name: "bio", label: "Speaker bio", kind: "textarea", required: true, wide: true },
      {
        name: "pastTalks",
        label: "Links to past talks (optional)",
        kind: "textarea",
        wide: true,
      },
    ],
  },
];

export function isRegistrationType(v: string | undefined): v is RegistrationType {
  return registrationForms.some((f) => f.type === v);
}
