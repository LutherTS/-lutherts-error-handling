import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "source/library/index.ts",
  outDir: "tsdown/library",
  dts: false,
  minify: true,
});
