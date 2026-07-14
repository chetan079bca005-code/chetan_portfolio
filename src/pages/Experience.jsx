const Experience = () => {
  const experiences = [
    {
      role: 'Frontend Developer Intern',
      organization: 'Lumbini Digital',
      location: 'Remote (Nepal-based agency)',
      duration: 'Jun 2026 – Present',
      details: [
        'Collaborating with developer teams to construct frontend features for agency clients using React, TypeScript, and Tailwind CSS.',
        'Integrating client-side codebases with internal REST APIs and designing clean, reusable layout components.',
        'Refactoring layout designs to ensure solid mobile-first rendering and clean user flows.'
      ]
    },
    {
      role: 'Frontend Developer',
      organization: 'GreenCart (Self-Initiated)',
      location: 'Kathmandu, Nepal',
      duration: 'Apr 2024 – Present',
      details: [
        'Developed a responsive e-commerce storefront for local products using React, Node.js, Express, and MongoDB.',
        'Integrated Nepali payment gateways (eSewa and Khalti) for payment processing and verification.',
        'Constructed custom dashboards for buyers and sellers to manage active product listings and orders.'
      ]
    },
    {
      role: 'Tech Intern',
      organization: 'Research and Innovation Unit',
      location: 'Kathmandu, Nepal',
      duration: 'Jun 2022 – Aug 2022',
      details: [
        'Assisted in hardware robotic prototyping and basic script testing for automation runs.',
        'Participated in quality testing cycles, logging hardware bugs and writing simple verification test cases.',
        'Coordinated with team members on hardware system checklists and lab test documentation.'
      ]
    }
  ]

  return (
    <div className="space-y-8 py-4">
      <div className="flex items-center gap-2 text-terracotta-800 dark:text-terracotta-600 font-mono text-xs font-semibold tracking-wider uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-terracotta-800 dark:bg-terracotta-600"></span>
        03 / Professional Experience
      </div>

      <h3 className="text-2xl font-serif text-charcoal-900 dark:text-cream-50 font-normal">
        Work Timeline
      </h3>

      <div className="relative border-l border-charcoal-900/10 dark:border-cream-100/10 pl-6 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline bullet dot */}
            <div className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-cream-100 dark:bg-cream-900 border border-charcoal-900/30 dark:border-cream-100/30 group-hover:bg-terracotta-800 dark:group-hover:bg-terracotta-600 transition-colors"></div>
            
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h4 className="text-base font-serif font-normal text-charcoal-900 dark:text-cream-50">
                    {exp.role}
                  </h4>
                  <p className="font-mono text-xs text-charcoal-700/75 dark:text-cream-100/60">
                    {exp.organization} — <span className="font-sans text-[11px]">{exp.location}</span>
                  </p>
                </div>
                <div className="font-mono text-[10px] text-terracotta-800 dark:text-terracotta-600 bg-terracotta-50/50 dark:bg-charcoal-800 px-2 py-0.5 rounded border border-terracotta-800/10 dark:border-terracotta-600/10 h-fit w-fit">
                  {exp.duration}
                </div>
              </div>

              <ul className="list-none text-charcoal-700 dark:text-cream-200 text-xs sm:text-sm leading-relaxed space-y-2 pt-2">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-terracotta-800 dark:text-terracotta-600 mr-2 select-none">↳</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience


