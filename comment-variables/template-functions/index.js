import { EN, FR } from "../index.js";

import { enTemplateFunctions } from "./en/index.js";
import { frTemplateFunctions } from "./fr/index.js";

export const templateFunctions = /** @type {const} */ ({
  [EN]: enTemplateFunctions,
  [FR]: frTemplateFunctions,
});
