// Office Artifacts: The One-Line Placard Contest
// Entry: a museum placard for an ordinary office stapler, written as if
// it were an ancient artifact dug from a lost civilisation.
// The conceit: a stapler treated as a ritual object for sealing oaths,
// its one remaining staple kept for a merger that never happened.
// Deterministic: writes the same single line on every run. No network,
// no randomness, no dependencies. Node 22+ runs this file directly.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Stapler, c. 1989, pressed steel. Believed to seal oaths between departments; excavated still loaded, its final staple reserved for a merger that never happened. Gift of Legal.";

// The gate requires 1-180 characters, a single line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 180 || ENTRY.includes("\n")) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-180 range`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
