import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    // Aumenta timeout para ambientes com I/O lento (ex: iCloud Drive)
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    // Força o pre-bundle de todas as deps na inicialização
    force: false,
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@tanstack/react-query",
      "@supabase/supabase-js",
      "sonner",
      "lucide-react",
      "clsx",
      "tailwind-merge",
      "class-variance-authority",
      "zod",
      "react-hook-form",
      "@hookform/resolvers",
      "date-fns",
      "recharts",
    ],
  },
}));
