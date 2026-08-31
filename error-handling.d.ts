import { SourceCode as SourceCode_2 } from 'eslint';

/** @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#RESOLVEDPUBLICDATA */
export declare const commentVariablesData: {
    readonly libraryKey: "_LUTHERTS_ERROR_HANDLING";
    readonly libraryVariations: {
        readonly EN: {
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#COMVAR#ITEMS#PUBLIC#ERROR_NOT_STANDARDIZED_STATUS": "\"The error encountered is not standardized.\"";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE": "Apply last with  `...successFalse` to ensure that `success: false` sits at the top of its object's type definition, like `{propertyA, propertyB, ...successFalse}`.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE": "Apply last with  `...successTrue` to ensure that `success: true` sits at the top of its object's type definition, like `{propertyA, propertyB, ...successTrue}`.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR": "Apply last with  `...typeError` to ensure that `type: error` sits at the top of its object's type definition, like `{propertyA, propertyB, ...typeError}`.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING": "Apply last with  `...typeWarning` to ensure that `type: warning` sits at the top of its object's type definition, like `{propertyA, propertyB, ...typeWarning}`.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR": "Makes a `{success: false}` object with a single error in its `errors` array of `{type: error}` based on the `message` it is meant to display and on the `status` it is meant to have.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "Makes a `{success: false}` object with a single error in its `errors` array of `{type: warning}` based on the `message` it is meant to display and on the `status` it is meant to have.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKEERRORTYPEERROR": "Makes an error object of `{type: error}` based on the `message` it is meant to display and on the `status` it is meant to have.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKEERRORTYPEWARNING": "Makes an error object of `{type: warning}` based on the `message` it is meant to display and on the `status` it is meant to have.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SHOWVSCODEERROR": "Shows an error or warning message via VS Code's toast system depending on the `type` of the error provided.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#LOGCLIERROR": "Shows an error or warning message via the CLI's `console.error` or `console.warn` method depending on the `type` of the error provided.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#ESCAPEREGEX": "Escapes all regex characters with a `\"\\\"` in a string to prepare said string for use in a regex.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT": "Trims a string with an ellipsis based on a provided length limit.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE": "Adds a single space to the end of a string, notably in the context of ESLint rule messages.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#HIGHLIGHTFIRSTLINEOFCODE": "Highlights the first line of code of a file via its ESLint `SourceCode` object to illustrate general linting errors.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#PATHEXISTSASAFILE": "Tells if a path actually exists as a file.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#PATHEXISTSASADIRECTORY": "Tells if a path actually exists as a directory.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE": "The human-readable message of the error.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS": "The static status text of the error.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#VSCODE": "The VS Code API instance at hand, living in the VS Code Extension Host (and not in the extension's Node modules).";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ERROR": "The error object at hand, with either the value `\"error\"` or `\"warning\"` at its `type` key.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#LIMIT": "The provided length limit. The string will be trimmed if its length is strictly superior to this given number.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR": "A `{success: false}` object with a single error in its `errors` array of `{type: error}`.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "A `{success: false}` object with a single error in its `errors` array of `{type: warning}`.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKEERRORTYPEERROR": "An error object of `{type: error}`.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKEERRORTYPEWARNING": "An error object of `{type: warning}`.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SHOWVSCODEERROR": "Void.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#ESCAPEREGEX": "The string with regex characters escaped.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT": "The provided string if its length is lower or equal to the provided length limit; a trimmed version of that string otherwise.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE": "The string spaced out, so that an ESLint rule message shown on hovered reports has a bit of breathing room before its plugin name and rule name are suffixed.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#HIGHLIGHTFIRSTLINEOFCODE": "A `SourceLocation` object (`loc`) as the effective range of the file's first line of code.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#PATHEXISTSASAFILE": "`true` if the path is a file, `false` otherwise.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#PATHEXISTSASADIRECTORY": "`true` if the path is a directory, `false` otherwise.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STRING": "The string at hand.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#SOURCECODE": "The file's `SourceCode` object at hand.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH": "The absolute path at hand.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#LOGCLIERROR": "Void.";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#RESOLVEDPUBLICDATA": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKESUCCESSFALSETYPEERROR": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKEERRORTYPEERROR": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKEERRORTYPEWARNING": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#SHOWVSCODEERROR": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#LOGCLIERROR": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#ESCAPEREGEX": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#TRIMSTRINGWITHLIMIT": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#SPACEOUTESLINTMESSAGE": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#HIGHLIGHTFIRSTLINEOFCODE": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#PATHEXISTSASAFILE": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#PATHEXISTSASADIRECTORY": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#SUCCESSFALSE": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#SUCCESSTRUE": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#TYPEERROR": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#TYPEWARNING": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#ERROR_NOT_STANDARDIZED_MESSAGE": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#ERROR_NOT_STANDARDIZED_STATUS": "";
        };
        readonly FR: {
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#COMVAR#ITEMS#PUBLIC#ERROR_NOT_STANDARDIZED_STATUS": "En anglais à l'exécution : \"The error encountered is not standardized.\"";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE": "À apposer en dernier via  `...successFalse` pour s'assurer que `success: false` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...successFalse}`.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE": "À apposer en dernier via  `...successTrue` pour s'assurer que `success: true` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...successTrue}`.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR": "À apposer en dernier via  `...typeError` pour s'assurer que `type: error` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...typeError}`.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING": "À apposer en dernier via  `...typeWarning` pour s'assurer que `type: warning` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...typeWarning}`.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR": "Crée un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: error}` basée sur le `message` qu'elle doit montrer et sur le `status` qu'elle doit avoir.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "Crée un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: warning}` basée sur le `message` qu'elle doit montrer et sur le `status` qu'elle doit avoir.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKEERRORTYPEERROR": "Crée un objet d'erreur de `{type: error}` basée sur le `message` qu'elle doit montrer et sur le `status` qu'elle doit avoir.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKEERRORTYPEWARNING": "Crée un objet d'erreur de `{type: warning}` basée sur le `message` qu'elle doit montrer et sur le `status` qu'elle doit avoir.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SHOWVSCODEERROR": "Affiche un message d'erreur ou d'avertissement via le système de toasts de VS Code dépendamment du `type` de l'erreur fournie.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#LOGCLIERROR": "Affiche un message d'erreur ou d'avertissement via les méthodes `console.error` et `console.warn` d'interface de ligne de commande dépendamment du `type` de l'erreur fournie.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#ESCAPEREGEX": "Échappe tous les caractères regex d'une chaîne de caractères avec un `\"\\\"` pour préparer cette dernière à être utilisée dans une regex.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT": "Tronque une chaîne de caractères par trois points de suspension en se basant sur la limite de longueur renseignée.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE": "Ajoute un seul espace à la fin d'une chaîne de caractères, notamment pour les messages des règles ESLint.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#HIGHLIGHTFIRSTLINEOFCODE": "Souligne la première ligne de code d'un fichier à partir de son objet `SourceCode` pour mettre en valeur ses erreurs générales d'analyse statique.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#PATHEXISTSASAFILE": "Informe de l'existence d'un chemin en tant que fichier.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#PATHEXISTSASADIRECTORY": "Informe de l'existence d'un chemin en tant que dossier.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE": "Le message en clair de l'erreur.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS": "Le texte statique du statut de l'erreur.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#VSCODE": "L'instance concernée de l'API VS Code, vivant dans VS Code Extension Host (et non dans les Node modules de l'extension).";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ERROR": "L'objet d'erreur concerné, avec `\"error\"` ou `\"warning\"` pour valeur à sa clé `type`.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#LIMIT": "La limite de longueur renseignée. La chaîne de caractères sera tronquée si sa longueur est strictement supérieure à celle de ce nombre donné.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR": "Un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: error}`.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "Un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: warning}`.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKEERRORTYPEERROR": "Un objet d'erreur de `{type: error}`.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKEERRORTYPEWARNING": "Un objet d'erreur de `{type: warning}`.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SHOWVSCODEERROR": "Void. (Aucun retour.)";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#ESCAPEREGEX": "La chaîne de caractères avec ses caractères regex échappés.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT": "La chaîne de caractères renseignée si sa longueur est plus petite ou égale à celle de la limite de longueur renseignée ; une version tronquée le cas échéant.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE": "La chaîne de caractères espacée, de sorte qu'un messsage de règle ESLint ait un peu de marge avant que le nom de son plugin et le nom de sa règle n'y soient ajoutés.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#HIGHLIGHTFIRSTLINEOFCODE": "Un objet `SourceLocation` (`loc`) servant de rangée effective pour la première ligne de code du fichier.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#PATHEXISTSASAFILE": "`true` si le chemin est un fichier, `false` sinon.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#PATHEXISTSASADIRECTORY": "`true` si le chemin est un dossier, `false` sinon.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STRING": "La chaîne de caractères concernée.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#SOURCECODE": "L'objet `SourceCode` du fichier concerné.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH": "Le chemin absolu concerné.";
            readonly "_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#LOGCLIERROR": "Void. (Aucun retour.)";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#RESOLVEDPUBLICDATA": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKESUCCESSFALSETYPEERROR": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKEERRORTYPEERROR": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#MAKEERRORTYPEWARNING": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#SHOWVSCODEERROR": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#LOGCLIERROR": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#ESCAPEREGEX": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#TRIMSTRINGWITHLIMIT": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#SPACEOUTESLINTMESSAGE": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#HIGHLIGHTFIRSTLINEOFCODE": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#PATHEXISTSASAFILE": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#PATHEXISTSASADIRECTORY": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#SUCCESSFALSE": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#SUCCESSTRUE": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#TYPEERROR": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#TYPEWARNING": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#ERROR_NOT_STANDARDIZED_MESSAGE": "";
            readonly "_LUTHERTS_ERROR_HANDLING#PUBLIC#ERROR_NOT_STANDARDIZED_STATUS": "";
        };
    };
};

