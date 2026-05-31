export declare const resolvedConfigData: {
    "en": {
        "tsDoc": {
            "src": {
                "lib": {
                    "consts": {
                        "public": {
                            "successFalse": {
                                "value": "Apply last with  `...successFalse` to ensure that `success: false` sits at the top of its object's type definition, like `{propertyA, propertyB, ...successFalse}`.";
                                "key": "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE";
                            };
                            "successTrue": {
                                "value": "Apply last with  `...successTrue` to ensure that `success: true` sits at the top of its object's type definition, like `{propertyA, propertyB, ...successTrue}`.";
                                "key": "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE";
                            };
                            "typeError": {
                                "value": "Apply last with  `...typeError` to ensure that `type: error` sits at the top of its object's type definition, like `{propertyA, propertyB, ...typeError}`.";
                                "key": "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR";
                            };
                            "typeWarning": {
                                "value": "Apply last with  `...typeWarning` to ensure that `type: warning` sits at the top of its object's type definition, like `{propertyA, propertyB, ...typeWarning}`.";
                                "key": "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING";
                            };
                            "errorNotStandardized": {
                                "value": "The error encountered is not standardized.";
                                "key": "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#ERRORNOTSTANDARDIZED";
                            };
                            "ERROR_NOT_STANDARDIZED": {
                                "value": "\"The error encountered is not standardized.\"";
                                "key": "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#ERROR_NOT_STANDARDIZED";
                            };
                        };
                    };
                    "defs": {
                        "utils": {
                            "public": {
                                "makeSuccessFalseTypeError": {
                                    "value": "Makes a `{success: false}` object with a single error in its `errors` array of `{type: error}` based on the `message` it is meant to display and the `status` it is meant to have.";
                                    "key": "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR";
                                };
                                "makeSuccessFalseTypeWarning": {
                                    "value": "Makes a `{success: false}` object with a single error in its `errors` array of `{type: warning}` based on the `message` it is meant to display and the `status` it is meant to have.";
                                    "key": "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING";
                                };
                                "showVSCodeError": {
                                    "value": "Shows an error or warning message via VS Code's toast system depending on the `type` of the error provided.";
                                    "key": "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SHOWVSCODEERROR";
                                };
                                "escapeRegex": {
                                    "value": "Escapes all regex characters with a `\"\\\"` in a string to prepare said string for use in a regex.";
                                    "key": "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#ESCAPEREGEX";
                                };
                            };
                        };
                    };
                    "params": {
                        "utils": {
                            "public": {
                                "message": {
                                    "value": "The human-readable message of the error.";
                                    "key": "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE";
                                };
                                "status": {
                                    "value": "The static status text of the error.";
                                    "key": "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS";
                                };
                                "vscode": {
                                    "value": "The VS Code API instance at hand, living in the VS Code Extension Host (and not in the extension's Node modules).";
                                    "key": "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#VSCODE";
                                };
                                "error": {
                                    "value": "The error object at hand, with either the value `\"error\"` or `\"warning\"` at its `type` key.";
                                    "key": "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ERROR";
                                };
                                "string": {
                                    "value": "The string at hand.";
                                    "key": "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STRING";
                                };
                            };
                        };
                    };
                    "returns": {
                        "utils": {
                            "public": {
                                "makeSuccessFalseTypeError": {
                                    "value": "A `{success: false}` object with a single error in its `errors` array of `{type: error}`.";
                                    "key": "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR";
                                };
                                "makeSuccessFalseTypeWarning": {
                                    "value": "A `{success: false}` object with a single error in its `errors` array of `{type: warning}`.";
                                    "key": "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING";
                                };
                                "showVSCodeError": {
                                    "value": "Void.";
                                    "key": "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SHOWVSCODEERROR";
                                };
                                "escapeRegex": {
                                    "value": "The string with regex characters escaped.";
                                    "key": "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#ESCAPEREGEX";
                                };
                            };
                        };
                    };
                };
            };
        };
        "forComposedVariables": {
            "variables": {};
            "arguments": {};
        };
        "composedVariablesExclusives": {
            "variables": {
                "successFalse": {
                    "value": "successFalse";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#SUCCESSFALSE";
                };
                "successTrue": {
                    "value": "successTrue";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#SUCCESSTRUE";
                };
                "typeError": {
                    "value": "typeError";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#TYPEERROR";
                };
                "typeWarning": {
                    "value": "typeWarning";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#TYPEWARNING";
                };
                "errorNotStandardized": {
                    "value": "errorNotStandardized";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#ERRORNOTSTANDARDIZED";
                };
                "ERROR_NOT_STANDARDIZED": {
                    "value": "ERROR_NOT_STANDARDIZED";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#ERROR_NOT_STANDARDIZED";
                };
                "makeSuccessFalseTypeError": {
                    "value": "makeSuccessFalseTypeError";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#MAKESUCCESSFALSETYPEERROR";
                };
                "makeSuccessFalseTypeWarning": {
                    "value": "makeSuccessFalseTypeWarning";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#MAKESUCCESSFALSETYPEWARNING";
                };
                "showVSCodeError": {
                    "value": "showVSCodeError";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#SHOWVSCODEERROR";
                };
                "escapeRegex": {
                    "value": "escapeRegex";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#ESCAPEREGEX";
                };
            };
            "arguments": {
                "message": {
                    "value": "message";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#MESSAGE";
                };
                "status": {
                    "value": "status";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#STATUS";
                };
            };
            "success_false": {
                "value": "success: false";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_FALSE";
            };
            "success_true": {
                "value": "success: true";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_TRUE";
            };
            "type_error": {
                "value": "type: error";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#TYPE_ERROR";
            };
            "type_warning": {
                "value": "type: warning";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#TYPE_WARNING";
            };
            "success": {
                "value": "success";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS";
            };
            "false": {
                "value": "false";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#FALSE";
            };
            "true": {
                "value": "true";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#TRUE";
            };
            "type": {
                "value": "type";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#TYPE";
            };
            "error": {
                "value": "error";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ERROR";
            };
            "warning": {
                "value": "warning";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#WARNING";
            };
            "_applyLastWith": {
                "value": "Apply last with";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_APPLYLASTWITH";
            };
            "toEnsure": {
                "value": "to ensure that";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#TOENSURE";
            };
            "sitsAtTopLike": {
                "value": "sits at the top of its object's type definition, like";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SITSATTOPLIKE";
            };
            "propApropB": {
                "value": "propertyA, propertyB";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#PROPAPROPB";
            };
            "singleError": {
                "value": "single error in its `errors` array";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR";
            };
            "basedOnMessageAndStatus": {
                "value": "based on the `message` it is meant to display and the `status` it is meant to have";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS";
            };
            "atHand": {
                "value": "at hand";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ATHAND";
            };
            "_Void": {
                "value": "Void";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_VOID";
            };
        };
    };
    "fr": {
        "tsDoc": {
            "src": {
                "lib": {
                    "consts": {
                        "public": {
                            "successFalse": {
                                "value": "\u00C0 apposer en dernier via  `...successFalse` pour s'assurer que `success: false` apparaisse au sommet de la d\u00E9finition du type de l'objet auquel il appartient, fa\u00E7on `{propertyA, propertyB, ...successFalse}`.";
                                "key": "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE";
                            };
                            "successTrue": {
                                "value": "\u00C0 apposer en dernier via  `...successTrue` pour s'assurer que `success: true` apparaisse au sommet de la d\u00E9finition du type de l'objet auquel il appartient, fa\u00E7on `{propertyA, propertyB, ...successTrue}`.";
                                "key": "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE";
                            };
                            "typeError": {
                                "value": "\u00C0 apposer en dernier via  `...typeError` pour s'assurer que `type: error` apparaisse au sommet de la d\u00E9finition du type de l'objet auquel il appartient, fa\u00E7on `{propertyA, propertyB, ...typeError}`.";
                                "key": "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR";
                            };
                            "typeWarning": {
                                "value": "\u00C0 apposer en dernier via  `...typeWarning` pour s'assurer que `type: warning` apparaisse au sommet de la d\u00E9finition du type de l'objet auquel il appartient, fa\u00E7on `{propertyA, propertyB, ...typeWarning}`.";
                                "key": "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING";
                            };
                            "errorNotStandardized": {
                                "value": "The error encountered is not standardized. / (En anglais uniquement.)";
                                "key": "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#ERRORNOTSTANDARDIZED";
                            };
                            "ERROR_NOT_STANDARDIZED": {
                                "value": "En anglais \u00E0 l'ex\u00E9cution : \"The error encountered is not standardized.\"";
                                "key": "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#ERROR_NOT_STANDARDIZED";
                            };
                        };
                    };
                    "defs": {
                        "utils": {
                            "public": {
                                "makeSuccessFalseTypeError": {
                                    "value": "Cr\u00E9e un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: error}` bas\u00E9e sur le `message` qu'elle doit montrer et le `status` qu'elle doit avoir.";
                                    "key": "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR";
                                };
                                "makeSuccessFalseTypeWarning": {
                                    "value": "Cr\u00E9e un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: warning}` bas\u00E9e sur le `message` qu'elle doit montrer et le `status` qu'elle doit avoir.";
                                    "key": "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING";
                                };
                                "showVSCodeError": {
                                    "value": "Affiche un message d'erreur ou d'avertissement via le syst\u00E8me de toasts de VS Code d\u00E9pendamment du `type` de l'erreur fournie.";
                                    "key": "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#SHOWVSCODEERROR";
                                };
                                "escapeRegex": {
                                    "value": "\u00C9chappe tous les caract\u00E8res regex d'une cha\u00EEne de caract\u00E8res avec un `\"\\\"` pour pr\u00E9parer cette derni\u00E8re \u00E0 \u00EAtre utilis\u00E9e dans une regex.";
                                    "key": "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#ESCAPEREGEX";
                                };
                            };
                        };
                    };
                    "params": {
                        "utils": {
                            "public": {
                                "message": {
                                    "value": "Le message en clair de l'erreur.";
                                    "key": "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE";
                                };
                                "status": {
                                    "value": "Le texte statique du statut de l'erreur.";
                                    "key": "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS";
                                };
                                "vscode": {
                                    "value": "L'instance concern\u00E9e de l'API VS Code, vivant dans VS Code Extension Host (et non dans les Node modules de l'extension).";
                                    "key": "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#VSCODE";
                                };
                                "error": {
                                    "value": "L'objet d'erreur concern\u00E9, avec `\"error\"` ou `\"warning\"` pour valeur \u00E0 sa cl\u00E9 `type`.";
                                    "key": "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ERROR";
                                };
                                "string": {
                                    "value": "La cha\u00EEne de caract\u00E8res concern\u00E9e.";
                                    "key": "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STRING";
                                };
                            };
                        };
                    };
                    "returns": {
                        "utils": {
                            "public": {
                                "makeSuccessFalseTypeError": {
                                    "value": "Un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: error}`.";
                                    "key": "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR";
                                };
                                "makeSuccessFalseTypeWarning": {
                                    "value": "Un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: warning}`.";
                                    "key": "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING";
                                };
                                "showVSCodeError": {
                                    "value": "Void. (Aucun retour.)";
                                    "key": "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#SHOWVSCODEERROR";
                                };
                                "escapeRegex": {
                                    "value": "La cha\u00EEne de caract\u00E8res avec ses caract\u00E8res regex \u00E9chapp\u00E9s.";
                                    "key": "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#ESCAPEREGEX";
                                };
                            };
                        };
                    };
                };
            };
        };
        "forComposedVariables": {
            "variables": {};
            "arguments": {};
        };
        "composedVariablesExclusives": {
            "variables": {};
            "arguments": {};
            "error": {
                "value": "erreur";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#ERROR";
            };
            "_applyLastWith": {
                "value": "\u00C0 apposer en dernier via";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#_APPLYLASTWITH";
            };
            "toEnsure": {
                "value": "pour s'assurer que";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#TOENSURE";
            };
            "sitsAtTopLike": {
                "value": "apparaisse au sommet de la d\u00E9finition du type de l'objet auquel il appartient, fa\u00E7on";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#SITSATTOPLIKE";
            };
            "_enAnglais": {
                "value": "En anglais \u00E0 l'ex\u00E9cution";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS";
            };
            "_enAnglais_": {
                "value": "(En anglais uniquement.)";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS_";
            };
            "singleError": {
                "value": "seule erreur dans son array `errors`";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR";
            };
            "basedOnMessageAndStatus": {
                "value": "bas\u00E9e sur le `message` qu'elle doit montrer et le `status` qu'elle doit avoir";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS";
            };
            "concern\u00E9": {
                "value": "concern\u00E9";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#CONCERN\u00C9";
            };
            "concern\u00E9e": {
                "value": "concern\u00E9e";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#CONCERN\u00C9E";
            };
        };
    };
};
