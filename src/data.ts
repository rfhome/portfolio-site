// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO CONTENT
// Edit this file to update your portfolio. After saving, Vercel auto-deploys
// in ~30 seconds. No other files need to be touched.
// ─────────────────────────────────────────────────────────────────────────────

// ── Hero ──────────────────────────────────────────────────────────────────────

export const hero = {
  name: 'Roberto Fonseca',
  title: 'Technology Executive',
  tagline:
    '20+ years delivering Oracle Energy & Water CIS modernization programs across North America. CTO, solution architect, and builder — bridging technical complexity with business strategy.',
  linkedIn: 'https://www.linkedin.com/in/rfonseca/',
  location: 'Rochester, NY',
  availability: 'Available for consulting and full-time opportunities',
}

// ── Stats (shown in hero) ─────────────────────────────────────────────────────

export const stats: { value: string; label: string }[] = [
  { value: '20+', label: 'Years of Experience' },
  { value: '$20M+', label: 'in Proposals Supported' },
  { value: '$5M+', label: 'Projects Managed' },
  { value: 'USA & Canada', label: 'Delivery Footprint' },
]

// ── About ─────────────────────────────────────────────────────────────────────

export const about = {
  heading: 'Where strategy meets execution',
  paragraphs: [
    "I'm a technology executive with a career built on delivering multimillion-dollar utility modernization programs. Specializing in Oracle Energy & Water products — CC&B, C2M, CCS, and MDM — I've led global teams from pre-sales through go-live across the United States and Canada.",
    "Beyond consulting, I build software. From project estimation tools to Oracle schema explorers, I enjoy solving real problems with code — and I bring that same builder's mindset to every engagement I lead.",
    "I'm widely recognized for fostering stability and high team retention, especially in fast-moving environments where clarity and people-first leadership matter most.",
  ],
  highlights: [
    { icon: '🏗️', title: 'Solution Architecture', desc: 'Designing scalable CIS solutions for utilities across North America' },
    { icon: '👥', title: 'Team Leadership', desc: 'Building and mentoring high-performing cross-functional teams' },
    { icon: '📈', title: 'Business Development', desc: 'Growing engagements from single projects to multi-year portfolios' },
    { icon: '💻', title: 'Software Builder', desc: 'Full-stack SaaS apps shipped from idea to production' },
  ],
}

// ── Expertise ─────────────────────────────────────────────────────────────────

export const expertise: string[] = [
  'Utility CIS Transformation',
  'Oracle CC&B / C2M / CCS / MDM',
  'Technical Architecture',
  'Project & Team Leadership',
  'Cloud Migrations',
  'SDLC Oversight',
  'Client Advisory & Executive Stakeholder Management',
  'RFP Response & Pricing Strategy',
  'Business Development',
  'Partner Engagement',
  'SOW & Contract Alignment',
  'Process Improvement',
  'Cross-team Collaboration',
]

// ── Experience ────────────────────────────────────────────────────────────────
// To add a new role: copy one block, paste it at the top, fill in the details.
// To remove a role: delete the entire { ... } block for that entry.

export const experience: { role: string; bullets: string[] }[] = [
  {
    role: 'Senior Project Manager',
    bullets: [
      'Leads direct client engagement across active accounts as primary point of contact throughout the project lifecycle.',
      'Manages existing Managed Services Program supporting a team of 5 resources and ~$1M in annual recurring revenue.',
      'Directs a large-scale Oracle C2M implementation with a cross-functional team of 15 resources and a ~$5M 2-year budget.',
    ],
  },
  {
    role: 'Chief Technology Officer / Delivery Manager',
    bullets: [
      'Developed pricing and staffing models supporting $20M+ in proposals and delivery plans.',
      'Grew a single managed services engagement into a multi-year, multi-project portfolio — increasing revenue by $1.5M+ YOY.',
      'Led Agile delivery teams of up to 20 individuals in a hybrid onshore/offshore/nearshore model.',
      'Directed migration of internal infrastructure to cloud platforms (AWS, Oracle) to align with client cybersecurity standards.',
      'Engaged directly at Steering Committee and Board level throughout the project lifecycle.',
    ],
  },
  {
    role: 'Director, Solution Center / Solution Architect',
    bullets: [
      'Managed delivery for major Oracle Energy & Water CIS implementations across USA and Canada.',
      'Directed functional and technical design teams; ensured project profitability through optimized resource allocation.',
      'Oversaw development and QA of custom CIS solutions for utilities clients.',
    ],
  },
  {
    role: 'Application Support Team Leader',
    bullets: [
      'Supported Oracle/SPL CIS solutions across multiple clients.',
      'Built long-term client relationships through direct engagement and responsive support.',
      'Led development team designing and implementing business processes for various clients.',
    ],
  },
  {
    role: 'Senior Consultant',
    bullets: [
      'Supported integrations for CIS subsystems at Rochester Gas and Electric.',
      'Delivered system enhancements for regulatory compliance: billing, EDI, and partner integrations.',
      'Reengineered the Corrosion System into Natural/ADABAS for the PAWS initiative.',
      'Led technical assessments and Y2K compliance implementations at General Reinsurance Corp.',
    ],
  },
]

