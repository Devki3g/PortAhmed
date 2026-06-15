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
      toggleMenu: () => set((state) => ({ 
        isMenuOpen: !state.isMenuOpen 
      })),
      
      closeMenu: () => set({ isMenuOpen: false }),
      
      setActiveSection: (section) => set({ activeSection: section }),
      
      toggleTheme: () => {
        const newTheme = !get().isDarkMode
        set({ isDarkMode: newTheme })
        
        // تطبيق الثيم على المستند
        if (newTheme) {
          document.documentElement.classList.add('dark')
          document.documentElement.style.colorScheme = 'dark'
        } else {
          document.documentElement.classList.remove('dark')
          document.documentElement.style.colorScheme = 'light'
        }
        
        console.log('Theme toggled:', newTheme ? 'Dark' : 'Light')
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
      }
    }),
    {
      name: 'portfolio-storage',
      partialize: (state) => ({ 
        isDarkMode: state.isDarkMode,
        currentLanguage: state.currentLanguage 
      })
    }
  )
)

export default usePortfolioStore