declare const ERROR: "error";

/** @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#ERROR_NOT_STANDARDIZED_MESSAGE */
export declare const ERROR_NOT_STANDARDIZED_MESSAGE: "The error encountered is not standardized.";

/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#COMVAR#ITEMS#PUBLIC#ERROR_NOT_STANDARDIZED_STATUS
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#ERROR_NOT_STANDARDIZED_STATUS
 * */
export declare const ERROR_NOT_STANDARDIZED_STATUS: "ERROR_NOT_STANDARDIZED";

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
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#HIGHLIGHTFIRSTLINEOFCODE
 *
 * @param sourceCode - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#SOURCECODE
 * @returns $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#HIGHLIGHTFIRSTLINEOFCODE
 *
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#HIGHLIGHTFIRSTLINEOFCODE
 */
export declare const highlightFirstLineOfCode: (sourceCode: SourceCode) => {
    start: {
        line: number;
        column: number;
    };
    end: {
        line: number;
        column: number;
    };
};

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
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#PATHEXISTSASADIRECTORY
 *
 * @param absolutePath - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH
 * @returns $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#PATHEXISTSASADIRECTORY
 *
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#PATHEXISTSASADIRECTORY
 */
export declare const pathExistsAsADirectory: (absolutePath: string) => boolean;

/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#PATHEXISTSASAFILE
 *
 * @param absolutePath - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH
 * @returns $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#PATHEXISTSASAFILE
 *
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#PATHEXISTSASAFILE
 */
export declare const pathExistsAsAFile: (absolutePath: string) => boolean;

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

declare type SourceCode = SourceCode_2;

/**
 * $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE
 *
 * @param string - $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STRING
 * @returns $COMMENT#_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE
 *
 * @public $COMMENT#_LUTHERTS_ERROR_HANDLING#PUBLIC#SPACEOUTESLINTMESSAGE
 */
export declare const spaceOutESLintMessage: <T extends string>(string: T) => `${T} `;

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
