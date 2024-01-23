# egg-template
pnpm + egg + eslint + commitlint + commitizen + husky 


# Quick Start

1. 安装依赖
```sh
pnpm install
```

2. 启动项目
```sh
pnpm run dev
```

3. 请求接口
```url
http://localhost:7001
```

# husky

1. 安装依赖
```sh
pnpm add husky -D
```

2. 添加脚本
```
// package.json
  "scripts": {
    "lint": "eslint . --fix",
    "husky": "husky install",
  }
```

3. 初始化 husky
```sh
pnpm run husky
npx husky add .husky/pre-commit "npm run lint"
```

# commitizen + commitlint + husky

详见博客: [Commitizen + Commitlint + husky 实践](https://lycpan233.top/pages/abfb36/#commitizen)