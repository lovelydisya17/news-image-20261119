// news-image-20261119 entry (Node 22, standard library only).
// The image is the entry.png beside this file: a one-day newspaper front
// page summing up Thursday 19 November 2026. The program copies it,
// byte for byte, to /output/entry.png, so both grader runs produce
// identical bytes with no network access. The copy is deterministic:
// same source bytes in, same bytes out, every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
