import { describe, it } from "node:test";
import assert from "node:assert";

import { HIGHLIGHT_FIRST_LINE_OF_CODE } from "../../constants/index.js";

/**
 * @typedef {import("../../../types/index.ts").HighlightFirstLineOfCode} HighlightFirstLineOfCode
 */

/* highlightFirstLineOfCodeSuite */

export const highlightFirstLineOfCodeSuite = (
  /** @type {HighlightFirstLineOfCode} */ highlightFirstLineOfCode,
) => {
  describe(HIGHLIGHT_FIRST_LINE_OF_CODE, () => {
    // initial tests

    it(`should be a function`, () => {
      const highlightFirstLineOfCodeType = typeof highlightFirstLineOfCode;
      assert.strictEqual(highlightFirstLineOfCodeType, "function");
    });

    it.skip(`should be named \`${HIGHLIGHT_FIRST_LINE_OF_CODE}\``, () => {
      const highlightFirstLineOfCodeName = highlightFirstLineOfCode.name;
      assert.strictEqual(
        highlightFirstLineOfCodeName,
        HIGHLIGHT_FIRST_LINE_OF_CODE,
      );
    });

    // Not sure about testing that `SourceCode` here, so I'm just making sure that the utility is indeed being exported.
  });
};
