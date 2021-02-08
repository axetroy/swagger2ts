default:
	@deno compile --unstable --lite --target x86_64-pc-windows-msvc -A mod.ts
	@deno compile --unstable --lite --target x86_64-unknown-linux-gnu -A mod.ts
	@deno compile --unstable --lite --target x86_64-apple-darwin -A mod.ts
	@deno compile --unstable --lite --target aarch64-apple-darwin -A mod.ts

bundle:
	@deno bundle generate.ts generate.mjs

format-ceck:
	@deno fmt --check

format:
	@deno fmt

test:
	@deno test -A