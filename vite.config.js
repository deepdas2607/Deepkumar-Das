import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          reactCore: ['react', 'react-dom'],
          threeUtils: ['three', '@react-three/fiber', '@react-three/drei'],
          interactions: ['motion', '@use-gesture/react', 'cobe']
        }
      }
    }
  }
});
