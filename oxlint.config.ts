import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "warn",
  },
  rules: {
    "eslint/no-unused-vars": "off", // for JSDoc
    "typescript/no-useless-empty-export": "off", // for API Extractor
  },
  overrides: [
    {
      files: ["error-handling.public.d.ts"],
      jsPlugins: ["eslint-plugin-tsdoc"],
      rules: { "tsdoc/syntax": "error" },
    },
  ],
});
