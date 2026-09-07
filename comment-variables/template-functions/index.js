import { EN, FR } from "../index.js";

export const templateFunctions = {
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
};
