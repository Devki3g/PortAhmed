import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/portfolioData'

const Projects = () => {
  const [filter, setFilter] = useState('الكل')
  const categories = ['الكل', ...new Set(projects.map(p => p.category))]
  
  const filteredProjects = filter === 'الكل' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="المشاريع"
          subtitle="بعض من أعمالي الحديثة"
        />

        {/* أزرار التصفية */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all text-sm ${
                filter === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* رسالة إذا لم توجد مشاريع */}
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">لا توجد مشاريع في هذا القسم حالياً</p>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
