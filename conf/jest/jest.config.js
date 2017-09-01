const path = require('path');
const coverageDirectory = path.join(process.cwd(), 'coverage');

module.exports = {
  "setupTestFrameworkScriptFile": "./jest.setup.js",
  "roots": ["<rootDir>/src", path.join(process.cwd(), 'src')],
  "coverageDirectory": coverageDirectory,
  "collectCoverageFrom": ['src/**/*.js'],
  "modulePathIgnorePatterns": ["\\.(css|scss)$"],
  "transform": {
    "^.+\\.js$": "./jest.transform.js"
  }, 
}