'use strict';

const Generators = require('yeoman-generator');

module.exports = Generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.prompt({
      name: 'version',
      message: 'Node version',
      default: 5
    }, function (prop) {
      this.version = prop.version;
      done();
    }.bind(this));
  },
  writing: function () {
    this.fs.write(this.destinationPath('.node-version'), this.version.toString());
  }
});
