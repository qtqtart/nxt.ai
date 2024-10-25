import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    minify: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src/app"),
      "@entities": resolve(__dirname, "src/entities"),
      "@features": resolve(__dirname, "src/features"),
      "@pages": resolve(__dirname, "src/pages"),
      "@shared": resolve(__dirname, "src/shared"),
      "@widgets": resolve(__dirname, "src/widgets"),
    },
  },
})