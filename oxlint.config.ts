import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "warn",
  },
  ignorePatterns: ["tsdown/library/index.mjs"],
  overrides: [
    {
      files: ["error-handling.d.ts", "error-handling.public.d.ts"],
      jsPlugins: ["eslint-plugin-tsdoc"],
      rules: {
        "typescript/no-useless-empty-export": "off",
        "tsdoc/syntax": "error",
      },
    },
  ],
});
