default:
	@deno compile --unstable --lite --target x86_64-pc-windows-msvc -A mod.ts
	@deno compile --unstable --lite --target x86_64-unknown-linux-gnu -A mod.ts
	@deno compile --unstable --lite --target x86_64-apple-darwin -A mod.ts
	@deno compile --unstable --lite --target aarch64-apple-darwin -A mod.ts

bundle:
	@deno bundle ./v3/index.ts ./dist/v3.mjs

format-ceck:
	@deno fmt --check

format:
	@deno fmt v3/*.ts v3/**/*.ts

test:
	@deno test -A

generate-test:
	@deno run -A script/generate.ts