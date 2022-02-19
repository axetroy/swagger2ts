default:
	@deno compile --unstable --target x86_64-pc-windows-msvc -A mod.ts
	@deno compile --unstable --target x86_64-unknown-linux-gnu -A mod.ts
	@deno compile --unstable --target x86_64-apple-darwin -A mod.ts
	@deno compile --unstable --target aarch64-apple-darwin -A mod.ts

bundle:
	@deno bundle ./v3/mod.ts ./dist/v3.mjs

format-ceck:
	@deno fmt --check

format:
	@deno fmt v3/*.ts v3/**/*.ts

test:
	@deno test -A

generate-test:
	@deno run -A script/generate.ts