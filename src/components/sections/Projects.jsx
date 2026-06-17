import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/portfolioData'
import { FiGrid, FiList } from 'react-icons/fi'

const Projects = () => {
  const [filter, setFilter] = useState('الكل')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const categories = ['الكل', ...new Set(projects.map(p => p.category))]
  
  const filteredProjects = filter === 'الكل' 
    ? projects 
    : projects.filter(p => p.category === filter)

  const stats = {
    all: projects.length,
    featured: projects.filter(p => p.featured).length,
    categories: categories.length - 1
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="المشاريع"
          subtitle="بعض من أعمالي الحديثة"
        />

        {/* إحصائيات سريعة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto"
        >
          <div className="glass-effect rounded-xl p-4 text-center">
            <div className="text-2xl font-bold gradient-text">{stats.all}</div>
            <div className="text-xs text-gray-400 mt-1">مشروع</div>
          </div>
          <div className="glass-effect rounded-xl p-4 text-center">
            <div className="text-2xl font-bold gradient-text">{stats.featured}</div>
            <div className="text-xs text-gray-400 mt-1">مشروع مميز</div>
          </div>
          <div className="glass-effect rounded-xl p-4 text-center">
            <div className="text-2xl font-bold gradient-text">{stats.categories}</div>
            <div className="text-xs text-gray-400 mt-1">تصنيف</div>
          </div>
        </motion.div>

        {/* أزرار التصفية */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
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
              {category !== 'الكل' && (
                <span className="mr-2 text-xs opacity-70">
                  ({projects.filter(p => p.category === category).length})
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* رسالة إذا لم توجد مشاريع */}
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-400 text-lg">لا توجد مشاريع في هذا القسم حالياً</p>
            <button
              onClick={() => setFilter('الكل')}
              className="mt-4 text-primary hover:text-primary/80 transition-colors"
            >
              عرض جميع المشاريع
            </button>
          </motion.div>
        ) : (
          <motion.div
            layout
            className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 max-w-3xl mx-auto'
            }`}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* زر عرض المزيد */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-300 transition-all"
            >
              عرض المزيد من المشاريع
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
