import { describe, it } from "node:test";
import assert from "node:assert";

import { TREAT_VS_CODE_ERRORS_NAME } from "../../../comment-variables/items.js";

/**
 * @typedef {import("../../../types/index.ts").TreatVSCodeErrors} TreatVSCodeErrors
 */

/* treatVSCodeErrorsSuite */

export const treatVSCodeErrorsSuite = (
  /** @type {TreatVSCodeErrors} */ treatVSCodeErrors,
) => {
  describe(TREAT_VS_CODE_ERRORS_NAME, () => {
    // initial tests

    it(`should be a function`, () => {
      const treatVSCodeErrorsType = typeof treatVSCodeErrors;
      assert.strictEqual(treatVSCodeErrorsType, "function");
    });

    it.skip(`should be named \`${TREAT_VS_CODE_ERRORS_NAME}\``, () => {
      const treatVSCodeErrorsName = treatVSCodeErrors.name;
      assert.strictEqual(treatVSCodeErrorsName, TREAT_VS_CODE_ERRORS_NAME);
    });
  });
};
