/* primary exports */

// This library exports the basic strings ...

export {
  // error messages
  ERROR_NOT_STANDARDIZED_MESSAGE,
  // error statuses
  ERROR_NOT_STANDARDIZED_STATUS,
} from "../comment-variables/items.js";

// ... constants ...

export {
  successFalse,
  successTrue,
  typeError,
  typeWarning,
} from "./constants/index.js";

// ... and utilities used across my projects for error handling.

export {
  makeSuccessFalseTypeError,
  makeSuccessFalseTypeWarning,
  makeErrorTypeError,
  makeErrorTypeWarning,
  showVSCodeError,
  treatVSCodeErrors,
  logCLIError,
  escapeRegex,
  trimStringWithLimit,
  spaceOutESLintMessage,
  highlightFirstLineOfCode,
  pathExistsAsAFile,
  pathExistsAsADirectory,
} from "./utilities/index.js";

/* secondary exports */

export { atHandTemplateFunction } from "../../comment-variables/template-functions/en/at-hand.js";

// Additionally, it showcases how to access a library's Comment Variables as keys and values.
// For the JS version (typed with literals):
// - `import { commentVariablesData as errorHandlingCommentVariablesData } from "@lutherts/error-handling";`
// For the JSON version (typed with strings):
// - `import errorHandlingCommentVariablesData from ""@lutherts/error-handling/comments.config.public.json" with { type: "json" };`

export { commentVariablesData } from "../comment-variables/public.js";
// export { resolvedPublicData as commentVariablesData } from "../../comments.config.public.mjs";
