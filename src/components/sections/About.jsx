import { motion } from 'framer-motion'
import { 
  FiUser, FiMapPin, FiMail, FiPhone, FiDownload, 
  FiCode, FiServer, FiDatabase, FiGlobe 
} from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { personalInfo } from '../../data/portfolioData'

const About = () => {
  const infoItems = [
    { icon: FiUser, label: 'الاسم', value: personalInfo.name },
    { icon: FiMapPin, label: 'الموقع', value: personalInfo.location },
    { icon: FiMail, label: 'البريد الإلكتروني', value: personalInfo.email },
    { icon: FiPhone, label: 'رقم الهاتف', value: personalInfo.phone },
  ]

  const expertise = [
    { icon: FiCode, title: 'تطوير الواجهات الأمامية', desc: 'خبرة في React و Vue.js' },
    { icon: FiServer, title: 'تطوير الخلفية', desc: 'Node.js و Python و Laravel' },
    { icon: FiDatabase, title: 'قواعد البيانات', desc: 'MongoDB و PostgreSQL' },
    { icon: FiGlobe, title: 'النشر والإستضافة', desc: 'AWS و Docker و Vercel' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 bg-grid opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <SectionTitle
          title="نبذة عني"
          subtitle="تعرف علي بشكل أفضل"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* الجزء الأيسر - المعلومات الشخصية */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-8 relative overflow-hidden">
              {/* زخرفة */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-2xl font-bold mb-6 gradient-text relative z-10">
                من أنا؟
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                {personalInfo.aboutDescription}
              </p>
              
              <p className="text-gray-400 leading-relaxed relative z-10">
                أركز على بناء حلول برمجية عالية الجودة باستخدام أحدث التقنيات.
                لدي شغف كبير بالتعلم المستمر وتطوير مهاراتي. أسعى دائماً لتقديم
                أفضل تجربة للمستخدم مع كود نظيف وقابل للصيانة.
              </p>

              {/* مميزات */}
              <div className="grid grid-cols-2 gap-4 mt-8 relative z-10">
                {personalInfo.aboutHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                  >
                    <span className="text-primary text-lg">✓</span>
                    <span className="text-sm text-gray-300">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              {/* زر التحميل */}
              <div className="mt-8 relative z-10">
                <Button href={personalInfo.resumeUrl} download icon={FiDownload}>
                  تحميل السيرة الذاتية
                </Button>
              </div>
            </div>
          </motion.div>

          {/* الجزء الأيمن - معلومات الاتصال والخبرات */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* معلومات الاتصال */}
            <div className="space-y-4 mb-8">
              {infoItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: -5 }}
                    className="glass-effect rounded-xl p-4 flex items-center gap-4 transition-all"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="text-xl text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="font-semibold text-white">{item.value}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* مجالات الخبرة */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="glass-effect rounded-xl p-5 text-center transition-all"
                  >
                    <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-3">
                      <Icon className="text-2xl text-primary" />
                    </div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* إحصائيات سريعة */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              {[
                { label: 'سنوات الخبرة', value: '5+' },
                { label: 'مشروع مكتمل', value: '30+' },
                { label: 'عميل سعيد', value: '25+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
