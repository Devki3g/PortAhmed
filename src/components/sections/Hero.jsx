import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiSend } from 'react-icons/fi'
import Button from '../ui/Button'
import { personalInfo, heroData, stats } from '../../data/portfolioData'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % heroData.roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-grid">
      {/* عناصر الخلفية المتحركة */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 5 }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full filter blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* المحتوى النصي */}
          <div>
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                {personalInfo.freelance === 'متاح' ? '🟢 متاح للعمل الحر' : '🔴 غير متاح حالياً'}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block text-gray-300">{heroData.greeting}</span>
              <span className="gradient-text block mt-2">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-3xl text-gray-400 mb-8 h-12"
            >
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="gradient-text-reverse inline-block"
              >
                {heroData.roles[currentRole]}
              </motion.span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed"
            >
              {personalInfo.aboutDescription}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button href="#contact" size="lg" icon={FiSend}>
                {heroData.cta.primary}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href={personalInfo.resumeUrl} 
                icon={FiDownload}
                download
              >
                {heroData.cta.secondary}
              </Button>
            </motion.div>

            {/* الإحصائيات */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="glass-effect rounded-xl p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* الصورة/الأفاتار */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-1"
              >
                <div className="w-full h-full rounded-full bg-dark flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <span className="text-8xl md:text-9xl gradient-text font-bold">
                      {personalInfo.firstName.charAt(0)}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* عناصر عائمة */}
              <motion.div
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-5 -right-5 w-20 h-20 bg-primary/20 rounded-2xl backdrop-blur-sm flex items-center justify-center"
              >
                <span className="text-2xl">💻</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 30, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-5 -left-5 w-16 h-16 bg-secondary/20 rounded-full backdrop-blur-sm flex items-center justify-center"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/2 -left-10 w-12 h-12 bg-accent/20 rounded-lg backdrop-blur-sm flex items-center justify-center"
              >
                <span className="text-xl">⚡</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* مؤشر التمرير */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-sm">تصفح المزيد</span>
            <FiArrowDown className="text-2xl animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
