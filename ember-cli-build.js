/* eslint-env node */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var stripTestSelectors = process.env['STRIP_TEST_SELECTORS'];

  var app = new EmberAddon(defaults, {
    'ember-test-selectors': {
      strip: Boolean(stripTestSelectors)
    }
  });

  return app.toTree();
};
