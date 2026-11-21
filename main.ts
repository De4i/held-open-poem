// Held Open — a tiny deterministic poem writer.
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
const POEM = `Held Open

May I leave it open?
She nods from the dark.
A wedge of hall light
lies on her floor,
and I go.

Some nights she calls me back -
not yet -
and I open it wider.

Tonight she does not call.
The wedge lies still,
going nowhere.

Neither am I.
`;

// Resolve the output directory: the environment override wins when
// present, otherwise default to /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Make sure the destination exists before writing into it.
mkdirSync(outputDir, { recursive: true });

// Write the poem exactly as held above to entry.txt.
writeFileSync(join(outputDir, "entry.txt"), POEM, "utf8");
