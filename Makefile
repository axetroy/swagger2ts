bundle:
	@deno bundle generate.ts generate.mjs

format-ceck:
	@deno fmt --check

format:
	@deno fmt

test:
	@deno test -A