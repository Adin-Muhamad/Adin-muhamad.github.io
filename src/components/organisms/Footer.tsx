import React from 'react'

export const Footer: React.FC = () => (
  <footer className="bg-white/5 py-8 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600">
      <p>© {new Date().getFullYear()} Adin. Semua hak dilindungi.</p>
    </div>
  </footer>
)

export default Footer
