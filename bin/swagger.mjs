#!/usr/bin/env node --no-deprecation --abort-on-uncaught-exception --no-warnings

import { readFileSync } from "fs";
import { generate } from "../index.mjs";

const file = process.argv[2];

const content = readFileSync(file, { encoding: "utf-8" });

const output = generate(content);

console.log(output);
