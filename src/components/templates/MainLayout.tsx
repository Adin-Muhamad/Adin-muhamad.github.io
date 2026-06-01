import React from 'react'
import { Navbar, Footer } from '../organisms'

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white/5 text-slate-700 transition-colors duration-300">
      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
