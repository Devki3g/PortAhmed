import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import usePortfolioStore from './store/usePortfolioStore'
import { validateSections } from './utils/navigation'

function App() {
  const isLoading = usePortfolioStore((state) => state.isLoading)
  const isDarkMode = usePortfolioStore((state) => state.isDarkMode)

  // تطبيق الثيم عند تحميل التطبيق
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      document.documentElement.style.colorScheme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      document.documentElement.style.colorScheme = 'light'
    }
  }, [isDarkMode])

  // التحقق من الأقسام في وضع التطوير
  useEffect(() => {
    if (import.meta.env.DEV) {
      const requiredSections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
      validateSections(requiredSections)
    }
  }, [])

  // شاشة التحميل
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-dark">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">جاري التحميل...</p>
        </div>
      </div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </Layout>
    </AnimatePresence>
  )
}

export default App
