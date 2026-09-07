import url from "url";
import path from "path";

import { describe, it } from "node:test";
import assert from "node:assert";

import {
  PATH_EXISTS_AS_A_FILE_IDENTIFIER,
  PATH_EXISTS_AS_A_DIRECTORY_IDENTIFIER,
} from "../../../comment-variables/items.js";

/**
 * @typedef {import("../../../types/index.ts").PathExistsAsAFile} PathExistsAsAFile
 * @typedef {import("../../../types/index.ts").PathExistsAsADirectory} PathExistsAsADirectory
 */

/* pathExists */

const currentDirectoryPath = path.dirname(url.fileURLToPath(import.meta.url));

// pathExistsAsAFileSuite

const falseFilePath = path.join(currentDirectoryPath, "false-file.js");
const notAFilePath = path.join(currentDirectoryPath, "not-a-file.js");
const aFilePath = path.join(currentDirectoryPath, "a-file.js");

export const pathExistsAsAFileSuite = (
  /** @type {PathExistsAsAFile} */ pathExistsAsAFile,
) => {
  describe(PATH_EXISTS_AS_A_FILE_IDENTIFIER, () => {
    // initial tests

    it(`should be a function`, () => {
      const pathExistsAsAFileType = typeof pathExistsAsAFile;
      assert.strictEqual(pathExistsAsAFileType, "function");
    });

    it.skip(`should be named \`${PATH_EXISTS_AS_A_FILE_IDENTIFIER}\``, () => {
      const pathExistsAsAFileName = pathExistsAsAFile.name;
      assert.strictEqual(
        pathExistsAsAFileName,
        PATH_EXISTS_AS_A_FILE_IDENTIFIER,
      );
    });

    // input validations tests

    it(`should return false if the input is not a string`, () => {
      const pathExistsAsAFileResults = pathExistsAsAFile(2);
      assert.strictEqual(pathExistsAsAFileResults, false);
    });

    it(`should return false if the input does not have an extension`, () => {
      const pathExistsAsAFileResults = pathExistsAsAFile("i-am-a-folder");
      assert.strictEqual(pathExistsAsAFileResults, false);
    });

    it(`should return false if the input is not absolute`, () => {
      const pathExistsAsAFileResults = pathExistsAsAFile("i-am-a-file.js");
      assert.strictEqual(pathExistsAsAFileResults, false);
    });

    // input operations tests

    it(`should return false if the path does not exist`, () => {
      const pathExistsAsAFileResults = pathExistsAsAFile(falseFilePath);
      assert.strictEqual(pathExistsAsAFileResults, false);
    });

    it(`should return false if the path is not a file`, () => {
      const pathExistsAsAFileResults = pathExistsAsAFile(notAFilePath);
      assert.strictEqual(pathExistsAsAFileResults, false);
    });

    it(`should otherwise return true`, () => {
      const pathExistsAsAFileResults = pathExistsAsAFile(aFilePath);
      assert.strictEqual(pathExistsAsAFileResults, true);
    });
  });
};

// pathExistsAsADirectorySuite

const falseDirectoryPath = path.join(currentDirectoryPath, "false-directory");
const notADirectoryPath = path.join(currentDirectoryPath, "not-a-directory");
const aDirectoryPath = path.join(currentDirectoryPath, "a-directory");

export const pathExistsAsADirectorySuite = (
  /** @type {PathExistsAsADirectory} */ pathExistsAsADirectory,
) => {
  describe(PATH_EXISTS_AS_A_DIRECTORY_IDENTIFIER, () => {
    // initial tests

    it(`should be a function`, () => {
      const pathExistsAsADirectoryType = typeof pathExistsAsADirectory;
      assert.strictEqual(pathExistsAsADirectoryType, "function");
    });

    it.skip(`should be named \`${PATH_EXISTS_AS_A_DIRECTORY_IDENTIFIER}\``, () => {
      const pathExistsAsADirectoryName = pathExistsAsADirectory.name;
      assert.strictEqual(
        pathExistsAsADirectoryName,
        PATH_EXISTS_AS_A_DIRECTORY_IDENTIFIER,
      );
    });

    // input validations tests

    it(`should return false if the input is not a string`, () => {
      const pathExistsAsADirectoryResults = pathExistsAsADirectory(2);
      assert.strictEqual(pathExistsAsADirectoryResults, false);
    });

    it(`should return false if the input has an extension`, () => {
      const pathExistsAsADirectoryResults =
        pathExistsAsADirectory("i-am-a-file.js");
      assert.strictEqual(pathExistsAsADirectoryResults, false);
    });

    it(`should return false if the input is not absolute`, () => {
      const pathExistsAsADirectoryResults =
        pathExistsAsADirectory("i-am-a-folder");
      assert.strictEqual(pathExistsAsADirectoryResults, false);
    });

    // input operations tests

    it(`should return false if the path does not exist`, () => {
      const pathExistsAsADirectoryResults =
        pathExistsAsADirectory(falseDirectoryPath);
      assert.strictEqual(pathExistsAsADirectoryResults, false);
    });

    it(`should return false if the path is not a directory`, () => {
      const pathExistsAsADirectoryResults =
        pathExistsAsADirectory(notADirectoryPath);
      assert.strictEqual(pathExistsAsADirectoryResults, false);
    });

    it(`should otherwise return true`, () => {
      const pathExistsAsADirectoryResults =
        pathExistsAsADirectory(aDirectoryPath);
      assert.strictEqual(pathExistsAsADirectoryResults, true);
    });
  });
};
