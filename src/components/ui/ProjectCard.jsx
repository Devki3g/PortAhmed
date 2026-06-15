import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCalendar } from 'react-icons/fi'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass-effect rounded-2xl overflow-hidden group"
    >
      {/* صورة المشروع */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* طبقة التأثير */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4 gap-3">
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary rounded-full hover:bg-primary/80 transition-colors shadow-lg"
              title="معاينة المشروع"
            >
              <FiExternalLink className="text-white" />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dark/80 rounded-full hover:bg-dark transition-colors shadow-lg"
              title="الكود المصدري"
            >
              <FiGithub className="text-white" />
            </motion.a>
          )}
        </div>

        {/* شارة مميز */}
        {project.featured && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-white text-xs rounded-full font-medium">
            مميز
          </div>
        )}
      </div>

      {/* محتوى البطاقة */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* التقنيات المستخدمة */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 rounded bg-white/5 text-gray-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* تاريخ الإكمال */}
        {project.completionDate && (
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <FiCalendar className="text-sm" />
            <span>اكتمل في {project.completionDate}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard
