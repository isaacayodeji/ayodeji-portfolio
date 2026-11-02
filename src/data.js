export const profile = {
  name: "Ayodeji Olu-Ewulo",
  fullName: "Isaac Ayodeji Olu-Ewulo",
  email: "isaacayodejiewulotan@gmail.com",
  phone: "+234 816 895 5109",
  location: "Lagos, Nigeria",
  linkedin: "https://www.linkedin.com/in/ayodeji-olu-ewulo-a964b924b",
  github: "https://github.com/isaacayodeji",
  cv: "./Isaac_Ayodeji_Olu-Ewulo_CV.pdf",
  playStore: "https://play.google.com/store/apps/details?id=com.eventflutter.app&hl=en",
  appStore: "https://apps.apple.com/us/app/eventflutter/id6774887701",
};

export const roles = [
  "Frontend Engineer",
  "React Native (Expo) Developer",
  "Payments & FinTech Builder",
  "Design-System Engineer",
];

export const metrics = [
  { value: 97, suffix: "%", label: "Payment success rate" },
  { value: 40, suffix: "%", label: "Faster page loads" },
  { value: 25, suffix: "%", label: "Lower infra spend" },
  { value: 4, suffix: "+", label: "Years in production" },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const about = {
  lead:
    "I build the screens money moves through, and the apps people buy tickets on.",
  body: [
    "Frontend engineer with 4+ years shipping production React, TypeScript and React Native products where reliability is non-negotiable: payment checkouts, transaction reporting, tax-compliant e-invoicing, POS integrations and event-ticketing marketplaces.",
    "I own features end to end, from Figma handoff through CI/CD to the App Store, and I leave teams faster than I found them with design systems, review standards and documentation.",
  ],
  highlights: [
    { k: "Ownership", v: "Figma handoff to production, CI/CD and monitoring." },
    { k: "Money-grade reliability", v: "Race conditions, retries and real-time status handled up front." },
    { k: "Web + mobile", v: "One engineer across React, Next.js and Expo." },
    { k: "Team multiplier", v: "Design systems, lint gates and docs that speed everyone up." },
  ],
};

export const experience = [
  {
    role: "Frontend & Mobile Engineer (Contract)",
    company: "Eventflutter",
    period: "Mar 2026 – Present",
    meta: "Events, ticketing & service-marketplace platform",
    current: true,
    links: true,
    points: [
      "Build and ship the Eventflutter mobile app in React Native (Expo), live on both the Apple App Store and Google Play.",
      "Contribute to an Nx monorepo of 7 apps (marketing site, core app, auth, pro dashboard, ticket scanner, agent portal, design-system preview) on React 19, Vite, Tailwind, TanStack Query and Zustand, with Vitest and Playwright coverage.",
      "Built the admin console across 28 feature modules, including escrow, disputes, KYC review, payouts, ticketing, job marketplace and CMS, with real-time updates over Socket.IO.",
      "Contributed to Prometheus, the in-house design system: 40+ tree-shakeable packages with Storybook, shipped through a private registry.",
    ],
    stack: ["React Native", "Expo", "React 19", "Nx", "TanStack Query", "Zustand", "Playwright"],
  },
  {
    role: "Frontend Engineer (Contract)",
    company: "Tax9ja",
    period: "Mar 2026 – Present",
    meta: "Nigerian tax-compliance platform for employees, freelancers and SMEs",
    points: [
      "Built role-based web apps for employees, freelancers and SMEs, plus auth, developer-portal and public website, in an Nx monorepo with shared UI, hooks and domain libraries.",
      "Delivered PAYE, CIT and WHT estimators, guided tax filing, KYC onboarding, payslip and document management, with light/dark theming and mobile-first layouts.",
      "Enforced quality with Vitest unit tests and Playwright end-to-end suites per app.",
    ],
    stack: ["React", "TypeScript", "Nx", "Tailwind", "Vitest", "Playwright"],
  },
  {
    role: "Frontend Engineer",
    company: "Xpress Payments Limited",
    period: "Apr 2022 – Present",
    meta: "Payments, POS & billing infrastructure · Lagos",
    current: true,
    points: [
      "Raised payment success rate to 97% across 300+ daily transactions by rebuilding critical checkout flows and eliminating race conditions that had caused 1 in 8 transactions to fail silently.",
      "Cut average page load time by 40% on PayXpress through route-level code splitting and memoised API-heavy components.",
      "Reduced frontend infrastructure spend by 25% with CDN-first delivery and automated GitHub Actions deployments.",
      "Cut code review time from 2 days to under 6 hours and lifted release velocity by 15% via PR templates, lint gates and Storybook documentation.",
      "Reached 98% cross-browser compatibility with a shared component library and visual regression tests.",
    ],
    stack: ["React", "TypeScript", "Redux Toolkit", "Storybook", "GitHub Actions"],
  },
];

export const featured = {
  title: "Eventflutter",
  tag: "Mobile · React Native (Expo)",
  text:
    "A production events and ticketing app published on both major stores, backed by a monorepo of web apps, an admin console and a 40+ package design system.",
};

export const projects = [
  {
    title: "Xpress Report Portal",
    tag: "Reporting & analytics",
    date: "Jun – Aug 2026",
    text: "One portal for every Xpress product's transactions, built in under 3 months so ops teams and merchants can monitor, manage and analyse on their own.",
    stack: ["React", "TypeScript", "TanStack Query", "Recharts"],
    accent: "violet",
  },
  {
    title: "E-Invoicing Platform",
    tag: "Tax compliance · APP",
    date: "Mar – Jul 2026",
    text: "Generates Nigeria Revenue Service (NRS)-compliant invoices so businesses meet national e-invoicing rules directly through Xpress as an Access Point Provider.",
    stack: ["React", "Zustand", "Tailwind"],
    accent: "cyan",
  },
  {
    title: "POS Geofencing Middleware",
    tag: "Security & compliance",
    date: "Jul 2026",
    text: "Frontend middleware that verifies terminal location before requests reach NIBSS, restricting transactions to approved locations.",
    stack: ["React", "Geofencing", "NIBSS"],
    accent: "rose",
  },
  {
    title: "HRMS Platform",
    tag: "Enterprise system",
    date: "Nov 2022 – Dec 2024",
    text: "Payroll automation, applicant tracking, leave, appraisals and KPI dashboards built from scratch. ~60% less manual HR work, 12 releases, zero rollbacks.",
    stack: ["React", "Redux Toolkit", "Ant Design"],
    accent: "amber",
  },
  {
    title: "Biller Service (VAS Reseller Portal)",
    tag: "Multi-tenant platform",
    date: "Feb – Dec 2022",
    text: "Multi-tenant reseller portal orchestrating real-time APIs across 6 providers, with reporting that cut finance reconciliation effort by 70%.",
    stack: ["React", "REST", "Redux"],
    accent: "emerald",
  },
  {
    title: "PayXpress",
    tag: "Bill payments & transfers",
    date: "Feb – May 2022",
    text: "Mobile-first payments app integrating 4 third-party payment APIs with real-time WebSocket status that cut failed-transfer tickets by 35%.",
    stack: ["React", "WebSockets", "Payments"],
    accent: "violet",
  },
  {
    title: "Airvend E-Cashier",
    tag: "Banking operations",
    date: "2026",
    text: "Multi-role teller and supervisor approval workflows, audit reports with Excel export, encrypted storage and idle timeout, on the XpressPayments auth APIs.",
    stack: ["React", "Redux Toolkit", "Ant Design"],
    accent: "cyan",
  },
  {
    title: "Auraspin Booth",
    tag: "Marketing & bookings",
    date: "Oct 2026",
    text: "Booking-enquiry site for a Lagos photobooth business with server-side email notifications and typed environment handling.",
    stack: ["Next.js 16", "React 19", "Postgres"],
    accent: "rose",
  },
];

export const gallery = [
  { title: "Xpress Payment Solutions", img: "./assets/xpress-website.png" },
  { title: "Xpress MTS", img: "./assets/xpress-mts.png" },
  { title: "Zeeticket", img: "./assets/ticketing.png" },
  { title: "ABC Bank App", img: "./assets/bank-app.png" },
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"] },
  { group: "Web & Mobile", items: ["React", "React Native", "Expo", "Next.js", "Redux Toolkit", "Zustand", "TanStack Query"] },
  { group: "UI & Design Systems", items: ["Tailwind CSS", "shadcn/ui", "Ant Design", "SASS", "Styled Components", "Storybook", "Figma handoff"] },
  { group: "Performance & Quality", items: ["Code splitting", "Lazy loading", "Memoisation", "Vitest", "Playwright", "Visual regression"] },
  { group: "Integration & Security", items: ["REST", "WebSockets", "Payment gateways", "OWASP", "Geofencing"] },
  { group: "Delivery", items: ["Nx", "Vite", "Webpack", "Git", "Docker", "GitHub Actions", "CI/CD", "Vercel", "Agile/Scrum"] },
];

export const education = {
  degree: "B.Sc.",
  school: "Les Cours Sonou University",
  place: "Cotonou, Benin Republic",
  certs: ["React Developer Certification", "JavaScript Algorithms & Data Structures (Udemy)"],
  languages: "English (fluent)",
};
