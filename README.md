[![Build Status](https://github.com/axetroy/swagger2ts/workflows/test/badge.svg)](https://github.com/axetroy/swagger2ts/actions)

Generate typescript code from swagger JSON

### Installation

install via [Deno](https://deno.land)

```typescript
deno install \
  --allow-read \
  --allow-net \
  --no-check \
  --reload \
  -f \
  https://github.com/axetroy/swagger2ts/raw/v0.1.4/swagger2ts.ts
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
import { generate } from "@axetroy/swagger2t";

const output = generate("/path/to/swagger.json");
// const output = generate("https://example.com/swagger.json");

console.log(output);
```

#### Use it in Deno api

```ts
import { generate } from "https://github.com/axetroy/swagger2ts/raw/v0.1.4/generate.ts";

const output = generate("/path/to/swagger.json");
// const output = generate("https://example.com/swagger.json");

console.log(output);
```

## License

The [MIT License](LICENSE)
