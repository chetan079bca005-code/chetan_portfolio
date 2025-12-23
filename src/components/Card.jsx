import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  delay = 0,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card

