export type NavItem = {
  label: string;
  href?: string;
  anchor?: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // { label: "Experience", anchor: "experiences" },
  { label: "Partners", href: "/partners" },
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
    { label: "Partner", href: "/partners" },
    { label: "Register", href: "/register" },
  ] as NavItem[],
  connect: [
    { label: "X", href: "https://x.com/BCC_Ghana" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/the-builders-circle-ghana/" },
    { label: "Instagram", href: "https://www.instagram.com/bcc_ghana?cplk=ZDNlZDc0MzIxNw==" },
  ],
};

export type PartnerType = "Institutional Partner" | "Strategic Partner" | "Media Partner";

export type PartnerLinks = {
  linkedin?: string;
  x?: string;
  instagram?: string;
  whatsapp?: string;
  facebook?: string;
  youtube?: string;
};

export type Partner = {
  name: string;
  type: PartnerType;
  /** Short headline describing what the partner does for BCCG. */
  role?: string;
  /** One string per paragraph. */
  description?: string[];
  links?: PartnerLinks;
  src: string;
  /** Tile background: "dark" for logos with white or black-edged artwork, "cream"
   * for logos baked onto an off-white (#faf7f3) background. */
  tone: "light" | "dark" | "cream";
  /** Logo shape: "wide" for wordmarks, "badge" for round or square marks. */
  fit?: "wide" | "badge";
};

export type PartnerGroup = {
  title: string;
  partners: Partner[];
};

