import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiDownload, FiCode, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaWhatsapp, FaReact, FaNode, FaJs, FaCode } from 'react-icons/fa'
import Button from '../components/Button'

const Home = () => {
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

  const floatingIcons = [
    { icon: <FaReact size={40} />, delay: 0, color: 'text-blue-500' },
    { icon: <FaNode size={40} />, delay: 0.2, color: 'text-green-500' },
    { icon: <FaJs size={40} />, delay: 0.4, color: 'text-yellow-500' },
    { icon: <FaCode size={40} />, delay: 0.6, color: 'text-purple-500' },
  ]

  const socialLinks = [
    { icon: <FiGithub size={24} />, href: 'https://github.com/ChetanKoirala', label: 'GitHub' },
    { icon: <FiLinkedin size={24} />, href: 'https://linkedin.com/np/ChetanKoirala', label: 'LinkedIn' },
    { icon: <FaWhatsapp size={24} />, href: 'https://wa.me/9779849756660', label: 'WhatsApp' },
    { icon: <FiMail size={24} />, href: 'mailto:koiralachetan16@gmail.com', label: 'Email' },
  ]

  return (
    <section className="min-h-screen relative overflow-hidden section-padding pt-32 pb-16 flex items-center">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-300 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-blob"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-blob"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-blob"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-4">
                👋 Welcome to my Portfolio
              </span>
            </motion.div>

            {/* Name with Gradient */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
            >
              <span className="block text-gray-900 dark:text-white">Hi, I'm</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 dark:from-primary-400 dark:via-purple-400 dark:to-pink-400">
                Chetan Koirala
              </span>
            </motion.h1>

            {/* Profession with typing effect */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-700 dark:text-gray-300"
            >
              <span className="inline-flex items-center">
                <FiCode className="mr-2 text-primary-600 dark:text-primary-400" />
                Full Stack Developer
              </span>
            </motion.h2>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              I build modern, scalable web applications with a focus on user experience
              and clean code. Specialized in <span className="font-semibold text-primary-600 dark:text-primary-400">React</span>,{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">Node.js</span>, and full-stack development.
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-4 mb-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-xl hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                href="/projects"
                variant="primary"
                size="lg"
                className="group"
              >
                View My Work
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="group"
              >
                Get In Touch
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href="/resume"
                variant="ghost"
                size="lg"
                className="group"
              >
                <FiDownload className="mr-2 group-hover:translate-y-1 transition-transform" />
                Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image & Floating Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Profile Image Container */}
            <div className="relative">
              {/* Glowing Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Profile Image */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/profile-image.png"
                  alt="Chetan Koirala"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    // e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
                  }}
                />
              </motion.div>

              {/* Floating Tech Icons */}
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.color} bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: [
                      Math.cos((index * Math.PI * 2) / floatingIcons.length) * 120,
                      Math.cos((index * Math.PI * 2) / floatingIcons.length) * 130,
                      Math.cos((index * Math.PI * 2) / floatingIcons.length) * 120,
                    ],
                    y: [
                      Math.sin((index * Math.PI * 2) / floatingIcons.length) * 120,
                      Math.sin((index * Math.PI * 2) / floatingIcons.length) * 130,
                      Math.sin((index * Math.PI * 2) / floatingIcons.length) * 120,
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: item.delay,
                    repeatType: 'reverse',
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  {item.icon}
                </motion.div>
              ))}

              {/* Decorative Elements */}
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-primary-400 dark:border-primary-600 rounded-full opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border-4 border-purple-400 dark:border-purple-600 rounded-full opacity-50"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 dark:text-gray-600 cursor-pointer"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <FiArrowRight className="rotate-90" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
