import { describe, it } from "node:test";
import assert from "node:assert";

import { ERROR_NOT_STANDARDIZED_MESSAGE_IDENTIFIER } from "../../../comment-variables/items.js";

/**
 * @typedef {import("../../../types/index.ts").ErrorNotStandardizedMessage} ErrorNotStandardizedMessage
 */

/* errorNotStandardizedMessageSuite */

export const errorNotStandardizedMessageSuite = (
  /** @type {ErrorNotStandardizedMessage} */ errorNotStandardizedMessage,
) => {
  describe(ERROR_NOT_STANDARDIZED_MESSAGE_IDENTIFIER, () => {
    // initial tests

    it(`should be a string`, () => {
      const errorNotStandardizedMessageType =
        typeof errorNotStandardizedMessage;
      assert.strictEqual(errorNotStandardizedMessageType, "string");
    });
  });
};
