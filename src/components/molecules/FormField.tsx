import React from 'react'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'

export const FormField: React.FC = () => {
  return (
    <form className="space-y-4">
      <Input label="Nama" name="name" placeholder="Nama Anda" />
      <Input label="Email" name="email" placeholder="anda@contoh.com" />
      <label className="block text-sm text-slate-700">
        <span className="mb-1 block text-sm font-medium text-slate-700">Pesan</span>
        <textarea className="mt-1 block w-full rounded-lg border border-cyan-200 bg-white px-3 py-2 text-slate-600 placeholder-slate-400 shadow-md focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300" rows={4} />
      </label>
      <div>
        <Button type="submit">Kirim Pesan</Button>
      </div>
    </form>
  )
}

export default FormField
