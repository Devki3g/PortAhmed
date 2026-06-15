import { useEffect } from 'react'
import usePortfolioStore from '../store/usePortfolioStore'

export const useActiveSection = () => {
  const setActiveSection = usePortfolioStore((state) => state.setActiveSection)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.pageYOffset + 100

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop
        const sectionId = section.getAttribute('id')

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // تشغيل فوري لتحديد القسم النشط
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])
}
