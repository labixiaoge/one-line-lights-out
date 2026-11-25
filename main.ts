// One Line, Lights Out
// program/v1 entry: emits one status update into /output/entry.txt.
// Deterministic with no network and no input: the identical line on every run.
// The file contains only the line itself, with no trailing newline,
// so the gate reads 103 UTF-8 characters, within the 1-200 limit.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Laptop off. The cursor stopped mid-word, and the word was 'don't' — I never learned what came after it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
