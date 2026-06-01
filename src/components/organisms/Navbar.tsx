import React from 'react'
import { NavLink } from '../molecules/NavLink'

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="text-cyan-500 font-extrabold text-xl">Adin Muhamad</div>
            <span className="text-sm text-slate-600"></span>
          </div>
          <nav className="hidden md:flex items-center">
            <NavLink to="#hero">Beranda</NavLink>
            <NavLink to="#services">Yang Saya Lakukan</NavLink>
            <NavLink to="#portfolio">Portfolio</NavLink>
            <NavLink to="#resume">Resume</NavLink>
            <NavLink to="#contact">Kontak</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
