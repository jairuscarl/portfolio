import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // The build is served by index.php at http://localhost/Portfolio/, so built asset URLs
  // point into /Portfolio/dist/. Change this if the folder is renamed or hosted elsewhere.
  base: command === 'build' ? '/Portfolio/dist/' : '/',
  plugins: [react()],
}))
