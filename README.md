<div align="center">
  <img src="https://jestjs.io/img/jest.png" height="75" width="75"/>
  <h2 align="center">jest-simple-emoji-reporter</h2>
  <h3 align="center">A simple, yet effective custom reporter for Jest.</h3>
</div>

# Installation

Install jest-simple-emoji-reporter using [`yarn`](https://yarnpkg.com/en/package/jest):

```bash
yarn add --dev jest-simple-emoji-reporter
```

Or via [`npm`](https://www.npmjs.com/):

```bash
npm install --save-dev jest-simple-emoji-reporter
```

## Configuration

Configure [Jest](https://jestjs.io/docs/en/configuration.html) to use the reporter.

For example, create a `jest.config.js` file containing:

```javascript
module.exports = {
  verbose: false,
  reporters: [
    'jest-simple-emoji-reporter'
  ]
};
```

Or add it to your Jest configuration within your package.json

```javascript
// package.json
{
  "name": "my-project",
  "jest": {
    "verbose": false,
      reporters: [
        'jest-simple-emoji-reporter'
      ]
  }
}
```

### Credit

This package is a modified version of [jodonnell's jest-simple-dot-reporter.](https://github.com/jodonnell/jest-simple-dot-reporter)