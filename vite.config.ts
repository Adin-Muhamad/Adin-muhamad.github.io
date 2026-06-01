import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // contoh jika pakai React
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(), // Sesuaikan dengan framework yang kamu pilih
    tailwindcss(),
  ],
})