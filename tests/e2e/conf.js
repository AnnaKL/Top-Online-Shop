
exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

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