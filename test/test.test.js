'use strict';

const Assert = require('yeoman-assert');
const Path   = require('path');
const Yo     = require('yeoman-test');

describe('lob:test', () => {

  beforeEach((done) => {
    Yo.run(Path.join(__dirname, '../generators/test'))
      .on('end', done);
  });

  it('creates test/setup.js file', () => {
    Assert.file('test/setup.js');
    Assert.fileContent('test/setup.js', /global.expect = Chai.expect/);
  });

  it('adds chai, istanbul, and mocha dependencies', () => {
    Assert.fileContent('package.json', /chai/);
    Assert.fileContent('package.json', /istanbul/);
    Assert.fileContent('package.json', /mocha/);
  });

  it('creates enforce, test, and test-no-cover npm scripts', () => {
    Assert.fileContent('package.json', /"enforce": /);
    Assert.fileContent('package.json', /"test": /);
    Assert.fileContent('package.json', /"test-no-cover": /);
  });

});
