//#endregion
//#region source/comment-variables/index.js
const composedVariablesExclusives = {
	"en": {
		"tsDoc": { "src": {
			"lib": {
				"consts": { "public": {
					"successFalse": {
						"value": "Apply last with  `...successFalse` to ensure that `success: false` sits at the top of its object's type definition, like `{propertyA, propertyB, ...successFalse}`.",
						"key": "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE"
					},
					"successTrue": {
						"value": "Apply last with  `...successTrue` to ensure that `success: true` sits at the top of its object's type definition, like `{propertyA, propertyB, ...successTrue}`.",
						"key": "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE"
					},
					"typeError": {
						"value": "Apply last with  `...typeError` to ensure that `type: error` sits at the top of its object's type definition, like `{propertyA, propertyB, ...typeError}`.",
						"key": "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR"
					},
					"typeWarning": {
						"value": "Apply last with  `...typeWarning` to ensure that `type: warning` sits at the top of its object's type definition, like `{propertyA, propertyB, ...typeWarning}`.",
						"key": "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING"
					}
				} },
				"defs": {
					"public": {},
					"utils": { "public": {
						"makeSuccessFalseTypeError": {
							"value": "Makes a `{success: false}` object with a single error in its `errors` array of `{type: error}` based on the `message` it is meant to display and the `status` it is meant to have.",
							"key": "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR"
						},
						"makeSuccessFalseTypeWarning": {
							"value": "Makes a `{success: false}` object with a single error in its `errors` array of `{type: warning}` based on the `message` it is meant to display and the `status` it is meant to have.",
							"key": "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING"
						}
					} }
				},
				"params": { "utils": { "public": {
					"message": {
						"value": "The human-readable message of the error.",
						"key": "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE"
					},
					"status": {
						"value": "The static status text of the error.",
						"key": "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS"
					}
				} } },
				"returns": { "utils": { "public": {
					"makeSuccessFalseTypeError": {
						"value": "A `{success: false}` object with a single error in its `errors` array of `{type: error}`.",
						"key": "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR"
					},
					"makeSuccessFalseTypeWarning": {
						"value": "A `{success: false}` object with a single error in its `errors` array of `{type: warning}`.",
						"key": "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING"
					}
				} } }
			},
			"tests": {
				"defs": { "utils": {} },
				"params": { "utils": {} },
				"returns": { "utils": {} }
			}
		} },
		"forComposedVariables": {
			"variables": {},
			"arguments": {}
		},
		"composedVariablesExclusives": {
			"variables": {
				"successFalse": {
					"value": "successFalse",
					"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#SUCCESSFALSE"
				},
				"successTrue": {
					"value": "successTrue",
					"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#SUCCESSTRUE"
				},
				"typeError": {
					"value": "typeError",
					"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#TYPEERROR"
				},
				"typeWarning": {
					"value": "typeWarning",
					"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#TYPEWARNING"
				},
				"makeSuccessFalseTypeError": {
					"value": "makeSuccessFalseTypeError",
					"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#MAKESUCCESSFALSETYPEERROR"
				},
				"makeSuccessFalseTypeWarning": {
					"value": "makeSuccessFalseTypeWarning",
					"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#MAKESUCCESSFALSETYPEWARNING"
				}
			},
			"arguments": {
				"message": {
					"value": "message",
					"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#MESSAGE"
				},
				"status": {
					"value": "status",
					"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#STATUS"
				}
			},
			"success_false": {
				"value": "success: false",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_FALSE"
			},
			"success_true": {
				"value": "success: true",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_TRUE"
			},
			"type_error": {
				"value": "type: error",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#TYPE_ERROR"
			},
			"type_warning": {
				"value": "type: warning",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#TYPE_WARNING"
			},
			"success": {
				"value": "success",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS"
			},
			"false": {
				"value": "false",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#FALSE"
			},
			"true": {
				"value": "true",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#TRUE"
			},
			"type": {
				"value": "type",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#TYPE"
			},
			"error": {
				"value": "error",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ERROR"
			},
			"warning": {
				"value": "warning",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#WARNING"
			},
			"_applyLastWith": {
				"value": "Apply last with",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_APPLYLASTWITH"
			},
			"toEnsure": {
				"value": "to ensure that",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#TOENSURE"
			},
			"sitsAtTopLike": {
				"value": "sits at the top of its object's type definition, like",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SITSATTOPLIKE"
			},
			"propApropB": {
				"value": "propertyA, propertyB",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#PROPAPROPB"
			},
			"singleError": {
				"value": "single error in its `errors` array",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR"
			},
			"basedOnMessageAndStatus": {
				"value": "based on the `message` it is meant to display and the `status` it is meant to have",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS"
			}
		}
	},
	"fr": {
		"tsDoc": { "src": {
			"lib": {
				"consts": { "public": {
					"successFalse": {
						"value": "À apposer en dernier via  `...successFalse` pour s'assurer que `success: false` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...successFalse}`.",
						"key": "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE"
					},
					"successTrue": {
						"value": "À apposer en dernier via  `...successTrue` pour s'assurer que `success: true` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...successTrue}`.",
						"key": "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE"
					},
					"typeError": {
						"value": "À apposer en dernier via  `...typeError` pour s'assurer que `type: error` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...typeError}`.",
						"key": "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR"
					},
					"typeWarning": {
						"value": "À apposer en dernier via  `...typeWarning` pour s'assurer que `type: warning` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...typeWarning}`.",
						"key": "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING"
					}
				} },
				"defs": {
					"public": {},
					"utils": { "public": {
						"makeSuccessFalseTypeError": {
							"value": "Crée un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: error}` basée sur le `message` qu'elle doit montrer et le `status` qu'elle doit avoir.",
							"key": "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR"
						},
						"makeSuccessFalseTypeWarning": {
							"value": "Crée un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: warning}` basée sur le `message` qu'elle doit montrer et le `status` qu'elle doit avoir.",
							"key": "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING"
						}
					} }
				},
				"params": { "utils": { "public": {
					"message": {
						"value": "Le message en clair de l'erreur.",
						"key": "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE"
					},
					"status": {
						"value": "Le texte statique du statut de l'erreur.",
						"key": "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS"
					}
				} } },
				"returns": { "utils": { "public": {
					"makeSuccessFalseTypeError": {
						"value": "Un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: error}`.",
						"key": "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR"
					},
					"makeSuccessFalseTypeWarning": {
						"value": "Un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: warning}`.",
						"key": "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING"
					}
				} } }
			},
			"tests": {
				"defs": { "utils": {} },
				"params": { "utils": {} },
				"returns": { "utils": {} }
			}
		} },
		"forComposedVariables": {
			"variables": {},
			"arguments": {}
		},
		"composedVariablesExclusives": {
			"variables": {},
			"arguments": {},
			"error": {
				"value": "erreur",
				"key": "FR#COMPOSEDVARIABLESEXCLUSIVES#ERROR"
			},
			"_applyLastWith": {
				"value": "À apposer en dernier via",
				"key": "FR#COMPOSEDVARIABLESEXCLUSIVES#_APPLYLASTWITH"
			},
			"toEnsure": {
				"value": "pour s'assurer que",
				"key": "FR#COMPOSEDVARIABLESEXCLUSIVES#TOENSURE"
			},
			"sitsAtTopLike": {
				"value": "apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon",
				"key": "FR#COMPOSEDVARIABLESEXCLUSIVES#SITSATTOPLIKE"
			},
			"singleError": {
				"value": "seule erreur dans son array `errors`",
				"key": "FR#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR"
			},
			"basedOnMessageAndStatus": {
				"value": "basée sur le `message` qu'elle doit montrer et le `status` qu'elle doit avoir",
				"key": "FR#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS"
			}
		}
	}
}.en.composedVariablesExclusives;
//#endregion
//#region source/constants/index.js
const ERROR = composedVariablesExclusives.error.value;
const WARNING = composedVariablesExclusives.warning.value;
//#endregion
//#region source/library/constants/index.js
/**
* $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE
* @public
*/
const successFalse = Object.freeze({ success: false });
/**
* $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE
* @public
*/
const successTrue = Object.freeze({ success: true });
/**
* $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR
* @public
*/
const typeError = Object.freeze({ type: ERROR });
/**
* $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING
* @public
*/
const typeWarning = Object.freeze({ type: WARNING });
//#endregion
//#region source/library/utilities/index.js
/**
* $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR
*
* @param message - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE
* @param status - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS
* @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR
*
* @public
*/
const makeSuccessFalseTypeError = (message, status) => ({
	errors: [{
		message,
		status,
		...typeError
	}],
	...successFalse
});
/**
* $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING
*
* @param message - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE
* @param status - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS
* @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING
*
* @public
*/
const makeSuccessFalseTypeWarning = (message, status) => ({
	errors: [{
		message,
		status,
		...typeWarning
	}],
	...successFalse
});
//#endregion
//#region comments.config.public.mjs
/** @public */
const resolvedPublicData = {
	"libraryKey": "_LUTHERTS_ERROR_HANDLING",
	"libraryVariations": {
		"EN": {
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE": "Apply last with  `...successFalse` to ensure that `success: false` sits at the top of its object's type definition, like `{propertyA, propertyB, ...successFalse}`.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE": "Apply last with  `...successTrue` to ensure that `success: true` sits at the top of its object's type definition, like `{propertyA, propertyB, ...successTrue}`.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR": "Apply last with  `...typeError` to ensure that `type: error` sits at the top of its object's type definition, like `{propertyA, propertyB, ...typeError}`.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING": "Apply last with  `...typeWarning` to ensure that `type: warning` sits at the top of its object's type definition, like `{propertyA, propertyB, ...typeWarning}`.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR": "Makes a `{success: false}` object with a single error in its `errors` array of `{type: error}` based on the `message` it is meant to display and the `status` it is meant to have.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "Makes a `{success: false}` object with a single error in its `errors` array of `{type: warning}` based on the `message` it is meant to display and the `status` it is meant to have.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE": "The human-readable message of the error.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS": "The static status text of the error.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR": "A `{success: false}` object with a single error in its `errors` array of `{type: error}`.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "A `{success: false}` object with a single error in its `errors` array of `{type: warning}`."
		},
		"FR": {
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE": "À apposer en dernier via  `...successFalse` pour s'assurer que `success: false` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...successFalse}`.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE": "À apposer en dernier via  `...successTrue` pour s'assurer que `success: true` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...successTrue}`.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR": "À apposer en dernier via  `...typeError` pour s'assurer que `type: error` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...typeError}`.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING": "À apposer en dernier via  `...typeWarning` pour s'assurer que `type: warning` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...typeWarning}`.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR": "Crée un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: error}` basée sur le `message` qu'elle doit montrer et le `status` qu'elle doit avoir.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "Crée un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: warning}` basée sur le `message` qu'elle doit montrer et le `status` qu'elle doit avoir.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE": "Le message en clair de l'erreur.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS": "Le texte statique du statut de l'erreur.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR": "Un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: error}`.",
			"_LUTHERTS_ERROR_HANDLING#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "Un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: warning}`."
		}
	}
};
//#endregion
export { resolvedPublicData as commentVariablesData, makeSuccessFalseTypeError, makeSuccessFalseTypeWarning, successFalse, successTrue, typeError, typeWarning };
