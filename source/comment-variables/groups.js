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

export const stringIdentifiers = runtimeVariables.identifiers.strings;
export const objectIdentifiers = runtimeVariables.identifiers.objects;
export const functionIdentifiers = runtimeVariables.identifiers.functions;
export const argumentIdentifiers = runtimeVariables.identifiers.arguments;
export const propertyIdentifiers = runtimeVariables.identifiers.properties;
