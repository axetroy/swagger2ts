中文简体 | [English](README_en-US.md)

[![Build Status](https://github.com/axetroy/swagger2ts/workflows/test/badge.svg)](https://github.com/axetroy/swagger2ts/actions)

从 swagger(v3) 的 JSON 文件生成 typescript 代码。

它会生成 typescript 的声明和`基于 fetch` 的运行时。几乎开箱即用。

它能够适用于绝大多数场景，强健你的接口调用，省去烦人的类型声明。

这里有一些[生成好的精美例子](__test__/3.0)，看看是否符合您的胃口

### 安装

通过 [Deno](https://deno.land) 安装

```typescript
deno install \
  -A \
  --no-check \
  --reload \
  -f \
  https://github.com/axetroy/swagger2ts/raw/v0.2.24/swagger2ts.ts
```

或者通过 [npm](https://npmjs.com) 安装

```bash
npm install -g @axetroy/swagger2ts
```

### 使用

### 使用命令行工具

```bash
swagger2ts swagger.json > api.ts
swagger2ts https://example.com/swagger.json > api.ts
```

#### 通过 nodejs 函数调用

```js
import { generate } from "@axetroy/swagger2ts";

const output = await generate("/path/to/swagger.json");
// const output = await generate("https://example.com/swagger.json");

console.log(output);
```

#### 通过 Deno 函数调用

```ts
import { generate } from "https://github.com/axetroy/swagger2ts/raw/v0.2.24/generate.ts";

const output = await generate("/path/to/swagger.json");
// const output = await generate("https://example.com/swagger.json");

console.log(output);
```

## 开源许可

The [MIT License](LICENSE)
