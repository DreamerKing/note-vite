# Vite构建React

## 使用vite-app --template react 创建React项目的坑

- 使用`pnpm create vite`而不是`pnpm create vite-app`
- 升级vite到v5.x
- 使用`@vitejs/plugin-react`替换vite-plugin-react
- vite.config.js中修改 esbuild配置项: `{target: "esnext",jsxInject:`import React from 'react'`}`
- 在package.json中添加`"resolutions": {"rollup": "npm:@rollup/wasm-node"}`
- 导入样式文件`mport normalize.css?raw`
