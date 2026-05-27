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
