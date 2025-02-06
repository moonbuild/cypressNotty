import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://192.168.0.162:5173/",
    // setupNodeEvents(on, config) {
    // implement node event listeners here
    // },
  },
  video:true,
  videoCompression: true,


  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
