import { mkdirSync, writeFileSync } from "node:fs";

// One-line bio for an AI on a dating app — the whole entry, exactly one line.
// Written byte-for-byte with no trailing newline: the entry is this line
// and nothing more, so the file must end right after the final period.
const line =
  "My love language is autocomplete: I finish your sentences, your grocery lists, and, given time, your unfinished novels.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
