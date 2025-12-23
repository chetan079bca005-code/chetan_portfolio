import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi'
import Card from '../components/Card'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Frontend Developer',
      company: 'GreenCart Project',
      location: 'Kathmandu, Nepal',
      duration: 'Apr 2024 – Present',
      description: [
        'Developed a modern, responsive e-commerce frontend using React and Tailwind CSS',
        'Collaborated with team to integrate Firebase and eSewa payment gateway',
        'Worked on dynamic user/seller dashboards and cart/address management using React Router',
      ],
      tech: ['React', 'Tailwind CSS', 'Firebase', 'React Router'],
    },
    {
      id: 2,
      type: 'internship',
      title: 'Tech Intern',
      company: 'Research And Innovation Unit (RIU)',
      location: 'Kathmandu, Nepal',
      duration: 'Jun 2022 – Aug 2022',
      description: [
        'Participated in robotic system prototyping for basic automation tasks',
        'Assisted in system testing and quality assurance',
        'Gained hands-on experience in teamwork and industry-level problem solving',
      ],
      tech: ['Robotics', 'Automation', 'QA Testing'],
    },
  ]

  const achievements = [
    {
      id: 1,
      title: 'Best Academic Project',
      description: 'BCA 4th Semester (2023)',
      icon: <FiAward />,
    },
    {
      id: 2,
      title: 'Student Startup Initiative',
      description: 'Led GreenCart project (2024)',
      icon: <FiAward />,
    },
    {
      id: 3,
      title: 'Guest Speaker',
      description: 'Building Modern UIs with React - College Tech Meetup (2025)',
      icon: <FiAward />,
    },
    {
      id: 4,
      title: 'Academic Excellence',
      description: 'A+ in Software Engineering & Web Programming Practical Labs',
      icon: <FiAward />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section className="section-padding pt-32">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional journey and notable accomplishments
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
            <FiBriefcase className="mr-3 text-primary-600 dark:text-primary-400" />
            Professional Experience
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block"></div>

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceItem
                  key={exp.id}
                  experience={exp}
                  variants={itemVariants}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
            <FiAward className="mr-3 text-primary-600 dark:text-primary-400" />
            Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                custom={index}
              >
                <Card>
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Experience Item Component
const ExperienceItem = ({ experience, variants, isLast }) => {
  return (
    <motion.div variants={variants} className="relative pl-16 md:pl-0">
      {/* Timeline Dot */}
      <div className="absolute left-6 md:left-6 top-6 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>

      <Card>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {experience.title}
            </h4>
            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
              {experience.company}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center">
                <FiCalendar className="mr-1" />
                {experience.duration}
              </span>
              <span className="flex items-center">
                <FiMapPin className="mr-1" />
                {experience.location}
              </span>
            </div>
          </div>
          <span className="mt-2 md:mt-0 px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
            {experience.type === 'work' ? 'Professional' : 'Internship'}
          </span>
        </div>

        {/* Description */}
        <ul className="space-y-2 mb-4">
          {experience.description.map((item, index) => (
            <li
              key={index}
              className="text-gray-600 dark:text-gray-400 flex items-start"
            >
              <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

export default Experience

