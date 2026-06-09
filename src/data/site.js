export const COMPANY = {
  name: "In Time Property Care LLC",
  short: "In Time Property Care",
  phone: "929-261-8823",
  phoneHref: "tel:+19292618823",
  phoneDisplay: "(929) 261-8823",
  email: "intimepropertycare@gmail.com",
  emailHref: "mailto:intimepropertycare@gmail.com",
  hours: "Mon – Fri · 8:00 AM – 6:00 PM (Local Time)",
  hoursNote: "Emergency support available outside business hours",
  address: "8943 Guilder ST, Powell, OH 43065",
  tagline: "Protecting Your Property, Right on Time.",
};

export const ROUTES = {
  home: "/",
  services: "/services",
};

// `to` is a hash for in-page sections, real route for the services page
export const NAV = [
  { label: "Home", to: "/#home", section: "home" },
  { label: "About", to: "/#about", section: "about" },
  { label: "Services", to: "/services" },
  { label: "Why Us", to: "/#why-us", section: "why-us" },
  { label: "Process", to: "/#process", section: "process" },
  { label: "Contact", to: "/#contact", section: "contact" },
];

// encodeURI handles spaces in filenames so dev/prod both serve the asset
const img = (name) => `/images/${encodeURI(name)}`;

export const HERO_IMAGES = {
  primary: img("01 Hero Section Banner (1).jpg"),
  secondary: img("01 Hero Section Banner (5).jpg"),
};

export const ABOUT_IMAGES = {
  hero: img("07 Property Inspections (4).jpg"),
  detail: img("11 General Property Maintenance (2).jpg"),
};

export const CTA_IMAGE = img("01 Hero Section Banner (4).jpg");
export const PROCESS_IMAGE = img("07 Property Inspections (5).jpg");

export const SERVICES = [
  {
    no: "01",
    slug: "initial-securing",
    title: "Initial Securing",
    summary:
      "Professional initial securing for vacant or distressed properties — protect from unauthorized access, vandalism, and weather damage.",
    bullets: ["Lock changes", "Lockbox installation", "Board-ups", "Safety inspections"],
    image: img("02 Initial Securing (3).jpg"),
  },
  {
    no: "02",
    slug: "winterization",
    title: "Winterization Services",
    summary:
      "Full winterization to protect plumbing systems during freezing temperatures and prevent costly freeze damage.",
    bullets: ["Water shut-off", "Pipe draining", "Antifreeze application", "Pressure testing"],
    image: img("03 Winterization (2).jpg"),
  },
  {
    no: "03",
    slug: "yard-care-landscaping",
    title: "Yard Care & Landscaping",
    summary:
      "Complete yard maintenance and landscaping that keeps properties clean, safe, and visually appealing year-round.",
    bullets: ["Grass cutting", "Shrub & tree trimming", "Debris removal", "Seasonal cleanups"],
    image: img("06 Yard Maintenance (1).jpg"),
  },
  {
    no: "04",
    slug: "roofing",
    title: "Roofing Services",
    summary:
      "Roof inspections, minor repairs, tarp installation, and leak prevention — catch issues early, stop further damage.",
    bullets: ["Roof inspections", "Tarp installation", "Leak prevention", "Minor repairs"],
    image: img("09 Roofing (1).jpg"),
  },
  {
    no: "05",
    slug: "plumbing",
    title: "Plumbing Services",
    summary:
      "Basic plumbing maintenance and repair for residential and commercial properties — keep systems safe and functional.",
    bullets: ["Leak repairs", "Fixture replacement", "Pipe inspections", "Water line work"],
    image: img("10 Plumbing (2).jpg"),
  },
  {
    no: "06",
    slug: "trash-out",
    title: "Trash Out & Debris Removal",
    summary:
      "Full-service trash out and debris removal for vacant, foreclosed, and damaged properties. Left clean and inspection-ready.",
    bullets: ["Household debris", "Furniture removal", "Construction waste", "Final cleanup"],
    image: img("04 Trash Out (2).jpg"),
  },
  {
    no: "07",
    slug: "eviction-support",
    title: "Eviction Support Services",
    summary:
      "Property cleanout and securing after tenant vacancies or legal possession — restored to a clean, manageable condition.",
    bullets: ["Post-eviction cleanout", "Re-securing", "Trash removal", "Turnover prep"],
    image: img("08 Eviction Support (2).jpg"),
  },
  {
    no: "08",
    slug: "general-maintenance",
    title: "General Property Maintenance",
    summary:
      "Ongoing maintenance to preserve property condition, safety, and appearance — minor repairs, inspections, handyman work.",
    bullets: ["Minor repairs", "Handyman services", "Property inspections", "Routine upkeep"],
    image: img("11 General Property Maintenance (1).jpg"),
  },
];

