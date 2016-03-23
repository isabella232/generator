'use strict';

const Generators = require('yeoman-generator');

module.exports = Generators.Base.extend({
  initializing: function () {
    this.composeWith('lob:ci');
    this.composeWith('lob:lint');
    this.composeWith('lob:node-version');
    this.composeWith('lob:release');
    this.composeWith('lob:test');
  }
});
