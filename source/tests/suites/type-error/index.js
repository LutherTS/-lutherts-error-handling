import { describe, it } from "node:test";
import assert from "node:assert";

import { ERROR } from "../../../constants/index.js";

import { TYPE_ERROR, TYPE } from "../../constants/index.js";

/**
 * @typedef {import("../../../typedefs/index.js").TypeError} TypeError
 */

export const typeErrorSuite = (/** @type {TypeError} */ typeError) => {
  describe(TYPE_ERROR, () => {
    // initial tests

    it(`should be an object`, () => {
      const typeErrorType = typeof typeError;
      assert.strictEqual(typeErrorType, "object");
    });

    it(`should have a value of \`"${ERROR}"\` at its \`${TYPE}\` key`, () => {
      const typeErrorTypeKeyValue = typeError.type;
      assert.strictEqual(typeErrorTypeKeyValue, ERROR);
    });

    it(`should have no other keys than its \`${TYPE}\` key`, () => {
      const typeErrorKeys = Object.keys(typeError);
      const typeErrorKeysLength = typeErrorKeys.length;
      assert.strictEqual(typeErrorKeysLength, 1);
    });
  });
};
