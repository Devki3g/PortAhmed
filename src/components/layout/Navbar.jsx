import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiMoon, FiSun, FiDownload } from 'react-icons/fi'
import usePortfolioStore from '../../store/usePortfolioStore'
import { navLinks, personalInfo } from '../../data/portfolioData'

const Navbar = () => {
  const { isMenuOpen, toggleMenu, closeMenu, activeSection, isDarkMode, toggleTheme } = usePortfolioStore()
  const [scrolled, setScrolled] = useState(false)

  // تتبع القسم النشط عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // تحديد القسم النشط
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.pageYOffset + 150

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop
        const sectionId = section.getAttribute('id')

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          usePortfolioStore.getState().setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // تشغيل فوري
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // التنقل السلس إلى الأقسام
  const handleNavClick = (href) => {
    closeMenu()
    const sectionId = href.replace('#', '')
    const element = document.getElementById(sectionId)
    
    if (element) {
      // استخدام smooth scrolling
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
      
      // تحديث القسم النشط
      usePortfolioStore.getState().setActiveSection(sectionId)
    } else {
      console.warn(`Section with id "${sectionId}" not found`)
    }
  }

  // تبديل الثيم
  const handleThemeToggle = () => {
    toggleTheme()
    // يمكنك إضافة تأثيرات إضافية هنا
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/90 backdrop-blur-xl shadow-2xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* الشعار */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
            className="text-2xl md:text-3xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="gradient-text">{personalInfo.firstName}</span>
          </motion.a>

          {/* القائمة للمتصفح */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              
              return (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary/20 rounded-lg border border-primary/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* الأزرار */}
          <div className="hidden lg:flex items-center gap-3">
            {/* زر تغيير الثيم */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleThemeToggle}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              aria-label={isDarkMode ? 'تفعيل الوضع النهاري' : 'تفعيل الوضع الليلي'}
              title={isDarkMode ? 'الوضع النهاري' : 'الوضع الليلي'}
            >
              {isDarkMode ? (
                <FiSun className="text-xl text-yellow-400" />
              ) : (
                <FiMoon className="text-xl text-blue-400" />
              )}
            </motion.button>

            {/* زر تحميل السيرة الذاتية */}
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-full text-sm font-medium transition-colors"
              onClick={(e) => {
                // إذا كان الملف غير موجود، نمنع التحميل
                if (!personalInfo.resumeUrl) {
                  e.preventDefault()
                  alert('السيرة الذاتية ستكون متاحة قريباً')
                }
              }}
            >
              <FiDownload />
              <span>السيرة الذاتية</span>
            </motion.a>
          </div>

          {/* زر القائمة للموبايل */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* قائمة الموبايل */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="lg:hidden bg-dark/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId
                
                return (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`block w-full text-right px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? 'bg-primary/20 text-primary font-medium'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                )
              })}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4 mt-4 border-t border-white/5 space-y-2"
              >
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg text-sm font-medium transition-colors"
                  onClick={(e) => {
                    if (!personalInfo.resumeUrl) {
                      e.preventDefault()
                      alert('السيرة الذاتية ستكون متاحة قريباً')
                    }
                  }}
                >
                  <FiDownload />
                  تحميل السيرة الذاتية
                </a>
                
                <button
                  onClick={handleThemeToggle}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-colors"
                >
                  {isDarkMode ? (
                    <>
                      <FiSun className="text-yellow-400" />
                      الوضع النهاري
                    </>
                  ) : (
                    <>
                      <FiMoon className="text-blue-400" />
                      الوضع الليلي
                    </>
                  )}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
