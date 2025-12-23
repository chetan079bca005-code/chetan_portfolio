import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Card from '../components/Card'

const About = () => {
  const skills = [
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'Node.js', level: 85, color: 'bg-green-500' },
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'MongoDB', level: 80, color: 'bg-green-600' },
    { name: 'Express', level: 85, color: 'bg-gray-700' },
    { name: 'Firebase', level: 75, color: 'bg-orange-500' },
    { name: 'Tailwind CSS', level: 90, color: 'bg-cyan-500' },
    { name: 'Python', level: 70, color: 'bg-blue-600' },
    { name: 'PHP', level: 75, color: 'bg-indigo-600' },
    { name: 'MySQL', level: 80, color: 'bg-blue-700' },
    { name: 'Git', level: 85, color: 'bg-orange-600' },
    { name: 'UI/UX', level: 80, color: 'bg-pink-500' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate full-stack developer with experience in building modern web applications
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I'm a dedicated Full Stack Developer from Kathmandu, Nepal, currently pursuing
                my Bachelor's in Computer Application (BCA) at Tribhuwan University. My passion
                lies in creating innovative web solutions that solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I specialize in React, Node.js, MongoDB, and modern JavaScript frameworks.
                With hands-on experience in building e-commerce platforms, news portals, and
                automation systems, I bring practical knowledge to every project.
              </p>
            </motion.div>
          </Card>

          <Card>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                    Bachelor in Computer Application (BCA)
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    Tribhuwan University
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Kathmandu, Nepal
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    Focused on software development, process design, and project management.
                    Practical experience in building real-world web and automation systems.
                  </p>
                </div>
              </div>
            </motion.div>
          </Card>
        </div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Skill Bar Component with Animation
const SkillBar = ({ skill, delay }) => {
  const [width, setWidth] = useState(0)
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setWidth(skill.level)
          }, delay * 1000)
        }
      },
      { threshold: 0.5 }
    )

    if (barRef.current) {
      observer.observe(barRef.current)
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current)
      }
    }
  }, [skill.level, delay])

  return (
    <Card delay={delay}>
      <div className="mb-2 flex justify-between items-center">
        <span className="font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div
        ref={barRef}
        className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, delay: delay }}
          className={`h-full ${skill.color} rounded-full`}
        />
      </div>
    </Card>
  )
}

export default About

