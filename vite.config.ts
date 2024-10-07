import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from "unplugin-auto-import/vite";
export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      name: "TestingWebComponent",
      fileName: (format) => `testing-web-component.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: { vue: "Vue" },
        banner: `
        /**
         * @version 1.0.0
         */
        `,
      },
    },
  },
  plugins: [
    vue({ customElement: true }),
    AutoImport({
      imports: ["vue"],
      dts: "./auto-imports.d.ts",
      dirs: ["src/plugins"],
      eslintrc: {
        enabled: true,
        globalsPropValue: true,
      },
      vueTemplate: true,
    }),
  ],
})
