'use strict';

const Generators = require('yeoman-generator');

module.exports = Generators.Base.extend({
  initializing: function () {
    this.props = {};
  },
  prompting: function () {
    const done = this.async();

    this.prompt([{
      name: 'ci',
      message: 'Select a continuous integration platform',
      type: 'list',
      choices: ['CircleCI', 'Travis'],
      required: true,
      default: 'CircleCI'
    }, {
      name: 'version',
      message: 'Continuous Integration Node version',
      required: true,
      store: true
    }], (props) => {
      this.props = props;
      done();
    });
  },
  writing: function () {
    if (this.props.ci === 'CircleCI') {
      this.fs.copyTpl(
        this.templatePath('circle.yml'),
        this.destinationPath('circle.yml'),
        { version: this.props.version }
      );
    } else {
      this.fs.copyTpl(
        this.templatePath('travis.yml'),
        this.destinationPath('.travis.yml'),
        { version: this.props.version }
      );
    }
  }
});
