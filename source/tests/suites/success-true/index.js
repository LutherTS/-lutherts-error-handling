import { describe, it } from "node:test";
import assert from "node:assert";

import { SUCCESS_TRUE, SUCCESS, TRUE } from "../../constants/index.js";

/**
 * @typedef {import("../../../typedefs/index.js").SuccessTrue} SuccessTrue
 */

export const successTrueSuite = (/** @type {SuccessTrue} */ successTrue) => {
  describe(SUCCESS_TRUE, () => {
    // initial tests

    it(`should be an object`, () => {
      const successTrueType = typeof successTrue;
      assert.strictEqual(successTrueType, "object");
    });

    it(`should have a value of \`${TRUE}\` at its \`${SUCCESS}\` key`, () => {
      const successTrueSuccessKeyValue = successTrue.success;
      assert.strictEqual(successTrueSuccessKeyValue, true);
    });

    it(`should have no other keys than its \`${SUCCESS}\` key`, () => {
      const successTrueKeys = Object.keys(successTrue);
      const successTrueKeysLength = successTrueKeys.length;
      assert.strictEqual(successTrueKeysLength, 1);
    });
  });
};
