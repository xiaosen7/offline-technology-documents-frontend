## 开发环境

Node>=16

## 安装依赖

`pnpm i`

如果没有 pnpm，可以执行 `npm i pnpm -g` 安装

## 构建

`pnpm build`

每次构建后请手动切换到 node 10 版本，测试 `docs/index.js` 能否正常运行

## 使用

用 node 运行 docs 目录下的 index.js 文件：`node docs/index.js`，这将为 docs 下的每个文件夹启动一个服务器

## 开发

`pnpm dev`

> 这将开启监听模式构建 `src/index.ts` 到 `docs/index.js`，每次构建完成后自动运行 `node docs/index.js` 命令
