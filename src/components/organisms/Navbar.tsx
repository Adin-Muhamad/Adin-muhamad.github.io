import React, { useState } from 'react'
import { NavLink } from '../molecules/NavLink'

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] w-full bg-white/95 border-b border-slate-200/70 backdrop-blur-xl shadow-sm transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 gap-4">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-gem text-fuchsia-500 text-2xl" aria-hidden="true" />
            <div className="text-cyan-500 font-extrabold text-xl">Adin Muhamad</div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <span className="sr-only">Toggle menu</span>
              <div className="flex h-5 w-5 flex-col justify-between">
                <span className={`block h-0.5 w-full rounded-full bg-current transition ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-full rounded-full bg-current transition ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-full rounded-full bg-current transition ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>

            <nav className="hidden md:flex items-center gap-4">
              <NavLink to="#hero">Beranda</NavLink>
              <NavLink to="#services">Yang Saya Lakukan</NavLink>
              <NavLink to="#portfolio">Portfolio</NavLink>
              <NavLink to="#resume">Resume</NavLink>
              <NavLink to="#contact">Kontak</NavLink>
            </nav>
          </div>
        </div>

        <nav className={`${mobileOpen ? 'block' : 'hidden'} md:hidden py-4 border-t border-slate-200/40`}>
          <div className="flex flex-col gap-2 px-2 pb-4">
            <NavLink to="#hero" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Beranda</NavLink>
            <NavLink to="#services" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Yang Saya Lakukan</NavLink>
            <NavLink to="#portfolio" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Portfolio</NavLink>
            <NavLink to="#resume" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Resume</NavLink>
            <NavLink to="#contact" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Kontak</NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
