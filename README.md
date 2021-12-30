<p align="center"><h1 align="center">
  eslint-plugin-anti-trojan-source
</h1>

<p align="center">
  ESLint plugin to detect and prevent Trojan Source attacks from entering your codebase
</p>

<p align="center">
  <img src="https://github.com/lirantal/eslint-plugin-anti-trojan-source/raw/main/.github/eslint-plugin-anti-trojan-source-logo.png" height="220">
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/eslint-plugin-anti-trojan-source"><img src="https://badgen.net/npm/v/eslint-plugin-anti-trojan-source" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/eslint-plugin-anti-trojan-source"><img src="https://badgen.net/npm/license/eslint-plugin-anti-trojan-source" alt="license"/></a>
  <a href="https://www.npmjs.org/package/eslint-plugin-anti-trojan-source"><img src="https://badgen.net/npm/dt/eslint-plugin-anti-trojan-source" alt="downloads"/></a>
  <a href="https://github.com/lirantal/eslint-plugin-anti-trojan-source/actions?workflow=CI"><img src="https://github.com/lirantal/eslint-plugin-anti-trojan-source/workflows/CI/badge.svg" alt="build"/></a>
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

## Usage

Once you've installed this plugin, add it to your eslint configuration as follows.

### Recommended

This plugin exports a `recommended` configuration.
To enable this configuration, extend it in the configuration for your project.

```json
{
  "extends": ["eslint:recommended", "plugin:anti-trojan-source/recommended"]
}
```

### Manual

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

## Example output

The following is an example output when the plugin finds a Trojan Source attack in your codebase:

```bash
/Users/lirantal/projects/repos/@gigsboat/cli/index.js
  1:1  error  Detected potential trojan source attack with unicode bidi introduced in this comment: '‮ } ⁦if (isAdmin)⁩ ⁦ begin admins only '  anti-trojan-source/no-bidi
  1:1  error  Detected potential trojan source attack with unicode bidi introduced in this comment: ' end admin only ‮ { ⁦'                    anti-trojan-source/no-bidi

/Users/lirantal/projects/repos/@gigsboat/cli/lib/helper.js
  2:1  error  Detected potential trojan source attack with unicode bidi introduced in this code: '"user‮ ⁦// Check if admin⁩ ⁦"'  anti-trojan-source/no-bidi
```

# Author

**eslint-plugin-anti-trojan-source** © [Liran Tal](https://github.com/lirantal), Released under the [Apache-2.0](./LICENSE) License.
