import { describe, it } from "node:test";
import assert from "node:assert";

import {
  // error types
  ERROR,
  // object identifiers
  TYPE_ERROR_IDENTIFIER,
  // property identifiers
  TYPE_IDENTIFIER,
} from "../../../comment-variables/items.js";

/**
 * @typedef {import("../../../types/index.ts").TypeError} TypeError
 */

/* typeErrorSuite */

export const typeErrorSuite = (/** @type {TypeError} */ typeError) => {
  describe(TYPE_ERROR_IDENTIFIER, () => {
    // initial tests

    it(`should be an object`, () => {
      const typeErrorType = typeof typeError;
      assert.strictEqual(typeErrorType, "object");
    });

    it(`should have a value of \`"${ERROR}"\` at its \`${TYPE_IDENTIFIER}\` key`, () => {
      const typeErrorTypeKeyValue = typeError.type;
      assert.strictEqual(typeErrorTypeKeyValue, ERROR);
    });

    it(`should have no other keys than its \`${TYPE_IDENTIFIER}\` key`, () => {
      const typeErrorKeys = Object.keys(typeError);
      const typeErrorKeysLength = typeErrorKeys.length;
      assert.strictEqual(typeErrorKeysLength, 1);
    });
  });
};
