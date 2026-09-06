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

/* names */

export const variableNames = runtimeVariables.names.variables;
export const stringNames = runtimeVariables.names.strings;
export const functionNames = runtimeVariables.names.functions;
export const argumentNames = runtimeVariables.names.arguments;
export const keyNames = runtimeVariables.names.keys;
export const booleanNames = runtimeVariables.names.booleans;
