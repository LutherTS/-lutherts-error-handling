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
/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SHOWVSCODEERROR
 *
 * @param vscode - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#VSCODE
 * @param error - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ERROR
 * @returns $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SHOWVSCODEERROR
 *
 * @public
 */
export function showVSCodeError<T extends string, U extends string, V extends typeof ERROR | typeof WARNING>(vscode: unknown, error: {
    readonly type: V;
    readonly message: T;
    readonly status: U;
}): void;
/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#ESCAPEREGEX
 *
 * @param string - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STRING
 * @returns $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#ESCAPEREGEX
 *
 * @public
 */
export function escapeRegex(string: string): string;
import { ERROR } from "../../constants/index.js";
import { WARNING } from "../../constants/index.js";
