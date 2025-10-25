import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  tailwindcss: {
    darkMode: 'class', // ✅ ডার্ক মোড ম্যানুয়ালি হবে
    theme: {
      extend: {},
    },
  },
})
