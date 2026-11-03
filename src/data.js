export const profile = {
  name: "Ayodeji Olu-Ewulo",
  fullName: "Isaac Ayodeji Olu-Ewulo",
  title: "Frontend & Mobile Engineer",
  email: "isaacayodejiewulotan@gmail.com",
  phone: "+234 816 895 5109",
  location: "Lagos, Nigeria",
  linkedin: "https://www.linkedin.com/in/ayodeji-olu-ewulo-a964b924b",
  github: "https://github.com/isaacayodeji",
  cv: "./Isaac_Ayodeji_Olu-Ewulo_CV.pdf",
  playStore: "https://play.google.com/store/apps/details?id=com.eventflutter.app&hl=en",
  appStore: "https://apps.apple.com/us/app/eventflutter/id6774887701",
};

export const nav = [
  { id: "about", label: "About", n: "01" },
  { id: "experience", label: "Experience", n: "02" },
  { id: "work", label: "Work", n: "03" },
  { id: "skills", label: "Capabilities", n: "04" },
  { id: "contact", label: "Contact", n: "05" },
];

export const metrics = [
  { value: 97, suffix: "%", label: "Payment success rate" },
  { value: 40, suffix: "%", label: "Faster page loads", prefix: "−" },
  { value: 25, suffix: "%", label: "Lower infra spend", prefix: "−" },
  { value: 4, suffix: "+", label: "Years in production" },
];

export const ticker = [
  "Checkout flows",
  "Transaction reporting",
  "NRS e-invoicing",
  "POS geofencing",
  "Design systems",
  "React Native · Expo",
  "Ticketing",
  "Real-time WebSockets",
];

export const about = {
  lead: "I build the screens money moves through, and the apps people buy tickets on.",
  body: [
    "For more than four years I've shipped production React, TypeScript and React Native products where a bug isn't an inconvenience: it's a failed payment, a rejected invoice, a customer at a gate who can't get in.",
    "I own work end to end, from Figma handoff through CI/CD to the App Store, and I leave teams faster than I found them, with design systems, review standards and documentation people actually use.",
  ],
  principles: [
    { k: "Money-grade reliability", v: "Race conditions, retries and real-time status are designed in, not patched later." },
    { k: "Performance is a feature", v: "Code splitting, memoisation and CDN-first delivery for users on slow mobile networks." },
    { k: "One engineer, web and mobile", v: "React, Next.js and Expo, sharing types, patterns and components." },
    { k: "Leave teams faster", v: "Component libraries, lint gates and Storybook docs that cut review time from days to hours." },
  ],
};

