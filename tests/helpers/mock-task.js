'use strict';

var Promise     = require('../../lib/ext/promise');

var MockTask = function() { };

MockTask.prototype.run = function(options) {
  return Promise.resolve(options);
};

module.exports = MockTask;
