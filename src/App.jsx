import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  const cvUrl = '/resume.html'
  const whatsappUrl = 'https://wa.me/9779849756660?text=' + encodeURIComponent('Hi Chetan, I visited your portfolio and would like to connect.')

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = (e) => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches)
      }
    }
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const [ktmTime, setKtmTime] = useState('')
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }
      setKtmTime(new Intl.DateTimeFormat('en-US', options).format(new Date()))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#f4e8d8] dark:bg-cream-900 bg-grid text-charcoal-900 dark:text-cream-100 font-sans transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-10">
        <section className="relative overflow-hidden rounded-[2rem] border border-charcoal-900/10 dark:border-cream-100/10 bg-[#fbf1e5]/95 dark:bg-charcoal-900/40 shadow-[0_20px_80px_rgba(28,25,23,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(154,52,18,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(22,101,52,0.10),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(234,88,12,0.08),transparent_30%)]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-charcoal-900/10 dark:border-cream-100/10 bg-[#fff7ee]/85 dark:bg-charcoal-900/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-charcoal-700 dark:text-cream-200">
                <span className="w-2 h-2 rounded-full bg-terracotta-800 dark:bg-terracotta-600" />
                Available for frontend and full-stack opportunities
              </div>

              <div className="lg:hidden border border-charcoal-900/10 dark:border-cream-100/10 bg-[#fff7ee]/95 dark:bg-charcoal-900/60 p-4 rounded-2xl shadow-[0_12px_28px_rgba(28,25,23,0.08)] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-charcoal-900/15 dark:border-cream-100/15">
                    <img
                      src="/profile-image.jpeg"
                      alt="Chetan Koirala"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-serif text-charcoal-900 dark:text-cream-50 leading-tight">Chetan Koirala</h2>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-terracotta-800 dark:text-terracotta-600">Full-Stack Developer</p>
                    <span className="inline-flex items-center gap-1.5 mt-1 px-2 py-0.5 rounded-full text-[10px] font-sans font-medium bg-green-100 dark:bg-green-900/30 text-moss-800 dark:text-moss-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400 animate-pulse"></span>
                      Open to Role
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-3 gap-y-1 font-mono text-[10px] text-charcoal-700 dark:text-cream-200">
                  <span className="text-charcoal-700/75 dark:text-cream-100/70">Location</span>
                  <span className="text-right font-sans">Kathmandu, Nepal</span>
                  <span className="text-charcoal-700/75 dark:text-cream-100/70">Local Time (KTM)</span>
                  <span className="text-right tabular-nums">{ktmTime || '09:48:52'}</span>
                  <span className="text-charcoal-700/75 dark:text-cream-100/70">Education</span>
                  <span className="text-right font-sans">BCA, Tribhuvan Univ.</span>
                  <span className="text-charcoal-700/75 dark:text-cream-100/70">Agency Intern</span>
                  <span className="text-right font-sans">Lumbini Digital</span>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <a href="mailto:koiralachetan16@gmail.com" className="block rounded-lg border border-charcoal-900/10 dark:border-cream-100/10 bg-white/60 dark:bg-charcoal-900/30 px-3 py-2 text-charcoal-800 dark:text-cream-200 transition-all duration-200 hover:border-terracotta-800/30 dark:hover:border-terracotta-600/30 active:scale-[0.98] active:bg-terracotta-50/60 dark:active:bg-charcoal-800/60">
                    Email: koiralachetan16@gmail.com
                  </a>
                  <a href="https://github.com/chetan079bca005-code" target="_blank" rel="noreferrer" className="block rounded-lg border border-charcoal-900/10 dark:border-cream-100/10 bg-white/60 dark:bg-charcoal-900/30 px-3 py-2 text-charcoal-800 dark:text-cream-200 transition-all duration-200 hover:border-terracotta-800/30 dark:hover:border-terracotta-600/30 active:scale-[0.98] active:bg-terracotta-50/60 dark:active:bg-charcoal-800/60">
                    GitHub: chetan079bca005-code
                  </a>
                  <a href="tel:+9779849756660" className="block rounded-lg border border-charcoal-900/10 dark:border-cream-100/10 bg-white/60 dark:bg-charcoal-900/30 px-3 py-2 text-charcoal-800 dark:text-cream-200 transition-all duration-200 hover:border-terracotta-800/30 dark:hover:border-terracotta-600/30 active:scale-[0.98] active:bg-terracotta-50/60 dark:active:bg-charcoal-800/60">
                    Phone: +977-9849756660
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-terracotta-800 dark:text-terracotta-600">
                  Chetan Koirala / Kathmandu, Nepal
                </p>
                <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.02] text-charcoal-900 dark:text-cream-50">
                  Designed to feel clearer, warmer, and easier to use.
                </h1>
                <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-charcoal-800 dark:text-cream-200">
                  I build practical web products with a sharper visual system: cleaner contrast, stronger typography, easier contact actions, and a CV download path visitors can reach in one click.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center justify-center rounded-full bg-charcoal-900 px-5 py-3 font-mono text-xs font-semibold tracking-wide text-cream-100 transition-transform hover:-translate-y-0.5 active:scale-[0.97] dark:bg-cream-100 dark:text-charcoal-900"
                >
                  View Projects
                </a>
                <a
                  href={cvUrl}
                  download="Chetan-Koirala-CV.html"
                  className="inline-flex items-center justify-center rounded-full border border-charcoal-900/15 px-5 py-3 font-mono text-xs font-semibold tracking-wide text-charcoal-800 transition-all hover:border-charcoal-900 hover:bg-charcoal-900 hover:text-cream-100 active:scale-[0.97] dark:border-cream-100/20 dark:text-cream-100 dark:hover:bg-cream-100 dark:hover:text-charcoal-900"
                >
                  Download CV
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-moss-700/20 bg-moss-700/10 px-5 py-3 font-mono text-xs font-semibold tracking-wide text-moss-800 transition-all hover:bg-moss-700 hover:text-cream-100 active:scale-[0.97] dark:border-moss-700/30 dark:bg-moss-800/20 dark:text-moss-700 dark:hover:bg-moss-700 dark:hover:text-cream-50"
                >
                  WhatsApp Me
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  ['Role', 'Full-Stack Developer'],
                  ['Focus', 'React / Node'],
                  ['Location', 'Kathmandu, Nepal'],
                  ['Response', 'Direct contact'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-charcoal-900/10 dark:border-cream-100/10 bg-cream-100/70 dark:bg-charcoal-900/55 p-3 transition-all hover:border-terracotta-800/25 dark:hover:border-terracotta-600/25 hover:-translate-y-0.5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-charcoal-700/70 dark:text-cream-200/60">{label}</div>
                    <div className="mt-1 text-sm font-medium text-charcoal-900 dark:text-cream-50">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-5 lg:justify-self-end w-full max-w-xl">
              <div className="border border-charcoal-900/10 dark:border-cream-100/10 bg-[#fff7ee]/92 dark:bg-charcoal-900/60 p-5 sm:p-6 rounded-[1.75rem] shadow-[0_18px_45px_rgba(28,25,23,0.08)] relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-terracotta-800 via-amber-500 to-moss-700" />

                <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
                  <div className="relative group w-36 h-36 rounded-[1.5rem] overflow-hidden border border-charcoal-900/15 dark:border-cream-100/15 bg-gradient-to-br from-terracotta-100 to-cream-200 dark:from-charcoal-800 dark:to-charcoal-900 shadow-lg">
                    <img
                      src="/profile-image.jpeg"
                      alt="Chetan Koirala"
                      className="w-full h-full object-cover scale-[1.01] transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/10 via-transparent to-transparent" />
                  </div>

                  <div className="space-y-1">
                    <h2 className="text-2xl font-serif font-normal tracking-tight text-charcoal-900 dark:text-cream-50">
                      Chetan Koirala
                    </h2>
                    <p className="font-mono text-xs text-terracotta-800 dark:text-terracotta-600 font-semibold tracking-widest uppercase">
                      Full-Stack Developer
                    </p>
                  </div>

                  <div className="w-full border-t border-charcoal-900/10 dark:border-cream-100/10 my-1"></div>

                  <div className="w-full space-y-2.5 font-mono text-xs text-charcoal-700 dark:text-cream-200">
                    <div className="flex justify-between gap-4">
                      <span className="text-charcoal-700 dark:text-cream-100/70">Location:</span>
                      <span className="font-sans text-right">Kathmandu, Nepal</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-charcoal-700 dark:text-cream-100/70">Local Time (KTM):</span>
                      <span className="font-mono tabular-nums text-right">{ktmTime || '09:48:52'}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-charcoal-700 dark:text-cream-100/70">Education:</span>
                      <span className="font-sans text-right">BCA, Tribhuvan Univ.</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-charcoal-700 dark:text-cream-100/70">Agency Intern:</span>
                      <span className="font-sans text-right">Lumbini Digital (Remote)</span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                      <span className="text-charcoal-700 dark:text-cream-100/70">Status:</span>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-sans font-medium bg-green-100 dark:bg-green-900/30 text-moss-800 dark:text-moss-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400 animate-pulse"></span>
                        Open to Role
                      </span>
                    </div>
                  </div>

                  <div className="w-full border-t border-charcoal-900/10 dark:border-cream-100/10 my-1"></div>

                  <div className="w-full space-y-2 font-mono text-xs">
                    <div className="text-[10px] uppercase text-charcoal-700/70 dark:text-cream-100/40 tracking-wider">Communication channels</div>
                    <a href="mailto:koiralachetan16@gmail.com" className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-charcoal-800 dark:text-cream-200 hover:text-terracotta-800 dark:hover:text-terracotta-600 transition-all duration-200 hover:bg-charcoal-900/5 dark:hover:bg-cream-100/5 active:scale-[0.98]">
                      <span className="text-terracotta-800 dark:text-terracotta-600">→</span> koiralachetan16@gmail.com
                    </a>
                    <a href="https://github.com/chetan079bca005-code" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-charcoal-800 dark:text-cream-200 hover:text-terracotta-800 dark:hover:text-terracotta-600 transition-all duration-200 hover:bg-charcoal-900/5 dark:hover:bg-cream-100/5 active:scale-[0.98]">
                      <span className="text-terracotta-800 dark:text-terracotta-600">→</span> github/chetan079bca005-code
                    </a>
                    <a href="tel:+9779849756660" className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-charcoal-800 dark:text-cream-200 hover:text-terracotta-800 dark:hover:text-terracotta-600 transition-all duration-200 hover:bg-charcoal-900/5 dark:hover:bg-cream-100/5 active:scale-[0.98]">
                      <span className="text-terracotta-800 dark:text-terracotta-600">→</span> +977-9849756660
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="space-y-20 lg:pt-4">
          <section id="home" className="scroll-mt-28">
            <Home />
          </section>

          <section id="about" className="scroll-mt-28 border-t border-charcoal-900/10 dark:border-cream-100/10 pt-16">
            <About />
          </section>

          <section id="experience" className="scroll-mt-28 border-t border-charcoal-900/10 dark:border-cream-100/10 pt-16">
            <Experience />
          </section>

          <section id="projects" className="scroll-mt-28 border-t border-charcoal-900/10 dark:border-cream-100/10 pt-16">
            <Projects />
          </section>

          <section id="contact" className="scroll-mt-28 border-t border-charcoal-900/10 dark:border-cream-100/10 pt-16">
            <Contact />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
