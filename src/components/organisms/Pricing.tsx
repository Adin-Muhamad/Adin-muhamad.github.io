import React from 'react'

export const Pricing: React.FC = () => (
  <section id="pricing" className="py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-2xl font-bold text-slate-800">Harga Saya</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/15 backdrop-blur p-6 rounded-lg border border-white/30 shadow-lg hover:shadow-xl transition duration-200 ease-out cursor-pointer hover:-translate-y-0.5 active:scale-[0.98]">
          <h4 className="font-semibold text-slate-800">Dasar</h4>
          <p className="text-slate-600 mt-2">Proyek pemula</p>
        </div>
        <div className="bg-white/15 backdrop-blur p-6 rounded-lg border border-white/30 shadow-lg hover:shadow-xl transition duration-200 ease-out cursor-pointer hover:-translate-y-0.5 active:scale-[0.98]">
          <h4 className="font-semibold text-slate-800">Pro</h4>
          <p className="text-slate-600 mt-2">Proyek profesional</p>
        </div>
        <div className="bg-white/15 backdrop-blur p-6 rounded-lg border border-white/30 shadow-lg hover:shadow-xl transition duration-200 ease-out cursor-pointer hover:-translate-y-0.5 active:scale-[0.98]">
          <h4 className="font-semibold text-slate-800">Enterprise</h4>
          <p className="text-slate-600 mt-2">Pekerjaan skala besar</p>
        </div>
      </div>
    </div>
  </section>
)

export default Pricing
