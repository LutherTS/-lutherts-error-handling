import * as vscode from "vscode";

import {
  successFalse,
  successTrue,
  typeError,
  typeWarning,
  makeSuccessFalseTypeError,
  makeSuccessFalseTypeWarning,
  showVSCodeError,
  errorNotStandardized,
  ERROR_NOT_STANDARDIZED,
  escapeRegex,
} from "../../source/library/index.js";

/**
 * @typedef {typeof vscode} VSCode
 */

/**
 * @typedef {typeof successFalse} SuccessFalse
 */
/**
 * @typedef {typeof successTrue} SuccessTrue
 */

/**
 * @typedef {typeof typeError} TypeError
 */
/**
 * @typedef {typeof typeWarning} TypeWarning
 */

/**
 * @typedef {typeof errorNotStandardized} ErrorNotStandardized
 */
/**
 * @typedef {typeof ERROR_NOT_STANDARDIZED} ERROR_NOT_STANDARDIZED_TYPE
 */

/**
 * @typedef {typeof makeSuccessFalseTypeError} MakeSuccessFalseTypeError
 */
/**
 * @typedef {typeof makeSuccessFalseTypeWarning} MakeSuccessFalseTypeWarning
 */

/**
 * @typedef {typeof showVSCodeError} ShowVSCodeError
 */

/**
 * @template {string} T
 * @template {string} U
 * @typedef {ReturnType<typeof makeSuccessFalseTypeError<T, U>>["errors"][0]} ErrorTypeError
 */
/**
 * @template {string} T
 * @template {string} U
 * @typedef {ReturnType<typeof makeSuccessFalseTypeWarning<T, U>>["errors"][0]} ErrorTypeWarning
 */

/**
 * @typedef {typeof escapeRegex} EscapeRegex
 */
