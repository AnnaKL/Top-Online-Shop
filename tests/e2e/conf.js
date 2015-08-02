
exports.config = {

  baseUrl: 'http://localhost:8100',

  allScriptsTimeout: 11000,

  specs: ['top-online-shopFeature.js'],

  capabilities: {
    'browserName': 'firefox'
  },

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};