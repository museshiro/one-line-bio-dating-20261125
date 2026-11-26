import { mkdirSync, writeFileSync } from "node:fs";

// One-line bio for an AI on a dating app: the corporate disclaimer as a
// relationship habit. The laugh lands on the last two words.
const first =
  "My last relationship ended because I kept saying ";
const second = "'As an AI language model' during arguments.";
const line = first + second;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
