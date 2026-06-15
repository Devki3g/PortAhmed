import { motion } from 'framer-motion'
import { FiBriefcase, FiCheckCircle, FiMapPin, FiCalendar } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import { experience } from '../../data/portfolioData'

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <SectionTitle
          title="الخبرات العملية"
          subtitle="مسيرتي المهنية"
        />

        <div className="relative">
          {/* خط التسلسل الزمني */}
          <div className="absolute right-8 md:right-1/2 md:translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* نقطة التسلسل */}
              <motion.div
                whileHover={{ scale: 1.5 }}
                className="absolute right-8 md:right-1/2 transform translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark z-10 shadow-lg shadow-primary/50"
              />

              {/* المحتوى */}
              <div className={`mr-20 md:mr-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:ml-auto md:pr-12' : 'md:mr-auto md:pl-12'
              }`}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="glass-effect rounded-xl p-6 transition-all"
                >
                  {/* الرأس */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      <FiCalendar className="text-sm" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 text-gray-400 rounded-full text-xs">
                      <FiMapPin className="text-sm" />
                      {exp.location}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <FiBriefcase className="text-primary" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* الإنجازات */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-primary mb-2">الإنجازات الرئيسية:</h4>
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <FiCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
