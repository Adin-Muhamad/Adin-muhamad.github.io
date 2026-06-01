import React from 'react'

export const Icon: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className = 'h-6 w-6', children }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    {children}
  </svg>
)

export default Icon
