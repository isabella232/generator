'use strict';

let Assert = require('yeoman-assert');
let Path   = require('path');
let Yo     = require('yeoman-test');

describe('lob:eslint', () => {

  beforeEach((done) => {
    Yo.run(Path.join(__dirname, '../generators/eslint'))
      .on('end', done);
  });

  it('creates .eslintc and .eslintignore, adds dependencies', () => {
    Assert.file('.eslintrc');
    Assert.file('.eslintignore');
    Assert.fileContent('package.json', /"eslint":/);
    Assert.fileContent('package.json', /"eslint-config-lob":/);
    Assert.fileContent('package.json', '"lint": "eslint ."');
  });

  describe('--generate-into', () => {

    beforeEach((done) => {
      Yo.run(Path.join(__dirname, '../generators/eslint'))
        .withOptions({ generateInto: 'other/' })
        .on('end', done);
    });

    it('generates into another directory', () => {
      Assert.file('other/.eslintrc');
      Assert.file('other/.eslintignore');
      Assert.fileContent('other/package.json', /"eslint":/);
      Assert.fileContent('other/package.json', /"eslint-config-lob":/);
      Assert.fileContent('other/package.json', '"lint": "eslint ."');
    });

  });

});
