import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiSend, FiMail, FiMapPin, FiPhone, FiCheckCircle, 
  FiAlertCircle, FiClock, FiMessageSquare 
} from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import { personalInfo } from '../../data/portfolioData'
import usePortfolioStore from '../../store/usePortfolioStore'
import { validateForm } from '../../utils/validators'

const Contact = () => {
  const { formData, updateFormData, resetForm } = usePortfolioStore()
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // التحقق من صحة البيانات
    const validation = validateForm(formData)
    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      // محاكاة إرسال النموذج (استبدل هذا بطلب API حقيقي)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      resetForm()
      
      // إخفاء رسالة النجاح بعد 5 ثواني
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    updateFormData(name, value)
    // مسح الخطأ عند الكتابة
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const contactInfo = [
    { 
      icon: FiMail, 
      label: 'البريد الإلكتروني', 
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-blue-400'
    },
    { 
      icon: FiPhone, 
      label: 'رقم الهاتف', 
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'text-green-400'
    },
    { 
      icon: FiMapPin, 
      label: 'الموقع', 
      value: personalInfo.location,
      color: 'text-red-400'
    },
    { 
      icon: FiClock, 
      label: 'أوقات العمل', 
      value: 'السبت - الخميس، 9 ص - 6 م',
      color: 'text-yellow-400'
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark/50 relative overflow-hidden">
      {/* عناصر زخرفية */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        <SectionTitle
          title="تواصل معي"
          subtitle="هل لديك مشروع أو فكرة؟ دعنا نعمل معاً"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* معلومات الاتصال */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="glass-effect rounded-2xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                معلومات التواصل
              </h3>
              
              <p className="text-gray-400 mb-8">
                أنا متاح للعمل الحر والمشاريع. لا تتردد في التواصل معي!
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  const Component = item.href ? motion.a : motion.div
                  
                  return (
                    <Component
                      key={item.label}
                      href={item.href}
                      target={item.href?.startsWith('mailto') || item.href?.startsWith('tel') ? undefined : '_blank'}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: -5 }}
                      className="flex items-center gap-4 p-4 glass-effect-hover rounded-xl"
                    >
                      <div className={`p-3 bg-white/5 rounded-lg ${item.color}`}>
                        <Icon className="text-xl" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                        <p className="font-semibold text-sm">{item.value}</p>
                      </div>
                    </Component>
                  )
                })}
              </div>

              {/* وسائل التواصل الاجتماعي */}
              <div className="mt-8 pt-8 border-t border-white/5">
                <h4 className="text-sm font-semibold text-gray-400 mb-4">
                  تابعني على
                </h4>
                <div className="flex gap-3">
                  {[
                    { label: 'GitHub', href: personalInfo.socialLinks.github },
                    { label: 'LinkedIn', href: personalInfo.socialLinks.linkedin },
                    { label: 'Twitter', href: personalInfo.socialLinks.twitter },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex-1 p-3 bg-white/5 rounded-lg text-center text-sm hover:bg-primary/20 transition-all"
                    >
                      {social.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* نموذج التواصل */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FiMessageSquare className="text-2xl text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">أرسل رسالة</h3>
                  <p className="text-sm text-gray-400">سأرد عليك في أقرب وقت ممكن</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      الاسم الكامل <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border transition-all text-white placeholder-gray-500 ${
                          errors.name 
                            ? 'border-red-400 focus:border-red-400' 
                            : 'border-white/10 focus:border-primary'
                        }`}
                        placeholder="أدخل اسمك الكامل"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <FiAlertCircle />
                          {errors.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      البريد الإلكتروني <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border transition-all text-white placeholder-gray-500 ${
                          errors.email 
                            ? 'border-red-400 focus:border-red-400' 
                            : 'border-white/10 focus:border-primary'
                        }`}
                        placeholder="example@domain.com"
                        dir="ltr"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <FiAlertCircle />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    الموضوع <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border transition-all text-white placeholder-gray-500 ${
                        errors.subject 
                          ? 'border-red-400 focus:border-red-400' 
                          : 'border-white/10 focus:border-primary'
                      }`}
                      placeholder="ما هو موضوع رسالتك؟"
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <FiAlertCircle />
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    الرسالة <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border transition-all text-white placeholder-gray-500 resize-none ${
                        errors.message 
                          ? 'border-red-400 focus:border-red-400' 
                          : 'border-white/10 focus:border-primary'
                      }`}
                      placeholder="اكتب رسالتك هنا..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <FiAlertCircle />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* رسائل النجاح والخطأ */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3"
                    >
                      <FiCheckCircle className="text-green-400 text-xl" />
                      <div>
                        <p className="text-green-400 font-medium">تم الإرسال بنجاح!</p>
                        <p className="text-green-400/70 text-sm">شكراً لتواصلك. سأرد عليك قريباً.</p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3"
                    >
                      <FiAlertCircle className="text-red-400 text-xl" />
                      <div>
                        <p className="text-red-400 font-medium">حدث خطأ!</p>
                        <p className="text-red-400/70 text-sm">يرجى المحاولة مرة أخرى لاحقاً.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="w-full bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      إرسال الرسالة
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
