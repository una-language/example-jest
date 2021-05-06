const { defaults } = require('jest-config')
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'una'],
  testMatch: [...defaults.testMatch, '**/__tests__/**/*.una?(x)', '**/?(*.)+(spec|test).una?(x)'],
  transform: {
    '\\.una?$': 'babel-jest'
  }
}
