import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // contoh jika pakai React
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/adin-portofolio/',
  plugins: [
    react(), // Sesuaikan dengan framework yang kamu pilih
    tailwindcss(),
  ],
})