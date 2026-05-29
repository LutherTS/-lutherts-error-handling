import { ERROR, WARNING } from "../../constants/index.js";

import {
  successFalse,
  typeError,
  typeWarning,
  errorNotStandardized,
} from "../constants/index.js";

// /**
//  * @typedef {import("../../typedefs/index.js").VSCode} VSCode
//  */

// /**
//  * @template {string} T
//  * @template {string} U
//  * @typedef {import("../../typedefs/index.js").ErrorTypeError<T, U>} ErrorTypeError
//  */
// /**
//  * @template {string} T
//  * @template {string} U
//  * @typedef {import("../../typedefs/index.js").ErrorTypeWarning<T, U>} ErrorTypeWarning
//  */ // All this shouldn't actually be imported in tsdown though.

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
  ) =>
    /** @type {const} */ ({
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
  ) =>
    /** @type {const} */ ({
      errors: [
        {
          message,
          status,
          ...typeWarning,
        },
      ],
      ...successFalse,
    });

/* showErrorVSCode */

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SHOWVSCODEERROR
 *
 * @param vscode - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#VSCODE
 * @param error - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ERROR
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SHOWVSCODEERROR
 *
 * @public
 */
export const showVSCodeError =
  /** @template {string} T, @template {string} U, @template {typeof ERROR | typeof WARNING} V */ (
    // /** @type {VSCode} */ vscode,
    /** @type {unknown} */ vscode,
    // /** @type {ErrorTypeError<T, U> | ErrorTypeWarning<T, U>} */ error,
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
