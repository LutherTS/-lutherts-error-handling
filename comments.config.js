/* data */

import { data } from "./comment-variables/data/index.js";

/* myIgnoresOnly */

const myIgnoresOnly = false; // can be omitted

/* ignores */

const ignores = [
  "**/typedefs/**",
  "source/tests/suites/path-exists/not-a-file.js",
]; // can be omitted

/* lintConfigImports */

const lintConfigImports = false; // can be omitted

/* composedVariablesExclusives */

import { enComposedVariablesExclusives } from "./comment-variables/data/en/index.js";
import { frComposedVariablesExclusives } from "./comment-variables/data/fr/index.js";

const composedVariablesExclusives = [
  ...enComposedVariablesExclusives,
  ...frComposedVariablesExclusives,
];

/* variations */

import { EN, ENGLISH, FR, FRANÇAIS } from "./comment-variables/index.js";
import { enData } from "./comment-variables/data/en/index.js";
import tsConfigJson from "./tsconfig.json" with { type: "json" };

const variations = /** @type {const} */ ({
  variants: {
    [EN]: { label: ENGLISH },
    [FR]: { label: FRANÇAIS },
  },
  variant: EN,
  referenceData: enData,
  referenceVariant: EN,
  allowIncompleteVariations: true,
  public: [EN, FR], // can be omitted, otherwise must include `variations.referenceVariant` as its first element
  docCommandData: {
    declarationDir: tsConfigJson.compilerOptions.declarationDir,
    rootDir: tsConfigJson.compilerOptions.rootDir,
  }, // can be omitted
});

/* libraries */

import { resolvedPublicData as errorHandlingCommentVariablesData } from "./comments.config.public.mjs";
// import errorHandlingCommentVariablesDataIntl from "./comment-variables/miscellaneous/librairies/error-handling.intl.json" with { type: "json" };

const libraries = {
  [errorHandlingCommentVariablesData.libraryKey]:
    errorHandlingCommentVariablesData.libraryVariations.FR,
  // errorHandlingCommentVariablesDataIntl.FR,
}; // can be omitted

/* sharedVariables */

const sharedVariables = undefined; // can be omitted

/* templateFunctions */

import { templateFunctions } from "./comment-variables/template-functions/index.js"; // can be omitted

/* runtimeVariables */ // wip

import { runtimeVariables } from "./comment-variables/runtime-variables/index.js"; // can be omitted

/* config */

const config = {
  data,
  myIgnoresOnly,
  ignores,
  lintConfigImports,
  composedVariablesExclusives,
  variations,
  libraries,
  sharedVariables,
  templateFunctions,
  runtimeVariables, // wip
};

export default config;
