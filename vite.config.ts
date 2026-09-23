import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import linaria from '@wyw-in-js/vite';

export default defineConfig({
  plugins: [react(), linaria()],
  base: '/cv'
})

