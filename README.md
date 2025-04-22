# Greet NPM

<a href="https://github.com/seriquynh/greet-npm/actions"><img src="https://github.com/seriquynh/greet-npm/workflows/test/badge.svg" alt="CI Status"></a>
<a href="https://pypi.org/project/greet-npm-commonjs"><img src="https://img.shields.io/npm/dm/greet-npm-commonjs" alt="Monthly Downloads"></a>
<a href="https://pypi.org/project/greet-npm-commonjs"><img src="https://img.shields.io/npm/v/greet-npm-commonjs" alt="Latest Stable Version"></a>
<a href="https://pypi.org/project/greet-npm-commonjs"><img src="https://img.shields.io/npm/l/greet-npm-commonjs" alt="The MIT License"></a>

## Introduction

This is a Node (CommonJS) package template using NPM.

## Requirements

- Node `20+`

## Development

Install NPM packages.

```bash
npm install
```

Fix code style using `ESLint`.

```bash
npm run fix-code-style
```

Run tests using `Mocha`.

```bash
npm run test
```

## Build and publish

Publish to `npm.js`.

```bash
npm set "//registry.npmjs.org/:_authToken=npm_api_token"

npm publish
```

## License

Greet NPM is licensed under the [MIT license](LICENSE.md).
