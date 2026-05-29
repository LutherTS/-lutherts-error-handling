import { describe, it } from "node:test";
import assert from "node:assert";

import { ESCAPE_REGEX } from "../../constants/index.js";

/**
 * @typedef {import("../../../typedefs/index.js").EscapeRegex} EscapeRegex
 */

export const escapeRegexSuite = (/** @type {EscapeRegex} */ escapeRegex) => {
  describe(ESCAPE_REGEX, () => {
    // initial tests

    it(`should be a function`, () => {
      const escapeRegexType = typeof escapeRegex;
      assert.strictEqual(escapeRegexType, "function");
    });

    it(`should be named \`${ESCAPE_REGEX}\``, () => {
      const escapeRegexName = escapeRegex.name;
      assert.strictEqual(escapeRegexName, ESCAPE_REGEX);
    });

    // input validations tests
    // None. This is an internal utility with internal inputs, in which case a mistake in input type (like number instead of string) would be the responsibility of a developer and not that of a user. As such, the function does not validate inputs: developers bear that responsibility.

    // input operations tests

    it(`results should have as many "\\"s as \`testInput\`'s length + 1 for its extra "\\" escaped`, () => {
      const testInput = ".*+?^${}()|[]\\";
      const escapeRegexResults = escapeRegex(testInput);

      let escapeCount = 0;
      for (const character of escapeRegexResults) {
        if (character === "\\") escapeCount++;
      }
      assert.strictEqual(escapeCount, testInput.length + 1);
    });
  });
};
