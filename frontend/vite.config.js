import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     baseURl: "https://task-manager-3-um38.onrender.com",
  //   },
  // },

  plugins: [react(), tailwindcss()],
});
