import React from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement> & { label?: string }

export const Input: React.FC<Props> = ({ label, className = '', ...rest }) => {
  return (
    <label className="block text-sm text-slate-700">
      {label && <span className="mb-1 block text-sm font-medium text-slate-700">{label}</span>}
      <input className={`mt-1 block w-full rounded-lg border border-cyan-200 bg-white px-3 py-2 text-slate-600 placeholder-slate-400 shadow-md focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300 ${className}`} {...rest} />
    </label>
  )
}

export default Input
