import React from 'react'
import { PortfolioCard } from '../molecules/PortfolioCard'

export const PortfolioGrid: React.FC = () => {
  const items = Array.from({ length: 6 }).map((_, i) => ({ title: `Proyek ${i + 1}`, image: undefined, tags: ['React', 'Vite'] }))

  return (
    <section id="portfolio" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-800">Portfolio Saya</h3>
        <p className="text-slate-600 mt-2">Karya pilihan</p>
        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <PortfolioCard key={it.title} title={it.title} image={it.image} tags={it.tags} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioGrid
