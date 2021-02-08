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
  https://github.com/axetroy/swagger2ts/raw/v0.1.0/vd.ts
```

or install via [npm](https://npmjs.com)

```bash
npm install @axetroy/swagger2ts
```

### Usage

```bash
swagger2ts swagger.json > api.ts
```

## License

The [MIT License](LICENSE)
