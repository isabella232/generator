'use strict';

const Generators = require('yeoman-generator');
const Merge      = require('lodash.merge');

module.exports = Generators.Base.extend({
  writing: function () {
    let packageJSON = this.fs.readJSON(this.destinationPath('package.json'), {});

    Merge(packageJSON, {
      devDependencies: {
        chai: '^3.0.0',
        istanbul: '^0.4.2',
        mocha: '^2.2.5'
      },
      scripts: {
        enforce: 'istanbul check-coverage --statement 100 --branch 100 --function 100 --lines 100',
        test: 'istanbul cover _mocha -- test --require test/setup.js --recursive --timeout 30000',
        'test:raw': 'mocha test --require test/setup.js --recursive --timeout 30000'
      }
    });

    this.fs.writeJSON(this.destinationPath('package.json'), packageJSON);

    this.fs.copy(
      this.templatePath('setup.js'),
      this.destinationPath('test/setup.js')
    );
  }
});
