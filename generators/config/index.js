'use strict';

const Generators = require('yeoman-generator');

module.exports = Generators.Base.extend({
  initializing: function () {
    this.props = {};
  },
  prompting: function () {
    const done = this.async();

    this.prompt([{
      name: 'config',
      message: 'Generate config directory?',
      type: 'confirm',
      required: true,
      default: true
    }], (props) => {
      this.props = props;
      done();
    });
  },
  writing: function () {
    if (!this.props.config) {
      return;
    }

    this.fs.copyTpl(this.templatePath('index.js'), this.destinationPath('config/index.js'));
    this.fs.copyTpl(this.templatePath('environment.js'), this.destinationPath('config/development.js'));
    this.fs.copyTpl(this.templatePath('environment.js'), this.destinationPath('config/production.js'));
    this.fs.copyTpl(this.templatePath('environment.js'), this.destinationPath('config/staging.js'));
    this.fs.copyTpl(this.templatePath('environment.js'), this.destinationPath('config/test.js'));
  }
});
