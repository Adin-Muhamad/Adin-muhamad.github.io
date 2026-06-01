import React from 'react'
import { FormField } from '../molecules/FormField'

export const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-800">Hubungi Saya</h3>
        <div className="mt-6 bg-white/15 backdrop-blur rounded-lg p-6 border border-white/30 shadow-lg hover:shadow-xl transition duration-200 ease-out">
          <FormField />
        </div>
      </div>
    </section>
  )
}

export default ContactForm
