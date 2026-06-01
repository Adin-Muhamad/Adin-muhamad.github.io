import React from 'react'

export const Badge: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 ${className}`}>
      {children}
    </span>
  )
}

export default Badge
