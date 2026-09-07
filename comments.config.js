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
  // defaults
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#DEFAULTS#NUMBEROFERRORS",
    ["DEFAULT_NUMBER_OF_ERRORS", "defaults", "numberOfErrors"],
  ],
  // miscellaneous
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#MISCELLANEOUS#ELLIPSIS",
    ["ELLIPSIS", "miscellaneous", "ellipsis"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#MISCELLANEOUS#TRUE",
    ["TRUE", "miscellaneous", "true"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#MISCELLANEOUS#FALSE",
    ["FALSE", "miscellaneous", "false"],
  ],
  // stringIdentifiers
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#STRINGS#ERRORNOTSTANDARDIZEDMESSAGE",
    [
      "ERROR_NOT_STANDARDIZED_MESSAGE_IDENTIFIER",
      "stringIdentifiers",
      "errorNotStandardizedMessage",
    ],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#STRINGS#ERRORNOTSTANDARDIZEDSTATUS",
    [
      "ERROR_NOT_STANDARDIZED_STATUS_IDENTIFIER",
      "stringIdentifiers",
      "errorNotStandardizedStatus",
    ],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#STRINGS#ELLIPSIS",
    ["ELLIPSIS_IDENTIFIER", "stringIdentifiers", "ellipsis"],
  ],
  // objectIdentifiers
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#OBJECTS#SUCCESSFALSE",
    ["SUCCESS_FALSE_IDENTIFIER", "objectIdentifiers", "successFalse"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#OBJECTS#SUCCESSTRUE",
    ["SUCCESS_TRUE_IDENTIFIER", "objectIdentifiers", "successTrue"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#OBJECTS#TYPEERROR",
    ["TYPE_ERROR_IDENTIFIER", "objectIdentifiers", "typeError"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#OBJECTS#TYPEWARNING",
    ["TYPE_WARNING_IDENTIFIER", "objectIdentifiers", "typeWarning"],
  ],
  // functionIdentifiers
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#FUNCTIONS#MAKESUCCESSFALSETYPEERROR",
    [
      "MAKE_SUCCESS_FALSE_TYPE_ERROR_IDENTIFIER",
      "functionIdentifiers",
      "makeSuccessFalseTypeError",
    ],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#FUNCTIONS#MAKESUCCESSFALSETYPEWARNING",
    [
      "MAKE_SUCCESS_FALSE_TYPE_WARNING_IDENTIFIER",
      "functionIdentifiers",
      "makeSuccessFalseTypeWarning",
    ],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#FUNCTIONS#MAKEERRORTYPEERROR",
    [
      "MAKE_ERROR_TYPE_ERROR_IDENTIFIER",
      "functionIdentifiers",
      "makeErrorTypeError",
    ],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#FUNCTIONS#MAKEERRORTYPEWARNING",
    [
      "MAKE_ERROR_TYPE_WARNING_IDENTIFIER",
      "functionIdentifiers",
      "makeErrorTypeWarning",
    ],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#FUNCTIONS#SHOWVSCODEERROR",
    ["SHOW_VS_CODE_ERROR_IDENTIFIER", "functionIdentifiers", "showVSCodeError"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#FUNCTIONS#TREATVSCODEERRORS",
    [
      "TREAT_VS_CODE_ERRORS_IDENTIFIER",
      "functionIdentifiers",
      "treatVSCodeErrors",
    ],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#FUNCTIONS#LOGCLIERROR",
    ["LOG_CLI_ERROR_IDENTIFIER", "functionIdentifiers", "logCLIError"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#FUNCTIONS#ESCAPEREGEX",
    ["ESCAPE_REGEX_IDENTIFIER", "functionIdentifiers", "escapeRegex"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#FUNCTIONS#TRIMSTRINGWITHLIMIT",
    [
      "TRIM_STRING_WITH_LIMIT_IDENTIFIER",
      "functionIdentifiers",
      "trimStringWithLimit",
    ],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#FUNCTIONS#SPACEOUTESLINTMESSAGE",
    [
      "SPACE_OUT_ESLINT_MESSAGE_IDENTIFIER",
      "functionIdentifiers",
      "spaceOutESLintMessage",
    ],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#FUNCTIONS#HIGHLIGHTFIRSTLINEOFCODE",
    [
      "HIGHLIGHT_FIRST_LINE_OF_CODE_IDENTIFIER",
      "functionIdentifiers",
      "highlightFirstLineOfCode",
    ],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#FUNCTIONS#PATHEXISTSASAFILE",
    [
      "PATH_EXISTS_AS_A_FILE_IDENTIFIER",
      "functionIdentifiers",
      "pathExistsAsAFile",
    ],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#FUNCTIONS#PATHEXISTSASADIRECTORY",
    [
      "PATH_EXISTS_AS_A_DIRECTORY_IDENTIFIER",
      "functionIdentifiers",
      "pathExistsAsADirectory",
    ],
  ],
  // argumentIdentifiers
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#ARGUMENTS#MESSAGE",
    ["MESSAGE_IDENTIFIER", "argumentIdentifiers", "message"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#ARGUMENTS#STATUS",
    ["STATUS_IDENTIFIER", "argumentIdentifiers", "status"],
  ],
  // propertyIdentifiers
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#PROPERTIES#SUCCESS",
    ["SUCCESS_IDENTIFIER", "propertyIdentifiers", "success"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#PROPERTIES#TYPE",
    ["TYPE_IDENTIFIER", "propertyIdentifiers", "type"],
  ],
  [
    "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#IDENTIFIERS#PROPERTIES#ERRORS",
    ["ERRORS_IDENTIFIER", "propertyIdentifiers", "errors"],
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
