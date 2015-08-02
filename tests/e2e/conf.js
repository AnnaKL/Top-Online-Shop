
exports.config = {

  baseUrl: 'http://localhost:8100/#/stock/',

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