const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-charcoal-900/10 dark:border-cream-100/10 mt-20 py-12 bg-cream-50/50 dark:bg-charcoal-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-charcoal-700 dark:text-cream-100/60">
          <div className="text-center md:text-left">
            <p>© {currentYear} Chetan Koirala. Kathmandu, Nepal.</p>
            <p className="mt-1 text-[10px] text-charcoal-700/60 dark:text-cream-100/40">
              Genuinely hand-crafted.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:koiralachetan16@gmail.com"
              className="rounded-full border border-charcoal-900/10 bg-white/60 px-4 py-2 hover:text-terracotta-800 dark:border-cream-100/10 dark:bg-charcoal-900/30 dark:hover:text-terracotta-600 transition-all active:scale-[0.97]"
            >
              Email
            </a>
            <a
              href="https://github.com/chetan079bca005-code"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-charcoal-900/10 bg-white/60 px-4 py-2 hover:text-terracotta-800 dark:border-cream-100/10 dark:bg-charcoal-900/30 dark:hover:text-terracotta-600 transition-all active:scale-[0.97]"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


