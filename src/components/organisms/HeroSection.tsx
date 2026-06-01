import React from 'react'
import { H1, P } from '../atoms/Typography'
import Button from '../atoms/Button'
import heroImg from '../../assets/hero.png'
import adinPng from '../../Adin.png'

interface Technology {
  name: string
  description: string
}

const TECHNOLOGY_STACK: Technology[] = [
  { name: 'React', description: 'Membangun UI dinamis dengan React' },
  { name: 'TypeScript', description: 'Pengembangan JavaScript yang aman tipe' },
  { name: 'Tailwind', description: 'Framework CSS pertama-utilitas' }
]

const techCardClasses =
  'px-6 py-3 bg-white/15 backdrop-blur rounded-lg shadow-lg border border-white/30 transition duration-200 ease-out cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]'

export const HeroSection: React.FC = () => {
  const heroImage = adinPng || heroImg

  return (
    <section id="hero" className="py-16 bg-gradient-to-br from-rose-100 via-violet-100 to-cyan-100/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8">
          <div className="flex flex-col items-center gap-8">
            <img
              src={heroImage}
              alt="Adin Muhamad"
              className="w-full max-w-sm h-auto rounded-3xl border-b-8 border-fuchsia-300"
            />

            <div className="text-center">
              <div className="inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia-100/70 px-4 py-2 text-fuchsia-700 font-semibold mb-4 shadow-sm">
                <i className="fa-solid fa-star text-fuchsia-500" aria-hidden="true" />
                Freelancer Web Developer
              </div>
              <H1>
                Halo,
                <br />
                Saya Adin Muhamad
              </H1>
              <P className="mt-4">
                Saya membangun aplikasi web yang berkinerja tinggi, dapat diakses, dan menyenangkan dengan teknologi modern.
              </P>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button className="gap-2"><i className="fa-solid fa-rocket" aria-hidden="true" />Rekrut Saya</Button>
                <Button variant="ghost" className="gap-2"><i className="fa-solid fa-download" aria-hidden="true" />Unduh Resume</Button>
              </div>
            </div>
          </div>

          <div className="mt-12 w-full">
            <div className="flex flex-wrap justify-center gap-4 pb-4 px-4">
              {TECHNOLOGY_STACK.map((technology) => (
                <div key={technology.name} className={techCardClasses}>
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fa-solid fa-circle-check text-fuchsia-500" aria-hidden="true" />
                    <span className="text-cyan-600 font-semibold block text-sm">{technology.name}</span>
                  </div>
                  <span className="text-slate-600 text-xs block mt-1">{technology.description}</span>
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
