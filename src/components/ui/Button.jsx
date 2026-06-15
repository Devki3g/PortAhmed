import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href, 
  onClick, 
  className = '', 
  icon: Icon,
  disabled = false,
  loading = false,
  ...props 
}) => {
  const baseStyles = "font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }
  
  const variants = {
    primary: "bg-primary hover:bg-primary/80 text-white shadow-lg shadow-primary/25 hover:shadow-primary/50",
    secondary: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    outline: "border-2 border-white/20 text-white hover:bg-white/10",
    ghost: "text-gray-400 hover:text-white hover:bg-white/10"
  }

  const Component = href ? motion.a : motion.button
  
  return (
    <Component
      href={href}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : (
        <>
          {Icon && <Icon className="text-xl" />}
          {children}
        </>
      )}
    </Component>
  )
}

export default Button
