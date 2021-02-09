[![Build Status](https://github.com/axetroy/swagger2ts/workflows/test/badge.svg)](https://github.com/axetroy/swagger2ts/actions)

Generate typescript code from swagger JSON

### Installation

install via [Deno](https://deno.land)

```typescript
deno install \
  --allow-read \
  --allow-write \
  --no-check \
  --reload \
  -f \
  https://github.com/axetroy/swagger2ts/raw/v0.1.2/swagger2ts.ts
```

or install via [npm](https://npmjs.com)

```bash
npm install -g @axetroy/swagger2ts
```

### Usage

### Use it with cli

```bash
swagger2ts swagger.json > api.ts
```

#### Use it in Node.js api

```js
import { generate } from "@axetroy/swagger2t";

const output = generate("the swagger JSON content string", {});

console.log(output);
```

#### Use it in Deno api

```ts
import { generate } from "https://github.com/axetroy/swagger2ts/raw/v0.1.2/generate.ts";

const output = generate("the swagger JSON content string", {});

console.log(output);
```

### Option for api

```ts
export interface IOption {
  requestConfig?: string; // the config of the request. recommend `AxiosConfig`. defaults to 'unknown'
}
```

## License

The [MIT License](LICENSE)
