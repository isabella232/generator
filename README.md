# Generator

Lob's [Yeoman](http://yeoman.io/) generator for creating Node modules.

## Installation

```
$ npm install --global generator-lob
```

## Usage

To generate a complete repository:
```
$ yo lob
```

To generate a portion of a repository, you may use a [sub-generator](#sub-generators).

## Sub-Generators

**Continuous Integration** [`yo lob:ci`](#continuous-integration)

**Lint** [`yo lob:lint`](#lint)

**Node Version** [`yo lob:node-version`](#node-version)

**Release** [`yo lob:release`](#release)

**Test** [`yo lob:test`](#test)

### Continuous Integration

```
$ yo lob:ci
```

- Prompts for a CI platform (CircleCI or Travis) and Node version and composes a `.yml` file accordingly

### Lint

```
$ yo lob:lint
```

- Installs [`eslint`](https://www.npmjs.com/package/eslint) and [`eslint-config-lob`](https://www.npmjs.com/package/eslint-config-lob)
- Creates an [`.eslintrc`](generators/eslint/templates/eslintrc) file that [configures the linter](http://eslint.org/docs/user-guide/configuring) to use `eslint-config-lob`'s default rules
- Creates an [`.eslintignore`](generators/eslint/templates/eslintignore) file that excludes the `coverage/` folder from linting
- Adds a `lint` npm script to lint all javascript files in the project

### Node Version

```
$ yo lob:node-version
```

- Prompts for a node version and uses it in a `.node-version` file

### Release

```
$ yo lob:release
```

- Installs [generate-changelog](https://github.com/lob/generate-changelog)
- Adds npm scripts for `release:patch`, `release:minor`, and `release:major`

### Test

```
$ yo lob:test
```

- Installs [chai](https://www.npmjs.com/package/chai), [istanbul](https://www.npmjs.com/package/istanbul), and [mocha](https://www.npmjs.com/package/mocha)
- Creates [`test/setup.js` file](generators/test/templates/setup.js) that defines an `expect` global
- Adds npm scripts for `enforce`, `test`, and `test-no-cover`

## Extension

To learn more about building generators, read the [Yeoman Guide to Authoring Generators](http://yeoman.io/authoring/). New sub-generators can be added in the [`generators/` folder](generators/) and made available as a `yo lob:SUB` command through the [`index.js` file](index.js). To modify the list of sub-generators that are run as part of the default `yo lob` command, modify the [`generators/index.js` file](generators/index.js).
