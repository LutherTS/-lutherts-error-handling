/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR
 *
 * @param message - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE
 * @param status - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS
 * @returns $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR
 *
 * @public
 */
export function makeSuccessFalseTypeError<T extends string, U extends string>(message: T, status: U): {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: T;
        readonly status: U;
    }];
};
/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING
 *
 * @param message - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE
 * @param status - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS
 * @returns $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING
 *
 * @public
 */
export function makeSuccessFalseTypeWarning<T extends string, U extends string>(message: T, status: U): {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "warning";
        readonly message: T;
        readonly status: U;
    }];
};
