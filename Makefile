bundle:
	@deno bundle generate.ts generate.mjs

format:
	@deno fmt --check

test:
	@deno test -A