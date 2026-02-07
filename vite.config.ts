import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/",        // 👈 ISSO RESOLVE O 404
  plugins: [react()],
});
