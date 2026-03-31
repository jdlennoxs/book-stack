/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    visualizer({ open: true }) // This will open a chart in your browser after the build
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Put the heavy hitters in their own file!
          'graphics-engines': ['three', '@react-three/fiber', '@react-three/drei'],
          'physics': ['@react-three/rapier'],
        },
      },
    },
  },
} as any)