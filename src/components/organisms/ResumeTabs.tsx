import React, { useState } from 'react'
import { TabButton } from '../molecules/TabButton'

type TabKey = 'Pendidikan' | 'Keterampilan Profesional' | 'Pengalaman' | 'Wawancara'

export const ResumeTabs: React.FC = () => {
  const [active, setActive] = useState<TabKey>('Pendidikan')

  return (
    <section id="resume" className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-800">Resume Saya</h3>
        <div className="mt-4 flex gap-3">
          {(['Pendidikan','Keterampilan Profesional','Pengalaman','Wawancara'] as TabKey[]).map((t) => (
            <TabButton key={t} active={t === active} onClick={() => setActive(t)}>{t}</TabButton>
          ))}
        </div>

        <div className="mt-6 bg-white/15 backdrop-blur rounded-lg p-6 border border-white/30 shadow-lg hover:shadow-xl transition duration-200 ease-out cursor-pointer hover:-translate-y-0.5 active:scale-[0.98]">
          {active === 'Pendidikan' && (
            <div>
              <h4 className="font-semibold text-slate-800">Pendidikan</h4>
              <p className="text-slate-600 mt-2">S.S. dalam Ilmu Komputer — Universitas Contoh</p>
            </div>
          )}
          {active === 'Keterampilan Profesional' && (
            <div>
              <h4 className="font-semibold text-slate-800">Keterampilan Profesional</h4>
              <ul className="mt-2 text-slate-600 list-disc list-inside">
                <li>React, TypeScript, Vite</li>
                <li>Tailwind CSS, Aksesibilitas</li>
                <li>Optimasi Performa</li>
              </ul>
            </div>
          )}
          {active === 'Pengalaman' && (
            <div>
              <h4 className="font-semibold text-slate-800">Pengalaman</h4>
              <p className="text-slate-600 mt-2">Bekerja di X sebagai Frontend Engineer, membangun UI yang dapat diskalakan.</p>
            </div>
          )}
          {active === 'Wawancara' && (
            <div>
              <h4 className="font-semibold text-slate-800">Wawancara</h4>
              <p className="text-slate-600 mt-2">Tips dan contoh Q&A untuk wawancara.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ResumeTabs
