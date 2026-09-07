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

/* string identifiers */

export const ERROR_NOT_STANDARDIZED_MESSAGE_IDENTIFIER =
  stringIdentifiers.errorNotStandardizedMessage.value;
export const ERROR_NOT_STANDARDIZED_STATUS_IDENTIFIER =
  stringIdentifiers.errorNotStandardizedStatus.value;

export const ELLIPSIS_IDENTIFIER = stringIdentifiers.ellipsis.value;

/* object identifiers */

export const SUCCESS_FALSE_IDENTIFIER = objectIdentifiers.successFalse.value;
export const SUCCESS_TRUE_IDENTIFIER = objectIdentifiers.successTrue.value;
export const TYPE_ERROR_IDENTIFIER = objectIdentifiers.typeError.value;
export const TYPE_WARNING_IDENTIFIER = objectIdentifiers.typeWarning.value;

/* function identifiers */

export const MAKE_SUCCESS_FALSE_TYPE_ERROR_IDENTIFIER =
  functionIdentifiers.makeSuccessFalseTypeError.value;
export const MAKE_SUCCESS_FALSE_TYPE_WARNING_IDENTIFIER =
  functionIdentifiers.makeSuccessFalseTypeWarning.value;
export const MAKE_ERROR_TYPE_ERROR_IDENTIFIER =
  functionIdentifiers.makeErrorTypeError.value;
export const MAKE_ERROR_TYPE_WARNING_IDENTIFIER =
  functionIdentifiers.makeErrorTypeWarning.value;
export const SHOW_VS_CODE_ERROR_IDENTIFIER =
  functionIdentifiers.showVSCodeError.value;
export const TREAT_VS_CODE_ERRORS_IDENTIFIER =
  functionIdentifiers.treatVSCodeErrors.value;
export const LOG_CLI_ERROR_IDENTIFIER = functionIdentifiers.logCLIError.value;
export const ESCAPE_REGEX_IDENTIFIER = functionIdentifiers.escapeRegex.value;
export const TRIM_STRING_WITH_LIMIT_IDENTIFIER =
  functionIdentifiers.trimStringWithLimit.value;
export const SPACE_OUT_ESLINT_MESSAGE_IDENTIFIER =
  functionIdentifiers.spaceOutESLintMessage.value;
export const HIGHLIGHT_FIRST_LINE_OF_CODE_IDENTIFIER =
  functionIdentifiers.highlightFirstLineOfCode.value;
export const PATH_EXISTS_AS_A_FILE_IDENTIFIER =
  functionIdentifiers.pathExistsAsAFile.value;
export const PATH_EXISTS_AS_A_DIRECTORY_IDENTIFIER =
  functionIdentifiers.pathExistsAsADirectory.value;

/* argument identifiers */

export const MESSAGE_IDENTIFIER = argumentIdentifiers.message.value;
export const STATUS_IDENTIFIER = argumentIdentifiers.status.value;

/* property identifiers */

export const SUCCESS_IDENTIFIER = propertyIdentifiers.success.value;
export const TYPE_IDENTIFIER = propertyIdentifiers.type.value;
export const ERRORS_IDENTIFIER = propertyIdentifiers.errors.value;
