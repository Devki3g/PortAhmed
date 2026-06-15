import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, center = true, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`mb-16 ${center ? 'text-center' : ''} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '6rem' }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4"
      />
    </motion.div>
  )
}

export default SectionTitle
