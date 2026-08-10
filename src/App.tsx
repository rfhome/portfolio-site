import { useEffect, useRef, useState } from 'react'
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import { about, certifications, education, experience, expertise, hero, projects, stats } from './data'

const sectionLabel = 'font-sans text-xs font-bold uppercase tracking-[0.2em] text-teal-700'
const sectionHeading = 'font-display text-4xl font-semibold leading-tight tracking-[-0.035em] text-ink md:text-5xl'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  )
}

function Nav({ scrolled }: { scrolled: boolean }) {
  const links = ['About', 'Expertise', 'Experience', 'Projects', 'Learning', 'Contact']
  return (
    <header>
      <nav className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${scrolled ? 'border-line bg-paper/95 text-ink backdrop-blur' : 'border-white/15 bg-dark/80 text-white backdrop-blur'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#hero" className="group flex items-baseline gap-3" aria-label="Catalyst Edge Connect home">
            <span className="font-display text-lg font-semibold tracking-tight">Catalyst Edge Connect</span>
            <span className={`hidden text-[10px] font-bold uppercase tracking-[0.16em] sm:inline ${scrolled ? 'text-ink-soft' : 'text-dark-soft'}`}>by Roberto Fonseca</span>
          </a>
          <div className="hidden items-center gap-5 lg:flex">
            {links.map((label) => (
              <a key={label} href={`#${label === 'Learning' ? 'certifications' : label.toLowerCase()}`} className="text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:text-teal-500">
                {label}
              </a>
            ))}
          </div>
          <a href={hero.consulting} className={`inline-flex items-center gap-2 border px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] transition-colors ${scrolled ? 'border-ink text-ink hover:bg-ink hover:text-white' : 'border-white/40 text-white hover:border-white'}`}>
            Consulting <ArrowIcon />
          </a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-dark pt-28 text-white">
      <div className="absolute inset-0 grid-texture opacity-30" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-16 px-5 py-20 md:grid-cols-[1.25fr_0.75fr] lg:px-8">
        <div>
          <p className="mb-7 text-xs font-bold uppercase tracking-[0.2em] text-teal-300">{hero.eyebrow}</p>
          <h1 className="font-display max-w-4xl text-6xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-8xl">
            Roberto<br /><span className="text-teal-300">Fonseca</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-dark-soft md:text-xl">{hero.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 bg-teal-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-700">Explore selected systems <ArrowIcon /></a>
            <a href={hero.linkedIn} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-sm font-bold text-white hover:border-white">LinkedIn <ArrowIcon /></a>
            <a href={hero.consulting} className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-sm font-bold text-white hover:border-white">Consulting practice <ArrowIcon /></a>
          </div>
          <div className="mt-14 grid max-w-4xl grid-cols-2 border-l border-t border-white/15 md:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="border-b border-r border-white/15 p-4 md:p-5">
                <div className="font-display text-2xl font-semibold text-teal-300">{value}</div>
                <div className="mt-1 text-xs leading-snug text-dark-soft">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto w-full max-w-[370px] md:mx-0 md:justify-self-end">
          <div className="border border-teal-300/40 bg-teal-900 p-3">
            <img src="/images/headshot.png" alt="Roberto Fonseca" className="aspect-[4/5] w-full object-cover" style={{ objectPosition: '50% 15%' }} />
          </div>
          <div className="flex items-center justify-between border-x border-b border-white/15 px-4 py-3 text-xs text-dark-soft">
            <span>{hero.location}</span><span>Portfolio + product lab</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr]">
          <div><p className={sectionLabel}>How I work</p><h2 className={`${sectionHeading} mt-4`}>{about.heading}</h2></div>
          <div className="max-w-3xl text-lg leading-relaxed text-ink-soft">
            {about.paragraphs.map((paragraph) => <p key={paragraph} className="mb-5">{paragraph}</p>)}
          </div>
        </div>
        <div className="mt-16 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {about.highlights.map((item) => (
            <article key={item.index} className="min-h-56 border-b border-r border-line bg-white p-6">
              <span className="font-mono text-xs font-semibold text-teal-700">{item.index}</span>
              <h3 className="font-display mt-12 text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Expertise() {
  return (
    <section id="expertise" className="border-y border-line bg-white py-24 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <div><p className={sectionLabel}>Capabilities</p><h2 className={`${sectionHeading} mt-4`}>Where experience compounds.</h2></div>
        <div className="grid border-l border-t border-line sm:grid-cols-2">
          {expertise.map((item, index) => (
            <div key={item} className="flex min-h-20 items-start gap-4 border-b border-r border-line p-4">
              <span className="font-mono text-[10px] font-bold text-teal-700">{String(index + 1).padStart(2, '0')}</span>
              <span className="text-sm font-semibold leading-snug text-ink">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className={sectionLabel}>Career perspective</p>
        <h2 className={`${sectionHeading} mt-4 max-w-3xl`}>Experience across the full delivery system.</h2>
        <div className="mt-14 border-t border-line">
          {experience.map((job, index) => (
            <article key={job.role} className="grid gap-6 border-b border-line py-8 md:grid-cols-[48px_0.8fr_1.2fr] md:py-10">
              <span className="font-mono text-xs font-bold text-teal-700">{String(index + 1).padStart(2, '0')}</span>
              <div><h3 className="font-display text-2xl font-semibold tracking-tight text-ink">{job.role}</h3><p className="mt-3 text-sm leading-relaxed text-ink-soft">{job.context}</p></div>
              <ul className="space-y-3">
                {job.bullets.map((bullet) => <li key={bullet} className="border-l-2 border-teal-600 pl-4 text-sm leading-relaxed text-ink-soft">{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="bg-dark py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">Product lab</p><h2 className="font-display mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Selected production systems.</h2></div>
          <p className="max-w-2xl text-lg leading-relaxed text-dark-soft">A growing portfolio of software built from real operating needs. Each system is an experiment in turning domain knowledge, product judgment, and modern AI-assisted engineering into something useful.</p>
        </div>
        <div className="mt-16 grid border-l border-t border-white/15 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.name} className="flex min-h-[410px] flex-col border-b border-r border-white/15 p-6 md:p-8">
              <div className="flex items-center justify-between"><span className="font-mono text-xs font-bold text-teal-300">{String(index + 1).padStart(2, '0')}</span><span className="text-[10px] font-bold uppercase tracking-[0.15em] text-dark-soft">Production system</span></div>
              <h3 className="font-display mt-12 text-3xl font-semibold tracking-tight">{project.name}</h3>
              <p className="mt-2 text-sm font-semibold text-teal-300">{project.tagline}</p>
              <p className="mt-5 text-sm leading-relaxed text-dark-soft">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/55">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 pt-10 text-sm font-bold text-white hover:text-teal-300">Open system <ArrowIcon /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[0.75fr_1.25fr]">
          <div><p className={sectionLabel}>Continued learning</p><h2 className={`${sectionHeading} mt-4`}>Learning that supports the work.</h2><p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">{education}</p></div>
          <div className="border-t border-line">
            {Object.entries(certifications).map(([category, items]) => (
              <div key={category} className="grid gap-5 border-b border-line py-7 sm:grid-cols-[0.6fr_1.4fr]">
                <h3 className="font-display text-lg font-semibold text-ink">{category}</h3>
                <ul className="space-y-2">{items.map((item) => <li key={item} className="text-sm leading-relaxed text-ink-soft">{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

type FormState = 'idle' | 'submitting' | 'success' | 'error'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [token, setToken] = useState<string | null>(null)
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const turnstileRef = useRef<TurnstileInstance>(null)
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA'

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!token) return
    setFormState('submitting')
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, message, token }) })
      const data = (await response.json()) as { error?: string }
      if (!response.ok) throw new Error(data.error ?? 'Something went wrong.')
      setFormState('success')
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : 'Something went wrong.')
      setFormState('error')
      turnstileRef.current?.reset()
      setToken(null)
    }
  }

  const inputClass = 'w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/70 focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600'

  return (
    <section id="contact" className="border-t border-line bg-teal-soft py-24 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className={sectionLabel}>Start a conversation</p>
          <h2 className={`${sectionHeading} mt-4`}>Have a problem worth working through?</h2>
          <p className="mt-6 max-w-lg leading-relaxed text-ink-soft">I welcome conversations about utility transformation, implementation audits and assessments, delivery leadership, applied AI, and product systems.</p>
          <div className="mt-8 space-y-3 text-sm font-semibold">
            <a href={hero.consulting} className="flex items-center gap-2 text-teal-700 hover:text-teal-900">Visit RB Fonseca Consulting <ArrowIcon /></a>
            <a href={hero.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal-700 hover:text-teal-900">Connect on LinkedIn <ArrowIcon /></a>
          </div>
          <p className="mt-8 text-xs text-ink-soft">{hero.location} · {hero.availability}</p>
        </div>
        <div className="border border-line bg-white p-6 md:p-8">
          {formState === 'success' ? (
            <div className="flex min-h-80 flex-col justify-center"><span className="font-mono text-xs font-bold text-teal-700">MESSAGE RECEIVED</span><h3 className="font-display mt-4 text-3xl font-semibold text-ink">Thank you.</h3><p className="mt-3 text-ink-soft">Your message was sent successfully. I will respond directly.</p></div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-ink">Name<input type="text" required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" className={`${inputClass} mt-2`} /></label>
                <label className="text-sm font-semibold text-ink">Email<input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" className={`${inputClass} mt-2`} /></label>
              </div>
              <label className="block text-sm font-semibold text-ink">What would you like to discuss?<textarea required rows={5} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="A brief description of the problem or opportunity" className={`${inputClass} mt-2 resize-none`} /></label>
              <Turnstile ref={turnstileRef} siteKey={siteKey} onSuccess={setToken} onExpire={() => setToken(null)} options={{ theme: 'light', size: 'flexible' }} />
              {formState === 'error' && <p className="text-sm text-red-700">{errorMsg}</p>}
              <button type="submit" disabled={formState === 'submitting' || !token} className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-40">
                {formState === 'submitting' ? 'Sending...' : 'Send message'} {!formState.includes('submitting') && <ArrowIcon />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-dark py-8 text-sm text-dark-soft">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Roberto Fonseca · Catalyst Edge Connect</p>
        <a href={hero.consulting} className="inline-flex items-center gap-2 text-white hover:text-teal-300">Professional consulting at rbfonseca.com <ArrowIcon /></a>
      </div>
    </footer>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <><Nav scrolled={scrolled} /><main><Hero /><About /><Expertise /><Experience /><Projects /><Certifications /><Contact /></main><Footer /></>
}
