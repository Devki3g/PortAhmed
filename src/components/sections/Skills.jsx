import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import SkillBar from '../ui/SkillBar'
import { skills } from '../../data/portfolioData'

const Skills = () => {
  const categories = [...new Set(skills.map(skill => skill.category))]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
         title="المهارات التقنية"
         subtitle="التقنيات والأدوات التي أعمل بها"
          />

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6 gradient-text">
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
