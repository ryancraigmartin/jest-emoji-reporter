<div align="center">
  <img src="https://jestjs.io/img/jest.png" height="75" width="75"/>
  <h2 align="center">jest-simple-emoji-reporter</h2>
  <h3 align="center">A simple, yet effective custom reporter for Jest.</h3>

  ![Size](https://img.shields.io/github/repo-size/ryancraigmartin/jest-simple-emoji-reporter?style=plastic&color=green&label=Size)
  ![License](https://img.shields.io/github/license/ryancraigmartin/jest-simple-emoji-reporter?style=plastic&color=lightgrey&label=License)
  ![Updated](https://img.shields.io/github/last-commit/ryancraigmartin/jest-simple-emoji-reporter?style=plastic&color=red&label=Updated)
  ![Stars](https://img.shields.io/github/stars/ryancraigmartin/jest-simple-emoji-reporter?style=plastic&color=ffd500&label=Stars)
  ![Forks](https://img.shields.io/github/forks/ryancraigmartin/jest-simple-emoji-reporter?style=plastic&color=brightgreen&label=Forks)
  ![Watchers](https://img.shields.io/github/watchers/ryancraigmartin/jest-simple-emoji-reporter?style=plastic&color=orange&label=Watchers)
  ![Contributors](https://img.shields.io/github/contributors/ryancraigmartin/jest-simple-emoji-reporter?style=plastic&color=ff69b4&label=Contributors)
  ![Followers](https://img.shields.io/github/followers/ryancraigmartin?style=plastic&color=blue&label=Followers)

</div>

# Installation

Install jest-simple-emoji-reporter using [`yarn`](https://yarnpkg.com/en/package/jest):

```sh
yarn add jest-simple-emoji-reporter
```

Or via [`npm`](https://www.npmjs.com/):

```sh
npm install jest-simple-emoji-reporter
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

Or add it to your Jest configuration within your package.json:

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

## Legend
Emoji | Value
--- | ---
✅ | Pass
🔃 | Pending
❌ | Fail

### Credit

This package is an experiment in publishing on NPM as well as my own take on [jodonnell's jest-simple-dot-reporter.](https://github.com/jodonnell/jest-simple-dot-reporter)