import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/",
    build: {
        rollupOptions: {
            output: { 
                assetFileNames: "assets/[name][extname]",
                entryFileNames: "assets/[name].js",
            },
        },

    },
})
