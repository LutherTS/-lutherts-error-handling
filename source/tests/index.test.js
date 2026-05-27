import {
  successFalse,
  successTrue,
  typeError,
  typeWarning,
  makeSuccessFalseTypeError,
  makeSuccessFalseTypeWarning,
  errorNotStandardized,
  ERROR_NOT_STANDARDIZED,
  escapeRegex,
  // } from "../../source/library/index.js"; // dev
} from "../../tsdown/index.mjs"; // prod

import { successFalseSuite } from "./suites/success-false/index.js";
import { successTrueSuite } from "./suites/success-true/index.js";
import { typeErrorSuite } from "./suites/type-error/index.js";
import { typeWarningSuite } from "./suites/type-warning/index.js";
import { makeSuccessFalseTypeErrorSuite } from "./suites/make-s-false-t-error/index.js";
import { makeSuccessFalseTypeWarningSuite } from "./suites/make-s-false-t-warning/index.js";
import { errorNotStandardizedSuite } from "./suites/unstandardized-message/index.js";
import { ERROR_NOT_STANDARDIZEDSuite } from "./suites/unstandardized-status/index.js";
import { escapeRegexSuite } from "./suites/escape-regex/index.js";

successFalseSuite(successFalse);
successTrueSuite(successTrue);
typeErrorSuite(typeError);
typeWarningSuite(typeWarning);
makeSuccessFalseTypeErrorSuite(makeSuccessFalseTypeError);
makeSuccessFalseTypeWarningSuite(makeSuccessFalseTypeWarning);
errorNotStandardizedSuite(errorNotStandardized);
ERROR_NOT_STANDARDIZEDSuite(ERROR_NOT_STANDARDIZED);
escapeRegexSuite(escapeRegex);
