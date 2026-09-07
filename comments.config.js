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
        const part1 = parts[1];

        return /** @type {const} */ (
          `${part1} $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ATHAND.`
        ); // N'est pas (aisément) applicable au français étant donné "concerné"/"concernée", auquel cas il demeure préférable de continuer à créer ces variables à la main via des variables composées.
      },
      afterComposed: (/** @type {string} */ string) => string,
    },
    // #APPLYLAST#
    applyLast: {
      beforeComposed: (/** @type {string} */ string) => {
        const parts = string.split("§");
        const part1 = parts[1];
        const part2 = parts[2];

        return /** @type {const} */ (
          `$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_APPLYLASTWITH  \`...${part1}\` $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#TOENSURE \`${part2}\` $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SITSATTOPLIKE \`{$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#PROPAPROPB, ...${part1}}\`.`
        );
      },
      afterComposed: (/** @type {string} */ string) => string,
    },
    // #DEFMAKESUCCESSFALSETYPE#
    defMakeSuccessFalseType: {
      beforeComposed: (/** @type {string} */ string) => {
        const parts = string.split("§");
        const part1 = parts[1];

        return /** @type {const} */ (
          `Makes a \`{$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_FALSE}\` object with a $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR of \`{${part1}}\` $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS.`
        );
      },
      afterComposed: (/** @type {string} */ string) => string,
    },
    // #DEFMAKEERRORTYPE#
    defMakeErrorType: {
      beforeComposed: (/** @type {string} */ string) => {
        const parts = string.split("§");
        const part1 = parts[1];

        return /** @type {const} */ (
          `Makes an $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ERROROBJECT of \`{${part1}}\` $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS.`
        );
      },
      afterComposed: (/** @type {string} */ string) => string,
    },
    // #DEFPATHEXISTSASA#
    defPathExistsAsA: {
      beforeComposed: (/** @type {string} */ string) => {
        const parts = string.split("§");
        const part1 = parts[1];

        return /** @type {const} */ (
          `Tells if a path actually exists as a ${part1}.`
        );
      },
      afterComposed: (/** @type {string} */ string) => string,
    },
    // #RETURNMAKESUCCESSFALSETYPE#
    returnMakeSuccessFalseType: {
      beforeComposed: (/** @type {string} */ string) => {
        const parts = string.split("§");
        const part1 = parts[1];

        return /** @type {const} */ (
          `A \`{$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_FALSE}\` object with a $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR of \`{${part1}}\`.`
        );
      },
      afterComposed: (/** @type {string} */ string) => string,
    },
    // #RETURNMAKEERRORTYPE#
    returnMakeErrorType: {
      beforeComposed: (/** @type {string} */ string) => {
        const parts = string.split("§");
        const part1 = parts[1];

        return /** @type {const} */ (
          `An $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ERROROBJECT of \`{${part1}}\`.`
        );
      },
      afterComposed: (/** @type {string} */ string) => string,
    },
    // #RETURNPATHEXISTSASA#
    returnPathExistsAsA: {
      beforeComposed: (/** @type {string} */ string) => {
        const parts = string.split("§");
        const part1 = parts[1];

        return /** @type {const} */ (
          `\`true\` if the path is a ${part1}, \`false\` otherwise.`
        );
      },
      afterComposed: (/** @type {string} */ string) => string,
    },
  },
  [FR]: {
    // #APPLYLAST#
    applyLast: {
      beforeComposed: (/** @type {string} */ string) => {
        const parts = string.split("§");
        const part1 = parts[1];
        const part2 = parts[2];

        return /** @type {const} */ (
          `$COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#_APPLYLASTWITH  \`...${part1}\` $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#TOENSURE \`${part2}\` $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#SITSATTOPLIKE \`{$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#PROPAPROPB, ...${part1}}\`.`
        );
      },
      afterComposed: (/** @type {string} */ string) => string,
    },
    // #DEFMAKESUCCESSFALSETYPE#
    defMakeSuccessFalseType: {
      beforeComposed: (/** @type {string} */ string) => {
        const parts = string.split("§");
        const part1 = parts[1];

        return /** @type {const} */ (
          `Crée un objet \`{$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_FALSE}\` avec une $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR de \`{${part1}}\` $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS.`
        );
      },
      afterComposed: (/** @type {string} */ string) => string,
    },
    // #DEFMAKEERRORTYPE#
    defMakeErrorType: {
      beforeComposed: (/** @type {string} */ string) => {
        const parts = string.split("§");
        const part1 = parts[1];

        return /** @type {const} */ (
          `Crée un $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#ERROROBJECT de \`{${part1}}\` dont l'$COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#WORDS#ERROR est $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS.`
        );
      },
      afterComposed: (/** @type {string} */ string) => string,
    },
    // #DEFPATHEXISTSASA#
    defPathExistsAsA: {
      beforeComposed: (/** @type {string} */ string) => {
        const parts = string.split("§");
        const part1 = parts[1];

        return /** @type {const} */ (
          `Informe de l'existence d'un chemin en tant que ${part1}.`
        );
      },
      afterComposed: (/** @type {string} */ string) => string,
    },
    // #RETURNMAKESUCCESSFALSETYPE#
    returnMakeSuccessFalseType: {
      beforeComposed: (/** @type {string} */ string) => {
        const parts = string.split("§");
        const part1 = parts[1];

        return /** @type {const} */ (
          `Un objet \`{$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_FALSE}\` avec une $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR de \`{${part1}}\`.`
        );
      },
      afterComposed: (/** @type {string} */ string) => string,
    },
    // #RETURNMAKEERRORTYPE#
    returnMakeErrorType: {
      beforeComposed: (/** @type {string} */ string) => {
        const parts = string.split("§");
        const part1 = parts[1];

        return /** @type {const} */ (
          `Un $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#ERROROBJECT de \`{${part1}}\`.`
        );
      },
      afterComposed: (/** @type {string} */ string) => string,
    },
    // #RETURNPATHEXISTSASA#
    returnPathExistsAsA: {
      beforeComposed: (/** @type {string} */ string) => {
        const parts = string.split("§");
        const part1 = parts[1];

        return /** @type {const} */ (
          `\`true\` si le chemin est un ${part1}, \`false\` le cas échéant.`
        );
      },
      afterComposed: (/** @type {string} */ string) => string,
    },
  },
}; // can be omitted

