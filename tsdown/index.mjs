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
const typeError = Object.freeze({ type: "error" });
/**
* $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING
* @public
*/
const typeWarning = Object.freeze({ type: "warning" });
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
