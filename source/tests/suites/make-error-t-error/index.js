import { describe, it } from "node:test";
import assert from "node:assert";

import { ERROR } from "../../../constants/index.js";

import {
  MAKE_ERROR_TYPE_ERROR,
  MESSAGE,
  STATUS,
  TYPE,
} from "../../constants/index.js";

/**
 * @typedef {import("../../../types/index.ts").MakeErrorTypeError} MakeErrorTypeError
 */

/* makeErrorTypeErrorSuite */

export const makeErrorTypeErrorSuite = (
  /** @type {MakeErrorTypeError} */ makeErrorTypeError,
) => {
  describe(MAKE_ERROR_TYPE_ERROR, () => {
    // initial tests

    it(`should be a function`, () => {
      const makeErrorTypeErrorType = typeof makeErrorTypeError;
      assert.strictEqual(makeErrorTypeErrorType, "function");
    });

    it.skip(`should be named \`${MAKE_ERROR_TYPE_ERROR}\``, () => {
      const makeErrorTypeErrorName = makeErrorTypeError.name;
      assert.strictEqual(makeErrorTypeErrorName, MAKE_ERROR_TYPE_ERROR);
    });

    // input validations tests
    // None. This is an internal utility with internal inputs, in which case a mistake in input type (like number instead of string) would be the responsibility of a developer and not that of a user. As such, the function does not validate inputs: developers bear that responsibility.

    // input operations tests

    const testMessage = "My test message";
    const testStatus = "My test status";

    const results = makeErrorTypeError(testMessage, testStatus);

    it(`results should be an object`, () => {
      const resultsType = typeof results;
      assert.strictEqual(resultsType, "object");
    });

    it(`results should have a value of \`"${ERROR}"\` at their \`${TYPE}\` key`, () => {
      const resultsTypeKeyValue = results.type;
      assert.strictEqual(resultsTypeKeyValue, ERROR);
    });

    it(`results should have the value of \`testMessage\` at their \`${MESSAGE}\` key`, () => {
      const resultsMessageKeyValue = results.message;
      assert.strictEqual(resultsMessageKeyValue, testMessage);
    });

    it(`results should have the value of \`testStatus\` at their \`${STATUS}\` key`, () => {
      const resultsStatusKeyValue = results.status;
      assert.strictEqual(resultsStatusKeyValue, testStatus);
    });

    it(`results should have no other keys than their 3 aforementioned keys`, () => {
      const resultsKeys = Object.keys(results);
      const resultsKeysLength = resultsKeys.length;
      assert.strictEqual(resultsKeysLength, 3);
    });
  });
};
