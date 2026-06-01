import React from 'react'

export const TabButton: React.FC<{ active?: boolean; onClick?: () => void; children?: React.ReactNode }> = ({ active, onClick, children }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-lg font-medium transition-all ${active ? 'bg-cyan-400 text-slate-900 shadow-lg' : 'bg-white/15 text-slate-700 border border-white/30 shadow-md hover:shadow-lg'} cursor-pointer active:scale-95`}>
      {children}
    </button>
  )
}

export default TabButton
