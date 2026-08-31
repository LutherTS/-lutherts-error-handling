import { describe, it } from "node:test";
import assert from "node:assert";

import {
  SUCCESS_FALSE_NAME,
  SUCCESS_NAME,
  FALSE_NAME,
} from "../../../comment-variables/items.js";

/**
 * @typedef {import("../../../types/index.ts").SuccessFalse} SuccessFalse
 */

/* successFalseSuite */

export const successFalseSuite = (/** @type {SuccessFalse} */ successFalse) => {
  describe(SUCCESS_FALSE_NAME, () => {
    // initial tests

    it(`should be an object`, () => {
      const successFalseType = typeof successFalse;
      assert.strictEqual(successFalseType, "object");
    });

    it(`should have a value of \`${FALSE_NAME}\` at its \`${SUCCESS_NAME}\` key`, () => {
      const successFalseSuccessKeyValue = successFalse.success;
      assert.strictEqual(successFalseSuccessKeyValue, false);
    });

    it(`should have no other keys than its \`${SUCCESS_NAME}\` key`, () => {
      const successFalseKeys = Object.keys(successFalse);
      const successFalseKeysLength = successFalseKeys.length;
      assert.strictEqual(successFalseKeysLength, 1);
    });
  });
};
