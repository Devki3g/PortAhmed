import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiMoon, FiSun, FiDownload } from 'react-icons/fi'
import usePortfolioStore from '../../store/usePortfolioStore'
import { navLinks, personalInfo } from '../../data/portfolioData'

const Navbar = () => {
  const { isMenuOpen, toggleMenu, closeMenu, activeSection, isDarkMode, toggleTheme } = usePortfolioStore()
  const [scrolled, setScrolled] = useState(false)
  const navbarRef = useRef(null)

  // تتبع التمرير لتحديد القسم النشط
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = navLinks.map(link => document.getElementById(link.href))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          usePortfolioStore.getState().setActiveSection(navLinks[i].href)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu()
      }
    }

    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscKey)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isMenuOpen, closeMenu])

  // إغلاق القائمة عند تغيير حجم النافذة
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        closeMenu()
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen, closeMenu])

  // منع التمرير عند فتح القائمة
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  // دالة التنقل إلى القسم
  const scrollToSection = (sectionId) => {
    closeMenu()
    
    const element = document.getElementById(sectionId)
    
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      usePortfolioStore.getState().setActiveSection(sectionId)
    }
  }

  return (
    <motion.nav
      ref={navbarRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/90 backdrop-blur-xl shadow-2xl border-b border-white/5'
          : 'bg-transparent'
      }`}
      style={{ direction: 'rtl' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* الشعار */}
          <motion.button
            onClick={() => scrollToSection('home')}
            className="text-2xl md:text-3xl font-bold bg-transparent border-none cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="gradient-text">{personalInfo.firstName}</span>
            
          </motion.button>

          {/* القائمة للمتصفح */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href
              
              return (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all bg-transparent border-none cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'  // تم تغيير اللون ليكون مرئياً
                  }`}
                  // تأكيد اللون في كلا الوضعين
                  style={{
                    color: isActive ? '#ffffff' : '#d1d5db'
                  }}
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
            {/* زر تغيير الثيم - تم إصلاح الألوان */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border-none cursor-pointer"
              title={isDarkMode ? 'الوضع النهاري' : 'الوضع الليلي'}
              style={{ color: '#ffffff' }}  // لون أبيض صريح
            >
              {isDarkMode ? (
                <FiSun className="text-xl" style={{ color: '#fbbf24' }} />  // أصفر
              ) : (
                <FiMoon className="text-xl" style={{ color: '#60a5fa' }} />  // أزرق فاتح
              )}
            </motion.button>

            {/* زر السيرة الذاتية */}
            <motion.a
              href={personalInfo.resumeUrl || '#'}
              download={!!personalInfo.resumeUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-full text-sm font-medium transition-colors"
              style={{ color: '#ffffff' }}  // لون أبيض صريح
              onClick={(e) => {
                if (!personalInfo.resumeUrl) {
                  e.preventDefault()
                  alert('السيرة الذاتية ستكون متاحة قريباً')
                }
              }}
            >
              <FiDownload style={{ color: '#ffffff' }} />
              <span>السيرة الذاتية</span>
            </motion.a>
          </div>

          {/* زر القائمة للموبايل - تم إصلاح اللون */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border-none cursor-pointer"
            style={{ color: '#ffffff' }}  // لون أبيض صريح
          >
            {isMenuOpen ? (
              <FiX size={24} style={{ color: '#ffffff' }} />
            ) : (
              <FiMenu size={24} style={{ color: '#ffffff' }} />
            )}
          </motion.button>
        </div>
      </div>

      {/* قائمة الموبايل */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* خلفية شفافة */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
              onClick={closeMenu}
            />
            
            {/* القائمة الجانبية */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="lg:hidden fixed top-0 right-0 h-screen w-80 bg-[#0f0f1a] backdrop-blur-xl border-l border-white/10 overflow-y-auto z-50 shadow-2xl"
              style={{ direction: 'rtl', backgroundColor: '#0f0f1a' }}  // خلفية داكنة صريحة
            >
              <div className="pt-20 px-6 pb-6 space-y-2">
                {/* زر الإغلاق - بلون مرئي */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border-none cursor-pointer"
                    style={{ color: '#ffffff' }}
                  >
                    <FiX size={24} style={{ color: '#ffffff' }} />
                  </button>
                </div>

                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href
                  
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(link.href)}
                      className={`block w-full text-right px-4 py-3 rounded-lg transition-all text-lg bg-transparent border-none cursor-pointer ${
                        isActive
                          ? 'bg-primary/20 text-white font-medium'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                      style={{
                        color: isActive ? '#ffffff' : '#d1d5db'  // ألوان صريحة
                      }}
                    >
                      {link.name}
                    </motion.button>
                  )
                })}
                
                <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
                  <a
                    href={personalInfo.resumeUrl || '#'}
                    download={!!personalInfo.resumeUrl}
                    className="flex items-center justify-center gap-2 w-full px-4 py-4 bg-primary hover:bg-primary/80 text-white rounded-lg font-medium transition-colors"
                    style={{ color: '#ffffff' }}
                    onClick={(e) => {
                      if (!personalInfo.resumeUrl) {
                        e.preventDefault()
                        alert('السيرة الذاتية ستكون متاحة قريباً')
                      }
                      closeMenu()
                    }}
                  >
                    <FiDownload style={{ color: '#ffffff' }} />
                    <span>تحميل السيرة الذاتية</span>
                  </a>
                  
                  <button
                    onClick={() => toggleTheme()}
                    className="flex items-center justify-center gap-2 w-full px-4 py-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors border-none cursor-pointer"
                    style={{ color: '#ffffff' }}
                  >
                    {isDarkMode ? (
                      <>
                        <FiSun className="text-xl" style={{ color: '#fbbf24' }} />
                        <span style={{ color: '#ffffff' }}>الوضع النهاري</span>
                      </>
                    ) : (
                      <>
                        <FiMoon className="text-xl" style={{ color: '#60a5fa' }} />
                        <span style={{ color: '#ffffff' }}>الوضع الليلي</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
