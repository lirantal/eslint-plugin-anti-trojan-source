# Project Overview

This project is an ESLint plugin designed to detect and prevent Trojan Source attacks. It is based on the `anti-trojan-source` library.

## Goal

The primary goal of this project is to enhance code security by identifying and flagging bidirectional Unicode characters, which can be used to create vulnerabilities that are not easily visible to human reviewers.

## How it Works

The plugin integrates with ESLint and provides a rule called `no-bidi`. This rule is triggered when a file is being linted. It inspects both the code and the comments for the presence of bidirectional Unicode characters.

When a potential Trojan Source attack is detected, the plugin reports an error, which can be configured to fail the linting process. This prevents malicious code from being committed to the codebase.

## Project Structure

The project is structured as a typical ESLint plugin:

- `src/index.ts`: The main entry point of the plugin. It exports the `no-bidi` rule and a recommended configuration.
- `src/rules/no-bidi.ts`: The implementation of the `no-bidi` rule. It uses the `anti-trojan-source` library to detect bidirectional Unicode characters.
- `test/no-bidi.test.js`: The tests for the `no-bidi` rule.

## How to Contribute

To contribute to this project, you can:

- Report bugs and suggest new features by creating an issue.
- Submit a pull request with your changes.

When submitting a pull request, please make sure to:

- Follow the existing code style.
- Write tests for your changes.
- Update the documentation if necessary.
