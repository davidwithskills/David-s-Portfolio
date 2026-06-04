/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isVercel = Boolean(process.env.VERCEL);

export default defineConfig({
  base: isVercel ? "/" : "/David-s-Portfolio/",
  plugins: [react()],
});
