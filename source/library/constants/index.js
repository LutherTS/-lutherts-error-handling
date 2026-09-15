import {
  // error types
  ERROR,
  WARNING,
} from "../../comment-variables/items.js";

/* success objects */

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE
 * @public
 */
export const successFalse = /** @type {const} */ ({
  success: false,
});
/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE
 * @public
 */
export const successTrue = /** @type {const} */ ({
  success: true,
});

/* error objects */

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR
 * @public
 */
export const typeError = /** @type {const} */ ({
  type: ERROR,
});
/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING
 * @public
 */
export const typeWarning = /** @type {const} */ ({
  type: WARNING,
});
