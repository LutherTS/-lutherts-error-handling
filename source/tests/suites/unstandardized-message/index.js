import { describe, it } from "node:test";
import assert from "node:assert";

import { ERROR_NOT_STANDARDIZED_MESSAGE } from "../../constants/index.js";

/**
 * @typedef {import("../../../types/index.ts").ErrorNotStandardized} ErrorNotStandardized
 */

export const errorNotStandardizedSuite = (
  /** @type {ErrorNotStandardized} */ errorNotStandardized,
) => {
  describe(ERROR_NOT_STANDARDIZED_MESSAGE, () => {
    // initial tests

    it(`should be a string`, () => {
      const errorNotStandardizedType = typeof errorNotStandardized;
      assert.strictEqual(errorNotStandardizedType, "string");
    });
  });
};
