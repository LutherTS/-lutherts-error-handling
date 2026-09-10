export const frTemplateFunctions = {
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
};
