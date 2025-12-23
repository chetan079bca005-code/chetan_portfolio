import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi'
import Card from '../components/Card'
import Button from '../components/Button'

const Projects = () => {
  // Update this with your GitHub username
  const githubUsername = 'ChetanKoirala' // Change this to your actual GitHub username
  
  const projects = [
    {
      id: 1,
      title: 'GreenCart – E-commerce Store',
      description: 'A full-stack e-commerce platform for Nepali local products with secure payment gateway integration (eSewa/Khalti), dynamic dashboards, and comprehensive cart management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Firebase', 'Vite', 'Tailwind CSS'],
      liveUrl: `https://github.com/${githubUsername}`, // Links to GitHub profile
      githubUrl: `https://github.com/${githubUsername}?tab=repositories`, // Links to repositories
      featured: true,
    },
    {
      id: 2,
      title: 'Online News Portal System',
      description: 'A complete multi-role news portal system with admin, reporter, and user roles. Features include article management, category system, and user authentication.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      liveUrl: `https://github.com/${githubUsername}`, // Links to GitHub profile
      githubUrl: `https://github.com/${githubUsername}?tab=repositories`, // Links to repositories
      featured: false,
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
    hidden: { opacity: 0, y: 30 },
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
            My Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and experience
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              variants={itemVariants}
              delay={index * 0.2}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Project Card Component
const ProjectCard = ({ project, variants, delay }) => {
  return (
    <motion.div variants={variants} custom={delay}>
      <Card className="overflow-hidden group h-full flex flex-col">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x400?text=' + encodeURIComponent(project.title)
            }}
          />
          {project.featured && (
            <span className="absolute top-4 right-4 px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Project Content */}
        <div className="flex-grow flex flex-col p-6">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <Button
              href={project.liveUrl}
              variant="primary"
              size="sm"
              external
              className="flex-1"
            >
              <FiExternalLink className="mr-2" />
              Live Demo
            </Button>
            <Button
              href={project.githubUrl}
              variant="outline"
              size="sm"
              external
              className="flex-1"
            >
              <FiGithub className="mr-2" />
              Code
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default Projects