// ── Projects ──────────────────────────────────────────────────────────────────
// url: set to null if the app has no public web URL (desktop/mobile apps).

export const projects: {
  name: string
  tagline: string
  description: string
  tech: string[]
  url: string | null
  icon: string
}[] = [
  {
    name: 'Project Estimator',
    tagline: 'Multi-tenant SaaS for project scoping & tracking',
    description:
      'Full-stack SaaS for generating professional project estimates. Features a Gantt builder, resource planning grid, travel estimates, budget dashboard with burn-rate analysis, version snapshots with diff viewer, Excel export, and CSV import for actuals.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'AG Grid', 'Tailwind'],
    url: 'https://estimator.catalystedgeconnect.com',
    icon: '📊',
  },
  {
    name: 'Config Workbook Tool',
    tagline: 'Lean configuration & Excel export tooling',
    description:
      'Tool for managing Oracle CIS project configurations without portal sprawl. Centralizes client metadata, encrypted data source connections, and stored queries — with direct Excel workbook export and saved export history.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    url: 'https://config.catalystedgeconnect.com',
    icon: '⚙️',
  },
  {
    name: 'Oracle ERD Builder',
    tagline: 'Visual schema explorer for Oracle databases',
    description:
      'FastAPI + React app for connecting to Oracle databases, pulling schema metadata, and rendering interactive ERD-style relationship graphs. Supports recursive graph expansion, inferred relationship review, named sessions, and export to SVG, PNG, and PDF.',
    tech: ['React', 'FastAPI', 'React Flow', 'Oracle DB', 'Docker'],
    url: 'https://erd.catalystedgeconnect.com',
    icon: '🗄️',
  },
  {
    name: 'GoalMate',
    tagline: 'Privacy-first habit & goal tracker',
    description:
      'Mobile app for building and tracking habits across iOS and Android. Supports flexible goal frequencies (daily, weekly, weekday), anchor times, calendar views, streaks, badges, leaderboards, and local notifications.',
    tech: ['Expo', 'React Native', 'Supabase', 'TypeScript'],
    url: null,
    icon: '🎯',
  },
  {
    name: 'OST to PST Tool',
    tagline: 'Desktop tool for Outlook archive conversion',
    description:
      'Electron desktop application for converting Microsoft Outlook OST archives to portable mbox exports. Ships with a GUI (file pickers, progress tracking) and a CLI wrapper for automated use. Powered by libpst for faithful folder and attachment preservation.',
    tech: ['Electron', 'TypeScript', 'libpst', 'Node.js'],
    url: null,
    icon: '📧',
  },
]

// ── Certifications ────────────────────────────────────────────────────────────

export const certifications: Record<string, string[]> = {
  'Project Management & AI': [
    'Change Management for Generative AI – Vanderbilt University',
    'Talking to AI: Prompt Engineering for Project Managers – PMI',
    'Fundamentals of Agentic AI – LinkedIn Learning',
    'Building AI Agents using Docker, n8n, OpenAI Platform',
    'Google Data Analytics Professional Certificate',
    'Learning ITIL – LinkedIn Learning',
  ],
  'Business & Strategy': [
    'Financial Markets – Yale University',
    'Fundamentals of Quantitative Modeling – University of Pennsylvania',
    'Introduction to Trading, Machine Learning and GCP',
  ],
}

// ── Education ─────────────────────────────────────────────────────────────────

export const education = "Bachelor's degree in Computer Science · University of Fortaleza, Brazil"
