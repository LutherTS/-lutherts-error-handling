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

const variations = Object.freeze({
  variants: Object.freeze({
    [EN]: Object.freeze({ label: ENGLISH }),
    [FR]: Object.freeze({ label: FRANÇAIS }),
  }),
  variant: EN,
  referenceData: enData,
  referenceVariant: EN,
  allowIncompleteVariations: false,
  public: [EN, FR], // can be omitted, otherwise must include `variations.referenceVariant` as its first element
  docCommandData: Object.freeze({
    declarationDir: tsConfigJson.compilerOptions.declarationDir,
    rootDir: tsConfigJson.compilerOptions.rootDir,
  }), // can be omitted
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

const templateFunctions = {
  [EN]: {
    // #ATHAND#
    atHand: {
      beforeComposed: (/** @type {string} */ string) => {
        const parts = string.split("§");
        const part = parts[0];

        return part + " $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ATHAND.";
        // $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ATHAND
      },
      afterComposed: (/** @type {string} */ string) => string,
    },
  },
  // N'est pas (aisément) applicable au français étant donné "concerné"/"concernée", auquel cas il demeure préférable de continuer à créer ces variables à la main via des variables composées.
}; // can be omitted

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
};

export default config;
