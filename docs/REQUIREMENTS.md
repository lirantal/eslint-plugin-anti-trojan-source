# Project Requirements

This document outlines the requirements for this project.

## Functional Requirements

- The plugin MUST detect bidirectional Unicode characters in code and comments.
- The plugin MUST report an error when a potential Trojan Source attack is detected.
- The plugin MUST provide a recommended configuration that enables the `no-bidi` rule.
- The plugin MUST be compatible with the latest versions of ESLint.

## Non-Functional Requirements

- The plugin MUST be well-documented.
- The plugin MUST have a comprehensive test suite.
- The plugin MUST be easy to install and use.
- The plugin MUST have a low-performance overhead.

## Development Environment

To contribute to this project, you will need:

- Node.js
- npm

To install the dependencies, run:

```bash
npm install
```

To run the tests, run:

```bash
npm test
```
