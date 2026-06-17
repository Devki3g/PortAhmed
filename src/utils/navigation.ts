/**
 * التنقل السلس إلى قسم معين
 */
export const smoothScrollTo = (elementId, offset = 80) => {
  const element = document.getElementById(elementId)
  
  if (!element) {
    console.error(`العنصر ذو المعرف "${elementId}" غير موجود`)
    return false
  }

  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })

  return true
}

/**
 * التحقق من وجود جميع الأقسام المطلوبة
 */
export const validateSections = (requiredSections) => {
  const missingSections = []

  requiredSections.forEach(sectionId => {
    if (!document.getElementById(sectionId)) {
      missingSections.push(sectionId)
    }
  })

  if (missingSections.length > 0) {
    console.warn('الأقسام المفقودة:', missingSections)
    return false
  }

  return true
}

/**
 * مراقبة الأقسام لتحديد القسم النشط
 */
export const observeSections = (callback, options = {}) => {
  const defaultOptions = {
    threshold: 0.3,
    rootMargin: '-80px 0px 0px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target.id)
      }
    })
  }, { ...defaultOptions, ...options })

  const sections = document.querySelectorAll('section[id]')
  sections.forEach(section => observer.observe(section))

  return () => observer.disconnect()
}
