import { ERROR, WARNING } from "../../constants/index.js";

import {
  successFalse,
  typeError,
  typeWarning,
  errorNotStandardized,
  ERROR_NOT_STANDARDIZED,
} from "../constants/index.js";

/* makeSuccessFalse */

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR
 *
 * @param message - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE
 * @param status - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR
 *
 * @public
 */
export const makeSuccessFalseTypeError =
  /** @template {string} T, @template {string} U */ (
    /** @type {T} */ message,
    /** @type {U} */ status,
  ) => /** @type {const} */ ({
    errors: [
      {
        message,
        status,
        ...typeError,
      },
    ],
    ...successFalse,
  });

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING
 *
 * @param message - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE
 * @param status - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING
 *
 * @public
 */
export const makeSuccessFalseTypeWarning =
  /** @template {string} T, @template {string} U */ (
    /** @type {T} */ message,
    /** @type {U} */ status,
  ) => /** @type {const} */ ({
    errors: [
      {
        message,
        status,
        ...typeWarning,
      },
    ],
    ...successFalse,
  });

/* makeErrorTypeError */

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKEERRORTYPEERROR
 *
 * @param message - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE
 * @param status - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKEERRORTYPEERROR
 *
 * @public
 */
export const makeErrorTypeError =
  /** @template {string} T, @template {string} U */ (
    /** @type {T} */ message,
    /** @type {U} */ status,
  ) => /** @type {const} */ ({
    message,
    status,
    ...typeError,
  });

/* makeErrorTypeWarning */

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKEERRORTYPEWARNING
 *
 * @param message - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE
 * @param status - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKEERRORTYPEWARNING
 *
 * @public
 */
export const makeErrorTypeWarning =
  /** @template {string} T, @template {string} U */ (
    /** @type {T} */ message,
    /** @type {U} */ status,
  ) => /** @type {const} */ ({
    message,
    status,
    ...typeWarning,
  });

/* showErrorVSCode */

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SHOWVSCODEERROR
 *
 * @param vscode - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#VSCODE
 * @param error - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ERROR
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#LOGCLIERROR
 *
 * @public
 */
export const showVSCodeError =
  /** @template {string} T, @template {string} U, @template {typeof ERROR | typeof WARNING} V */ (
    // /** @type {VSCode} */ vscode,
    /** @type {unknown} */ vscode,
    // /** @type {ReturnType<MakeErrorTypeError<T, U>> | ReturnType<MakeErrorTypeWarning<T, U>>} */ error,
    /** @type {{ readonly type: V; readonly message: T; readonly status: U;}} */ error,
  ) => {
    switch (error.type) {
      case ERROR:
        vscode.window.showErrorMessage(error.message);
        break;
      case WARNING:
        vscode.window.showWarningMessage(error.message);
        break;
      default:
        vscode.window.showErrorMessage(`ERROR. ${errorNotStandardized}`);
        break;
    }
  }; // For now, only shows `error.message`, but `error.status` might be handled and included at a later time.

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#LOGCLIERROR
 *
 * @param error - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ERROR
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#LOGCLIERROR
 *
 * @public
 */
export const logCLIError =
  /** @template {string} T, @template {string} U, @template {typeof ERROR | typeof WARNING} V */ (
    /** @type {{ readonly type: V; readonly message: T; readonly status: U;}} */ error,
  ) => {
    switch (error.type) {
      case ERROR:
        console.error(`${error.message} | ${error.status}`);
        break;
      case WARNING:
        console.warn(`${error.message} | ${error.status}`);
        break;
      default:
        console.error(
          `ERROR. ${errorNotStandardized} | ${ERROR_NOT_STANDARDIZED}`,
        );
        break;
    }
  }; // Also handles `error.status` because the CLI model encourages verbosity.

/* escapeRegex */

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#ESCAPEREGEX
 *
 * @param string - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STRING
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#ESCAPEREGEX
 *
 * @public
 */
export const escapeRegex = (/** @type {string} */ string) =>
  string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
