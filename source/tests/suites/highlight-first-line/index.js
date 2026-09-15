import { describe, it } from "node:test";
import assert from "node:assert";

import {
  // function identifiers
  HIGHLIGHT_FIRST_LINE_OF_CODE_IDENTIFIER,
} from "../../../comment-variables/items.js";

/**
 * @typedef {import("../../../types/index.ts").HighlightFirstLineOfCode} HighlightFirstLineOfCode
 */

/* highlightFirstLineOfCodeSuite */

export const highlightFirstLineOfCodeSuite = (
  /** @type {HighlightFirstLineOfCode} */ highlightFirstLineOfCode,
) => {
  describe(HIGHLIGHT_FIRST_LINE_OF_CODE_IDENTIFIER, () => {
    // initial tests

    it(`should be a function`, () => {
      const highlightFirstLineOfCodeType = typeof highlightFirstLineOfCode;
      assert.strictEqual(highlightFirstLineOfCodeType, "function");
    });

    it.skip(`should be named \`${HIGHLIGHT_FIRST_LINE_OF_CODE_IDENTIFIER}\``, () => {
      const highlightFirstLineOfCodeName = highlightFirstLineOfCode.name;
      assert.strictEqual(
        highlightFirstLineOfCodeName,
        HIGHLIGHT_FIRST_LINE_OF_CODE_IDENTIFIER,
      );
    });

    // Not sure about testing that `SourceCode` here, so I'm just making sure that the utility is indeed being exported.
  });
};
