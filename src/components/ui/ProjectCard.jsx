import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCalendar, FiFolder, FiCode, FiStar, FiEye } from 'react-icons/fi'

const ProjectCard = ({ project, index }) => {
  // استخدام لون المشروع المخصص أو لون افتراضي
  const getProjectColor = () => {
    const defaultColors = [
      { from: 'from-primary/20', to: 'to-secondary/20' },
      { from: 'from-blue-500/20', to: 'to-purple-500/20' },
      { from: 'from-green-500/20', to: 'to-teal-500/20' },
      { from: 'from-orange-500/20', to: 'to-red-500/20' },
      { from: 'from-pink-500/20', to: 'to-rose-500/20' },
      { from: 'from-indigo-500/20', to: 'to-blue-500/20' },
    ]
    return defaultColors[index % defaultColors.length]
  }

  const color = getProjectColor()

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass-effect rounded-2xl overflow-hidden group cursor-pointer"
    >
      {/* رأس البطاقة مع خلفية بديلة */}
      <div className="relative overflow-hidden h-52">
        {/* خلفية متدرجة ديناميكية */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color.from} ${color.to}`}></div>
        
        {/* نمط زخرفي */}
        <div className="absolute inset-0">
          {/* دوائر زخرفية */}
          <div className="absolute top-5 right-5 w-20 h-20 rounded-full bg-white/5"></div>
          <div className="absolute bottom-5 left-5 w-32 h-32 rounded-full bg-white/5"></div>
          
          {/* نقاط شبكية */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '15px 15px'
          }}></div>
        </div>

        {/* المحتوى الرئيسي للرأس */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="mb-4"
          >
            <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-lg">
              <FiFolder className="text-4xl text-white/80" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <span className="text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
              {project.category}
            </span>
          </motion.div>
        </div>

        {/* أزرار التحكم عند التحويم */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-center gap-3">
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/80 transition-colors shadow-lg"
              >
                <FiEye className="text-base" />
                معاينة
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors shadow-lg backdrop-blur-sm"
              >
                <FiCode className="text-base" />
                الكود
              </motion.a>
            )}
          </div>
        </div>

        {/* شارة مميز */}
        {project.featured && (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="absolute top-3 right-3"
          >
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/90 backdrop-blur-sm text-white text-xs rounded-full font-medium shadow-lg">
              <FiStar className="text-sm" />
              مميز
            </span>
          </motion.div>
        )}

        {/* رقم المشروع */}
        <div className="absolute top-3 left-3 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
          <span className="text-sm font-bold text-white/70">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* محتوى البطاقة */}
      <div className="p-6">
        {/* العنوان والتاريخ */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors flex-1 ml-4">
            {project.title}
          </h3>
          {project.completionDate && (
            <div className="flex items-center gap-1.5 text-xs text-gray-400 whitespace-nowrap">
              <FiCalendar className="text-sm" />
              <span>{project.completionDate}</span>
            </div>
          )}
        </div>
        
        {/* الوصف */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* التقنيات المستخدمة */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1.5 rounded-lg bg-white/5 text-gray-300 border border-white/5 flex items-center gap-1.5 hover:bg-white/10 hover:border-white/10 transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
