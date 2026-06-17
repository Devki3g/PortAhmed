import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const usePortfolioStore = create(
  persist(
    (set, get) => ({
      // State
      isMenuOpen: false,
      activeSection: 'home',
      isDarkMode: true,
      isLoading: false,
      currentLanguage: 'ar',
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      
      // Actions
      toggleMenu: () => {
        const newState = !get().isMenuOpen
        set({ isMenuOpen: newState })
        // منع التمرير عند فتح القائمة
        document.body.style.overflow = newState ? 'hidden' : 'unset'
      },
      
      closeMenu: () => {
        set({ isMenuOpen: false })
        document.body.style.overflow = 'unset'
      },
      
      setActiveSection: (section) => {
        // التحقق من أن section صحيح قبل تعيينه
        if (section && typeof section === 'string') {
          set({ activeSection: section })
        }
      },
      
      toggleTheme: () => {
        const newTheme = !get().isDarkMode
        set({ isDarkMode: newTheme })
        
        // تطبيق الثيم على المستند
        if (newTheme) {
          document.documentElement.classList.add('dark')
          document.documentElement.classList.remove('light')
          document.documentElement.style.colorScheme = 'dark'
        } else {
          document.documentElement.classList.remove('dark')
          document.documentElement.classList.add('light')
          document.documentElement.style.colorScheme = 'light'
        }
      },
      
      setLoading: (loading) => set({ isLoading: loading }),
      
      // Form Actions
      updateFormData: (field, value) => 
        set((state) => ({
          formData: { ...state.formData, [field]: value }
        })),
      
      resetForm: () => 
        set({
          formData: {
            name: '',
            email: '',
            subject: '',
            message: ''
          }
        }),
        
      // Language
      setLanguage: (lang) => {
        set({ currentLanguage: lang })
        document.documentElement.lang = lang
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
      },
      
      // Helper to scroll to section
      scrollToSection: (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const navbarHeight = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
          
          set({ activeSection: sectionId })
          return true
        }
        return false
      }
    }),
    {
      name: 'portfolio-storage',
      partialize: (state) => ({ 
        isDarkMode: state.isDarkMode,
        currentLanguage: state.currentLanguage 
      }),
      // استعادة الثيم عند تحميل الصفحة
      onRehydrateStorage: () => (state) => {
        if (state?.isDarkMode !== undefined) {
          if (state.isDarkMode) {
            document.documentElement.classList.add('dark')
            document.documentElement.classList.remove('light')
            document.documentElement.style.colorScheme = 'dark'
          } else {
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('light')
            document.documentElement.style.colorScheme = 'light'
          }
        }
      }
    }
  )
)

export default usePortfolioStore
