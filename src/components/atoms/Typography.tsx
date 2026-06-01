import React from 'react'

export const H1: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 ${className}`}>{children}</h1>
)

export const H2: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h2 className={`text-2xl font-bold text-slate-800 ${className}`}>{children}</h2>
)

export const P: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-slate-600 ${className}`}>{children}</p>
)

export default { H1, H2, P }
