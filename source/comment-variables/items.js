import {
  errorMessages,
  errorStatuses,
  errorTypes,
  miscellaneous,
  variableNames,
  stringNames,
  functionNames,
  argumentNames,
  keyNames,
  booleanNames,
} from "./groups.js";

/* error messages */

/** @public */
export const ERROR_NOT_STANDARDIZED_MESSAGE =
  errorMessages.errorNotStandardized.value;

/* error statuses */

/**
 * $COMMENT#TSDOC#SRC#COMVAR#ITEMS#PUBLIC#ERROR_NOT_STANDARDIZED_STATUS
 * @public
 */
export const ERROR_NOT_STANDARDIZED_STATUS =
  errorStatuses.errorNotStandardized.value;

/* error types */

export const ERROR = errorTypes.error.value;
export const WARNING = errorTypes.warning.value;

/* miscellaneous */

export const ELLIPSIS = miscellaneous.ellipsis.value;

/* variable names */

export const SUCCESS_FALSE_NAME = variableNames.successFalse.value;
export const SUCCESS_TRUE_NAME = variableNames.successTrue.value;
export const TYPE_ERROR_NAME = variableNames.typeError.value;
export const TYPE_WARNING_NAME = variableNames.typeWarning.value;

/* string names */

export const ERROR_NOT_STANDARDIZED_MESSAGE_NAME =
  stringNames.errorNotStandardizedMessage.value;
export const ERROR_NOT_STANDARDIZED_STATUS_NAME =
  stringNames.errorNotStandardizedStatus.value;

export const ELLIPSIS_NAME = stringNames.ellipsis.value;

/* function names */

export const MAKE_SUCCESS_FALSE_TYPE_ERROR_NAME =
  functionNames.makeSuccessFalseTypeError.value;
export const MAKE_SUCCESS_FALSE_TYPE_WARNING_NAME =
  functionNames.makeSuccessFalseTypeWarning.value;
export const MAKE_ERROR_TYPE_ERROR_NAME =
  functionNames.makeErrorTypeError.value;
export const MAKE_ERROR_TYPE_WARNING_NAME =
  functionNames.makeErrorTypeWarning.value;
export const SHOW_VS_CODE_ERROR_NAME = functionNames.showVSCodeError.value;
export const LOG_CLI_ERROR_NAME = functionNames.logCLIError.value;
export const ESCAPE_REGEX_NAME = functionNames.escapeRegex.value;
export const TRIM_STRING_WITH_LIMIT_NAME =
  functionNames.trimStringWithLimit.value;
export const SPACE_OUT_ESLINT_MESSAGE_NAME =
  functionNames.spaceOutESLintMessage.value;
export const HIGHLIGHT_FIRST_LINE_OF_CODE_NAME =
  functionNames.highlightFirstLineOfCode.value;
export const PATH_EXISTS_AS_A_FILE_NAME = functionNames.pathExistsAsAFile.value;
export const PATH_EXISTS_AS_A_DIRECTORY_NAME =
  functionNames.pathExistsAsADirectory.value;

/* argument names */

export const MESSAGE_NAME = argumentNames.message.value;
export const STATUS_NAME = argumentNames.status.value;

/* key names */

export const SUCCESS_NAME = keyNames.success.value;
export const TYPE_NAME = keyNames.type.value;
export const ERRORS_NAME = keyNames.errors.value;

/* boolean names */

export const TRUE_NAME = booleanNames.true.value;
export const FALSE_NAME = booleanNames.false.value;
