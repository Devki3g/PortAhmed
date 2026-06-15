export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validatePhone = (phone) => {
  const re = /^\+?[\d\s-]{10,}$/
  return re.test(phone)
}

export const validateForm = (formData) => {
  const errors = {}
  
  if (!formData.name.trim()) {
    errors.name = 'الاسم مطلوب'
  } else if (formData.name.trim().length < 3) {
    errors.name = 'الاسم يجب أن يكون 3 أحرف على الأقل'
  }
  
  if (!formData.email.trim()) {
    errors.email = 'البريد الإلكتروني مطلوب'
  } else if (!validateEmail(formData.email)) {
    errors.email = 'البريد الإلكتروني غير صالح'
  }
  
  if (!formData.subject.trim()) {
    errors.subject = 'الموضوع مطلوب'
  }
  
  if (!formData.message.trim()) {
    errors.message = 'الرسالة مطلوبة'
  } else if (formData.message.trim().length < 10) {
    errors.message = 'الرسالة يجب أن تكون 10 أحرف على الأقل'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}
