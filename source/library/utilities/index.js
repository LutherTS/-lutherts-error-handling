import fs from "fs";
import path from "path";

import {
  ERROR,
  WARNING,
  ELLIPSIS,
  ERROR_NOT_STANDARDIZED_MESSAGE,
  ERROR_NOT_STANDARDIZED_STATUS,
  DEFAULT_NUMBER_OF_ERRORS,
} from "../../comment-variables/items.js";

import { successFalse, typeError, typeWarning } from "../constants/index.js";

/**
 * @typedef {import("../../types/index.ts").SourceCode} SourceCode
 * @typedef {import("../../types/index.ts").SourceLocation} SourceLocation
 * @typedef {import("../../types/index.ts").MakeErrorTypeError} MakeErrorTypeError
 */

/* makeSuccessFalseTypeError */

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

/* makeSuccessFalseTypeWarning */

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

/* showVSCodeError */

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
        vscode.window.showErrorMessage(
          `ERROR. ${ERROR_NOT_STANDARDIZED_MESSAGE}`,
        );
        break;
    }
  }; // For now, only shows `error.message`, but `error.status` might be handled and included at a later time.

/* treatVSCodeError */

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#TREATVSCODEERRORS
 *
 * @param errors - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ERRORS
 * @param numberOfErrors - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#NUMBEROFERRORS
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SHOWVSCODEERROR
 *
 * @public
 */
export const treatVSCodeErrors = (
  /** @type {ReturnType<MakeErrorTypeError>[]} */ errors,
  /** @type {number} */ numberOfErrors = +DEFAULT_NUMBER_OF_ERRORS,
) => {
  const errorsMax = errors.slice(0, numberOfErrors);

  for (const error of errorsMax) {
    showVSCodeError(vscode, error);
  }
};

/* logCLIError */

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
          `ERROR. ${ERROR_NOT_STANDARDIZED_MESSAGE} | ${ERROR_NOT_STANDARDIZED_STATUS}`,
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

/* trimStringWithLimit */

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT
 *
 * @param string - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STRING
 * @param limit - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#LIMIT
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT
 *
 * @public
 */
export const trimStringWithLimit = (
  /** @type {string} */ string,
  /** @type {number} */ limit,
) =>
  string.length > limit
    ? string.slice(0, Math.max(limit - ELLIPSIS.length, 0)) + ELLIPSIS
    : string;

/* spaceOutESLintMessage */

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE
 *
 * @param string - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STRING
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE
 *
 * @public
 */
export const spaceOutESLintMessage = /** @template {string} T */ (
  /** @type {T} */ string,
) => /** @type {const} */ (`${string} `);

/* highlightFirstLineOfCode */

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#HIGHLIGHTFIRSTLINEOFCODE
 *
 * @param sourceCode - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#SOURCECODE
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#HIGHLIGHTFIRSTLINEOFCODE
 *
 * @public
 */
export const highlightFirstLineOfCode = (
  /** @type {SourceCode} */ sourceCode,
) => /** @satisfies {SourceLocation} */ ({
  start: { line: 1, column: 0 },
  end: { line: 1, column: sourceCode.lines[0].length }, // There's no such thing as a valid file (and a valid `SourceCode`) that doesn't have at least its first line.
});

/* pathExistsAsAFile */

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#PATHEXISTSASAFILE
 *
 * @param absolutePath - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#PATHEXISTSASAFILE
 *
 * @public
 */
export const pathExistsAsAFile = (/** @type {string} */ absolutePath) => {
  if (typeof absolutePath !== "string") return false;

  const hasExtension = !!path.extname(absolutePath);
  if (!hasExtension) return false;

  const isAbsolute = path.isAbsolute(absolutePath);
  if (!isAbsolute) return false;

  const exists = fs.existsSync(absolutePath);
  if (!exists) return false;

  const isFile = fs.statSync(absolutePath).isFile();
  if (!isFile) return false;

  return true;
};

/* pathExistsAsADirectory */

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#PATHEXISTSASADIRECTORY
 *
 * @param absolutePath - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#PATHEXISTSASADIRECTORY
 *
 * @public
 */
export const pathExistsAsADirectory = (/** @type {string} */ absolutePath) => {
  if (typeof absolutePath !== "string") return false;

  const hasExtension = !!path.extname(absolutePath);
  if (hasExtension) return false;

  const isAbsolute = path.isAbsolute(absolutePath);
  if (!isAbsolute) return false;

  const exists = fs.existsSync(absolutePath);
  if (!exists) return false;

  const isDirectory = fs.statSync(absolutePath).isDirectory();
  if (!isDirectory) return false;

  return true;
};
