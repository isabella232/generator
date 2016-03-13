'use strict';

const Generators = require('yeoman-generator');
const Merge      = require('lodash').merge;

module.exports = Generators.Base.extend({
  writing: function () {
    var packageJSON = this.fs.readJSON(this.destinationPath('package.json'), {});

    Merge(packageJSON, {
      devDependencies: {
        eslint: '^1.9.0',
        'eslint-config-lob': '^2.0.0'
      },
      scripts: {
        lint: 'eslint .'
      }
    });

    this.fs.writeJSON(this.destinationPath('package.json'), packageJSON);

    this.fs.copy(
      this.templatePath('eslintrc'),
      this.destinationPath('.eslintrc')
    );

    this.fs.copy(
      this.templatePath('eslintignore'),
      this.destinationPath('.eslintignore')
    );
  }
});
