import { ERROR, WARNING } from "../../constants/index.js";
export declare const makeSuccessFalseTypeError: <T extends string, U extends string>(message: T, status: U) => {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: T;
        readonly status: U;
    }];
};
export declare const makeSuccessFalseTypeWarning: <T extends string, U extends string>(message: T, status: U) => {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "warning";
        readonly message: T;
        readonly status: U;
    }];
};
export declare const makeErrorTypeError: <T extends string, U extends string>(message: T, status: U) => {
    readonly type: "error";
    readonly message: T;
    readonly status: U;
};
export declare const makeErrorTypeWarning: <T extends string, U extends string>(message: T, status: U) => {
    readonly type: "warning";
    readonly message: T;
    readonly status: U;
};
export declare const showVSCodeError: <T extends string, U extends string, V extends typeof ERROR | typeof WARNING>(vscode: unknown, error: {
    readonly type: V;
    readonly message: T;
    readonly status: U;
}) => void;
export declare const logCLIError: <T extends string, U extends string, V extends typeof ERROR | typeof WARNING>(error: {
    readonly type: V;
    readonly message: T;
    readonly status: U;
}) => void;
export declare const escapeRegex: (string: string) => string;
