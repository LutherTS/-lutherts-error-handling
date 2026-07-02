import { composedVariablesExclusives } from "../comment-variables/index.js";

/* error type values */

export const ERROR = composedVariablesExclusives.error.value;
export const WARNING = composedVariablesExclusives.warning.value;

/** @public */
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}
