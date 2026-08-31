import {
  successFalse,
  successTrue,
  typeError,
  typeWarning,
  ERROR_NOT_STANDARDIZED_MESSAGE,
  ERROR_NOT_STANDARDIZED_STATUS,
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
  // } from "../../source/library/index.ts"; // dev
} from "../../tsdown/library/index.mjs"; // prod

import { successFalseSuite } from "./suites/success-false/index.js";
import { successTrueSuite } from "./suites/success-true/index.js";
import { typeErrorSuite } from "./suites/type-error/index.js";
import { typeWarningSuite } from "./suites/type-warning/index.js";
import { errorNotStandardizedMessageSuite } from "./suites/unstandardized-message/index.js";
import { errorNotStandardizedStatusSuite } from "./suites/unstandardized-status/index.js";
import { makeSuccessFalseTypeErrorSuite } from "./suites/make-s-false-t-error/index.js";
import { makeSuccessFalseTypeWarningSuite } from "./suites/make-s-false-t-warning/index.js";
import { makeErrorTypeErrorSuite } from "./suites/make-error-t-error/index.js";
import { makeErrorTypeWarningSuite } from "./suites/make-error-t-warning/index.js";
import { showVSCodeErrorSuite } from "./suites/show-vs-code-error/index.js";
import { logCLIErrorSuite } from "./suites/log-cli-error/index.js";
import { escapeRegexSuite } from "./suites/escape-regex/index.js";
import { trimStringWithLimitSuite } from "./suites/trim-string-with-limit/index.js";
import { spaceOutESLintMessageSuite } from "./suites/space-out-eslint/index.js";
import { highlightFirstLineOfCodeSuite } from "./suites/highlight-first-line/index.js";
import {
  pathExistsAsAFileSuite,
  pathExistsAsADirectorySuite,
} from "./suites/path-exists/index.js";

successFalseSuite(successFalse);
successTrueSuite(successTrue);
typeErrorSuite(typeError);
typeWarningSuite(typeWarning);
errorNotStandardizedMessageSuite(ERROR_NOT_STANDARDIZED_MESSAGE);
errorNotStandardizedStatusSuite(ERROR_NOT_STANDARDIZED_STATUS);
makeSuccessFalseTypeErrorSuite(makeSuccessFalseTypeError);
makeSuccessFalseTypeWarningSuite(makeSuccessFalseTypeWarning);
makeErrorTypeErrorSuite(makeErrorTypeError);
makeErrorTypeWarningSuite(makeErrorTypeWarning);
showVSCodeErrorSuite(showVSCodeError);
logCLIErrorSuite(logCLIError);
escapeRegexSuite(escapeRegex);
trimStringWithLimitSuite(trimStringWithLimit);
spaceOutESLintMessageSuite(spaceOutESLintMessage);
highlightFirstLineOfCodeSuite(highlightFirstLineOfCode);
pathExistsAsAFileSuite(pathExistsAsAFile);
pathExistsAsADirectorySuite(pathExistsAsADirectory);
