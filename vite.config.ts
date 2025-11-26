import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, './src/components'),
      "@hooks": path.resolve(__dirname, './src/hooks'),
      "@layouts": path.resolve(__dirname, './src/layouts'),
      "@models": path.resolve(__dirname, './src/models'),
      "@features": path.resolve(__dirname, './src/features'),
      "@routes": path.resolve(__dirname, './src/routes'),
      "@services": path.resolve(__dirname, './src/services'),
      "@utils": path.resolve(__dirname, './src/utils'),
      "@validations": path.resolve(__dirname, './src/validations'),
    }
  },
  plugins: [react()],
})
