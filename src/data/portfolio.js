import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";

export const profile = {
  name: "Mohammed Faiz",
  title: "Social Media Marketing Specialist",
  location: "Thrissur, Chettuva",
  email: "mohammedfaiz7424@gmail.com",
  phone: "+91 7736 83 7424",
  tagline: "I help brands grow with social media marketing.",
  heroDescription:
    "I create scroll-stopping social content, manage consistent posting, and run performance-focused campaigns — so brands get attention, engagement, and leads that actually matter.",
  about: {
    intro:
      "I'm a digital marketer based in Thrissur who believes great marketing isn't just about being loud — it's about being smart.",
    body:
      "My strongest lane is Social Media Marketing — building content that people want to watch, follow, and share. I also support it with smart paid campaigns, strong creatives, and clear reporting so every post and ad has a purpose. I love turning raw data into simple decisions and watching campaigns go from idea to impact.",
    closing:
      "Currently sharpening my skills at Zoople Technologies, I'm always looking for new challenges where I can help brands tell better stories and grow faster online.",
  },
  images: {
    hero: "/images/faiz-hero.png",
    about: "/images/faiz-about.png",
    lifestyle: "/images/faiz-lifestyle.png",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const workCategories = [
  { id: "all", label: "All Work" },
  { id: "video", label: "Video & Reels" },
  { id: "social", label: "Social Media" },
  { id: "recruitment", label: "Recruitment" },
  { id: "branding", label: "Branding" },
  { id: "festive", label: "Festive" },
  { id: "travel", label: "Travel" },
];

export const creativeWorks = [
  {
    id: "reel-promo-1",
    type: "video",
    title: "Brand Promo Reel",
    client: "Social Media Campaign",
    category: "video",
    tags: ["Reel", "Video Edit"],
    video: vid1,
    description:
      "Short-form reel with strong hooks, pacing, and on-brand visuals — built to drive engagement on Instagram and Facebook.",
    accent: "#a855f7",
  },
  {
    id: "reel-promo-2",
    type: "video",
    title: "Promotional Video Edit",
    client: "Social Media Campaign",
    category: "video",
    tags: ["Promo", "Reels"],
    video: vid2,
    description:
      "Promotional video edit with clear messaging, transitions, and CTA framing — optimized for reels and stories.",
    accent: "#f97316",
  },
  {
    id: "viva-hiring",
    title: "We're Hiring — Accountant",
    client: "Viva Smart Care",
    category: "recruitment",
    tags: ["Poster Design", "Hiring"],
    image: "/images/works/viva-hiring-accountant.png",
    description:
      "Clean recruitment poster with bold typography and clear contact details for a local service brand.",
    accent: "#facc15",
  },
  {
    id: "viva-storage",
    title: "iPhone Storage Upgrade",
    client: "Viva Smart Care",
    category: "social",
    tags: ["Malayalam", "Service Promo"],
    image: "/images/works/viva-storage-upgrade.png",
    description:
      "Bilingual service creative highlighting fast, safe storage upgrades with product-focused visuals.",
    accent: "#3b82f6",
  },
  {
    id: "uniqout-hoodies",
    title: "Hoodies Sale — Up to 70% Off",
    client: "UNIQ OUT",
    category: "social",
    tags: ["Fashion", "Sale Promo"],
    image: "/images/works/uniqout-hoodies.png",
    description:
      "High-contrast streetwear promo with distressed typography and a bold discount call-to-action.",
    accent: "#eab308",
  },
  {
    id: "uniqout-hiring",
    title: "We're Hiring — Sales Staff",
    client: "UNIQ OUT",
    category: "recruitment",
    tags: ["Retail", "Hiring"],
    image: "/images/works/uniqout-hiring.png",
    description:
      "Vibrant blue-and-yellow hiring graphic with role requirements and location details.",
    accent: "#2563eb",
  },
  {
    id: "fit-sajas-christmas",
    title: "Christmas Fitness Tips",
    client: "Fit With Sajas",
    category: "social",
    tags: ["Health", "Seasonal"],
    image: "/images/works/fit-with-sajas-christmas.png",
    description:
      "Festive health tips carousel-style creative with actionable calorie-tracking advice.",
    accent: "#16a34a",
  },
  {
    id: "challengers-vishu",
    title: "Vishu Greetings",
    client: "Challengers Arts & Sports Club",
    category: "festive",
    tags: ["Malayalam", "Festival"],
    image: "/images/works/challengers-vishu.png",
    description:
      "Traditional Vishu wishes blending Kanikkonna florals with bilingual Malayalam typography.",
    accent: "#ca8a04",
  },
  {
    id: "sportic-logo",
    title: "Brand Logo Mockup",
    client: "Sportic Sports Hub",
    category: "branding",
    tags: ["Logo", "Identity"],
    image: "/images/works/sportic-logo.png",
    description:
      "Embossed logo presentation for a sports hub — clean type, geometric icon, premium feel.",
    accent: "#38bdf8",
  },
  {
    id: "metahire-germany",
    title: "Germany Job Opportunity",
    client: "MetaHire Solutions",
    category: "recruitment",
    tags: ["International", "Flyer"],
    image: "/images/works/metahire-germany.png",
    description:
      "Information-rich recruitment flyer for overseas placement with salary, process, and contact details.",
    accent: "#1d4ed8",
  },
  {
    id: "kerala-travel",
    title: "Kerala Explore Package",
    client: "Airspace Travel",
    category: "travel",
    tags: ["Tourism", "Package Promo"],
    image: "/images/works/kerala-travel.png",
    description:
      "Travel package creative with pricing, inclusions, and scenic Kerala imagery.",
    accent: "#fbbf24",
  },
  {
    id: "waffle-date",
    title: "Grand Opening Flyer",
    client: "Waffle Date",
    category: "social",
    tags: ["Food", "Event Launch"],
    image: "/images/works/waffle-date-opening.png",
    description:
      "Warm, appetizing grand-opening design with ribbon accents and event details.",
    accent: "#dc2626",
  },
];

export const expertise = [
  {
    title: "Social & Content",
    description: "Building brands people actually want to follow.",
    skills: [
      "Social media strategy & management",
      "Posts, reels & stories",
      "Copywriting that converts",
      "Visual design with Canva & Photoshop",
    ],
  },
  {
    title: "Search & Visibility",
    description: "Getting found by the right people at the right time.",
    skills: [
      "On-page & off-page SEO",
      "Keyword research & backlink building",
      "Google Search Console",
      "Google Business Profile optimization",
    ],
  },
  {
    title: "Paid Advertising",
    description: "Turning ad spend into measurable returns.",
    skills: [
      "Meta Ads campaign setup & optimization",
      "Google Ads management",
      "Lead generation funnels",
      "Campaign performance tracking",
    ],
  },
  {
    title: "Analytics & Growth",
    description: "Measuring what works and scaling what doesn't.",
    skills: [
      "Google Analytics insights",
      "Email marketing campaigns",
      "Competitor & market research",
      "Data-driven strategy planning",
    ],
  },
];

export const strengths = [
  "Creative thinker with an analytical edge",
  "Clear communicator — written & verbal",
  "Thrives in collaborative team environments",
  "Stays ahead of platform trends & algorithm shifts",
  "Turns complex data into simple action plans",
  "Delivers on tight deadlines without cutting corners",
];

export const tools = [
  "Canva",
  "Photoshop",
  "Meta Ads",
  "Google Business Profile",
  "Google Analytics",
  "Google Search Console",
  "Google Ads",
  "Semrush",
  "HubSpot",
  "WordPress",
  "Email Marketing",
  "Keyword Research",
];

export const technicalSkills = [
  {
    title: "Social Media Marketing (Strategy & Management)",
    description:
      "Planning and managing content calendars, trends, and posting — keeping the brand consistent while improving engagement and growth.",
  },
  {
    title: "Content Planning & Creation (Posts, Reels, Stories)",
    description:
      "Creating social content with a clear hook and structure — built for watch time, saves, shares, and action.",
  },
  {
    title: "Copywriting (Captions, Ads, CTAs)",
    description:
      "Writing clear, persuasive copy — strong hooks, captions, and ad text designed to drive clicks and enquiries.",
  },
  {
    title: "Designing Creatives (Canva / Photoshop)",
    description:
      "Designing posters and creatives for social + ads — clean layouts, strong contrast, and brand-friendly visuals.",
  },
  {
    title: "Meta Ads (Campaign Setup & Optimisation)",
    description:
      "Building and monitoring campaigns — audience targeting, creative testing, budget control, and iteration based on performance signals.",
  },
  {
    title: "Analytics & Reporting (Google Analytics)",
    description:
      "Tracking performance and turning numbers into decisions — reporting, pattern spotting, and next-step recommendations.",
  },
  {
    title: "Lead Generation & Funnel Support",
    description:
      "Driving enquiries with content + ad alignment, landing page direction, and consistent optimisation for quality leads.",
  },
  {
    title: "Local SEO & Google Business Profile",
    description:
      "Improving map visibility through Google Business Profile optimisation, accurate updates, review posting/management, and local trust signals.",
  },
  {
    title: "SEO (On‑Page & Off‑Page)",
    description:
      "Optimising pages for search visibility — from keywords and content structure to internal linking, backlink support, and overall site relevance.",
  },
  {
    title: "Google Search Console",
    description:
      "Monitoring search performance and spotting quick wins using query data, indexing insights, and page-level improvements.",
  },
  {
    title: "Keyword Research & Competitor Analysis",
    description:
      "Finding high-intent opportunities and analysing competitors to plan content and campaigns that can realistically win traffic.",
  },
  {
    title: "Backlink Building & Analysis",
    description:
      "Supporting SEO with outreach, guest posting, directory submissions, and backlink checks to strengthen authority over time.",
  },
  {
    title: "Google Ads (Search & Lead Focused)",
    description:
      "Planning campaigns for lead generation with practical tracking and optimisation — keeping intent, cost, and results aligned.",
  },
];

export const companies = [
  {
    name: "Viva Smart Care",
    logo: "/images/companies/viva-smart-care.png",
    tagline: "Social media • Meta Ads • Google Business Profile",
    logoBg: "light",
  },
  {
    name: "Fit With Sajas",
    logo: "/images/companies/fit-with-sajas.png",
    tagline: "Social media management & content",
    logoBg: "light",
  },
  {
    name: "UNIQ OUT",
    logo: "/images/companies/uniq-out.png",
    tagline: "Social media • Meta Ads • Google Business Profile",
    logoBg: "dark",
  },
  {
    name: "Zoople Technologies",
    logo: "/images/companies/zoople.png",
    tagline: "Dream • Learn • Achieve",
    logoBg: "dark",
  },
];

export const experience = {
  role: "Digital Marketing Intern",
  company: "Zoople Technologies",
  period: "December 2025",
  summary:
    "At Zoople Technologies, I supported real client campaigns end-to-end — managing social media, running Meta Ads, maintaining Google Business Profiles, improving search visibility, and tracking performance to help the team make smarter marketing decisions.",
  highlights: [
    {
      title: "Content That Connects",
      text: "Created blogs, social captions, ad copy, and email drafts — built to engage, guide, and convert.",
    },
    {
      title: "Live Ad Campaigns",
      text: "Launched Meta Ads and learned hands-on optimization: audiences, creatives, budgets, and performance improvements.",
    },
    {
      title: "SEO & Local Growth",
      text: "Worked on SEO basics (keywords, backlinks) and improved local visibility via Google Business Profile updates and reviews.",
    },
    {
      title: "Insights That Drive Action",
      text: "Tracked results in Google Analytics, checked competitors, and shared quick insights the team could act on.",
    },
  ],
};

export const certifications = [
  {
    name: "Google My Business",
    detail: "Expertise in local search optimization and business profile management.",
  },
  {
    name: "Semrush",
    detail: "Proficient in SEO audits, keyword tracking, and competitive analysis.",
  },
  {
    name: "HubSpot",
    detail: "Certified in inbound marketing, content strategy, and lead nurturing.",
  },
  {
    name: "Zoople Technologies",
    detail: "Digital Marketing Specialist Certification covering SEO, social, and search ads.",
  },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Malayalam", level: "Native" },
];

export const reference = {
  name: "Rohith",
  role: "Supervisor at Zoople Technologies",
  phone: "+91 70255 62881",
  email: "rohith@zoople.in",
  note: "Available upon request — happy to connect you directly.",
};

export const stats = [
  { value: "4", label: "Core Specializations" },
  { value: "4", label: "Industry Certifications" },
  { value: "10+", label: "Campaign Tools Mastered" },
  { value: "2", label: "Languages Spoken" },
];

export const focusAreas = [
  { label: "Social Media & Content", value: 92 },
  { label: "SEO & Analytics", value: 88 },
  { label: "Paid Advertising", value: 90 },
  { label: "Lead Generation", value: 85 },
];
