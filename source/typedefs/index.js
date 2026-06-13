import * as vscode from "vscode";

import {
  successFalse,
  successTrue,
  typeError,
  typeWarning,
  errorNotStandardized,
  ERROR_NOT_STANDARDIZED,
  makeSuccessFalseTypeError,
  makeSuccessFalseTypeWarning,
  makeErrorTypeError,
  makeErrorTypeWarning,
  showVSCodeError,
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
 * @typedef {typeof makeErrorTypeError} MakeErrorTypeError
 */
/**
 * @typedef {typeof makeErrorTypeWarning} MakeErrorTypeWarning
 */

/**
 * @typedef {typeof showVSCodeError} ShowVSCodeError
 */

/**
 * @typedef {typeof escapeRegex} EscapeRegex
 */
