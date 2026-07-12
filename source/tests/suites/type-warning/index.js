import { describe, it } from "node:test";
import assert from "node:assert";

import { WARNING } from "../../../constants/index.js";

import { TYPE_WARNING, TYPE } from "../../constants/index.js";

/**
 * @typedef {import("../../../types/index.ts").TypeWarning} TypeWarning
 */

/* typeWarningSuite */

export const typeWarningSuite = (/** @type {TypeWarning} */ typeWarning) => {
  describe(TYPE_WARNING, () => {
    // initial tests

    it(`should be an object`, () => {
      const typeWarningType = typeof typeWarning;
      assert.strictEqual(typeWarningType, "object");
    });

    it(`should have a value of \`"${WARNING}"\` at its \`${TYPE}\` key`, () => {
      const typeWarningTypeKeyValue = typeWarning.type;
      assert.strictEqual(typeWarningTypeKeyValue, WARNING);
    });

    it(`should have no other keys than its \`${TYPE}\` key`, () => {
      const typeWarningKeys = Object.keys(typeWarning);
      const typeWarningKeysLength = typeWarningKeys.length;
      assert.strictEqual(typeWarningKeysLength, 1);
    });
  });
};
