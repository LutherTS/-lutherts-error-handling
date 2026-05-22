import { describe, it } from "node:test";
import assert from "node:assert";

import {
  successFalse,
  successTrue,
  typeError,
  typeWarning,
  makeSuccessFalseTypeError,
  makeSuccessFalseTypeWarning,
} from "../library/index.js";

import {
  SUCCESS_FALSE,
  SUCCESS_TRUE,
  TYPE_ERROR,
  TYPE_WARNING,
  MAKE_SUCCESS_FALSE_TYPE_ERROR,
  MAKE_SUCCESS_FALSE_TYPE_WARNING,
  MESSAGE,
  STATUS,
  SUCCESS,
  FALSE,
  TRUE,
  TYPE,
  ERROR,
  WARNING,
} from "./constants/index.js";

describe(SUCCESS_FALSE, () => {
  // initial tests

  it(`should be an object`, () => {
    const successFalseType = typeof successFalse;
    assert.strictEqual(successFalseType, "object");
  });

  it(`should have a value of \`${FALSE}\` at its \`${SUCCESS}\` key`, () => {
    const successFalseSuccessKeyValue = successFalse.success;
    assert.strictEqual(successFalseSuccessKeyValue, false);
  });

  it(`should have no other keys than its \`${SUCCESS}\` key`, () => {
    const successFalseKeys = Object.keys(successFalse);
    const successFalseKeysLength = successFalseKeys.length;
    assert.strictEqual(successFalseKeysLength, 1);
  });
});

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

describe(TYPE_ERROR, () => {
  // initial tests

  it(`should be an object`, () => {
    const typeErrorType = typeof typeError;
    assert.strictEqual(typeErrorType, "object");
  });

  it(`should have a value of \`"${ERROR}"\` at its \`${TYPE}\` key`, () => {
    const typeErrorTypeKeyValue = typeError.type;
    assert.strictEqual(typeErrorTypeKeyValue, ERROR);
  });

  it(`should have no other keys than its \`${TYPE}\` key`, () => {
    const typeErrorKeys = Object.keys(typeError);
    const typeErrorKeysLength = typeErrorKeys.length;
    assert.strictEqual(typeErrorKeysLength, 1);
  });
});

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

describe(MAKE_SUCCESS_FALSE_TYPE_ERROR, () => {
  // initial tests

  it(`should be a function`, () => {
    const makeSuccessFalseTypeErrorType = typeof makeSuccessFalseTypeError;
    assert.strictEqual(makeSuccessFalseTypeErrorType, "function");
  });

  it(`should be named \`${MAKE_SUCCESS_FALSE_TYPE_ERROR}\``, () => {
    const makeSuccessFalseTypeErrorName = makeSuccessFalseTypeError.name;
    assert.strictEqual(
      makeSuccessFalseTypeErrorName,
      MAKE_SUCCESS_FALSE_TYPE_ERROR,
    );
  });

  // input validations tests
  // None. This is an internal utility with internal inputs, in which case a mistake in input type (like number instead of string) would be the responsibility of a developer and not that of a user. As such, the function does not validate inputs: developers bear that responsibility.

  // input operations tests

  const testMessage = "My test message";
  const testStatus = "My test status";

  const results = makeSuccessFalseTypeError(testMessage, testStatus);

  it(`results should be an object`, () => {
    const resultsType = typeof results;
    assert.strictEqual(resultsType, "object");
  });

  it(`results should have a value of \`${FALSE}\` at their \`${SUCCESS}\` key`, () => {
    const resultsSuccessKeyValue = results.success;
    assert.strictEqual(resultsSuccessKeyValue, false);
  });

  it(`results should have an array at their \`${ERROR}s\` key`, () => {
    const resultsErrors = results.errors;
    assert.strictEqual(Array.isArray(resultsErrors), true);
  });

  it(`results' \`${ERROR}s\` key array should have a single element`, () => {
    const resultsErrorsLength = results.errors.length;
    assert.strictEqual(resultsErrorsLength, 1);
  });

  const resultsErrorsElement = results.errors[0];

  it(`results' \`${ERROR}s\` key array single element should be an object`, () => {
    const resultsErrorsElementType = typeof resultsErrorsElement;
    assert.strictEqual(resultsErrorsElementType, "object");
  });

  it(`results' \`${ERROR}s\` key array single element should have a value of \`"${ERROR}"\` at its \`${TYPE}\` key`, () => {
    const resultsErrorsElementTypeKeyValue = resultsErrorsElement.type;
    assert.strictEqual(resultsErrorsElementTypeKeyValue, ERROR);
  });

  it(`results' \`${ERROR}s\` key array single element should have the value of \`testMessage\` at its \`${MESSAGE}\` key`, () => {
    const resultsErrorsElementMessageKeyValue = resultsErrorsElement.message;
    assert.strictEqual(resultsErrorsElementMessageKeyValue, testMessage);
  });

  it(`results' \`${ERROR}s\` key array single element should have the value of \`testStatus\` at its \`${STATUS}\` key`, () => {
    const resultsErrorsElementStatusKeyValue = resultsErrorsElement.status;
    assert.strictEqual(resultsErrorsElementStatusKeyValue, testStatus);
  });

  it(`results' \`${ERROR}s\` key array single element should have no other keys than its 3 aforementioned keys`, () => {
    const resultsErrorsElementKeys = Object.keys(resultsErrorsElement);
    const resultsErrorsElementKeysLength = resultsErrorsElementKeys.length;
    assert.strictEqual(resultsErrorsElementKeysLength, 3);
  });
});

