import React from 'react'

export const PortfolioCard: React.FC<{ title: string; image?: string; tags?: string[] }> = ({ title, image, tags = [] }) => {
  return (
    <div className="bg-white/15 backdrop-blur rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-200 ease-out border border-white/30 cursor-pointer hover:-translate-y-0.5 active:scale-[0.98]">
      {image && <img src={image} alt={title} className="w-full h-44 object-cover" />}
      <div className="p-4">
        <h4 className="text-lg font-semibold text-slate-800">{title}</h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs text-cyan-700 bg-white/20 px-2 py-1 rounded-md border border-white/30">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
