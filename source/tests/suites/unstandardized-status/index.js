import { describe, it } from "node:test";
import assert from "node:assert";

import { ERROR_NOT_STANDARDIZED_STATUS } from "../../constants/index.js";

/**
 * @typedef {import("../../../typedefs/index.js").ERROR_NOT_STANDARDIZED_TYPE} ERROR_NOT_STANDARDIZED_TYPE
 */

export const ERROR_NOT_STANDARDIZEDSuite = (
  /** @type {ERROR_NOT_STANDARDIZED_TYPE} */ ERROR_NOT_STANDARDIZED,
) => {
  describe(ERROR_NOT_STANDARDIZED_STATUS, () => {
    // initial tests

    it(`should be a string`, () => {
      const ERROR_NOT_STANDARDIZEDType = typeof ERROR_NOT_STANDARDIZED;
      assert.strictEqual(ERROR_NOT_STANDARDIZEDType, "string");
    });
  });
};