describe(MAKE_SUCCESS_FALSE_TYPE_WARNING, () => {
  // initial tests

  it(`should be a function`, () => {
    const makeSuccessFalseTypeWarningType = typeof makeSuccessFalseTypeWarning;
    assert.strictEqual(makeSuccessFalseTypeWarningType, "function");
  });

  it(`should be named \`${MAKE_SUCCESS_FALSE_TYPE_WARNING}\``, () => {
    const makeSuccessFalseTypeWarningName = makeSuccessFalseTypeWarning.name;
    assert.strictEqual(
      makeSuccessFalseTypeWarningName,
      MAKE_SUCCESS_FALSE_TYPE_WARNING,
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

  it(`results should have a value of \`${FALSE}\` at their \`${SUCCESS}\` key`, () => {
    const resultsSuccessKeyValue = results.success;
    assert.strictEqual(resultsSuccessKeyValue, false);
  });

  it(`results should have an array at their \`${ERROR}s\` key`, () => {
    const resultsErrors = results.errors;
    assert.strictEqual(Array.isArray(resultsErrors), true);
  });

  it(`results' \`${ERROR}s\` key array should have a single element`, () => {
    const resultsErrorsLength = results.errors.length;
    assert.strictEqual(resultsErrorsLength, 1);
  });

  const resultsErrorsElement = results.errors[0];

  it(`results' \`${ERROR}s\` key array single element should be an object`, () => {
    const resultsErrorsElementType = typeof resultsErrorsElement;
    assert.strictEqual(resultsErrorsElementType, "object");
  });

  it(`results' \`${ERROR}s\` key array single element should have a value of \`"${WARNING}"\` at its \`${TYPE}\` key`, () => {
    const resultsErrorsElementTypeKeyValue = resultsErrorsElement.type;
    assert.strictEqual(resultsErrorsElementTypeKeyValue, WARNING);
  });

  it(`results' \`${ERROR}s\` key array single element should have the value of \`testMessage\` at its \`${MESSAGE}\` key`, () => {
    const resultsErrorsElementMessageKeyValue = resultsErrorsElement.message;
    assert.strictEqual(resultsErrorsElementMessageKeyValue, testMessage);
  });

  it(`results' \`${ERROR}s\` key array single element should have the value of \`testStatus\` at its \`${STATUS}\` key`, () => {
    const resultsErrorsElementStatusKeyValue = resultsErrorsElement.status;
    assert.strictEqual(resultsErrorsElementStatusKeyValue, testStatus);
  });

  it(`results' \`${ERROR}s\` key array single element should have no other keys than its 3 aforementioned keys`, () => {
    const resultsErrorsElementKeys = Object.keys(resultsErrorsElement);
    const resultsErrorsElementKeysLength = resultsErrorsElementKeys.length;
    assert.strictEqual(resultsErrorsElementKeysLength, 3);
  });
});
