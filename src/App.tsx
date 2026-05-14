import { useState, useEffect, useRef } from 'react'
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import {
  hero, stats, about, expertise, experience,
  projects, certifications, education,
} from './data'

// ── Nav ──────────────────────────────────────────────────────────────────────

function Nav({ scrolled }: { scrolled: boolean }) {
  const links = ['About', 'Expertise', 'Experience', 'Projects', 'Certifications', 'Contact']
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-teal-700 font-bold text-lg tracking-tight">RF</a>
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {l}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${['rbfonseca', '.consulting@gmail.com'].join('')}`}
          className="hidden md:inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 py-32">
        <p className="text-teal-300 font-medium tracking-widest uppercase text-sm mb-4">
          {hero.title}
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          {hero.name.split(' ')[0]}<br />
          <span className="text-teal-300">{hero.name.split(' ')[1]}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
          {hero.tagline}
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            View My Work
          </a>
          <a href={hero.linkedIn} target="_blank" rel="noopener noreferrer" className="border border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            LinkedIn
          </a>
          <a href="#contact" className="border border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Contact Me
          </a>
        </div>
        <div className="mt-16 flex flex-wrap gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-teal-300">{value}</div>
              <div className="text-sm text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-teal-600 font-semibold uppercase tracking-widest text-sm mb-3">About Me</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{about.heading}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {about.highlights.map(({ icon, title, desc }) => (
            <div key={title} className="bg-teal-50 rounded-xl p-5 border border-teal-100">
              <div className="text-2xl mb-3">{icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Expertise ────────────────────────────────────────────────────────────────

function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-teal-600 font-semibold uppercase tracking-widest text-sm mb-3">Areas of Expertise</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-10">What I bring to the table</h2>
        <div className="flex flex-wrap gap-3">
          {expertise.map((item) => (
            <span
              key={item}
              className="bg-white border border-teal-200 text-teal-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-colors cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Experience ───────────────────────────────────────────────────────────────

function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-teal-600 font-semibold uppercase tracking-widest text-sm mb-3">Career</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Experience</h2>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-teal-200 ml-[7px] hidden md:block" />
          <div className="space-y-10">
            {experience.map((job, i) => (
              <div key={i} className="md:pl-10 relative">
                <div className="hidden md:flex absolute left-0 top-1 w-4 h-4 rounded-full bg-teal-600 border-2 border-white shadow" />
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-teal-200 transition-colors">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{job.role}</h3>
                  <ul className="space-y-1.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-gray-600">
                        <span className="text-teal-500 mt-0.5 shrink-0">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-teal-600 font-semibold uppercase tracking-widest text-sm mb-3">Portfolio</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Apps I've Built</h2>
        <p className="text-gray-500 mb-12 max-w-xl">
          Full-stack applications built from scratch — from idea and architecture through deployment.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">{p.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{p.name}</h3>
                    <p className="text-teal-600 text-sm font-medium">{p.tagline}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium">{t}</span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                    View Live App
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-sm text-gray-400 font-medium">Desktop / Mobile App</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Certifications ───────────────────────────────────────────────────────────

function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-teal-600 font-semibold uppercase tracking-widest text-sm mb-3">Education & Learning</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
        <p className="text-gray-500 mb-10">{education}</p>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(certifications).map(([category, items]) => (
            <div key={category} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 inline-block" />
                {category}
              </h3>
              <ul className="space-y-2.5">
                {items.map((cert) => (
                  <li key={cert} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-teal-400 shrink-0 mt-0.5">✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Contact ──────────────────────────────────────────────────────────────────

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!token) return
    setFormState('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, token }),
      })
      const data = (await res.json()) as { error?: string }
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.')
      setFormState('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
      setFormState('error')
      turnstileRef.current?.reset()
      setToken(null)
    }
  }

  const inputClass =
    'w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors text-sm'

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-teal-300 font-semibold uppercase tracking-widest text-sm mb-3">Get In Touch</p>
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you're looking for an experienced CIS delivery leader, want to discuss a
              utility modernization program, or just want to connect — drop me a message.
            </p>
            <a
              href={hero.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
            <p className="text-gray-500 text-sm mt-6">{hero.location} · {hero.availability}</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            {formState === 'success' ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2">Message sent!</h3>
                <p className="text-gray-300 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="What would you like to discuss?" className={`${inputClass} resize-none`} />
                </div>
                <Turnstile ref={turnstileRef} siteKey={siteKey} onSuccess={setToken} onExpire={() => setToken(null)} options={{ theme: 'dark', size: 'flexible' }} />
                {formState === 'error' && <p className="text-red-400 text-sm">{errorMsg}</p>}
                <button type="submit" disabled={formState === 'submitting' || !token} className="w-full bg-teal-500 hover:bg-teal-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  {formState === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-6 text-center">
      <p>© {new Date().getFullYear()} Roberto Fonseca · <a href="https://catalystedgeconnect.com" className="hover:text-teal-400 transition-colors">catalystedgeconnect.com</a></p>
    </footer>
  )
}

// ── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Nav scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
