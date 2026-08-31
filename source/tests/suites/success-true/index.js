import { describe, it } from "node:test";
import assert from "node:assert";

import {
  SUCCESS_TRUE_NAME,
  SUCCESS_NAME,
  TRUE_NAME,
} from "../../../comment-variables/items.js";

/**
 * @typedef {import("../../../types/index.ts").SuccessTrue} SuccessTrue
 */

/* successTrueSuite */

export const successTrueSuite = (/** @type {SuccessTrue} */ successTrue) => {
  describe(SUCCESS_TRUE_NAME, () => {
    // initial tests

    it(`should be an object`, () => {
      const successTrueType = typeof successTrue;
      assert.strictEqual(successTrueType, "object");
    });

    it(`should have a value of \`${TRUE_NAME}\` at its \`${SUCCESS_NAME}\` key`, () => {
      const successTrueSuccessKeyValue = successTrue.success;
      assert.strictEqual(successTrueSuccessKeyValue, true);
    });

    it(`should have no other keys than its \`${SUCCESS_NAME}\` key`, () => {
      const successTrueKeys = Object.keys(successTrue);
      const successTrueKeysLength = successTrueKeys.length;
      assert.strictEqual(successTrueKeysLength, 1);
    });
  });
};
