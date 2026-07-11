import { describe, it } from "node:test";
import assert from "node:assert";

import { SUCCESS_FALSE, SUCCESS, FALSE } from "../../constants/index.js";

/**
 * @typedef {import("../../../types/index.ts").SuccessFalse} SuccessFalse
 */

export const successFalseSuite = (/** @type {SuccessFalse} */ successFalse) => {
  describe(SUCCESS_FALSE, () => {
    // initial tests

    it(`should be an object`, () => {
      const successFalseType = typeof successFalse;
      assert.strictEqual(successFalseType, "object");
    });

    it(`should have a value of \`${FALSE}\` at its \`${SUCCESS}\` key`, () => {
      const successFalseSuccessKeyValue = successFalse.success;
      assert.strictEqual(successFalseSuccessKeyValue, false);
    });

    it(`should have no other keys than its \`${SUCCESS}\` key`, () => {
      const successFalseKeys = Object.keys(successFalse);
      const successFalseKeysLength = successFalseKeys.length;
      assert.strictEqual(successFalseKeysLength, 1);
    });
  });
};
