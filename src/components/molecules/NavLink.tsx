import React from 'react'

export const NavLink: React.FC<{ to: string; children: React.ReactNode; className?: string }> = ({ to, children, className = '' }) => {
  return (
    <a href={to} className={`text-slate-700 hover:text-cyan-600 px-3 py-2 ${className}`}>
      {children}
    </a>
  )
}

export default NavLink
