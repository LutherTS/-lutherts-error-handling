/* primary exports */

// This library exports the basic constants ...

export {
  successFalse,
  successTrue,
  typeError,
  typeWarning,
  errorNotStandardized,
  ERROR_NOT_STANDARDIZED,
} from "./constants/index.js";

// ... and utilities used across my projects for error handling.

export {
  makeSuccessFalseTypeError,
  makeSuccessFalseTypeWarning,
  escapeRegex,
} from "./utilities/index.js";

/* secondary exports */

// Additionally, it showcases how to access a library's Comment Variables as keys and values.
// For the JS version (typed with literals):
// - `import { commentVariablesData as errorHandlingCommentVariablesData } from "@lutherts/error-handling";`
// For the JSON version (typed with strings):
// - `import errorHandlingCommentVariablesData from ""@lutherts/error-handling/comments.config.public.json" with { type: "json" };`

export { commentVariablesData } from "../comment-variables/public.js";
// export { resolvedPublicData as commentVariablesData } from "../../comments.config.public.mjs";
