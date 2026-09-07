import { resolvedConfigData as commentVariablesData } from "../../comments.config.mjs";

/* runtimeVariables */

const runtimeVariables =
  commentVariablesData.en.composedVariablesExclusives.runtimeVariables;

/* errors */

export const errorMessages = runtimeVariables.errors.messages;
export const errorStatuses = runtimeVariables.errors.statuses;
export const errorTypes = runtimeVariables.errors.types;

/* defaults */

export const defaults = runtimeVariables.defaults;

/* miscellaneous */

export const miscellaneous = runtimeVariables.miscellaneous;

/* identifiers */

export const variableIdentifiers = runtimeVariables.identifiers.variables;
export const stringNames = runtimeVariables.identifiers.strings;
export const functionNames = runtimeVariables.identifiers.functions;
export const argumentNames = runtimeVariables.identifiers.arguments;
export const keyNames = runtimeVariables.identifiers.keys;
export const booleanNames = runtimeVariables.identifiers.booleans;
