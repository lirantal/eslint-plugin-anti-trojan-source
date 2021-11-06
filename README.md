<p align="center"><h1 align="center">
  eslint-plugin-anti-trojan-source
</h1>

<p align="center">
  Detect trojan source attacks that employ unicode bidi attacks to inject malicious code
</p>

<p align="center">
  <img src="https://github.com/lirantal/eslint-plugin-anti-trojan-source/raw/main/.github/eslint-plugin-anti-trojan-source-logo.png" height="220">
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/eslint-plugin-anti-trojan-source"><img src="https://badgen.net/npm/v/eslint-plugin-anti-trojan-source" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/eslint-plugin-anti-trojan-source"><img src="https://badgen.net/npm/license/eslint-plugin-anti-trojan-source" alt="license"/></a>
  <a href="https://www.npmjs.org/package/eslint-plugin-anti-trojan-source"><img src="https://badgen.net/npm/dt/eslint-plugin-anti-trojan-source" alt="downloads"/></a>
  <a href="https://github.com/lirantal/eslint-plugin-anti-trojan-source/actions?workflow=CI"><img src="https://github.com/lirantal/eslint-plugin-anti-trojan-source/workflows/CI/badge.svg" alt="build"/></a>
  <a href="https://codecov.io/gh/lirantal/eslint-plugin-anti-trojan-source"><img src="https://badgen.net/codecov/c/github/lirantal/eslint-plugin-anti-trojan-source" alt="codecov"/></a>
  <a href="https://snyk.io/test/github/lirantal/eslint-plugin-anti-trojan-source"><img src="https://snyk.io/test/github/lirantal/eslint-plugin-anti-trojan-source/badge.svg" alt="Known Vulnerabilities"/></a>
  <a href="./SECURITY.md"><img src="https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg" alt="Responsible Disclosure Policy" /></a>
</p>

# About

ESLint plugin to detect and stop Trojan Source attacks from entering your codebase.

If you're unaware of what Trojan Source attacks are, or how unicode characters injected into a codebase could be used in malicious ways, refer to the README of the [anti-trojan-source](https://github.com/lirantal/anti-trojan-source/) source code repository.

This ESLint plugin is based on the library and command-line tool [anti-trojan-source](https://github.com/lirantal/anti-trojan-source).

# Install

```bash
npm install --save-dev eslint-plugin-anti-trojan-source
```

## Usage example

Once you've installed this plugin, add it to your eslint configuration as follows.
First, you need to define it as a plugin:

Note: ESLint plugins can have their _eslint-plugin_ prefix omitted when they are specified.

```js
{
  "plugins": ["anti-trojan-source"]
}
```

Then, add an ESLint rule that halts if it finds a Trojan Source attack:

```js
"rules": {
    "anti-trojan-source/no-bidi": "error"
}
```

Following is a complete example of configuration if you are defining ESLint configuration in your `package.json` file:

```js
"eslintConfig": {
    "plugins": [
        "anti-trojan-source"
    ],
    "rules": {
        "anti-trojan-source/no-bidi": "error"
    }
}
```

# Author

**eslint-plugin-anti-trojan-source** © [Liran Tal](https://github.com/lirantal), Released under the [Apache-2.0](./LICENSE) License.
