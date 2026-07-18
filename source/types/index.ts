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
  logCLIError,
  escapeRegex,
  trimStringWithLimit,
  spaceOutESLintMessage,
} from "../../source/library/index.js";

export type VSCode = typeof vscode;

export type SuccessFalse = typeof successFalse;

export type SuccessTrue = typeof successTrue;

export type TypeError = typeof typeError;

export type TypeWarning = typeof typeWarning;

export type ErrorNotStandardized = typeof errorNotStandardized;

export type ERROR_NOT_STANDARDIZED__TYPE = typeof ERROR_NOT_STANDARDIZED;

export type MakeSuccessFalseTypeError = typeof makeSuccessFalseTypeError;

export type MakeSuccessFalseTypeWarning = typeof makeSuccessFalseTypeWarning;

export type MakeErrorTypeError = typeof makeErrorTypeError;

export type MakeErrorTypeWarning = typeof makeErrorTypeWarning;

export type ShowVSCodeError = typeof showVSCodeError;

export type LogCLIError = typeof logCLIError;

export type EscapeRegex = typeof escapeRegex;

export type TrimStringWithLimit = typeof trimStringWithLimit;

export type SpaceOutESLintMessage = typeof spaceOutESLintMessage;