/** Partner details come from the "BCC Speaker & Partner Assets" sheet (Partners tab). */
export const partnerGroups: PartnerGroup[] = [
  {
    title: "Institutional partners",
    partners: [
      {
        name: "International Trade Centre (ITC)",
        type: "Strategic Partner",
        role: "Strategic International Trade & SME Development Partner",
        description: [
          "The International Trade Centre (ITC) is the joint agency of the United Nations and the World Trade Organization, dedicated to strengthening the competitiveness of small and medium-sized enterprises in developing economies. Through trade intelligence, export development, market access initiatives, capacity-building programmes and institutional partnerships, ITC helps businesses participate more effectively in regional and international markets.",
          "With a strong focus on inclusive trade, digital commerce, sustainable value chains and African economic integration, ITC supports enterprises and trade institutions in overcoming barriers to international business and accessing new commercial opportunities.",
        ],
        links: {
          linkedin: "https://www.linkedin.com/company/international-trade-centre",
          x: "https://x.com/ITCnews",
          instagram: "https://www.instagram.com/internationaltradecentre",
        },
        src: "/partners/institutional/international-trade-centre.jpg",
        tone: "light",
        fit: "wide",
      },
      {
        name: "Ghana Fintech and Payments Association",
        type: "Institutional Partner",
        description: [
          "A nonprofit industry association promoting fintech innovation, digital payments, financial inclusion and regulatory engagement in Ghana.",
        ],
        links: {
          linkedin: "https://www.linkedin.com/company/ghana-fintech-and-payments-association",
        },
        src: "/partners/institutional/ghana-fintech-payments-association.png",
        tone: "light",
        fit: "wide",
      },
      {
        name: "Chamber of Digital Assets and Blockchain Innovations (CDABI-GH)",
        type: "Institutional Partner",
        description: [
          "Industry association supporting digital asset regulation, blockchain innovation, compliance education and ecosystem development in Ghana.",
        ],
        links: {
          linkedin:
            "https://www.linkedin.com/company/chamber-of-digital-assets-and-blockchain-innovation",
          x: "https://x.com/cdabighana",
        },
        src: "/partners/institutional/cdabi-ghana.jpg",
        tone: "dark",
        fit: "badge",
      },
      {
        name: "Virtual Asset Service Providers Association Ghana (VASPA Ghana)",
        type: "Institutional Partner",
        description: [
          "Virtual Asset Service Providers Association Ghana (VASPA Ghana) is an industry association representing stakeholders in Ghana's digital asset ecosystem, with activities focused on regulatory engagement, compliance, industry development and professional education.",
        ],
        src: "/partners/institutional/vasp-ghana.jpg",
        tone: "light",
        fit: "badge",
      },
      {
        name: "Africa Blockchain Institute (ABI)",
        type: "Strategic Partner",
        description: [
          "Africa Blockchain Institute (ABI) is Africa's foremost blockchain think tank, dedicated to addressing critical blockchain policy gaps, building a resilient ecosystem, and powering sustainable innovation through real-world applications. With a presence across multiple regions in Africa, ABI works with governments, multinationals, universities, and global blockchain organisations to advance blockchain research, policy development, ecosystem growth and digital transformation across the continent.",
        ],
        links: {
          linkedin: "https://www.linkedin.com/company/africablockinst",
          x: "https://x.com/AfricaBlockInst",
        },
        src: "/partners/institutional/africa-blockchain-institute.png",
        tone: "light",
        fit: "wide",
      },
      {
        name: "Africa Web3 Institute (AWI)",
        type: "Institutional Partner",
        role: "Strategic Policy, Research & Institutional Knowledge Partner",
        description: [
          "Africa Web3 Institute (AWI) is a pan-African public policy think tank advancing blockchain innovation, digital asset regulation and institutional development through research, policy engagement, education and capacity-building. Established in 2017, the Institute works to strengthen Africa's participation in the evolving digital economy by supporting responsible Web3 adoption and the development of appropriate regulatory and market infrastructure.",
          "Its work spans virtual asset regulatory frameworks, stablecoin policy, real-world asset tokenisation, cross-border payment systems and institutional blockchain education. Through research, professional training and ecosystem partnerships, AWI connects policymakers, financial institutions, researchers and technology innovators to advance the responsible development of Africa's digital asset ecosystem.",
        ],
        links: {
          linkedin: "https://www.linkedin.com/company/africa-web3-institute",
          x: "https://x.com/AfricaWeb3_Inst",
        },
        src: "/partners/institutional/africa-web3-institute.png",
        tone: "light",
        fit: "badge",
      },
      {
        name: "African Startups & SMEs in Export & Trade Secretariat (ASSETS)",
        type: "Strategic Partner",
        role: "Strategic SME Trade Partner",
        description: [
          "ASSETS Africa (African Startups & SMEs in Export & Trade Secretariat) is a pan-African trade development organisation dedicated to strengthening the competitiveness of startups and small and medium-sized enterprises in regional and international markets. Through export readiness training, trade advisory, market access programmes, investment and trade missions, and capacity-building initiatives, ASSETS empowers African businesses to expand beyond domestic markets and leverage opportunities under the African Continental Free Trade Area (AfCFTA).",
          "The organisation connects entrepreneurs, exporters, policymakers and trade institutions to promote inclusive economic growth, cross-border commerce and sustainable enterprise development across Africa.",
        ],
        links: {
          linkedin:
            "https://www.linkedin.com/company/african-startups-and-smes-in-export-and-trade-secretariat",
          instagram: "https://www.instagram.com/assetsafrica",
        },
        src: "/partners/institutional/assets.png",
        tone: "light",
        fit: "wide",
      },
      {
        name: "One Vecta Africa AI Week",
        type: "Institutional Partner",
        description: [
          "AlphaVecta is also the organiser of One Vecta Africa AI Week, a continental platform bringing together policymakers, technology leaders, investors and innovators to advance responsible AI adoption, institutional collaboration and Africa's digital transformation.",
        ],
        links: {
          linkedin: "https://www.linkedin.com/company/one-vecta-africa-ai-week-2026/",
          x: "https://x.com/ovaaiweek",
          instagram: "https://www.instagram.com/onevectaafricaaiweek",
          whatsapp: "https://whatsapp.com/channel/0029Vb7hp8LKWEKkXR8KpM16",
        },
        src: "/partners/institutional/one-vecta.png",
        tone: "dark",
        fit: "wide",
      },
      {
        name: "AlphaVecta Technologies Limited",
        type: "Institutional Partner",
        description: [
          "AlphaVecta Technologies Limited is an artificial intelligence and technology advisory firm operating across Ghana and the United Kingdom. The company specialises in enterprise AI strategy, intelligent automation, fraud detection, institutional risk management and the development of AI-powered solutions for businesses, financial institutions and government organisations.",
          "AlphaVecta is also the organiser of One Vecta Africa AI Week, a continental platform bringing together policymakers, technology leaders, investors and innovators to advance responsible AI adoption, institutional collaboration and Africa's digital transformation.",
        ],
        src: "/partners/institutional/alphavecta.png",
        tone: "dark",
        fit: "wide",
      },
    ],
  },
  {
    title: "Media partners",
    partners: [
      {
        name: "Norvan Reports",
        type: "Media Partner",
        src: "/partners/media/norvan-reports.jpg",
        tone: "light",
        fit: "wide",
      },
      {
        name: "Triple A",
        type: "Media Partner",
        src: "/partners/media/triple-a.png",
        tone: "light",
        fit: "badge",
      },
      {
        name: "Nana Yaw",
        type: "Media Partner",
        role: "Content creator",
        src: "/partners/media/nana-yaw.jpg",
        tone: "dark",
        fit: "badge",
      },
      {
        name: "Casuum",
        type: "Media Partner",
        role: "Content & opportunities platform",
        description: [
          "Casuum is a content and opportunities platform where creators, professionals and communities share their work and discover opportunities. Through Casuum, readers in Ghana and abroad can follow BCC Ghana and The Builders Circle Ghana, catch up on highlights from X Spaces and find official links to take part in upcoming events.",
        ],
        links: {
          x: "https://x.com/casuumapps",
          facebook: "https://www.facebook.com/share/1FHbDqowii/",
          youtube: "https://youtube.com/@casuum-00",
        },
        src: "/partners/media/casuum.jpeg",
        tone: "cream",
        fit: "wide",
      },
      {
        name: "Kweku Tech",
        type: "Media Partner",
        role: "Official Photography, Videography & Livestream Production Partner",
        description: [
          "Kweku Tech is a Ghana-based technology media and creative production company specialising in photography, videography, livestreaming and digital storytelling. Through high-quality visual content and event coverage, the company documents and amplifies innovation, entrepreneurship and developments across Africa's technology ecosystem, connecting innovators, businesses and communities through compelling media experiences.",
        ],
        links: {
          linkedin: "https://www.linkedin.com/company/kwekutech",
          x: "https://x.com/kwekutech",
        },
        src: "/partners/media/kweku-tech.png",
        tone: "light",
      },
    ],
  },
];
