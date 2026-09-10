import { atHandTemplateFunction as atHand } from "./at-hand.js";

export const enTemplateFunctions = {
  // #ATHAND#
  atHand,
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
};
