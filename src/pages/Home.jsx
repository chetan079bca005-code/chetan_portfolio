const Home = () => {
  return (
    <div className="space-y-6 py-4 rounded-[1.75rem] border border-charcoal-900/10 dark:border-cream-100/10 bg-cream-50/70 dark:bg-charcoal-800/20 p-6 sm:p-8 shadow-[0_16px_40px_rgba(28,25,23,0.05)]">
      <div className="flex items-center gap-2 text-terracotta-800 dark:text-terracotta-600 font-mono text-xs font-semibold tracking-wider uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-terracotta-800 dark:bg-terracotta-600"></span>
        01 / Introduction
      </div>

      <h2 className="max-w-2xl text-4xl sm:text-5xl font-serif text-charcoal-900 dark:text-cream-50 leading-tight">
        Building functional, well-crafted web systems from Kathmandu.
      </h2>

      <div className="max-w-none text-charcoal-800 dark:text-cream-200 font-sans text-base sm:text-lg leading-relaxed space-y-4">
        <p>
          I am a frontend-leaning full-stack developer finishing up my Bachelor&apos;s in Computer Application (BCA) at Tribhuvan University. Currently, I work as a remote frontend developer intern at Lumbini Digital, an agency based here in Nepal.
        </p>
        <p>
          I focus on clean interfaces and sound architecture. I am comfortable working across the entire codebase-writing custom UI components in React and TypeScript down to designing APIs with Node.js/Express and managing data structures in MongoDB or PostgreSQL.
        </p>
        <p>
          Right now, I am looking for an entry-level frontend or full-stack role where I can contribute to shipping real products, write clean code, and learn from experienced engineering teams.
        </p>
      </div>

      <div className="pt-2 flex flex-wrap gap-4 font-mono text-xs">
        <a 
          href="#projects" 
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="px-4 py-2 border border-charcoal-900 dark:border-cream-100 bg-charcoal-900 dark:bg-cream-100 text-cream-100 dark:text-charcoal-900 hover:bg-transparent dark:hover:bg-transparent hover:text-charcoal-900 dark:hover:text-cream-100 transition-all rounded-full active:scale-[0.97]"
        >
          View Projects ↳
        </a>
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="px-4 py-2 border border-charcoal-900/20 dark:border-cream-100/20 hover:border-charcoal-900 dark:hover:border-cream-100 transition-all rounded-full active:scale-[0.97]"
        >
          Get in Touch ↳
        </a>
        <a
          href="/resume.html"
          download="Chetan-Koirala-CV.html"
          className="px-4 py-2 border border-moss-700/15 bg-moss-700/10 text-moss-800 dark:text-moss-700 hover:bg-moss-700 hover:text-cream-100 transition-all rounded-full active:scale-[0.97]"
        >
          Download CV ↳
        </a>
      </div>
    </div>
  )
}

export default Home

