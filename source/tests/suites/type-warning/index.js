import { describe, it } from "node:test";
import assert from "node:assert";

import {
  TYPE_WARNING_NAME,
  WARNING,
  TYPE_NAME,
} from "../../../comment-variables/items.js";

/**
 * @typedef {import("../../../types/index.ts").TypeWarning} TypeWarning
 */

/* typeWarningSuite */

export const typeWarningSuite = (/** @type {TypeWarning} */ typeWarning) => {
  describe(TYPE_WARNING_NAME, () => {
    // initial tests

    it(`should be an object`, () => {
      const typeWarningType = typeof typeWarning;
      assert.strictEqual(typeWarningType, "object");
    });

    it(`should have a value of \`"${WARNING}"\` at its \`${TYPE_NAME}\` key`, () => {
      const typeWarningTypeKeyValue = typeWarning.type;
      assert.strictEqual(typeWarningTypeKeyValue, WARNING);
    });

    it(`should have no other keys than its \`${TYPE_NAME}\` key`, () => {
      const typeWarningKeys = Object.keys(typeWarning);
      const typeWarningKeysLength = typeWarningKeys.length;
      assert.strictEqual(typeWarningKeysLength, 1);
    });
  });
};
