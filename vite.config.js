import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['src/**/*.jsx', 'src/**/*.js'],
      exclude: ['src/main.jsx', 'src/**/*.test.jsx', 'src/setupTests.js']
    }
  }
})