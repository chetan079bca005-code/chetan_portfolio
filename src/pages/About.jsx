const About = () => {
  const skillCategories = [
    {
      title: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3']
    },
    {
      title: 'Frontend Frameworks & Libraries',
      items: ['React', 'React Router', 'Zustand', 'Tailwind CSS', 'Vite', 'Framer Motion']
    },
    {
      title: 'Backend & APIs',
      items: ['Node.js', 'Express.js', 'PHP', 'REST APIs', 'JWT']
    },
    {
      title: 'Databases & ORMs',
      items: ['MongoDB (Mongoose)', 'MySQL', 'PostgreSQL (Prisma)']
    },
    {
      title: 'Tools & Integrations',
      items: ['Git', 'Postman', 'Firebase', 'Vercel', 'eSewa/Khalti integration']
    }
  ]

  return (
    <div className="space-y-10 py-4">
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-terracotta-800 dark:text-terracotta-600 font-mono text-xs font-semibold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta-800 dark:bg-terracotta-600"></span>
          02 / About & Skills
        </div>

        <h3 className="text-2xl font-serif text-charcoal-900 dark:text-cream-50 font-normal">
          My Approach to Software
        </h3>

        <div className="text-charcoal-700 dark:text-cream-200 font-sans text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            I enjoy the process of turning requirements into clean, functional software. Because I view features as unified systems, I am comfortable owning them end-to-end: from building user-facing forms and custom state managers in React and TypeScript to implementing REST APIs in Node/Express and designing schemas for database storage.
          </p>
          <p>
            Much of my development growth has come from building real-world tools from scratch. Whether integrating local payment APIs like eSewa and Khalti under real conditions or planning caching strategies for scheduling dashboards, I enjoy researching, experimenting, and finding stable solutions. I prioritize writing code that is clear, well-commented, and easy to maintain.
          </p>
        </div>
      </div>

      <div className="space-y-6 border-t border-charcoal-900/5 dark:border-cream-100/5 pt-8">
        <div>
          <h3 className="text-lg font-serif text-charcoal-900 dark:text-cream-50 font-normal">
            Technical Inventory
          </h3>
          <p className="text-xs font-mono text-charcoal-700/75 dark:text-cream-100/60 mt-1">
            Technologies and tools I use in my projects. No arbitrary percentage levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.title} 
              className="border border-charcoal-900/10 dark:border-cream-100/10 bg-cream-50/40 dark:bg-charcoal-800/10 p-4 rounded"
            >
              <h4 className="font-mono text-xs text-terracotta-800 dark:text-terracotta-600 font-semibold uppercase mb-3 tracking-wider">
                // {category.title}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li 
                    key={item} 
                    className="font-mono text-xs bg-charcoal-900/5 dark:bg-cream-100/5 text-charcoal-800 dark:text-cream-200 px-2 py-1 rounded border border-charcoal-900/5 dark:border-cream-100/5 hover:border-terracotta-800/30 dark:hover:border-terracotta-600/30 transition-all cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About

