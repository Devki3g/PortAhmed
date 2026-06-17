import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaLaravel, FaVuejs 
} from 'react-icons/fa'
import { 
  SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, 
  SiGraphql, SiNextdotjs, SiRedux, SiFigma 
} from 'react-icons/si'

export const personalInfo = {
  name: "أحمد محمد",
  firstName: "أحمد",
  title: "مطور شامل Full Stack",
  email: "ahmed@example.com",
  phone: "+20 123 456 7890",
  location: "القاهرة، مصر",
  nationality: "مصري",
  languages: ["العربية (اللغة الأم)", "الإنجليزية (متقدم)"],
  freelance: "متاح",
  socialLinks: {
    github: "https://github.com/ahmed",
    linkedin: "https://linkedin.com/in/ahmed",
    twitter: "https://twitter.com/ahmed",
    whatsapp: "https://wa.me/201234567890"
  },
  aboutDescription: "مطور برمجيات شامل بخبرة تزيد عن 5 سنوات في بناء تطبيقات الويب القابلة للتطوير. شغوف بإنشاء حلول أنيقة للمشاكل المعقدة وأتعلم التقنيات الجديدة باستمرار. أعمل على تحويل الأفكار إلى منتجات رقمية متميزة.",
  aboutHighlights: [
    "خبرة 5+ سنوات في تطوير الويب",
    "تطوير أكثر من 30 مشروع ناجح",
    "العمل مع شركات عالمية ومحلية",
    "شغوف بالتقنيات الحديثة"
  ],
  resumeUrl: "/السيرة-الذاتية.pdf",
  cvUrl: "/cv.pdf"
}

export const heroData = {
  greeting: "مرحباً، أنا",
  roles: ["مطور شامل", "مصمم واجهات", "مهندس برمجيات", "مستقل"],
  cta: {
    primary: "تواصل معي",
    secondary: "تحميل السيرة الذاتية"
  }
}

export const skills = [
  { 
    name: "React/Next.js", 
    level: 95, 
    icon: FaReact, 
    category: "الواجهات الأمامية",
    color: "#61DAFB"
  },
  { 
    name: "Vue.js", 
    level: 85, 
    icon: FaVuejs, 
    category: "الواجهات الأمامية",
    color: "#4FC08D"
  },
  { 
    name: "TypeScript", 
    level: 90, 
    icon: SiTypescript, 
    category: "لغات البرمجة",
    color: "#3178C6"
  },
  { 
    name: "Tailwind CSS", 
    level: 95, 
    icon: SiTailwindcss, 
    category: "الواجهات الأمامية",
    color: "#06B6D4"
  },
  { 
    name: "Redux", 
    level: 88, 
    icon: SiRedux, 
    category: "إدارة الحالة",
    color: "#764ABC"
  },
  { 
    name: "Node.js", 
    level: 90, 
    icon: FaNodeJs, 
    category: "الخلفية",
    color: "#339933"
  },
  { 
    name: "Python", 
    level: 85, 
    icon: FaPython, 
    category: "لغات البرمجة",
    color: "#3776AB"
  },
  { 
    name: "Laravel", 
    level: 80, 
    icon: FaLaravel, 
    category: "الخلفية",
    color: "#FF2D20"
  },
  { 
    name: "MongoDB", 
    level: 85, 
    icon: SiMongodb, 
    category: "قواعد البيانات",
    color: "#47A248"
  },
  { 
    name: "PostgreSQL", 
    level: 82, 
    icon: SiPostgresql, 
    category: "قواعد البيانات",
    color: "#4169E1"
  },
  { 
    name: "GraphQL", 
    level: 80, 
    icon: SiGraphql, 
    category: "الخلفية",
    color: "#E10098"
  },
  { 
    name: "Docker", 
    level: 75, 
    icon: FaDocker, 
    category: "DevOps",
    color: "#2496ED"
  },
  { 
    name: "AWS", 
    level: 70, 
    icon: FaAws, 
    category: "DevOps",
    color: "#FF9900"
  },
  { 
    name: "Figma", 
    level: 85, 
    icon: SiFigma, 
    category: "التصميم",
    color: "#F24E1E"
  },
]

export const projects = [
  {
    id: 1,
    title: "منصة التجارة الإلكترونية",
    description: "منصة تجارة إلكترونية متكاملة مع إدارة المخزون في الوقت الفعلي، تكامل بوابات الدفع، ولوحة تحكم متقدمة.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "تطبيقات كاملة",
    featured: true,
    completionDate: "2024"
  },
  {
    id: 2,
    title: "تطبيق إدارة المهام",
    description: "تطبيق تعاوني لإدارة المهام مع تحديثات فورية، واجهة سحب وإفلات، وميزات للفرق.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "تطبيقات كاملة",
    featured: true,
    completionDate: "2024"
  },
  {
    id: 3,
    title: "تطبيق محادثة ذكي",
    description: "روبوت محادثة ذكي مدعوم بالذكاء الاصطناعي مع معالجة اللغة الطبيعية.",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    githubUrl: "https://github.com",
    category: "ذكاء اصطناعي",
    featured: true,
    completionDate: "2023"
  },
  {
    id: 4,
    title: "موقع شخصي تفاعلي",
    description: "موقع شخصي ديناميكي مع رسوم متحركة وتأثيرات بصرية متميزة.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "واجهات أمامية",
    featured: false,
    completionDate: "2024"
  },
  {
    id: 5,
    title: "نظام إدارة المحتوى",
    description: "نظام إدارة محتوى متطور مع دعم متعدد اللغات وصلاحيات المستخدمين.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "تطبيقات كاملة",
    featured: false,
    completionDate: "2023"
  },
  {
    id: 6,
    title: "لوحة تحليلات البيانات",
    description: "لوحة تحكم تفاعلية لعرض وتحليل البيانات مع رسوم بيانية ديناميكية.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    category: "واجهات أمامية",
    featured: false,
    completionDate: "2023"
  },
]

