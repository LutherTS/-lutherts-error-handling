import {
  errorMessages,
  errorStatuses,
  errorTypes,
  defaults,
  miscellaneous,
  stringIdentifiers,
  objectIdentifiers,
  functionIdentifiers,
  argumentIdentifiers,
  propertyIdentifiers,
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

/* defaults */

export const DEFAULT_NUMBER_OF_ERRORS = defaults.numberOfErrors.value;

/* miscellaneous */

export const ELLIPSIS = miscellaneous.ellipsis.value;
export const TRUE = miscellaneous.true.value;
export const FALSE = miscellaneous.false.value;

/* string names */

export const ERROR_NOT_STANDARDIZED_MESSAGE_NAME =
  stringIdentifiers.errorNotStandardizedMessage.value;
export const ERROR_NOT_STANDARDIZED_STATUS_NAME =
  stringIdentifiers.errorNotStandardizedStatus.value;

export const ELLIPSIS_NAME = stringIdentifiers.ellipsis.value;

/* object names */

export const SUCCESS_FALSE_NAME = objectIdentifiers.successFalse.value;
export const SUCCESS_TRUE_NAME = objectIdentifiers.successTrue.value;
export const TYPE_ERROR_NAME = objectIdentifiers.typeError.value;
export const TYPE_WARNING_NAME = objectIdentifiers.typeWarning.value;

/* function names */

export const MAKE_SUCCESS_FALSE_TYPE_ERROR_NAME =
  functionIdentifiers.makeSuccessFalseTypeError.value;
export const MAKE_SUCCESS_FALSE_TYPE_WARNING_NAME =
  functionIdentifiers.makeSuccessFalseTypeWarning.value;
export const MAKE_ERROR_TYPE_ERROR_NAME =
  functionIdentifiers.makeErrorTypeError.value;
export const MAKE_ERROR_TYPE_WARNING_NAME =
  functionIdentifiers.makeErrorTypeWarning.value;
export const SHOW_VS_CODE_ERROR_NAME =
  functionIdentifiers.showVSCodeError.value;
export const TREAT_VS_CODE_ERRORS_NAME =
  functionIdentifiers.treatVSCodeErrors.value;
export const LOG_CLI_ERROR_NAME = functionIdentifiers.logCLIError.value;
export const ESCAPE_REGEX_NAME = functionIdentifiers.escapeRegex.value;
export const TRIM_STRING_WITH_LIMIT_NAME =
  functionIdentifiers.trimStringWithLimit.value;
export const SPACE_OUT_ESLINT_MESSAGE_NAME =
  functionIdentifiers.spaceOutESLintMessage.value;
export const HIGHLIGHT_FIRST_LINE_OF_CODE_NAME =
  functionIdentifiers.highlightFirstLineOfCode.value;
export const PATH_EXISTS_AS_A_FILE_NAME =
  functionIdentifiers.pathExistsAsAFile.value;
export const PATH_EXISTS_AS_A_DIRECTORY_NAME =
  functionIdentifiers.pathExistsAsADirectory.value;

/* argument names */

export const MESSAGE_NAME = argumentIdentifiers.message.value;
export const STATUS_NAME = argumentIdentifiers.status.value;

/* property names */

export const SUCCESS_NAME = propertyIdentifiers.success.value;
export const TYPE_NAME = propertyIdentifiers.type.value;
export const ERRORS_NAME = propertyIdentifiers.errors.value;
