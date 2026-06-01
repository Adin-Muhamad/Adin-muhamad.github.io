import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...rest }) => {
  const base = 'inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold transition-all focus:outline-none cursor-pointer active:scale-95 '
  const variants: Record<string,string> = {
    primary: 'bg-cyan-400 text-slate-900 hover:bg-cyan-300 shadow-lg hover:shadow-xl',
    ghost: 'bg-white text-slate-800 border border-cyan-200 hover:bg-cyan-50 shadow-md hover:shadow-lg'
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