export const experience = [
  {
    period: "2026 — Now",
    company: "Eventflutter",
    role: "Frontend & Mobile Engineer",
    type: "Contract",
    summary: "Events, ticketing and service-marketplace platform across mobile, web and admin.",
    points: [
      "Build and ship the Eventflutter mobile app in React Native (Expo), live on the Apple App Store and Google Play.",
      "Contribute to an Nx monorepo of 7 apps (marketing site, core app, auth, pro dashboard, ticket scanner, agent portal and design-system preview) on React 19, Vite, Tailwind, TanStack Query and Zustand, covered by Vitest and Playwright.",
      "Built the admin console across 28 feature modules, including escrow, disputes, KYC review, payouts, ticketing, job marketplace and CMS, with real-time updates over Socket.IO.",
      "Contributed to Prometheus, the in-house design system: 40+ tree-shakeable packages documented in Storybook and shipped through a private registry.",
    ],
    stack: ["React Native", "Expo", "React 19", "Nx", "TanStack Query", "Zustand", "Playwright"],
  },
  {
    period: "2026 — Now",
    company: "Tax9ja",
    role: "Frontend Engineer",
    type: "Contract",
    summary: "Nigerian tax-compliance platform for employees, freelancers and SMEs.",
    points: [
      "Built role-based web apps for employees, freelancers and SMEs, plus auth, a developer portal and the public website, in an Nx monorepo with shared UI, hooks and domain libraries.",
      "Delivered PAYE, CIT and WHT estimators, guided tax filing, KYC onboarding and payslip and document management, with light/dark theming and mobile-first layouts.",
      "Enforced quality with Vitest unit tests and Playwright end-to-end suites for each app.",
    ],
    stack: ["React", "TypeScript", "Nx", "Tailwind", "Vitest", "Playwright"],
  },
  {
    period: "2022 — Now",
    company: "Xpress Payments",
    role: "Frontend Engineer",
    type: "Full-time",
    summary: "Payments, POS and billing infrastructure. Lagos, Nigeria.",
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

export const eventflutter = {
  facts: [
    { v: "2", l: "App stores" },
    { v: "7", l: "Web apps, one monorepo" },
    { v: "28", l: "Admin modules" },
    { v: "40+", l: "Design-system packages" },
  ],
};

export const projects = [
  {
    title: "Xpress Report Portal",
    client: "Xpress Payments",
    year: "2026",
    tag: "Reporting & analytics",
    metric: "< 3 mo",
    metricLabel: "Concept to production",
    tone: "#1f3b2d",
    summary: "One portal for transactions from every Xpress product, so operations teams and merchants can monitor, manage and analyse on their own.",
    detail: [
      "Brought transactions from every Xpress product into a single reporting surface.",
      "Gave internal operations teams and merchants self-service access to the data behind day-to-day decisions.",
      "Shipped in under three months.",
    ],
    stack: ["React", "TypeScript", "TanStack Query", "Recharts"],
  },
  {
    title: "E-Invoicing Platform",
    client: "Xpress Payments",
    year: "2026",
    tag: "Tax compliance",
    metric: "NRS",
    metricLabel: "Compliant invoicing",
    tone: "#3a2a1c",
    summary: "Generates Nigeria Revenue Service (NRS)-compliant invoices, letting businesses meet national e-invoicing rules through Xpress as an Access Point Provider.",
    detail: [
      "Built invoice generation that conforms to NRS requirements.",
      "Enabled business customers to comply directly through Xpress as an Access Point Provider (APP).",
    ],
    stack: ["React", "Zustand", "Tailwind"],
  },
  {
    title: "POS Geofencing Middleware",
    client: "Xpress Payments",
    year: "2026",
    tag: "Security & compliance",
    metric: "NIBSS",
    metricLabel: "Location-verified requests",
    tone: "#1c2a3a",
    summary: "Frontend middleware that verifies terminal location before requests reach NIBSS, restricting transactions to approved locations.",
    detail: [
      "Verifies POS terminal location before any request reaches NIBSS.",
      "Restricts transactions to approved locations and enables secure NIBSS connectivity through the Xpress platform.",
    ],
    stack: ["React", "Geofencing", "Security"],
  },
  {
    title: "HRMS Platform",
    client: "Xpress Payments",
    year: "2022 — 24",
    tag: "Enterprise system",
    metric: "−60%",
    metricLabel: "Manual HR processing",
    tone: "#38202a",
    summary: "Payroll automation, applicant tracking, leave, appraisals and KPI dashboards, built from scratch and used across departments.",
    detail: [
      "Built the full system from scratch: payroll automation, applicant tracking, leave, appraisals and KPI dashboards.",
      "Cut manual HR processing time by an estimated 60%.",
      "Shipped 12 major releases over two years with zero rollbacks.",
    ],
    stack: ["React", "Redux Toolkit", "Ant Design"],
  },
  {
    title: "Biller Service",
    client: "Xpress Payments",
    year: "2022",
    tag: "Multi-tenant VAS portal",
    metric: "−70%",
    metricLabel: "Reconciliation effort",
    tone: "#2a2f1a",
    summary: "A multi-tenant reseller portal orchestrating real-time APIs across 6 service providers, with self-service reporting for finance.",
    detail: [
      "Orchestrated real-time APIs across 6 service providers in one multi-tenant portal.",
      "Built a self-service reporting dashboard that cut manual reconciliation effort for finance teams by 70%.",
    ],
    stack: ["React", "REST", "Redux"],
  },
  {
    title: "PayXpress",
    client: "Xpress Payments",
    year: "2022",
    tag: "Bill payments & transfers",
    metric: "−35%",
    metricLabel: "Failed-transfer tickets",
    tone: "#1a2c30",
    summary: "A mobile-first payments app integrating 4 third-party payment APIs with real-time WebSocket transaction status.",
    detail: [
      "Built the end-to-end frontend for a mobile-first consumer payments app.",
      "Integrated 4 third-party payment APIs.",
      "Added real-time WebSocket status updates that reduced failed-transfer support tickets by 35%.",
    ],
    stack: ["React", "WebSockets", "Payments"],
  },
];

export const archive = [
  { title: "Xpress Payment Solutions", note: "Corporate website", img: "./assets/xpress-website.png" },
  { title: "Xpress MTS", note: "Product website", img: "./assets/xpress-mts.png" },
  { title: "Zeeticket", note: "Ticketing interface", img: "./assets/ticketing.png" },
  { title: "ABC Bank", note: "Banking app UI", img: "./assets/bank-app.png" },
];

export const capabilities = [
  { group: "Languages", items: "TypeScript, JavaScript (ES6+), HTML5, CSS3" },
  { group: "Web & mobile", items: "React, React Native, Expo, Next.js, Redux Toolkit, Zustand, TanStack Query" },
  { group: "Interface systems", items: "Tailwind CSS, shadcn/ui, Ant Design, SASS, Styled Components, Storybook, Figma handoff" },
  { group: "Performance & quality", items: "Code splitting, lazy loading, memoisation, Vitest, Playwright, visual regression, cross-browser" },
  { group: "Integration & security", items: "REST, WebSockets, payment gateways, multi-provider orchestration, OWASP, geofencing" },
  { group: "Delivery", items: "Nx, Vite, Webpack, Git, Docker, GitHub Actions, CI/CD, CDN, Vercel, Jira, Agile/Scrum" },
];

export const credentials = [
  { k: "Education", v: "B.Sc., Les Cours Sonou University", s: "Cotonou, Benin Republic" },
  { k: "Certification", v: "React Developer Certification", s: "" },
  { k: "Certification", v: "JavaScript Algorithms & Data Structures", s: "Udemy" },
  { k: "Languages", v: "English", s: "Fluent" },
];
