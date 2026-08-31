import type * as vscode from "vscode";

import type { TSESTree } from "@typescript-eslint/utils";

import {
  ERROR_NOT_STANDARDIZED_MESSAGE,
  ERROR_NOT_STANDARDIZED_STATUS,
} from "../comment-variables/items.js";

import type {
  successFalse,
  successTrue,
  typeError,
  typeWarning,
  makeSuccessFalseTypeError,
  makeSuccessFalseTypeWarning,
  makeErrorTypeError,
  makeErrorTypeWarning,
  showVSCodeError,
  logCLIError,
  escapeRegex,
  trimStringWithLimit,
  spaceOutESLintMessage,
  highlightFirstLineOfCode,
  pathExistsAsAFile,
  pathExistsAsADirectory,
} from "../library/index.js";

export type VSCode = typeof vscode;

export type { SourceCode } from "eslint";

export type SourceLocation = TSESTree.SourceLocation;

export type SuccessFalse = typeof successFalse;

export type SuccessTrue = typeof successTrue;

export type TypeError = typeof typeError;

export type TypeWarning = typeof typeWarning;

export type ErrorNotStandardizedMessage = typeof ERROR_NOT_STANDARDIZED_MESSAGE;

export type ErrorNotStandardizedStatus = typeof ERROR_NOT_STANDARDIZED_STATUS;

export type MakeSuccessFalseTypeError = typeof makeSuccessFalseTypeError;

export type MakeSuccessFalseTypeWarning = typeof makeSuccessFalseTypeWarning;

export type MakeErrorTypeError = typeof makeErrorTypeError;

export type MakeErrorTypeWarning = typeof makeErrorTypeWarning;

export type ShowVSCodeError = typeof showVSCodeError;

export type LogCLIError = typeof logCLIError;

export type EscapeRegex = typeof escapeRegex;

export type TrimStringWithLimit = typeof trimStringWithLimit;

export type SpaceOutESLintMessage = typeof spaceOutESLintMessage;

export type HighlightFirstLineOfCode = typeof highlightFirstLineOfCode;

export type PathExistsAsAFile = typeof pathExistsAsAFile;

export type PathExistsAsADirectory = typeof pathExistsAsADirectory;
