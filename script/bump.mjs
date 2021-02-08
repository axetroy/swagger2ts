import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ref = process.env.GITHUB_REF;

const version = ref.replace(/^refs\/tags\/v/, "");

const pkgPath = path.join(__dirname, "..", "package.json");

const pkg = JSON.parse(fs.readFileSync(pkgPath, { encoding: "utf-8" }));

pkg.version = version;

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