export const WHY_US = [
  { title: "Experienced field crews", body: "Reliable hands with real property preservation experience on every job." },
  { title: "Fast response & timely completion", body: "We move when the work order drops, and we close it on schedule." },
  { title: "Professional preservation solutions", body: "Methods aligned with investor and municipal requirements." },
  { title: "Safety & quality standards", body: "Attention to detail at every step — no shortcuts on either." },
  { title: "In-house processing support", body: "Documentation, photos, and reporting handled by our own back office." },
  { title: "Dedicated client support", body: "One point of contact who knows your portfolio and your scope." },
  { title: "Client satisfaction commitment", body: "Honest communication, dependable scheduling, results that exceed scope." },
  { title: "Tailored to client requirements", body: "Custom plans for unique properties, recurring portfolios, or one-off orders." },
];

export const PROCESS = [
  {
    step: "01",
    title: "Work order received",
    body: "We confirm scope, deadlines, and any investor or municipal requirements before the crew rolls.",
  },
  {
    step: "02",
    title: "Site assessment",
    body: "On-site walk to verify conditions, document the property, and flag anything outside the original scope.",
  },
  {
    step: "03",
    title: "Service execution",
    body: "Crew completes the scope to standard — preservation, securing, maintenance, or cleanout.",
  },
  {
    step: "04",
    title: "Photos & documentation",
    body: "Before, during, and after photos captured for every line item, formatted to investor specs.",
  },
  {
    step: "05",
    title: "In-house QC & reporting",
    body: "Our back office checks the package, uploads results, and closes the work order on time.",
  },
];

export const STATS = [
  { value: 100, suffix: "%", label: "Client satisfaction focus" },
  { value: 48, suffix: "h", label: "Standard response window" },
  { value: 8, suffix: "", label: "Core service categories" },
  { value: 24, suffix: "/7", label: "Emergency support availability" },
];

export const FAQS = [
  {
    q: "What types of properties do you service?",
    a: "Residential and commercial — occupied, vacant, foreclosed, and investment properties. We work with property management companies, real estate professionals, investors, field service companies, and homeowners.",
  },
  {
    q: "How fast can you respond to a new work order?",
    a: "Most standard work orders are scheduled within 48 hours. Emergency securing and winterization are prioritized and dispatched same-day where possible.",
  },
  {
    q: "Do you provide photo documentation?",
    a: "Yes. Every service includes before, during, and after photos formatted to investor and field service company requirements.",
  },
  {
    q: "Can you handle recurring property preservation portfolios?",
    a: "Yes. We tailor recurring service plans for property managers and investor portfolios, with consistent crews and predictable reporting.",
  },
  {
    q: "Do you offer custom maintenance plans?",
    a: "We are flexible and ready to adapt to your specific property management needs. Reach out and we will build a plan to fit the property.",
  },
];

export const MARQUEE_PHRASES = [
  "Initial Securing",
  "Winterization",
  "Yard Care",
  "Roofing",
  "Plumbing",
  "Trash Out",
  "Eviction Support",
  "General Maintenance",
];
