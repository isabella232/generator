'use strict';

const Generators = require('yeoman-generator');

module.exports = Generators.Base.extend({
  prompting: function () {
    const done = this.async();

    this.prompt({
      name: 'version',
      message: 'Local Node version',
      default: 5,
      store: true
    }, (prop) => {
      this.version = prop.version;
      done();
    });
  },
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('node-version'),
      this.destinationPath('.node-version'),
      { version: this.version }
    );
  }
});
