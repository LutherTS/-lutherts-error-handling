import { describe, it } from "node:test";
import assert from "node:assert";

import {
  MAKE_SUCCESS_FALSE_TYPE_WARNING_IDENTIFIER,
  MESSAGE_IDENTIFIER,
  STATUS_IDENTIFIER,
  ERRORS_IDENTIFIER,
  SUCCESS_IDENTIFIER,
  FALSE,
  TYPE_IDENTIFIER,
  WARNING,
} from "../../../comment-variables/items.js";

/**
 * @typedef {import("../../../types/index.ts").MakeSuccessFalseTypeWarning} MakeSuccessFalseTypeWarning
 */

/* makeSuccessFalseTypeWarningSuite */

export const makeSuccessFalseTypeWarningSuite = (
  /** @type {MakeSuccessFalseTypeWarning} */ makeSuccessFalseTypeWarning,
) => {
  describe(MAKE_SUCCESS_FALSE_TYPE_WARNING_IDENTIFIER, () => {
    // initial tests

    it(`should be a function`, () => {
      const makeSuccessFalseTypeWarningType =
        typeof makeSuccessFalseTypeWarning;
      assert.strictEqual(makeSuccessFalseTypeWarningType, "function");
    });

    it.skip(`should be named \`${MAKE_SUCCESS_FALSE_TYPE_WARNING_IDENTIFIER}\``, () => {
      const makeSuccessFalseTypeWarningName = makeSuccessFalseTypeWarning.name;
      assert.strictEqual(
        makeSuccessFalseTypeWarningName,
        MAKE_SUCCESS_FALSE_TYPE_WARNING_IDENTIFIER,
      );
    });

    // input validations tests
    // None. This is an internal utility with internal inputs, in which case a mistake in input type (like number instead of string) would be the responsibility of a developer and not that of a user. As such, the function does not validate inputs: developers bear that responsibility.

    // input operations tests

    const testMessage = "My test message";
    const testStatus = "My test status";

    const results = makeSuccessFalseTypeWarning(testMessage, testStatus);

    it(`results should be an object`, () => {
      const resultsType = typeof results;
      assert.strictEqual(resultsType, "object");
    });

    it(`results should have a value of \`${FALSE}\` at their \`${SUCCESS_IDENTIFIER}\` key`, () => {
      const resultsSuccessKeyValue = results.success;
      assert.strictEqual(resultsSuccessKeyValue, false);
    });

    it(`results should have an array at their \`${ERRORS_IDENTIFIER}\` key`, () => {
      const resultsErrors = results.errors;
      assert.strictEqual(Array.isArray(resultsErrors), true);
    });

    it(`results' \`${ERRORS_IDENTIFIER}\` key array should have a single element`, () => {
      const resultsErrorsLength = results.errors.length;
      assert.strictEqual(resultsErrorsLength, 1);
    });

    const resultsErrorsElement = results.errors[0];

    it(`results' \`${ERRORS_IDENTIFIER}\` key array single element should be an object`, () => {
      const resultsErrorsElementType = typeof resultsErrorsElement;
      assert.strictEqual(resultsErrorsElementType, "object");
    });

    it(`results' \`${ERRORS_IDENTIFIER}\` key array single element should have a value of \`"${WARNING}"\` at its \`${TYPE_IDENTIFIER}\` key`, () => {
      const resultsErrorsElementTypeKeyValue = resultsErrorsElement.type;
      assert.strictEqual(resultsErrorsElementTypeKeyValue, WARNING);
    });

    it(`results' \`${ERRORS_IDENTIFIER}\` key array single element should have the value of \`testMessage\` at its \`${MESSAGE_IDENTIFIER}\` key`, () => {
      const resultsErrorsElementMessageKeyValue = resultsErrorsElement.message;
      assert.strictEqual(resultsErrorsElementMessageKeyValue, testMessage);
    });

    it(`results' \`${ERRORS_IDENTIFIER}\` key array single element should have the value of \`testStatus\` at its \`${STATUS_IDENTIFIER}\` key`, () => {
      const resultsErrorsElementStatusKeyValue = resultsErrorsElement.status;
      assert.strictEqual(resultsErrorsElementStatusKeyValue, testStatus);
    });

    it(`results' \`${ERRORS_IDENTIFIER}\` key array single element should have no other keys than its 3 aforementioned keys`, () => {
      const resultsErrorsElementKeys = Object.keys(resultsErrorsElement);
      const resultsErrorsElementKeysLength = resultsErrorsElementKeys.length;
      assert.strictEqual(resultsErrorsElementKeysLength, 3);
    });
  });
};
