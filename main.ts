// Angry Judge: The Short Rant Contest — entry program.
// Writes one short funny rant (1-400 characters) to /output/entry.txt.
// Pure Node standard library only; no network, no rendering at runtime.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My printer printed a perfect test page, then jammed on the ONE page I actually needed. Forty minutes, three paper trays, and my last shred of dignity later, it blinked at me like I'd imagined the whole thing. It is not broken. It is employed, it has tenure, and it hates me personally. I now email documents to myself and read them on my phone like a peasant.";

// The gate only accepts UTF-8 text of 1 to 400 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 400 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-400 characters, got ${ENTRY.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
