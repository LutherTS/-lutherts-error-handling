/** @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#RESOLVEDPUBLICDATA */
export declare const commentVariablesData: {
    "libraryKey": "_LUTHERTS_ERROR_HANDLING";
    "libraryVariations": {
        "EN": {
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE": "Apply last with  `...successFalse` to ensure that `success: false` sits at the top of its object's type definition, like `{propertyA, propertyB, ...successFalse}`.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE": "Apply last with  `...successTrue` to ensure that `success: true` sits at the top of its object's type definition, like `{propertyA, propertyB, ...successTrue}`.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR": "Apply last with  `...typeError` to ensure that `type: error` sits at the top of its object's type definition, like `{propertyA, propertyB, ...typeError}`.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING": "Apply last with  `...typeWarning` to ensure that `type: warning` sits at the top of its object's type definition, like `{propertyA, propertyB, ...typeWarning}`.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#ERROR_NOT_STANDARDIZED": "\"The error encountered is not standardized.\"";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR": "Makes a `{success: false}` object with a single error in its `errors` array of `{type: error}` based on the `message` it is meant to display and on the `status` it is meant to have.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "Makes a `{success: false}` object with a single error in its `errors` array of `{type: warning}` based on the `message` it is meant to display and on the `status` it is meant to have.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKEERRORTYPEERROR": "Makes an error object of `{type: error}` based on the `message` it is meant to display and on the `status` it is meant to have.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKEERRORTYPEWARNING": "Makes an error object of `{type: warning}` based on the `message` it is meant to display and on the `status` it is meant to have.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SHOWVSCODEERROR": "Shows an error or warning message via VS Code's toast system depending on the `type` of the error provided.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#LOGCLIERROR": "Shows an error or warning message via the CLI's `console.error` or `console.warn` method depending on the `type` of the error provided.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#ESCAPEREGEX": "Escapes all regex characters with a `\"\\\"` in a string to prepare said string for use in a regex.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT": "Trims a string with an ellipsis based on a provided length limit.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE": "Adds a single space to the end of a string, notably in the context of ESLint rule messages.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE": "The human-readable message of the error.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS": "The static status text of the error.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#VSCODE": "The VS Code API instance at hand, living in the VS Code Extension Host (and not in the extension's Node modules).";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ERROR": "The error object at hand, with either the value `\"error\"` or `\"warning\"` at its `type` key.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STRING": "The string at hand.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#LIMIT": "The provided length limit. The string will be trimmed if its length is strictly superior to this given number.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR": "A `{success: false}` object with a single error in its `errors` array of `{type: error}`.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "A `{success: false}` object with a single error in its `errors` array of `{type: warning}`.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKEERRORTYPEERROR": "An error object of `{type: error}`.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKEERRORTYPEWARNING": "An error object of `{type: warning}`.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SHOWVSCODEERROR": "Void.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#ESCAPEREGEX": "The string with regex characters escaped.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT": "The provided string if its length is lower or equal to the provided length limit; a trimmed version of that string otherwise.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE": "The string spaced out, so that an ESLint rule message shown on hovered reports has a bit of breathing room before its plugin name and rule name are suffixed.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#LOGCLIERROR": "Void.";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#RESOLVEDPUBLICDATA": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKESUCCESSFALSETYPEERROR": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKEERRORTYPEERROR": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKEERRORTYPEWARNING": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#SHOWVSCODEERROR": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#LOGCLIERROR": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#ESCAPEREGEX": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#TRIMSTRINGWITHLIMIT": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#SPACEOUTESLINTMESSAGE": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#SUCCESSFALSE": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#SUCCESSTRUE": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#TYPEERROR": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#TYPEWARNING": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#ERRORNOTSTANDARDIZED": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#ERROR_NOT_STANDARDIZED": "";
        };
        "FR": {
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE": "À apposer en dernier via  `...successFalse` pour s'assurer que `success: false` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...successFalse}`.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE": "À apposer en dernier via  `...successTrue` pour s'assurer que `success: true` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...successTrue}`.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR": "À apposer en dernier via  `...typeError` pour s'assurer que `type: error` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...typeError}`.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING": "À apposer en dernier via  `...typeWarning` pour s'assurer que `type: warning` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...typeWarning}`.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#ERROR_NOT_STANDARDIZED": "En anglais à l'exécution : \"The error encountered is not standardized.\"";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR": "Crée un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: error}` basée sur le `message` qu'elle doit montrer et sur le `status` qu'elle doit avoir.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "Crée un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: warning}` basée sur le `message` qu'elle doit montrer et sur le `status` qu'elle doit avoir.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKEERRORTYPEERROR": "Crée un objet d'erreur de `{type: error}` basée sur le `message` qu'elle doit montrer et sur le `status` qu'elle doit avoir.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKEERRORTYPEWARNING": "Crée un objet d'erreur de `{type: warning}` basée sur le `message` qu'elle doit montrer et sur le `status` qu'elle doit avoir.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SHOWVSCODEERROR": "Affiche un message d'erreur ou d'avertissement via le système de toasts de VS Code dépendamment du `type` de l'erreur fournie.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#LOGCLIERROR": "Affiche un message d'erreur ou d'avertissement via les méthodes `console.error` et `console.warn` d'interface de ligne de commande dépendamment du `type` de l'erreur fournie.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#ESCAPEREGEX": "Échappe tous les caractères regex d'une chaîne de caractères avec un `\"\\\"` pour préparer cette dernière à être utilisée dans une regex.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT": "Tronque une chaîne de caractères par trois points de suspension en se basant sur la limite de longueur renseignée.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE": "Ajoute un seul espace à la fin d'une chaîne de caractères, notamment pour les messages des règles ESLint.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE": "Le message en clair de l'erreur.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS": "Le texte statique du statut de l'erreur.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#VSCODE": "L'instance concernée de l'API VS Code, vivant dans VS Code Extension Host (et non dans les Node modules de l'extension).";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ERROR": "L'objet d'erreur concerné, avec `\"error\"` ou `\"warning\"` pour valeur à sa clé `type`.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STRING": "La chaîne de caractères concernée.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#LIMIT": "La limite de longueur renseignée. La chaîne de caractères sera tronquée si sa longueur est strictement supérieure à celle de ce nombre donné.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR": "Un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: error}`.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "Un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: warning}`.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKEERRORTYPEERROR": "Un objet d'erreur de `{type: error}`.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKEERRORTYPEWARNING": "Un objet d'erreur de `{type: warning}`.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SHOWVSCODEERROR": "Void. (Aucun retour.)";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#ESCAPEREGEX": "La chaîne de caractères avec ses caractères regex échappés.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT": "La chaîne de caractères renseignée si sa longueur est plus petite ou égale à celle de la limite de longueur renseignée ; une version tronquée le cas échéant.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE": "La chaîne de caractères espacée, de sorte qu'un messsage de règle ESLint ait un peu de marge avant que le nom de son plugin et le nom de sa règle n'y soient ajoutés.";
            "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#LOGCLIERROR": "Void. (Aucun retour.)";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#RESOLVEDPUBLICDATA": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKESUCCESSFALSETYPEERROR": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKEERRORTYPEERROR": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKEERRORTYPEWARNING": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#SHOWVSCODEERROR": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#LOGCLIERROR": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#ESCAPEREGEX": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#TRIMSTRINGWITHLIMIT": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#SPACEOUTESLINTMESSAGE": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#SUCCESSFALSE": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#SUCCESSTRUE": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#TYPEERROR": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#TYPEWARNING": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#ERRORNOTSTANDARDIZED": "";
            "_LUTHERTS_ERROR_HANDLING#PUBLIC#ERROR_NOT_STANDARDIZED": "";
        };
    };
};

declare const ERROR: "error";

/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#ERROR_NOT_STANDARDIZED
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#ERROR_NOT_STANDARDIZED
 * */
export declare const ERROR_NOT_STANDARDIZED = "ERROR_NOT_STANDARDIZED";

/** @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#ERRORNOTSTANDARDIZED */
export declare const errorNotStandardized: "The error encountered is not standardized.";

/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#ESCAPEREGEX
 *
 * @param string - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STRING
 * @returns $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#ESCAPEREGEX
 *
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#ESCAPEREGEX
 */
export declare const escapeRegex: (string: string) => string;

/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#LOGCLIERROR
 *
 * @param error - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ERROR
 * @returns $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#LOGCLIERROR
 *
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#LOGCLIERROR
 */
export declare const logCLIError: <T extends string, U extends string, V extends typeof ERROR | typeof WARNING>(error: {
    readonly type: V;
    readonly message: T;
    readonly status: U;
}) => void;

/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKEERRORTYPEERROR
 *
 * @param message - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE
 * @param status - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS
 * @returns $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKEERRORTYPEERROR
 *
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKEERRORTYPEERROR
 */
export declare const makeErrorTypeError: <T extends string, U extends string>(message: T, status: U) => {
    readonly type: "error";
    readonly message: T;
    readonly status: U;
};

/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKEERRORTYPEWARNING
 *
 * @param message - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE
 * @param status - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS
 * @returns $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKEERRORTYPEWARNING
 *
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKEERRORTYPEWARNING
 */
export declare const makeErrorTypeWarning: <T extends string, U extends string>(message: T, status: U) => {
    readonly type: "warning";
    readonly message: T;
    readonly status: U;
};

/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR
 *
 * @param message - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE
 * @param status - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS
 * @returns $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR
 *
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKESUCCESSFALSETYPEERROR
 */
export declare const makeSuccessFalseTypeError: <T extends string, U extends string>(message: T, status: U) => {
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
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKESUCCESSFALSETYPEWARNING
 */
export declare const makeSuccessFalseTypeWarning: <T extends string, U extends string>(message: T, status: U) => {
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
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#SHOWVSCODEERROR
 */
export declare const showVSCodeError: <T extends string, U extends string, V extends typeof ERROR | typeof WARNING>(vscode: unknown, error: {
    readonly type: V;
    readonly message: T;
    readonly status: U;
}) => void;

/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE
 *
 * @param string - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STRING
 * @returns $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE
 *
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#SPACEOUTESLINTMESSAGE
 */
export declare const spaceOutESLintMessage: (string: string) => string;

/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#SUCCESSFALSE
 */
export declare const successFalse: Readonly<{
    success: false;
}>;

/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#SUCCESSTRUE
 */
export declare const successTrue: Readonly<{
    success: true;
}>;

/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT
 *
 * @param string - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STRING
 * @param limit - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#LIMIT
 * @returns $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT
 *
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#TRIMSTRINGWITHLIMIT
 */
export declare const trimStringWithLimit: (string: string, limit: number) => string;

/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#TYPEERROR
 */
export declare const typeError: Readonly<{
    type: "error";
}>;

/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#TYPEWARNING
 */
export declare const typeWarning: Readonly<{
    type: "warning";
}>;

declare const WARNING: "warning";

export { }
