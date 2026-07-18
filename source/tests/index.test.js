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
  // } from "../../source/library/index.js"; // dev
} from "../../tsdown/library/index.mjs"; // prod

import { successFalseSuite } from "./suites/success-false/index.js";
import { successTrueSuite } from "./suites/success-true/index.js";
import { typeErrorSuite } from "./suites/type-error/index.js";
import { typeWarningSuite } from "./suites/type-warning/index.js";
import { errorNotStandardizedSuite } from "./suites/unstandardized-message/index.js";
import { ERROR_NOT_STANDARDIZED__Suite } from "./suites/unstandardized-status/index.js";
import { makeSuccessFalseTypeErrorSuite } from "./suites/make-s-false-t-error/index.js";
import { makeSuccessFalseTypeWarningSuite } from "./suites/make-s-false-t-warning/index.js";
import { makeErrorTypeErrorSuite } from "./suites/make-error-t-error/index.js";
import { makeErrorTypeWarningSuite } from "./suites/make-error-t-warning/index.js";
import { showVSCodeErrorSuite } from "./suites/show-vs-code-error/index.js";
import { logCLIErrorSuite } from "./suites/log-cli-error/index.js";
import { escapeRegexSuite } from "./suites/escape-regex/index.js";
import { trimStringWithLimitSuite } from "./suites/trim-string-with-limit/index.js";
import { spaceOutESLintMessageSuite } from "./suites/space-out-eslint/index.js";

successFalseSuite(successFalse);
successTrueSuite(successTrue);
typeErrorSuite(typeError);
typeWarningSuite(typeWarning);
errorNotStandardizedSuite(errorNotStandardized);
ERROR_NOT_STANDARDIZED__Suite(ERROR_NOT_STANDARDIZED);
makeSuccessFalseTypeErrorSuite(makeSuccessFalseTypeError);
makeSuccessFalseTypeWarningSuite(makeSuccessFalseTypeWarning);
makeErrorTypeErrorSuite(makeErrorTypeError);
makeErrorTypeWarningSuite(makeErrorTypeWarning);
showVSCodeErrorSuite(showVSCodeError);
logCLIErrorSuite(logCLIError);
escapeRegexSuite(escapeRegex);
trimStringWithLimitSuite(trimStringWithLimit);
spaceOutESLintMessageSuite(spaceOutESLintMessage);
