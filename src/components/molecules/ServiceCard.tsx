import React from 'react'

export const ServiceCard: React.FC<{ title: string; description: string; icon?: React.ReactNode }> = ({ title, description, icon }) => {
  return (
    <div className="bg-white/15 backdrop-blur rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-200 ease-out border border-white/30 cursor-pointer hover:-translate-y-0.5 active:scale-[0.98]">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 flex-none rounded-lg bg-white/20 text-cyan-500 flex items-center justify-center border border-white/30">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          <p className="text-sm text-slate-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
