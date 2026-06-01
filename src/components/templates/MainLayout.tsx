import React from 'react'
import { Navbar, Footer } from '../organisms'

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
