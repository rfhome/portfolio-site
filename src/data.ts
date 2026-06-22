// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO CONTENT
// Edit this file to update your portfolio. After saving, Vercel auto-deploys
// in ~30 seconds. No other files need to be touched.
// ─────────────────────────────────────────────────────────────────────────────

// ── Hero ──────────────────────────────────────────────────────────────────────

export const hero = {
  name: 'Roberto Fonseca',
  title: 'Roberto Fonseca | Oracle CIS & Technology Executive',
  tagline:
    'Vast experience delivering Oracle Energy & Water modernization programs across North America. CTO, solution architect, and builder — bridging technical complexity with business strategy.',
  linkedIn: 'https://www.linkedin.com/in/rfonseca/',
  location: 'Rochester, NY',
  availability: 'Available for consulting and full-time opportunities',
}

// ── Stats (shown in hero) ─────────────────────────────────────────────────────

export const stats: { value: string; label: string }[] = [
  { value: '25+', label: 'Years of Experience' },
  { value: '$20M+', label: 'in Proposals Supported' },
  { value: '$5M+', label: 'Projects Managed' },
  { value: 'USA & Canada', label: 'Delivery Footprint' },
]

// ── About ─────────────────────────────────────────────────────────────────────

export const about = {
  heading: 'Where strategy meets execution',
  paragraphs: [
    "I'm a technology executive with proven leadership in Oracle Energy and Water implementations, specializing in Customer Information Systems (CIS), with a track record of delivering multimillion-dollar utility modernization programs across North America.",
    "I actively apply emerging AI and agentic development tools to build production-ready applications — staying technically hands-on as the technology landscape evolves. From multi-agent AI systems to project estimation SaaS, I translate ideas into working software through rapid prototyping and iterative refinement.",
    "A collaborative leader and mentor proficient in pre-sales strategy, client delivery, and long-term partnerships — fostering stability in fast-moving environments and high team retention.",
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
  'Resourcing & Budgeting',
  'Business Development',
  'Partner Engagement',
  'SOW & Contract Alignment',
  'Process Improvement',
  'Cross-team Collaboration',
  'AI-Assisted Development',
  'Agentic AI Workflows',
]

// ── Experience ────────────────────────────────────────────────────────────────
// To add a new role: copy one block, paste it at the top, fill in the details.
// To remove a role: delete the entire { ... } block for that entry.

export const experience: { role: string; bullets: string[] }[] = [
  {
    role: 'Senior Project Manager',
    bullets: [
      'Leads direct client engagement across active accounts, serving as the primary point of contact throughout project lifecycle and ongoing support relationships.',
      'Manages an existing Managed Services Program with a dedicated team of five.',
      'Directs a large-scale Oracle C2M implementation, leading a cross-functional team across a multi-year engagement.',
    ],
  },
  {
    role: 'Chief Technology Officer / Delivery Manager',
    bullets: [
      'Developed pricing and staffing models supporting $20M+ in proposals and delivery plans for various customers and initiatives.',
      'Grew a single managed-services engagement into a multi-year, multi-project program, increasing revenue by $1.5M+ YoY.',
      'Led delivery programs, owning technical strategy and cross-functional team coordination.',
      'Migrated internal infrastructure to cloud platforms, aligning internal cybersecurity standards with client security requirements.',
      'Led Agile delivery teams of up to 20 individuals working in hybrid onshore/offshore/nearshore model.',
      'Engaged directly with clients throughout the project lifecycle, including Steering Committee and Board meetings.',
      'Managed internal infrastructure deployed on cloud platforms (AWS, Oracle) used by consulting services teams.',
    ],
  },
  {
    role: 'Director, Solution Center / Solution Architect',
    bullets: [
      'Key decision-maker for both functional and technical teams across implementation projects.',
      'Managed delivery of major Oracle Energy and Water CIS implementations across USA and Canada, allocating consulting resources across projects.',
      'Directly managed projects\' functional and technical design teams ensuring project profitability through optimized resource allocation.',
      'Oversaw development and QA of custom CIS solutions for clients in the utilities industry.',
    ],
  },
  {
    role: 'Application Support Team Leader',
    bullets: [
      'Built direct, long-term business relationships across multiple clients.',
      'Led a development team supporting, designing, and implementing Oracle/SPL CIS business processes across multiple clients.',
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
    name: 'AgentStack',
    tagline: 'Personal multi-agent AI fitness system',
    description:
      'Logs training sessions and runs three specialized AI agents in parallel — Pulse (Claude), Forge (GPT-4o), and Lens (Gemini) — covering performance analysis, strength prescription, and recovery assessment. A fourth agent, Nexus, synthesizes all three into a single prioritized recommendation. Integrates with Oura Ring and Fitbit/Google Fit for wearable-aware coaching.',
    tech: ['Next.js', 'TypeScript', 'Claude', 'GPT-4o', 'Gemini', 'PostgreSQL', 'Prisma', 'Oura', 'Fitbit'],
    url: 'https://agentstack.catalystedgeconnect.com',
    icon: '🤖',
  },
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
    name: 'HabitBuild',
    tagline: 'Privacy-first habit & goal tracker',
    description:
      'Mobile app for building and tracking habits across iOS and Android. Supports flexible goal frequencies (daily, weekly, weekday), anchor times, calendar views, streaks, badges, leaderboards, and local notifications.',
    tech: ['Expo', 'React Native', 'Supabase', 'TypeScript'],
    url: null,
    icon: '✅',
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
