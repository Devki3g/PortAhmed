import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import { testimonials } from '../../data/portfolioData'

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="آراء العملاء"
          subtitle="ماذا يقول الأشخاص الذين عملت معهم"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl p-6 text-center relative group"
            >
              {/* علامة الاقتباس */}
              <div className="absolute top-4 right-4 text-6xl text-primary/10 font-serif">"</div>
              
              <div className="relative z-10">
                {/* الصورة الشخصية */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative inline-block mb-4"
                >
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    loading="lazy"
                    className="w-20 h-20 rounded-full mx-auto border-2 border-primary/30 group-hover:border-primary transition-colors"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </motion.div>
                
                {/* التقييم بالنجوم */}
                <div className="flex justify-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`text-sm ${
                        i < testimonial.rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                
                {/* النص */}
                <p className="text-gray-300 mb-6 text-sm leading-relaxed relative">
                  <span className="text-primary/30 text-3xl absolute -top-2 -right-1">"</span>
                  {testimonial.text}
                  <span className="text-primary/30 text-3xl absolute -bottom-4 -left-1">"</span>
                </p>
                
                {/* معلومات الشخص */}
                <div className="border-t border-white/5 pt-4">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400 mt-1">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