export const experience = [
  {
    id: 1,
    company: "شركة تك سوليوشنز",
    position: "مطور شامل أول",
    period: "2022 - الآن",
    type: "دوام كامل",
    location: "القاهرة، مصر",
    description: "قيادة فريق تطوير لتحديث البنية التحتية للتطبيقات وتطوير ميزات جديدة.",
    achievements: [
      "تقليل وقت تحميل التطبيق بنسبة 40%",
      "قيادة فريق من 5 مطورين",
      "تطبيق معمارية الخدمات المصغرة",
      "تحسين أداء قواعد البيانات بنسبة 60%"
    ]
  },
  {
    id: 2,
    company: "شركة الابتكارات الرقمية",
    position: "مطور شامل",
    period: "2020 - 2022",
    type: "دوام كامل",
    location: "الإسكندرية، مصر",
    description: "تطوير وصيانة تطبيقات ويب متعددة للعملاء مع التركيز على الأداء وتجربة المستخدم.",
    achievements: [
      "بناء أكثر من 10 تطبيقات ويب متجاوبة",
      "تطبيق نظام CI/CD للتطوير المستمر",
      "تحقيق وقت تشغيل 99.9% لتطبيقات العملاء",
      "تقليل تكاليف الاستضافة بنسبة 30%"
    ]
  },
  {
    id: 3,
    company: "حاضنة الشركات الناشئة",
    position: "مطور مبتدئ",
    period: "2019 - 2020",
    type: "دوام كامل",
    location: "القاهرة، مصر",
    description: "بداية المسيرة المهنية في بناء تطبيقات الويب الحديثة للشركات الناشئة.",
    achievements: [
      "تطوير نسخ أولية لـ 3 شركات ناشئة ناجحة",
      "تعلم تقنيات الويب الحديثة",
      "المساهمة في مشاريع مفتوحة المصدر",
      "الحصول على شهادة AWS"
    ]
  }
]

export const testimonials = [
  {
    id: 1,
    name: "سارة جونسون",
    position: "الرئيس التنفيذي، تك ستارت",
    text: "أحمد مطور استثنائي قام بتسليم مشروعنا قبل الموعد المحدد. اهتمامه بالتفاصيل ومهاراته في حل المشكلات رائعة.",
    avatar: "https://picsum.photos/seed/person1/100/100",
    rating: 5
  },
  {
    id: 2,
    name: "محمد علي",
    position: "مدير تقني، إنوفيت تك",
    text: "العمل مع أحمد كان ممتعاً. يجمع بين الإبداع والخبرة التقنية في كل مشروع. أوصي به بشدة!",
    avatar: "https://picsum.photos/seed/person2/100/100",
    rating: 5
  },
  {
    id: 3,
    name: "ليلى محمود",
    position: "مديرة منتج",
    text: "قدرة أحمد على ترجمة المتطلبات المعقدة إلى حلول أنيقة رائعة. محترف حقيقي في مجاله.",
    avatar: "https://picsum.photos/seed/person3/100/100",
    rating: 5
  },
  {
    id: 4,
    name: "كريم حسن",
    position: "مؤسس، تك فيوتشر",
    text: "أحد أفضل المطورين الذين عملت معهم. سرعة في التنفيذ وجودة عالية في العمل.",
    avatar: "https://picsum.photos/seed/person4/100/100",
    rating: 5
  }
]

export const services = [
  {
    id: 1,
    title: "تطوير الواجهات الأمامية",
    description: "تصميم وتطوير واجهات مستخدم جذابة وسريعة باستخدام أحدث التقنيات.",
    icon: "🎨",
    features: ["React/Next.js", "تصميم متجاوب", "تحسين الأداء"]
  },
  {
    id: 2,
    title: "تطوير الخلفية",
    description: "بناء أنظمة خلفية قوية وقابلة للتطوير مع APIs آمنة.",
    icon: "⚙️",
    features: ["Node.js/Python", "RESTful APIs", "قواعد البيانات"]
  },
  {
    id: 3,
    title: "تطوير تطبيقات الجوال",
    description: "تطوير تطبيقات جوال هجينة باستخدام React Native.",
    icon: "📱",
    features: ["React Native", "iOS & Android", "Push Notifications"]
  },
  {
    id: 4,
    title: "استشارات تقنية",
    description: "تقديم استشارات في الهندسة البرمجية وتحسين الأداء.",
    icon: "💡",
    features: ["تحليل المتطلبات", "هندسة النظم", "تحسين الأداء"]
  }
]

export const navLinks = [
  { name: "الرئيسية", href: "home" },
  { name: "نبذة عني", href: "about" },
  { name: "المهارات", href: "skills" },
  { name: "المشاريع", href: "projects" },
  { name: "الخبرات", href: "experience" },
  { name: "تواصل معي", href: "contact" },
]

export const stats = [
  { label: "سنوات الخبرة", value: "5+" },
  { label: "مشروع مكتمل", value: "30+" },
  { label: "عميل سعيد", value: "25+" },
  { label: "تقنية مستخدمة", value: "20+" }
]
