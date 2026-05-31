import { describe, it } from "node:test";
import assert from "node:assert";

import { SHOW_VS_CODE_ERROR } from "../../constants/index.js";

/**
 * @typedef {import("../../../typedefs/index.js").ShowVSCodeError} ShowVSCodeError
 */

export const showVSCodeErrorSuite = (/** @type {ShowVSCodeError} */ showVSCodeError) => {
  describe(SHOW_VS_CODE_ERROR, () => {
    // initial tests

    it(`should be a function`, () => {
      const showVSCodeErrorType = typeof showVSCodeError;
      assert.strictEqual(showVSCodeErrorType, "function");
    });

    it.skip(`should be named \`${SHOW_VS_CODE_ERROR}\``, () => {
      const showVSCodeErrorName = showVSCodeError.name;
      assert.strictEqual(showVSCodeErrorName, SHOW_VS_CODE_ERROR);
    });
  });
};
