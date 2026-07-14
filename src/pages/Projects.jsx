const Projects = () => {
  const projects = [
    {
      title: 'GreenCart',
      github: 'https://github.com/chetan079bca005-code/greencartpasale',
      liveText: 'Ask me for Vercel link',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'eSewa', 'Khalti'],
      problem: 'Small local vendors in Nepal often lack simple online storefronts that support the local payment infrastructure without heavy administrative overhead.',
      decision: 'Integrated eSewa and Khalti payment gateways directly into the Express backend. Instead of relying solely on frontend redirects, I configured secure cryptographic signature verification endpoints to validate payment responses before updating order states in MongoDB, preventing transactional tampering.',
    },
    {
      title: 'Social Media Handler',
      github: 'https://github.com/chetan079bca005-code/social_media_handler',
      liveText: 'Ask me for deployment',
      tech: ['React 19', 'TypeScript', 'Tailwind', 'Zustand', 'TanStack Query', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL (Prisma)', 'Tip Tap', 'FullCalendar'],
      problem: 'Coordinating team actions and scheduling posts across multiple social workspaces requires absolute consistency in calendars and immediate UI updates.',
      decision: 'Chose Zustand for lightweight client state and TanStack Query for cache invalidation. Combined with PostgreSQL (Prisma) on the backend, I implemented optimistic updates in the Tip Tap editor and calendar modules to guarantee an instantly responsive UI during scheduling operations.',
    },
    {
      title: 'Pasale',
      github: 'https://github.com/chetan079bca005-code/pasale3.o',
      liveText: 'Ask me for deployment',
      tech: ['TypeScript', 'React', 'Tailwind CSS'],
      problem: 'Small shop owners in Nepal need a lightweight system to track inventory, run customer records, and print bills without complex configuration.',
      decision: 'Built an offline-resilient state buffer that keeps inventory catalogs and transaction queues in memory, allowing shop owners to perform billing operations quickly even during unstable internet connections, with bulk updates syncing when back online.',
    },
    {
      title: 'Medicare Health Assistant / PMS',
      github: null,
      liveText: 'In development',
      tech: ['TypeScript', 'React', 'Tailwind'],
      problem: 'Finalizing patient management and clinic scheduler requirements.',
      decision: 'Repository details and architectural write-up will be populated as soon as the PMS system is verified and deployed.',
      isPlaceholder: true
    }
  ]

  return (
    <div className="space-y-8 py-4">
      <div className="flex items-center gap-2 text-terracotta-800 dark:text-terracotta-600 font-mono text-xs font-semibold tracking-wider uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-terracotta-800 dark:bg-terracotta-600"></span>
        04 / Selected Projects
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-serif text-charcoal-900 dark:text-cream-50 font-normal">
          Technical Projects
        </h3>
        <p className="text-xs font-mono text-charcoal-700/75 dark:text-cream-100/60">
          A log of systems I have built, focusing on the problems they solve and the architecture behind them.
        </p>
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`border border-charcoal-900/10 dark:border-cream-100/10 bg-cream-50/20 dark:bg-charcoal-800/10 p-6 rounded relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-terracotta-800/25 dark:hover:border-terracotta-600/25 hover:shadow-[0_18px_36px_rgba(28,25,23,0.08)] active:scale-[0.995] ${
              project.isPlaceholder ? 'opacity-70 border-dashed' : ''
            }`}
          >
            {/* Project Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 border-b border-charcoal-900/5 dark:border-cream-100/5 pb-4 mb-4">
              <div>
                <h4 className="text-xl font-serif text-charcoal-900 dark:text-cream-50 font-normal">
                  {project.title}
                </h4>
                
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tech.map((tag) => (
                    <span 
                      key={tag}
                      className="font-mono text-[10px] bg-charcoal-900/5 dark:bg-cream-100/5 text-charcoal-700 dark:text-cream-300 px-1.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 font-mono text-xs pt-1">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-terracotta-800 dark:text-terracotta-600 hover:underline flex items-center gap-1 transition-all active:scale-[0.97]"
                  >
                    Source ↳
                  </a>
                )}
                <span className="text-charcoal-700/60 dark:text-cream-100/40">
                  {project.liveText}
                </span>
              </div>
            </div>

            {/* Project Body */}
            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-charcoal-700 dark:text-cream-200">
              <div>
                <span className="font-mono text-[11px] text-terracotta-800 dark:text-terracotta-600 uppercase tracking-wider block mb-1">
                  [Problem Context]
                </span>
                <p>{project.problem}</p>
              </div>

              <div>
                <span className="font-mono text-[11px] text-moss-800 dark:text-moss-700 uppercase tracking-wider block mb-1">
                  [Technical Decision & Rationale]
                </span>
                <p>{project.decision}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

