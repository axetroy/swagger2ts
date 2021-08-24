#!/usr/bin/env node --no-deprecation --abort-on-uncaught-exception --no-warnings

import { generate } from "../index.mjs";

process.stdout.write(await generate(process.argv[2]))
