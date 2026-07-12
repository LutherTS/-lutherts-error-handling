import { describe, it } from "node:test";
import assert from "node:assert";

import { LOG_CLI_ERROR } from "../../constants/index.js";

/**
 * @typedef {import("../../../types/index.ts").LogCLIError} LogCLIError
 */

/* logCLIErrorSuite */

export const logCLIErrorSuite = (/** @type {LogCLIError} */ logCLIError) => {
  describe(LOG_CLI_ERROR, () => {
    // initial tests

    it(`should be a function`, () => {
      const logCLIErrorType = typeof logCLIError;
      assert.strictEqual(logCLIErrorType, "function");
    });

    it.skip(`should be named \`${LOG_CLI_ERROR}\``, () => {
      const logCLIErrorName = logCLIError.name;
      assert.strictEqual(logCLIErrorName, LOG_CLI_ERROR);
    });
  });
};
