import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { name, peerDependencies } from "./package.json";

const resolve = {
  // resolve alias
  alias: {
    "@": path.resolve(__dirname, "."),
    smilily: path.resolve(__dirname, "packages/components")
  }
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode == "lib") {
    return {
      resolve,
      publicDir: false,
      build: {
        outDir: "lib",
        lib: {
          name,
          fileName: name,
          entry: path.resolve(__dirname, "packages/components/index.js")
        },
        rollupOptions: {
          external: [...Object.keys(peerDependencies)],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM"
            }
          }
        }
      }
    };
  }
  return {
    resolve,
    plugins: [react()]
  };
});
