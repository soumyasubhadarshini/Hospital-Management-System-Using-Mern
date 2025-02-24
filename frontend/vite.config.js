import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // eslint-disable-next-line no-undef
  base: process.env.VITE_BASE_PATH, 
  server: {
    port: 3000, // Change this to any available port you want
    strictPort: true
  }
})
