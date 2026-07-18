import { describe, it } from "node:test";
import assert from "node:assert";

import { SPACE_OUT_ESLINT_MESSAGE } from "../../constants/index.js";

/**
 * @typedef {import("../../../types/index.ts").SpaceOutESLintMessage} SpaceOutESLintMessage
 */

/* spaceOutESLintMessageSuite */

export const spaceOutESLintMessageSuite = (
  /** @type {SpaceOutESLintMessage} */ spaceOutESLintMessage,
) => {
  describe(SPACE_OUT_ESLINT_MESSAGE, () => {
    // initial tests

    it(`should be a function`, () => {
      const spaceOutESLintMessageType = typeof spaceOutESLintMessage;
      assert.strictEqual(spaceOutESLintMessageType, "function");
    });

    it.skip(`should be named \`${SPACE_OUT_ESLINT_MESSAGE}\``, () => {
      const spaceOutESLintMessageName = spaceOutESLintMessage.name;
      assert.strictEqual(spaceOutESLintMessageName, SPACE_OUT_ESLINT_MESSAGE);
    });

    // input validations tests
    // None. This is an internal utility with internal inputs, in which case a mistake in input type (like number instead of string) would be the responsibility of a developer and not that of a user. As such, the function does not validate inputs: developers bear that responsibility.

    // input operations tests

    const testString = "test string";
    const spaceOutESLintMessageResults = spaceOutESLintMessage(testString);

    it(`results should have the length of its input + 1`, () => {
      assert.strictEqual(
        spaceOutESLintMessageResults.length === testString.length + 1,
        true,
      );
    });

    it(`results should end with a space`, () => {
      assert.strictEqual(spaceOutESLintMessageResults.endsWith(" "), true);
    });
  });
};
