// The Ramp — a tiny deterministic poem writer.
//
// The scene: a ramp built for a man who never asked for one.
// Giving without being asked is its own kind of taking, so he
// takes his power back the only way left to him — by judging
// the gift and asking for it gentler. The program treats the
// text the way the builder treated the work: nothing about it
// is improvised, and it is delivered exactly as held, every run.
//
// The poem is held below as a single constant string. Nothing is
// read from the clock, the network, or any file to decide it, so
// every run writes exactly the same bytes.
//
// The only choice the program makes is where the poem goes:
// $MAKEFUN_OUTPUT_DIR when that variable is set, otherwise /output,
// the conventional output location for a make.fun entry. The
// destination directory is created when it does not exist yet, and
// the constant is then written verbatim to entry.txt inside it
// using only the Node standard library.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The poem, held as one constant so the output is deterministic.
const POEM = `The Ramp

He never asked.
I built it, Saturdays,
planks from the yard,
saw put away before he woke.

He stood at the top a long while.

So it is this, he said,
and came down,
and went up,
put his hand on the rail,
and asked at last:
make it gentler.
I like the hill.
`;

// Resolve the output directory: the environment override wins when
// present, otherwise default to /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Make sure the destination exists before writing into it.
mkdirSync(outputDir, { recursive: true });

// Write the poem exactly as held above to entry.txt.
writeFileSync(join(outputDir, "entry.txt"), POEM, "utf8");
