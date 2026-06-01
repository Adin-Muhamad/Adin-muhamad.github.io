import React from 'react'

export const Clients: React.FC = () => (
  <section id="clients" className="py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-2xl font-bold text-slate-800">Klien Luar Biasa</h3>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        <div className="h-12 bg-white/15 rounded flex items-center justify-center border border-white/30 shadow-sm hover:shadow-md transition duration-200 ease-out cursor-pointer">Klien 1</div>
        <div className="h-12 bg-white/15 rounded flex items-center justify-center border border-white/30 shadow-sm hover:shadow-md transition duration-200 ease-out cursor-pointer">Klien 2</div>
        <div className="h-12 bg-white/15 rounded flex items-center justify-center border border-white/30 shadow-sm hover:shadow-md transition duration-200 ease-out cursor-pointer">Klien 3</div>
        <div className="h-12 bg-white/15 rounded flex items-center justify-center border border-white/30 shadow-sm hover:shadow-md transition duration-200 ease-out cursor-pointer">Klien 4</div>
      </div>
    </div>
  </section>
)

export default Clients
