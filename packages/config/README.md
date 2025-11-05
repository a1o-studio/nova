# @nova/config

统一的 ESLint 和 TypeScript 配置包，为 Nova monorepo 提供共享配置。

## ESLint 配置

### 使用方法

#### Next.js 应用

```javascript
// eslint.config.js
import { nextJsConfig } from '@nova/config/eslint/next-js'

export default nextJsConfig
```

#### React 库

```javascript
// eslint.config.mjs
import { config } from '@nova/config/eslint/react-internal'

export default config
```

#### 基础配置

```javascript
// eslint.config.js
import { config } from '@nova/config/eslint/base'

export default config
```

## TypeScript 配置

### 使用方法

#### Next.js 应用

```json
// tsconfig.json
{
  "extends": "@nova/config/typescript/nextjs"
}
```

#### React 库

```json
// tsconfig.json
{
  "extends": "@nova/config/typescript/react-library"
}
```

#### 基础配置

```json
// tsconfig.json
{
  "extends": "@nova/config/typescript/base"
}
```

## 可用配置

### ESLint

- `@nova/config/eslint/base` - 基础 ESLint 配置（包含 TypeScript 和 Turbo 规则）
- `@nova/config/eslint/next-js` - Next.js 应用配置
- `@nova/config/eslint/react-internal` - React 库配置

### TypeScript

- `@nova/config/typescript/base` - 基础 TypeScript 配置
- `@nova/config/typescript/nextjs` - Next.js TypeScript 配置
- `@nova/config/typescript/react-library` - React 库 TypeScript 配置

