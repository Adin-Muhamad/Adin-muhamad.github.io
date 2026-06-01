import React from 'react'
import { ServiceCard } from '../molecules/ServiceCard'

export const WhatIDo: React.FC = () => {
  const services = [
    { title: 'Pengembangan Web', description: 'Situs web responsif dan dapat diakses.', icon: 'fa-solid fa-laptop-code' },
    { title: 'Desain UI/UX', description: 'Antarmuka bersih dan alur pengguna.', icon: 'fa-solid fa-palette' },
    { title: 'Performa', description: 'Aplikasi cepat dan optimal.', icon: 'fa-solid fa-chart-line' },
  ]

  return (
    <section id="services" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-800">Yang Saya Lakukan</h3>
        <p className="text-slate-600 mt-2">Layanan dan keahlian</p>
        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
            <ServiceCard
              key={s.title}
              title={s.title}
              description={s.description}
              icon={<i className={`${s.icon} text-2xl`} aria-hidden="true" />}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIDo
