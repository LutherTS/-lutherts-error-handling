import { describe, it } from "node:test";
import assert from "node:assert";

import {
  // object identifiers
  SUCCESS_FALSE_IDENTIFIER,
  SUCCESS_IDENTIFIER,
  // miscellaneous
  FALSE,
} from "../../../comment-variables/items.js";

/**
 * @typedef {import("../../../types/index.ts").SuccessFalse} SuccessFalse
 */

/* successFalseSuite */

export const successFalseSuite = (/** @type {SuccessFalse} */ successFalse) => {
  describe(SUCCESS_FALSE_IDENTIFIER, () => {
    // initial tests

    it(`should be an object`, () => {
      const successFalseType = typeof successFalse;
      assert.strictEqual(successFalseType, "object");
    });

    it(`should have a value of \`${FALSE}\` at its \`${SUCCESS_IDENTIFIER}\` key`, () => {
      const successFalseSuccessKeyValue = successFalse.success;
      assert.strictEqual(successFalseSuccessKeyValue, false);
    });

    it(`should have no other keys than its \`${SUCCESS_IDENTIFIER}\` key`, () => {
      const successFalseKeys = Object.keys(successFalse);
      const successFalseKeysLength = successFalseKeys.length;
      assert.strictEqual(successFalseKeysLength, 1);
    });
  });
};
