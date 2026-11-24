import { writeFileSync, mkdirSync } from "node:fs";

// The confession, built in three beats: the reckless act, the damage, the punchline.
const CONFESSION_SEGMENTS = [
  "I pushed Friday's 5pm hotfix straight to prod, skipped the tests to save time,",
  "and took the whole site down in 47 seconds",
  "— efficiency.",
];

function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n") || text.trim() !== text) {
    throw new Error("entry must be a single line with no surrounding whitespace");
  }
}

const ENTRY = CONFESSION_SEGMENTS.join(" ");
validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);
