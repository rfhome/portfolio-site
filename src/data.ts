export const hero = {
  name: 'Roberto Fonseca',
  eyebrow: 'Utility transformation · Applied AI · Product systems',
  tagline:
    'I lead complex utility programs and build production software. My experience is grounded in CIS and Oracle Energy and Water, then extended through applied AI, product engineering, and practical systems that solve real operating problems.',
  linkedIn: 'https://www.linkedin.com/in/rfonseca/',
  consulting: 'https://rbfonseca.com',
  location: 'Rochester, NY',
  availability: 'Available for consulting and full-time opportunities',
}

export const stats: { value: string; label: string }[] = [
  { value: '25+', label: 'Years in utility delivery' },
  { value: '$20M+', label: 'Proposals supported' },
  { value: '$5M+', label: 'Programs managed' },
  { value: 'USA + Canada', label: 'Delivery footprint' },
]

export const about = {
  heading: 'Operator and builder.',
  paragraphs: [
    "I've spent my career helping utilities and consulting teams deliver consequential technology programs. That work has taken me across application support, solution architecture, consulting leadership, technology strategy, implementation audits, assessments, program delivery, and stabilization.",
    "I also build. I use modern engineering tools and agentic AI workflows to turn recurring problems into production systems, from business operations and investment research to utility delivery accelerators. This portfolio is a working record of that practice, not a fixed inventory.",
  ],
  highlights: [
    { index: '01', title: 'Utility transformation', desc: 'Complex implementations, audits, assessments, and modernization programs.' },
    { index: '02', title: 'Delivery leadership', desc: 'Strategy, architecture, governance, execution, and stabilization.' },
    { index: '03', title: 'Product systems', desc: 'A growing portfolio of production software built around real needs.' },
    { index: '04', title: 'Applied AI', desc: 'Agent workflows paired with deterministic controls and human judgment.' },
  ],
}

export const expertise: string[] = [
  'Utility Transformation',
  'CIS Implementation Audits & Assessments',
  'Oracle CC&B / C2M / CCS / MDM',
  'Program Delivery & Stabilization',
  'Solution & Technical Architecture',
  'Data Migration & Integrations',
  'Client Advisory & Executive Governance',
  'Commercial Planning & Estimation',
  'Team Leadership',
  'Cloud & Security Alignment',
  'Applied AI Systems',
  'Product Engineering',
]

export const experience: { role: string; context: string; bullets: string[] }[] = [
  {
    role: 'Senior Project Manager',
    context: 'Utility technology delivery leadership with direct client ownership across implementations and managed services.',
    bullets: [
      'Led direct client engagement across active accounts and ongoing support relationships.',
      'Managed a dedicated services team and a large-scale Oracle C2M implementation.',
      'Coordinated cross-functional delivery across multi-year programs.',
    ],
  },
  {
    role: 'Chief Technology Officer / Delivery Manager',
    context: 'Built consulting operations spanning commercial planning, delivery programs, cloud platforms, and distributed teams.',
    bullets: [
      'Developed pricing and staffing models supporting more than $20M in proposals and delivery plans.',
      'Expanded a managed-services engagement into a multi-year, multi-project program with significant year-over-year growth.',
      'Led technical strategy, client governance, cloud migration, and teams of up to 20 across onshore, nearshore, and offshore models.',
    ],
  },
  {
    role: 'Consulting Services Director / Solution Architect',
    context: 'Functional and technical leadership for Oracle Energy and Water implementations across the United States and Canada.',
    bullets: [
      'Directed solution decisions across functional and technical workstreams.',
      'Allocated consulting resources while balancing delivery quality and program economics.',
      'Oversaw solution design, development, and quality assurance for utility clients.',
    ],
  },
  {
    role: 'Application Support Team Leader',
    context: 'Multi-client Oracle and SPL CIS support, development, and relationship leadership.',
    bullets: [
      'Led a development team supporting and implementing critical utility business processes.',
      'Built direct, long-term relationships across multiple client organizations.',
    ],
  },
]

export const projects: {
  name: string
  tagline: string
  description: string
  tech: string[]
  url: string
}[] = [
  {
    name: 'Helm',
    tagline: 'An operating system for an AI-ready consulting business',
    description:
      'A production platform for running an LLC across clients, contracts, time, invoicing, compliance, and documents. Its workflows are designed for auditability today and agent-assisted operations over time.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'AI workflows'],
    url: 'https://helm.catalystedgeconnect.com',
  },
  {
    name: 'AgentStack Portfolio',
    tagline: 'Multi-agent investment research with explicit controls',
    description:
      'A research and trading platform that coordinates specialist agents for analysis, risk, and synthesis. It combines falsifiable theses and deterministic risk checks with backtesting and broker integration.',
    tech: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'Multi-agent AI'],
    url: 'https://portfolio.catalystedgeconnect.com',
  },
  {
    name: 'AgentStack Fitness',
    tagline: 'Multi-model coaching informed by training and wearable data',
    description:
      'A personal coaching system that brings together specialist AI perspectives on performance, strength, and recovery, then synthesizes them into a focused recommendation.',
    tech: ['Next.js', 'TypeScript', 'Claude', 'OpenAI', 'Gemini', 'Oura'],
    url: 'https://agentstack.catalystedgeconnect.com',
  },
  {
    name: 'Project Estimator',
    tagline: 'Delivery planning and commercial estimation accelerator',
    description:
      'A multi-tenant system for project scoping, resource planning, travel estimates, budgets, version comparison, actuals, and professional workbook exports.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'AG Grid'],
    url: 'https://estimator.catalystedgeconnect.com',
  },
  {
    name: 'Config Workbook',
    tagline: 'Utility configuration and workbook accelerator',
    description:
      'A focused tool for organizing CIS project configuration, reusable queries, client metadata, secure data connections, workbook exports, and export history.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Excel'],
    url: 'https://config.catalystedgeconnect.com',
  },
  {
    name: 'Oracle ERD Builder',
    tagline: 'Interactive schema exploration for Oracle databases',
    description:
      'A visual system for retrieving database metadata and exploring relationships through expandable graphs, inferred-link review, saved sessions, and publication-ready exports.',
    tech: ['React', 'FastAPI', 'React Flow', 'Oracle Database', 'Docker'],
    url: 'https://erd.catalystedgeconnect.com',
  },
  {
    name: 'Split the Nest',
    tagline: 'Household expenses without the spreadsheet friction',
    description:
      'A mobile-first platform with isolated households, flexible expense splits, balances, settlement history, exports, and AI-written monthly recaps. Built as a PWA for everyday use.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Anthropic', 'PWA'],
    url: 'https://split.catalystedgeconnect.com',
  },
]

export const certifications: Record<string, string[]> = {
  'Project Management & AI': [
    'Change Management for Generative AI, Vanderbilt University',
    'Talking to AI: Prompt Engineering for Project Managers, PMI',
    'Fundamentals of Agentic AI, LinkedIn Learning',
    'Building AI Agents using Docker, n8n, and the OpenAI Platform',
    'Google Data Analytics Professional Certificate',
    'Learning ITIL, LinkedIn Learning',
  ],
  'Business & Strategy': [
    'Financial Markets, Yale University',
    'Fundamentals of Quantitative Modeling, University of Pennsylvania',
    'Introduction to Trading, Machine Learning, and GCP',
  ],
}

export const education = "Bachelor's degree in Computer Science, University of Fortaleza, Brazil"
