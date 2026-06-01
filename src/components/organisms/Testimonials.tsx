import React from 'react'

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-800">Testimoni</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/15 backdrop-blur p-4 rounded-lg border border-white/30 shadow-lg hover:shadow-xl transition duration-200 ease-out cursor-pointer hover:-translate-y-0.5 active:scale-[0.98]">
            <p className="text-slate-600">"Menyenangkan untuk bekerja dengan—dikirim tepat waktu."</p>
            <div className="mt-3 text-sm text-slate-500">— Klien A</div>
          </div>
          <div className="bg-white/15 backdrop-blur p-4 rounded-lg border border-white/30 shadow-lg hover:shadow-xl transition duration-200 ease-out cursor-pointer hover:-translate-y-0.5 active:scale-[0.98]">
            <p className="text-slate-600">"Pekerjaan frontend berkualitas tinggi."</p>
            <div className="mt-3 text-sm text-slate-500">— Klien B</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
