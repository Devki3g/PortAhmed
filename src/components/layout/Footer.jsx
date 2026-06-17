import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart, FiArrowUp, FiPhone, FiMapPin } from 'react-icons/fi'
import { personalInfo, navLinks } from '../../data/portfolioData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    'روابط سريعة': navLinks,
    'خدماتي': [
      { name: 'تطوير الواجهات', href: '#services' },
      { name: 'تطوير الخلفية', href: '#services' },
      { name: 'استشارات تقنية', href: '#contact' },
      { name: 'تدريب وتوجيه', href: '#contact' },
    ],
    'تواصل معي': [
      { name: 'البريد الإلكتروني', href: `mailto:${personalInfo.email}`, icon: FiMail },
      { name: 'رقم الهاتف', href: `tel:${personalInfo.phone}`, icon: FiPhone },
      { name: 'الموقع', href: '#', icon: FiMapPin, text: personalInfo.location },
    ]
  }

  return (
    <footer className="bg-dark/80 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* الشبكة العلوية */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* معلومات عني */}
          <div className="lg:col-span-1">
            <motion.a
              href="#home"
              className="text-2xl font-bold mb-4 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text">{personalInfo.firstName}</span>
            </motion.a>
            <p className="text-gray-400 mt-4 leading-relaxed">
              مطور برمجيات شامل متخصص في بناء تطبيقات الويب الحديثة والقابلة للتطوير. أحول الأفكار إلى منتجات رقمية متميزة.
            </p>
            
            {/* وسائل التواصل الاجتماعي */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: FiGithub, href: personalInfo.socialLinks.github, label: 'GitHub' },
                { icon: FiLinkedin, href: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
                { icon: FiTwitter, href: personalInfo.socialLinks.twitter, label: 'Twitter' },
                { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'البريد الإلكتروني' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/5 rounded-full hover:bg-primary/20 transition-all border border-white/5 hover:border-primary/30 text-white"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="text-lg font-bold mb-6 gradient-text">روابط سريعة</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-all flex items-center gap-2 group"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* خدماتي */}
          <div>
            <h4 className="text-lg font-bold mb-6 gradient-text">خدماتي</h4>
            <ul className="space-y-3">
              {footerLinks['خدماتي'].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-all flex items-center gap-2 group"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* معلومات الاتصال */}
          <div>
            <h4 className="text-lg font-bold mb-6 gradient-text">معلومات الاتصال</h4>
            <ul className="space-y-4">
              {footerLinks['تواصل معي'].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-start gap-3 text-gray-400 hover:text-primary transition-all group"
                  >
                    {item.icon && (
                      <span className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <item.icon className="text-primary" />
                      </span>
                    )}
                    <div>
                      <p className="text-sm text-gray-500">{item.name}</p>
                      <p className="text-sm font-medium">{item.text || item.href.replace('mailto:', '').replace('tel:', '')}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* الحد السفلي */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} جميع الحقوق محفوظة. صُنع بـ
            بواسطة {personalInfo.name}
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
              الشروط والأحكام
            </a>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-primary/20 hover:bg-primary/30 rounded-full transition-colors"
              aria-label="العودة للأعلى"
            >
              <FiArrowUp className="text-primary" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
