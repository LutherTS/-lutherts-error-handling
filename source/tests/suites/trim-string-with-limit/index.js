import { describe, it } from "node:test";
import assert from "node:assert";

import {
  // miscellaneous
  ELLIPSIS,
  // string identifiers
  ELLIPSIS_IDENTIFIER,
  // function identifiers
  TRIM_STRING_WITH_LIMIT_IDENTIFIER,
} from "../../../comment-variables/items.js";

/**
 * @typedef {import("../../../types/index.ts").TrimStringWithLimit} TrimStringWithLimit
 */

/* trimStringWithLimitSuite */

export const trimStringWithLimitSuite = (
  /** @type {TrimStringWithLimit} */ trimStringWithLimit,
) => {
  describe(TRIM_STRING_WITH_LIMIT_IDENTIFIER, () => {
    // initial tests

    it(`should be a function`, () => {
      const trimStringWithLimitType = typeof trimStringWithLimit;
      assert.strictEqual(trimStringWithLimitType, "function");
    });

    it.skip(`should be named \`${TRIM_STRING_WITH_LIMIT_IDENTIFIER}\``, () => {
      const trimStringWithLimitName = trimStringWithLimit.name;
      assert.strictEqual(
        trimStringWithLimitName,
        TRIM_STRING_WITH_LIMIT_IDENTIFIER,
      );
    });

    // input validations tests
    // None. This is an internal utility with internal inputs, in which case a mistake in input type (like number instead of string) would be the responsibility of a developer and not that of a user. As such, the function does not validate inputs: developers bear that responsibility.

    // input operations tests

    it(`results should be exactly its input string when its length is lower than the limit`, () => {
      const testString = "123";
      const testLimit = 4;
      const trimStringWithLimitResults = trimStringWithLimit(
        testString,
        testLimit,
      );

      assert.strictEqual(testString.length < testLimit, true);
      assert.strictEqual(trimStringWithLimitResults, testString);
    });

    it(`results should be exactly its input string when its length is equal to the limit`, () => {
      const testString = "1234";
      const testLimit = 4;
      const trimStringWithLimitResults = trimStringWithLimit(
        testString,
        testLimit,
      );

      assert.strictEqual(testString.length === testLimit, true);
      assert.strictEqual(trimStringWithLimitResults, testString);
    });

    it(`results should have the length of its input limit when its input string's length is strictly higher than the limit`, () => {
      const testString = "12345";
      const testLimit = 4;
      const trimStringWithLimitResults = trimStringWithLimit(
        testString,
        testLimit,
      );

      assert.strictEqual(testString.length > testLimit, true);
      assert.strictEqual(trimStringWithLimitResults.length, testLimit);
    });

    it(`results should have a minimum length of \`${ELLIPSIS_IDENTIFIER}.length\` when its input limit is actually shorter even than the length of the replacement ellipsis`, () => {
      const testString = "12";
      const testLimit = 1;
      const trimStringWithLimitResults = trimStringWithLimit(
        testString,
        testLimit,
      );

      assert.strictEqual(testLimit < ELLIPSIS.length, true);
      assert.strictEqual(trimStringWithLimitResults.length, ELLIPSIS.length);
    });
  });
};
