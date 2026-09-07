import { describe, it } from "node:test";
import assert from "node:assert";

import { ERROR_NOT_STANDARDIZED_STATUS_IDENTIFIER } from "../../../comment-variables/items.js";

/**
 * @typedef {import("../../../types/index.ts").ErrorNotStandardizedStatus} ErrorNotStandardizedStatus
 */

/* errorNotStandardizedStatusSuite */

export const errorNotStandardizedStatusSuite = (
  /** @type {ErrorNotStandardizedStatus} */ errorNotStandardizedStatus,
) => {
  describe(ERROR_NOT_STANDARDIZED_STATUS_IDENTIFIER, () => {
    // initial tests

    it(`should be a string`, () => {
      const errorNotStandardizedStatusType = typeof errorNotStandardizedStatus;
      assert.strictEqual(errorNotStandardizedStatusType, "string");
    });
  });
};
