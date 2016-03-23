'use strict';

const Assert = require('yeoman-assert');
const Path   = require('path');
const Yo     = require('yeoman-test');

describe('lob:lint', () => {

  beforeEach((done) => {
    Yo.run(Path.join(__dirname, '../generators/lint'))
      .on('end', done);
  });

  it('creates .eslintrc', () => {
    Assert.file('.eslintrc');
  });

  it('creates .eslintignore', () => {
    Assert.file('.eslintignore');
  });

  it('adds eslint and eslint-config-lob dependencies', () => {
    Assert.fileContent('package.json', /"eslint":/);
    Assert.fileContent('package.json', /"eslint-config-lob":/);
  });

  it('creates lint npm script', () => {
    Assert.fileContent('package.json', '"lint": "eslint ."');
  });

});
