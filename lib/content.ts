export type NavItem = {
  label: string;
  href?: string;
  anchor?: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // { label: "Experience", anchor: "experiences" },
  { label: "Partners", anchor: "partners" },
];

/** Home -> "#anchor", any other page -> "/#anchor" */
export function anchorHref(anchor: string, pathname: string) {
  return pathname === "/" ? `#${anchor}` : `/#${anchor}`;
}

export type ExperienceTrack = {
  id: string;
  title: string;
  subLine: string;
  body: string;
};

export const experienceTracks: ExperienceTrack[] = [
  {
    id: "policy-institutional-forum",
    title: "Policy & Institutional Forum",
    subLine: "Where innovation meets governance.",
    body:
      "Executive dialogue, regulatory conversations, institutional briefings and discussions around responsible adoption. For regulators, policymakers, financial institutions, legal professionals, compliance leaders and industry executives.",
  },
  {
    id: "developer-labs",
    title: "Developer Labs",
    subLine: "Where builders go deeper.",
    body:
      "Hands-on workshops, technical education, SDK training, developer programmes and opportunities to connect talent with global blockchain ecosystems. For developers, engineers, technical founders, students and protocol communities.",
  },
  {
    id: "product-marketplace",
    title: "Product Marketplace",
    subLine: "Where technology becomes tangible.",
    body:
      "Discover products, platforms and infrastructure being built across payments, wallets, blockchain applications and emerging digital services.\nExpect demonstrations, onboarding experiences and direct interaction between technology providers and users.",
  },
  {
    id: "startup-capital",
    title: "Start-up & Capital",
    subLine: "Where ideas meet opportunity.",
    body:
      "A meeting point for founders, investors and ecosystem partners.\nStartup showcases, curated introductions, investor conversations and opportunities for emerging companies to present what they are building.",
  },
  {
    id: "university-innovation",
    title: "University Innovation",
    subLine: "Where the next generation enters the ecosystem.",
    body:
      "Connecting universities, researchers and students to blockchain education, research, careers and innovation opportunities.\nCampus engagement begins before the main conference and continues into BCCG.",
  },
];

export type AudienceCard = {
  title: string;
  body: string;
  icon: "gov" | "chart" | "cube" | "person" | "capital" | "search";
  variant: "light" | "dark";
};

export const audienceCards: AudienceCard[] = [
  {
    title: "Government & Institutions",
    body:
      "Regulators, policymakers and public-sector leaders shaping the environment in which innovation develops.",
    icon: "gov",
    variant: "light",
  },
  {
    title: "Finance & Enterprise",
    body:
      "Banks, fintechs, enterprises, SMEs and financial-service providers exploring new technologies and integration opportunities.",
    icon: "chart",
    variant: "dark",
  },
  {
    title: "Blockchain Platforms",
    body:
      "Protocols, exchanges, wallets, payment infrastructure and technology companies building products for African markets.",
    icon: "cube",
    variant: "light",
  },
  {
    title: "Builders & Founders",
    body:
      "Developers, entrepreneurs and startups creating the next generation of applications and businesses.",
    icon: "person",
    variant: "dark",
  },
  {
    title: "Capital",
    body:
      "Venture capital, angel investors, institutional investors and organisations supporting emerging companies.",
    icon: "capital",
    variant: "light",
  },
  {
    title: "Talent & Research",
    body:
      "Universities, researchers, students and professionals looking to build careers, research and skills within the ecosystem.",
    icon: "search",
    variant: "dark",
  },
];

export type PartnerItem = {
  title: string;
  body: string;
};

export const partnerItems: PartnerItem[] = [
  {
    title: "Market Entry",
    body:
      "Position your organisation at the centre of Ghana’s growing blockchain and digital economy.",
  },
  {
    title: "Developer Adoption",
    body:
      "Reach engineers, technical founders and protocol communities building for African markets.",
  },
  {
    title: "Customer Acquisition",
    body:
      "Demonstrate products directly to the institutions, enterprises and users evaluating them.",
  },
  {
    title: "Thought Leadership",
    body: "Shape the conversation on responsible adoption, policy and infrastructure.",
  },
  {
    title: "Talent Recruitment",
    body:
      "Connect with developers, researchers and emerging professionals across the ecosystem.",
  },
  {
    title: "Ecosystem Development",
    body: "Build participation around a defined audience and a measurable outcome.",
  },
];

export const aboutChips: string[] = [
  "Education",
  "Community Development",
  "Talent Development",
  "Innovation",
  "Partnerships",
  "Ecosystem Collaboration",
  "Research & Thought Leadership",
  "Emerging Technology Adoption",
];

export const footerColumns = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", anchor: "experiences" },
    { label: "Partner", anchor: "partners" },
    { label: "Register", href: "/register" },
  ] as NavItem[],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & conditions", href: "#" },
  ],
  contact: [
    { label: "General enquiries", href: "#" },
    { label: "Parnership Enquiries", href: "#" },
    { label: "Media enquiries", href: "#" },
  ],
  connect: [
    { label: "X", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Youtube", href: "#" },
  ],
};
