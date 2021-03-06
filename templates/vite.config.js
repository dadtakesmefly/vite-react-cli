import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [reactRefresh()],
  jsx: "react",
  server: {
    host: "0.0.0.0",
    // ๅๅไปฃ็
    proxy: {
      "/rest": {
        target: "http://api.m.taobao.com",
        changeOrigin: true,
      },
    },
  },
});
