import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <FaWhatsapp size={20} />,
      href: 'https://wa.me/9779849756660?text=Hello%20Chetan,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.',
      label: 'WhatsApp',
      className: 'hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400',
    },
    {
      icon: <FiLinkedin size={20} />,
      href: 'https://linkedin.com/np/ChetanKoirala',
      label: 'LinkedIn',
    },
    {
      icon: <FiGithub size={20} />,
      href: 'https://github.com/ChetanKoirala', // Update with your GitHub username
      label: 'GitHub',
    },
    {
      icon: <FiMail size={20} />,
      href: 'mailto:koiralachetan16@gmail.com',
      label: 'Email',
    },
    {
      icon: <FiPhone size={20} />,
      href: 'tel:+9779849756660',
      label: 'Phone',
    },
  ]

  const footerLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              Chetan Koirala
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full Stack Developer focused on building modern, scalable web applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors ${
                    social.className || 'hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Get In Touch
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="mailto:koiralachetan16@gmail.com"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  koiralachetan16@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+9779849756660"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  +977-9849756660
                </a>
              </li>
              <li>Kathmandu, Nepal</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Chetan Koirala. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

