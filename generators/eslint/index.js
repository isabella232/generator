'use strict';

const Generators = require('yeoman-generator');
const Merge      = require('lodash').merge;

module.exports = Generators.Base.extend({
  constructor: function () {
    Generators.Base.apply(this, arguments);

    this.option('generateInto', {
      type: String,
      required: false,
      defaults: '',
      desc: 'Relocate the location of the generated files.'
    });
  },
  initializing: function () {
    this.fs.copy(
      this.templatePath('eslintrc'),
      this.destinationPath(this.options.generateInto, '.eslintrc')
    );
    this.fs.copy(
      this.templatePath('eslintignore'),
      this.destinationPath(this.options.generateInto, '.eslintignore')
    );
  },
  writing: function () {
    var packageJSON = this.fs.readJSON(this.destinationPath(this.options.generateInto, 'package.json'), {});

    Merge(packageJSON, {
      devDependencies: {
        eslint: '^1.9.0',
        'eslint-config-lob': '^1.0.1'
      },
      scripts: {
        lint: 'eslint .'
      }
    });

    this.fs.writeJSON(this.destinationPath(this.options.generateInto, 'package.json'), packageJSON);
  }
});