/* runtimeVariables */ // wip

const runtimeVariables = [
  // errorMessages
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#ERRORS#MESSAGES#ERRORNOTSTANDARDIZED",
    ["ERROR_NOT_STANDARDIZED_MESSAGE", "errorMessages", "errorNotStandardized"],
  ], // [key, [item, group, property]]
  // errorStatuses
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#ERRORS#STATUSES#ERRORNOTSTANDARDIZED",
    ["ERROR_NOT_STANDARDIZED_STATUS", "errorStatuses", "errorNotStandardized"],
  ],
  // errorTypes
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#ERRORS#TYPES#ERROR",
    ["ERROR", "errorTypes", "error"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#ERRORS#TYPES#WARNING",
    ["WARNING", "errorTypes", "warning"],
  ],
  // miscellaneous
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#MISCELLANEOUS#ELLIPSIS",
    ["ELLIPSIS", "miscellaneous", "ellipsis"],
  ],
  // variableNames
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#VARIABLES#SUCCESSFALSE",
    ["SUCCESS_FALSE_NAME", "variableNames", "successFalse"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#VARIABLES#SUCCESSTRUE",
    ["SUCCESS_TRUE_NAME", "variableNames", "successTrue"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#VARIABLES#TYPEERROR",
    ["TYPE_ERROR_NAME", "variableNames", "typeError"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#VARIABLES#TYPEWARNING",
    ["TYPE_WARNING_NAME", "variableNames", "typeWarning"],
  ],
  // stringNames
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#STRINGS#ERRORNOTSTANDARDIZEDMESSAGE",
    [
      "ERROR_NOT_STANDARDIZED_MESSAGE_NAME",
      "stringNames",
      "errorNotStandardizedMessage",
    ],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#STRINGS#ERRORNOTSTANDARDIZEDSTATUS",
    [
      "ERROR_NOT_STANDARDIZED_STATUS_NAME",
      "stringNames",
      "errorNotStandardizedStatus",
    ],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#STRINGS#ELLIPSIS",
    ["ELLIPSIS_NAME", "stringNames", "ellipsis"],
  ],
  // functionNames
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#MAKESUCCESSFALSETYPEERROR",
    [
      "MAKE_SUCCESS_FALSE_TYPE_ERROR_NAME",
      "functionNames",
      "makeSuccessFalseTypeError",
    ],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#MAKESUCCESSFALSETYPEWARNING",
    [
      "MAKE_SUCCESS_FALSE_TYPE_WARNING_NAME",
      "functionNames",
      "makeSuccessFalseTypeWarning",
    ],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#MAKEERRORTYPEERROR",
    ["MAKE_ERROR_TYPE_ERROR_NAME", "functionNames", "makeErrorTypeError"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#MAKEERRORTYPEWARNING",
    ["MAKE_ERROR_TYPE_WARNING_NAME", "functionNames", "makeErrorTypeWarning"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#SHOWVSCODEERROR",
    ["SHOW_VS_CODE_ERROR_NAME", "functionNames", "showVSCodeError"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#TREATVSCODEERRORS",
    ["TREAT_VS_CODE_ERRORS_NAME", "functionNames", "treatVSCodeErrors"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#LOGCLIERROR",
    ["LOG_CLI_ERROR_NAME", "functionNames", "logCLIError"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#ESCAPEREGEX",
    ["ESCAPE_REGEX_NAME", "functionNames", "escapeRegex"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#TRIMSTRINGWITHLIMIT",
    ["TRIM_STRING_WITH_LIMIT_NAME", "functionNames", "trimStringWithLimit"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#SPACEOUTESLINTMESSAGE",
    ["SPACE_OUT_ESLINT_MESSAGE_NAME", "functionNames", "spaceOutESLintMessage"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#HIGHLIGHTFIRSTLINEOFCODE",
    [
      "HIGHLIGHT_FIRST_LINE_OF_CODE_NAME",
      "functionNames",
      "highlightFirstLineOfCode",
    ],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#PATHEXISTSASAFILE",
    ["PATH_EXISTS_AS_A_FILE_NAME", "functionNames", "pathExistsAsAFile"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#PATHEXISTSASADIRECTORY",
    [
      "PATH_EXISTS_AS_A_DIRECTORY_NAME",
      "functionNames",
      "pathExistsAsADirectory",
    ],
  ],
  // argumentNames
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#ARGUMENTS#MESSAGE",
    ["MESSAGE_NAME", "argumentNames", "message"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#ARGUMENTS#STATUS",
    ["STATUS_NAME", "argumentNames", "status"],
  ],
  // keyNames
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#KEYS#SUCCESS",
    ["SUCCESS_NAME", "keyNames", "success"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#KEYS#TYPE",
    ["TYPE_NAME", "keyNames", "type"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#KEYS#ERRORS",
    ["ERRORS_NAME", "keyNames", "errors"],
  ],
  // booleanNames
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#BOOLEANS#TRUE",
    ["TRUE_NAME", "booleanNames", "true"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#BOOLEANS#FALSE",
    ["FALSE_NAME", "booleanNames", "false"],
  ],
];

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
