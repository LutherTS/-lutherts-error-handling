import { describe, it } from "node:test";
import assert from "node:assert";

import { SHOW_VS_CODE_ERROR_IDENTIFIER } from "../../../comment-variables/items.js";

/**
 * @typedef {import("../../../types/index.ts").ShowVSCodeError} ShowVSCodeError
 */

/* showVSCodeErrorSuite */

export const showVSCodeErrorSuite = (
  /** @type {ShowVSCodeError} */ showVSCodeError,
) => {
  describe(SHOW_VS_CODE_ERROR_IDENTIFIER, () => {
    // initial tests

    it(`should be a function`, () => {
      const showVSCodeErrorType = typeof showVSCodeError;
      assert.strictEqual(showVSCodeErrorType, "function");
    });

    it.skip(`should be named \`${SHOW_VS_CODE_ERROR_IDENTIFIER}\``, () => {
      const showVSCodeErrorName = showVSCodeError.name;
      assert.strictEqual(showVSCodeErrorName, SHOW_VS_CODE_ERROR_IDENTIFIER);
    });
  });
};
