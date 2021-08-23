[中文简体](README.md) | English

[![Build Status](https://github.com/axetroy/swagger2ts/workflows/test/badge.svg)](https://github.com/axetroy/swagger2ts/actions)

Generate typescript code from swagger(v3) JSON.

It will generate a typescript definition and fetch-based api client. all most out of box.

It can be applied to most scenarios, strengthen your interface calls, and eliminate annoying type declarations.

Here are some [generated exquisite examples](__test__/3.0) to see if it meets your taste.

### Installation

install via [Deno](https://deno.land)

```typescript
deno install \
  -A \
  --no-check \
  --reload \
  -f \
  https://github.com/axetroy/swagger2ts/raw/v0.2.8/swagger2ts.ts
```

or install via [npm](https://npmjs.com)

```bash
npm install -g @axetroy/swagger2ts
```

### Usage

### Use it with cli

```bash
swagger2ts swagger.json > api.ts
swagger2ts https://example.com/swagger.json > api.ts
```

#### Use it in Node.js api

```js
import { generate } from "@axetroy/swagger2ts";

const output = await generate("/path/to/swagger.json");
// const output = await generate("https://example.com/swagger.json");

console.log(output);
```

#### Use it in Deno api

```ts
import { generate } from "https://github.com/axetroy/swagger2ts/raw/v0.2.4/generate.ts";

const output = await generate("/path/to/swagger.json");
// const output = await generate("https://example.com/swagger.json");

console.log(output);
```

## License

The [MIT License](LICENSE)
