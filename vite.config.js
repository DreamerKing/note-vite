import react from "@vitejs/plugin-react";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { loadEnv, defineConfig } from "vite";

const envs = loadEnv("development", ".env");
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  esbuild: {
    target: "esnext",
    jsxInject: `import React from 'react'`,
  },
  define: {
    API_URL: envs.VITE_API_URL,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/components"),
      "#": resolve(__dirname, "src"),
      "@pages": resolve(__dirname, "src/pages"),
    },
  },
  plugins: [react()],
});
