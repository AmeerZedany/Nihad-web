import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Nihad-web/', // 👈 MUST match your GitHub repo name
  plugins: [react()],
})
