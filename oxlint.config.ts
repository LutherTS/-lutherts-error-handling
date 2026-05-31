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
      jsPlugins: ["eslint-plugin-tsdoc"],
      files: ["error-handling.public.d.ts"],
      rules: { "tsdoc/syntax": "error" },
    },
  ],
});
