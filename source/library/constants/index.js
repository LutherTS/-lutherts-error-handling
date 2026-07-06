import { consts } from "../../comment-variables/index.js";

import { ERROR, WARNING } from "../../constants/index.js";

/* success objects */

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE
 * @public
 */
export const successFalse = Object.freeze({
  success: false,
});
/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE
 * @public
 */
export const successTrue = Object.freeze({
  success: true,
});

/* error objects */

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR
 * @public
 */
export const typeError = Object.freeze({
  type: ERROR,
});
/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING
 * @public
 */
export const typeWarning = Object.freeze({
  type: WARNING,
});

/* unstandardized error message and status */

/** @public */
export const errorNotStandardized = consts.errorNotStandardized.value;
/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#ERROR_NOT_STANDARDIZED
 * @public
 * */
export const ERROR_NOT_STANDARDIZED = "ERROR_NOT_STANDARDIZED";
