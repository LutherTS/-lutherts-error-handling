export declare const resolvedConfigData: {
    readonly en: {
        readonly tsDoc: {
            readonly src: {
                readonly comvar: {
                    readonly items: {
                        readonly public: {
                            readonly ERROR_NOT_STANDARDIZED_STATUS: {
                                readonly key: "EN#TSDOC#SRC#COMVAR#ITEMS#PUBLIC#ERROR_NOT_STANDARDIZED_STATUS";
                                readonly value: "\"The error encountered is not standardized.\"";
                            };
                        };
                    };
                };
                readonly lib: {
                    readonly consts: {
                        readonly public: {
                            readonly successFalse: {
                                readonly key: "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE";
                                readonly value: "Apply last with  `...successFalse` to ensure that `success: false` sits at the top of its object's type definition, like `{propertyA, propertyB, ...successFalse}`.";
                            };
                            readonly successTrue: {
                                readonly key: "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE";
                                readonly value: "Apply last with  `...successTrue` to ensure that `success: true` sits at the top of its object's type definition, like `{propertyA, propertyB, ...successTrue}`.";
                            };
                            readonly typeError: {
                                readonly key: "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR";
                                readonly value: "Apply last with  `...typeError` to ensure that `type: error` sits at the top of its object's type definition, like `{propertyA, propertyB, ...typeError}`.";
                            };
                            readonly typeWarning: {
                                readonly key: "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING";
                                readonly value: "Apply last with  `...typeWarning` to ensure that `type: warning` sits at the top of its object's type definition, like `{propertyA, propertyB, ...typeWarning}`.";
                            };
                        };
                    };
                    readonly defs: {
                        readonly utils: {
                            readonly public: {
                                readonly makeSuccessFalseTypeError: {
                                    readonly key: "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR";
                                    readonly value: "Makes a `{success: false}` object with a single error in its `errors` array of `{type: error}` based on the `message` it is meant to display and on the `status` it is meant to have.";
                                };
                                readonly makeSuccessFalseTypeWarning: {
                                    readonly key: "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING";
                                    readonly value: "Makes a `{success: false}` object with a single error in its `errors` array of `{type: warning}` based on the `message` it is meant to display and on the `status` it is meant to have.";
                                };
                                readonly makeErrorTypeError: {
                                    readonly key: "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKEERRORTYPEERROR";
                                    readonly value: "Makes an error object of `{type: error}` based on the `message` it is meant to display and on the `status` it is meant to have.";
                                };
                                readonly makeErrorTypeWarning: {
                                    readonly key: "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKEERRORTYPEWARNING";
                                    readonly value: "Makes an error object of `{type: warning}` based on the `message` it is meant to display and on the `status` it is meant to have.";
                                };
                                readonly showVSCodeError: {
                                    readonly key: "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SHOWVSCODEERROR";
                                    readonly value: "Shows an error or warning message via VS Code's toast system depending on the `type` of the error provided.";
                                };
                                readonly logCLIError: {
                                    readonly key: "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#LOGCLIERROR";
                                    readonly value: "Shows an error or warning message via the CLI's `console.error` or `console.warn` method depending on the `type` of the error provided.";
                                };
                                readonly escapeRegex: {
                                    readonly key: "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#ESCAPEREGEX";
                                    readonly value: "Escapes all regex characters with a `\"\\\"` in a string to prepare said string for use in a regex.";
                                };
                                readonly trimStringWithLimit: {
                                    readonly key: "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT";
                                    readonly value: "Trims a string with an ellipsis based on a provided length limit.";
                                };
                                readonly spaceOutESLintMessage: {
                                    readonly key: "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE";
                                    readonly value: "Adds a single space to the end of a string, notably in the context of ESLint rule messages.";
                                };
                                readonly highlightFirstLineOfCode: {
                                    readonly key: "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#HIGHLIGHTFIRSTLINEOFCODE";
                                    readonly value: "Highlights the first line of code of a file via its ESLint `SourceCode` object to illustrate general linting errors.";
                                };
                                readonly pathExistsAsAFile: {
                                    readonly key: "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#PATHEXISTSASAFILE";
                                    readonly value: "Tells if a path actually exists as a file.";
                                };
                                readonly pathExistsAsADirectory: {
                                    readonly key: "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#PATHEXISTSASADIRECTORY";
                                    readonly value: "Tells if a path actually exists as a directory.";
                                };
                            };
                        };
                    };
                    readonly params: {
                        readonly utils: {
                            readonly public: {
                                readonly message: {
                                    readonly key: "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE";
                                    readonly value: "The human-readable message of the error.";
                                };
                                readonly status: {
                                    readonly key: "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS";
                                    readonly value: "The static status text of the error.";
                                };
                                readonly vscode: {
                                    readonly key: "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#VSCODE";
                                    readonly value: "The VS Code API instance at hand, living in the VS Code Extension Host (and not in the extension's Node modules).";
                                };
                                readonly error: {
                                    readonly key: "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ERROR";
                                    readonly value: "The error object at hand, with either the value `\"error\"` or `\"warning\"` at its `type` key.";
                                };
                                readonly string: {
                                    readonly key: "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STRING";
                                    readonly value: "The string at hand.";
                                };
                                readonly limit: {
                                    readonly key: "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#LIMIT";
                                    readonly value: "The provided length limit. The string will be trimmed if its length is strictly superior to this given number.";
                                };
                                readonly sourceCode: {
                                    readonly key: "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#SOURCECODE";
                                    readonly value: "The file's `SourceCode` object at hand.";
                                };
                                readonly absolutePath: {
                                    readonly key: "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH";
                                    readonly value: "The absolute path at hand.";
                                };
                            };
                            readonly atHand: {
                                readonly string: {
                                    readonly key: "EN#TSDOC#SRC#LIB#PARAMS#UTILS#ATHAND#STRING";
                                    readonly value: "The string§";
                                };
                                readonly sourceCode: {
                                    readonly key: "EN#TSDOC#SRC#LIB#PARAMS#UTILS#ATHAND#SOURCECODE";
                                    readonly value: "The file's `SourceCode` object§";
                                };
                                readonly absolutePath: {
                                    readonly key: "EN#TSDOC#SRC#LIB#PARAMS#UTILS#ATHAND#ABSOLUTEPATH";
                                    readonly value: "The absolute path§";
                                };
                            };
                        };
                    };
                    readonly returns: {
                        readonly utils: {
                            readonly public: {
                                readonly makeSuccessFalseTypeError: {
                                    readonly key: "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR";
                                    readonly value: "A `{success: false}` object with a single error in its `errors` array of `{type: error}`.";
                                };
                                readonly makeSuccessFalseTypeWarning: {
                                    readonly key: "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING";
                                    readonly value: "A `{success: false}` object with a single error in its `errors` array of `{type: warning}`.";
                                };
                                readonly makeErrorTypeError: {
                                    readonly key: "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKEERRORTYPEERROR";
                                    readonly value: "An error object of `{type: error}`.";
                                };
                                readonly makeErrorTypeWarning: {
                                    readonly key: "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKEERRORTYPEWARNING";
                                    readonly value: "An error object of `{type: warning}`.";
                                };
                                readonly showVSCodeError: {
                                    readonly key: "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SHOWVSCODEERROR";
                                    readonly value: "Void.";
                                };
                                readonly logCLIError: {
                                    readonly key: "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#LOGCLIERROR";
                                    readonly value: "Void.";
                                };
                                readonly escapeRegex: {
                                    readonly key: "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#ESCAPEREGEX";
                                    readonly value: "The string with regex characters escaped.";
                                };
                                readonly trimStringWithLimit: {
                                    readonly key: "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT";
                                    readonly value: "The provided string if its length is lower or equal to the provided length limit; a trimmed version of that string otherwise.";
                                };
                                readonly spaceOutESLintMessage: {
                                    readonly key: "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE";
                                    readonly value: "The string spaced out, so that an ESLint rule message shown on hovered reports has a bit of breathing room before its plugin name and rule name are suffixed.";
                                };
                                readonly highlightFirstLineOfCode: {
                                    readonly key: "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#HIGHLIGHTFIRSTLINEOFCODE";
                                    readonly value: "A `SourceLocation` object (`loc`) as the effective range of the file's first line of code.";
                                };
                                readonly pathExistsAsAFile: {
                                    readonly key: "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#PATHEXISTSASAFILE";
                                    readonly value: "`true` if the path is a file, `false` otherwise.";
                                };
                                readonly pathExistsAsADirectory: {
                                    readonly key: "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#PATHEXISTSASADIRECTORY";
                                    readonly value: "`true` if the path is a directory, `false` otherwise.";
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly composedVariablesExclusives: {
            readonly runtimeVariables: {
                readonly errors: {
                    readonly messages: {
                        readonly errorNotStandardized: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#ERRORS#MESSAGES#ERRORNOTSTANDARDIZED";
                            readonly value: "The error encountered is not standardized.";
                        };
                    };
                    readonly statuses: {
                        readonly errorNotStandardized: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#ERRORS#STATUSES#ERRORNOTSTANDARDIZED";
                            readonly value: "ERROR_NOT_STANDARDIZED";
                        };
                    };
                    readonly types: {
                        readonly error: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#ERRORS#TYPES#ERROR";
                            readonly value: "error";
                        };
                        readonly warning: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#ERRORS#TYPES#WARNING";
                            readonly value: "warning";
                        };
                    };
                };
                readonly miscellaneous: {
                    readonly ellipsis: {
                        readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#MISCELLANEOUS#ELLIPSIS";
                        readonly value: "...";
                    };
                };
                readonly names: {
                    readonly variables: {
                        readonly successFalse: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#VARIABLES#SUCCESSFALSE";
                            readonly value: "successFalse";
                        };
                        readonly successTrue: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#VARIABLES#SUCCESSTRUE";
                            readonly value: "successTrue";
                        };
                        readonly typeError: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#VARIABLES#TYPEERROR";
                            readonly value: "typeError";
                        };
                        readonly typeWarning: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#VARIABLES#TYPEWARNING";
                            readonly value: "typeWarning";
                        };
                    };
                    readonly strings: {
                        readonly errorNotStandardizedMessage: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#STRINGS#ERRORNOTSTANDARDIZEDMESSAGE";
                            readonly value: "ERROR_NOT_STANDARDIZED_MESSAGE";
                        };
                        readonly errorNotStandardizedStatus: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#STRINGS#ERRORNOTSTANDARDIZEDSTATUS";
                            readonly value: "ERROR_NOT_STANDARDIZED_STATUS";
                        };
                        readonly ellipsis: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#STRINGS#ELLIPSIS";
                            readonly value: "ELLIPSIS";
                        };
                    };
                    readonly functions: {
                        readonly makeSuccessFalseTypeError: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#MAKESUCCESSFALSETYPEERROR";
                            readonly value: "makeSuccessFalseTypeError";
                        };
                        readonly makeSuccessFalseTypeWarning: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#MAKESUCCESSFALSETYPEWARNING";
                            readonly value: "makeSuccessFalseTypeWarning";
                        };
                        readonly makeErrorTypeError: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#MAKEERRORTYPEERROR";
                            readonly value: "makeErrorTypeError";
                        };
                        readonly makeErrorTypeWarning: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#MAKEERRORTYPEWARNING";
                            readonly value: "makeErrorTypeWarning";
                        };
                        readonly showVSCodeError: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#SHOWVSCODEERROR";
                            readonly value: "showVSCodeError";
                        };
                        readonly logCLIError: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#LOGCLIERROR";
                            readonly value: "logCLIError";
                        };
                        readonly escapeRegex: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#ESCAPEREGEX";
                            readonly value: "escapeRegex";
                        };
                        readonly trimStringWithLimit: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#TRIMSTRINGWITHLIMIT";
                            readonly value: "trimStringWithLimit";
                        };
                        readonly spaceOutESLintMessage: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#SPACEOUTESLINTMESSAGE";
                            readonly value: "spaceOutESLintMessage";
                        };
                        readonly highlightFirstLineOfCode: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#HIGHLIGHTFIRSTLINEOFCODE";
                            readonly value: "highlightFirstLineOfCode";
                        };
                        readonly pathExistsAsAFile: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#PATHEXISTSASAFILE";
                            readonly value: "pathExistsAsAFile";
                        };
                        readonly pathExistsAsADirectory: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#FUNCTIONS#PATHEXISTSASADIRECTORY";
                            readonly value: "pathExistsAsADirectory";
                        };
                    };
                    readonly arguments: {
                        readonly message: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#ARGUMENTS#MESSAGE";
                            readonly value: "message";
                        };
                        readonly status: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#ARGUMENTS#STATUS";
                            readonly value: "status";
                        };
                    };
                    readonly keys: {
                        readonly success: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#KEYS#SUCCESS";
                            readonly value: "success";
                        };
                        readonly type: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#KEYS#TYPE";
                            readonly value: "type";
                        };
                        readonly errors: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#KEYS#ERRORS";
                            readonly value: "errors";
                        };
                    };
                    readonly booleans: {
                        readonly true: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#BOOLEANS#TRUE";
                            readonly value: "true";
                        };
                        readonly false: {
                            readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#RUNTIMEVARIABLES#NAMES#BOOLEANS#FALSE";
                            readonly value: "false";
                        };
                    };
                };
            };
            readonly success_false: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_FALSE";
                readonly value: "success: false";
            };
            readonly success_true: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_TRUE";
                readonly value: "success: true";
            };
            readonly type_error: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#TYPE_ERROR";
                readonly value: "type: error";
            };
            readonly type_warning: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#TYPE_WARNING";
                readonly value: "type: warning";
            };
            readonly _applyLastWith: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#_APPLYLASTWITH";
                readonly value: "Apply last with";
            };
            readonly toEnsure: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#TOENSURE";
                readonly value: "to ensure that";
            };
            readonly sitsAtTopLike: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#SITSATTOPLIKE";
                readonly value: "sits at the top of its object's type definition, like";
            };
            readonly propApropB: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#PROPAPROPB";
                readonly value: "propertyA, propertyB";
            };
            readonly singleError: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR";
                readonly value: "single error in its `errors` array";
            };
            readonly errorObject: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#ERROROBJECT";
                readonly value: "error object";
            };
            readonly basedOnMessageAndStatus: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS";
                readonly value: "based on the `message` it is meant to display and on the `status` it is meant to have";
            };
            readonly atHand: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#ATHAND";
                readonly value: "at hand";
            };
            readonly _Void: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#_VOID";
                readonly value: "Void";
            };
        };
    };
    readonly fr: {
        readonly tsDoc: {
            readonly src: {
                readonly comvar: {
                    readonly items: {
                        readonly public: {
                            readonly ERROR_NOT_STANDARDIZED_STATUS: {
                                readonly key: "FR#TSDOC#SRC#COMVAR#ITEMS#PUBLIC#ERROR_NOT_STANDARDIZED_STATUS";
                                readonly value: "En anglais à l'exécution : \"The error encountered is not standardized.\"";
                            };
                        };
                    };
                };
                readonly lib: {
                    readonly consts: {
                        readonly public: {
                            readonly successFalse: {
                                readonly key: "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE";
                                readonly value: "À apposer en dernier via  `...successFalse` pour s'assurer que `success: false` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...successFalse}`.";
                            };
                            readonly successTrue: {
                                readonly key: "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE";
                                readonly value: "À apposer en dernier via  `...successTrue` pour s'assurer que `success: true` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...successTrue}`.";
                            };
                            readonly typeError: {
                                readonly key: "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR";
                                readonly value: "À apposer en dernier via  `...typeError` pour s'assurer que `type: error` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...typeError}`.";
                            };
                            readonly typeWarning: {
                                readonly key: "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING";
                                readonly value: "À apposer en dernier via  `...typeWarning` pour s'assurer que `type: warning` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...typeWarning}`.";
                            };
                        };
                    };
                    readonly defs: {
                        readonly utils: {
                            readonly public: {
                                readonly makeSuccessFalseTypeError: {
                                    readonly key: "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR";
                                    readonly value: "Crée un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: error}` basée sur le `message` qu'elle doit montrer et sur le `status` qu'elle doit avoir.";
                                };
                                readonly makeSuccessFalseTypeWarning: {
                                    readonly key: "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING";
                                    readonly value: "Crée un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: warning}` basée sur le `message` qu'elle doit montrer et sur le `status` qu'elle doit avoir.";
                                };
                                readonly makeErrorTypeError: {
                                    readonly key: "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKEERRORTYPEERROR";
                                    readonly value: "Crée un objet d'erreur de `{type: error}` basée sur le `message` qu'elle doit montrer et sur le `status` qu'elle doit avoir.";
                                };
                                readonly makeErrorTypeWarning: {
                                    readonly key: "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKEERRORTYPEWARNING";
                                    readonly value: "Crée un objet d'erreur de `{type: warning}` basée sur le `message` qu'elle doit montrer et sur le `status` qu'elle doit avoir.";
                                };
                                readonly showVSCodeError: {
                                    readonly key: "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SHOWVSCODEERROR";
                                    readonly value: "Affiche un message d'erreur ou d'avertissement via le système de toasts de VS Code dépendamment du `type` de l'erreur fournie.";
                                };
                                readonly logCLIError: {
                                    readonly key: "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#LOGCLIERROR";
                                    readonly value: "Affiche un message d'erreur ou d'avertissement via les méthodes `console.error` et `console.warn` d'interface de ligne de commande dépendamment du `type` de l'erreur fournie.";
                                };
                                readonly escapeRegex: {
                                    readonly key: "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#ESCAPEREGEX";
                                    readonly value: "Échappe tous les caractères regex d'une chaîne de caractères avec un `\"\\\"` pour préparer cette dernière à être utilisée dans une regex.";
                                };
                                readonly trimStringWithLimit: {
                                    readonly key: "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT";
                                    readonly value: "Tronque une chaîne de caractères par trois points de suspension en se basant sur la limite de longueur renseignée.";
                                };
                                readonly spaceOutESLintMessage: {
                                    readonly key: "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE";
                                    readonly value: "Ajoute un seul espace à la fin d'une chaîne de caractères, notamment pour les messages des règles ESLint.";
                                };
                                readonly highlightFirstLineOfCode: {
                                    readonly key: "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#HIGHLIGHTFIRSTLINEOFCODE";
                                    readonly value: "Souligne la première ligne de code d'un fichier à partir de son objet `SourceCode` pour mettre en valeur ses erreurs générales d'analyse statique.";
                                };
                                readonly pathExistsAsAFile: {
                                    readonly key: "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#PATHEXISTSASAFILE";
                                    readonly value: "Informe de l'existence d'un chemin en tant que fichier.";
                                };
                                readonly pathExistsAsADirectory: {
                                    readonly key: "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#PATHEXISTSASADIRECTORY";
                                    readonly value: "Informe de l'existence d'un chemin en tant que dossier.";
                                };
                            };
                        };
                    };
                    readonly params: {
                        readonly utils: {
                            readonly public: {
                                readonly message: {
                                    readonly key: "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE";
                                    readonly value: "Le message en clair de l'erreur.";
                                };
                                readonly status: {
                                    readonly key: "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS";
                                    readonly value: "Le texte statique du statut de l'erreur.";
                                };
                                readonly vscode: {
                                    readonly key: "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#VSCODE";
                                    readonly value: "L'instance concernée de l'API VS Code, vivant dans VS Code Extension Host (et non dans les Node modules de l'extension).";
                                };
                                readonly error: {
                                    readonly key: "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ERROR";
                                    readonly value: "L'objet d'erreur concerné, avec `\"error\"` ou `\"warning\"` pour valeur à sa clé `type`.";
                                };
                                readonly string: {
                                    readonly key: "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STRING";
                                    readonly value: "La chaîne de caractères concernée.";
                                };
                                readonly limit: {
                                    readonly key: "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#LIMIT";
                                    readonly value: "La limite de longueur renseignée. La chaîne de caractères sera tronquée si sa longueur est strictement supérieure à celle de ce nombre donné.";
                                };
                                readonly sourceCode: {
                                    readonly key: "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#SOURCECODE";
                                    readonly value: "L'objet `SourceCode` du fichier concerné.";
                                };
                                readonly absolutePath: {
                                    readonly key: "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH";
                                    readonly value: "Le chemin absolu concerné.";
                                };
                            };
                            readonly atHand: {
                                readonly string: {
                                    readonly key: "FR#TSDOC#SRC#LIB#PARAMS#UTILS#ATHAND#STRING";
                                    readonly value: "La chaîne de caractères concernée.";
                                };
                                readonly sourceCode: {
                                    readonly key: "FR#TSDOC#SRC#LIB#PARAMS#UTILS#ATHAND#SOURCECODE";
                                    readonly value: "L'objet `SourceCode` du fichier concerné.";
                                };
                                readonly absolutePath: {
                                    readonly key: "FR#TSDOC#SRC#LIB#PARAMS#UTILS#ATHAND#ABSOLUTEPATH";
                                    readonly value: "Le chemin absolu concerné.";
                                };
                            };
                        };
                    };
                    readonly returns: {
                        readonly utils: {
                            readonly public: {
                                readonly makeSuccessFalseTypeError: {
                                    readonly key: "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR";
                                    readonly value: "Un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: error}`.";
                                };
                                readonly makeSuccessFalseTypeWarning: {
                                    readonly key: "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING";
                                    readonly value: "Un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: warning}`.";
                                };
                                readonly makeErrorTypeError: {
                                    readonly key: "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKEERRORTYPEERROR";
                                    readonly value: "Un objet d'erreur de `{type: error}`.";
                                };
                                readonly makeErrorTypeWarning: {
                                    readonly key: "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKEERRORTYPEWARNING";
                                    readonly value: "Un objet d'erreur de `{type: warning}`.";
                                };
                                readonly showVSCodeError: {
                                    readonly key: "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SHOWVSCODEERROR";
                                    readonly value: "Void. (Aucun retour.)";
                                };
                                readonly logCLIError: {
                                    readonly key: "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#LOGCLIERROR";
                                    readonly value: "Void. (Aucun retour.)";
                                };
                                readonly escapeRegex: {
                                    readonly key: "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#ESCAPEREGEX";
                                    readonly value: "La chaîne de caractères avec ses caractères regex échappés.";
                                };
                                readonly trimStringWithLimit: {
                                    readonly key: "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT";
                                    readonly value: "La chaîne de caractères renseignée si sa longueur est plus petite ou égale à celle de la limite de longueur renseignée ; une version tronquée le cas échéant.";
                                };
                                readonly spaceOutESLintMessage: {
                                    readonly key: "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SPACEOUTESLINTMESSAGE";
                                    readonly value: "La chaîne de caractères espacée, de sorte qu'un messsage de règle ESLint ait un peu de marge avant que le nom de son plugin et le nom de sa règle n'y soient ajoutés.";
                                };
                                readonly highlightFirstLineOfCode: {
                                    readonly key: "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#HIGHLIGHTFIRSTLINEOFCODE";
                                    readonly value: "Un objet `SourceLocation` (`loc`) servant de rangée effective pour la première ligne de code du fichier.";
                                };
                                readonly pathExistsAsAFile: {
                                    readonly key: "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#PATHEXISTSASAFILE";
                                    readonly value: "`true` si le chemin est un fichier, `false` sinon.";
                                };
                                readonly pathExistsAsADirectory: {
                                    readonly key: "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#PATHEXISTSASADIRECTORY";
                                    readonly value: "`true` si le chemin est un dossier, `false` sinon.";
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly composedVariablesExclusives: {
            readonly variables: {};
            readonly arguments: {};
            readonly error: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#ERROR";
                readonly value: "erreur";
            };
            readonly _applyLastWith: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#_APPLYLASTWITH";
                readonly value: "À apposer en dernier via";
            };
            readonly toEnsure: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#TOENSURE";
                readonly value: "pour s'assurer que";
            };
            readonly sitsAtTopLike: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#SITSATTOPLIKE";
                readonly value: "apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon";
            };
            readonly _enAnglais: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS";
                readonly value: "En anglais à l'exécution";
            };
            readonly _enAnglais_: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS_";
                readonly value: "(En anglais uniquement.)";
            };
            readonly singleError: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR";
                readonly value: "seule erreur dans son array `errors`";
            };
            readonly errorObject: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#ERROROBJECT";
                readonly value: "objet d'erreur";
            };
            readonly basedOnMessageAndStatus: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS";
                readonly value: "basée sur le `message` qu'elle doit montrer et sur le `status` qu'elle doit avoir";
            };
            readonly concerné: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#CONCERNÉ";
                readonly value: "concerné";
            };
            readonly concernée: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#CONCERNÉE";
                readonly value: "concernée";
            };
        };
    };
};
