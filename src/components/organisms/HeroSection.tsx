import React from 'react'
import { H1, P } from '../atoms/Typography'
import Button from '../atoms/Button'
import heroImg from '../../assets/hero.png'
import adinPng from '../../Adin.png'

const STACK_TEKNOLOGI = [
  { nama: 'React', deskripsi: 'Membangun UI dinamis dengan React' },
  { nama: 'TypeScript', deskripsi: 'Pengembangan JavaScript yang aman tipe' },
  { nama: 'Tailwind', deskripsi: 'Framework CSS pertama-utilitas' }
]

export const HeroSection: React.FC = () => {
  // Menggunakan gambar profil Adin atau gambar hero sebagai fallback
  const gambarAdin = adinPng ?? heroImg

  return (
    <section id="hero" className="py-16 bg-gradient-to-br from-white via-sky-50 to-cyan-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="flex justify-center">
            <img src={gambarAdin} alt="Adin" className="w-full max-w-sm h-auto rounded-3xl border-b-8 border-cyan-300" />
          </div>
          <div className="text-center">
            <H1>Halo, Saya Adin Muhamad,<br/> Pengembang Web.</H1>
            <P className="mt-4">Saya membangun aplikasi web yang berkinerja tinggi, dapat diakses, dan menyenangkan dengan teknologi modern.</P>
            <div className="mt-6 flex gap-4 justify-center">
              <Button>Rekrut Saya</Button>
              <Button variant="ghost">Unduh Resume</Button>
            </div>
          </div>
          
          {/* Daftar Kartu Horizontal Tetap */}
          <div className="mt-12 w-full">
            <div className="flex flex-wrap gap-4 justify-center pb-4 px-4">
              {STACK_TEKNOLOGI.map((teknologi) => (
                <div key={teknologi.nama} className="px-6 py-3 bg-white/15 backdrop-blur rounded-lg shadow-lg border border-white/30 hover:shadow-xl transition duration-200 ease-out cursor-pointer hover:-translate-y-0.5 active:scale-[0.98]">
                  <div>
                    <span className="text-cyan-600 font-semibold block text-sm">{teknologi.nama}</span>
                    <span className="text-slate-600 text-xs block mt-1">{teknologi.deskripsi}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
