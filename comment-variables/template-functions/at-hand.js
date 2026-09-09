/** @public */
export const atHandTemplateFunction = {
  beforeComposed: (/** @type {string} */ string) => {
    const parts = string.split("§");
    const part1 = parts[1];

    return /** @type {const} */ (
      `${part1} $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ATHAND.`
    ); // N'est pas (aisément) applicable au français étant donné "concerné"/"concernée", auquel cas il demeure préférable de continuer à créer ces variables à la main via des variables composées.
  },
  afterComposed: (/** @type {string} */ string) => string,
};
