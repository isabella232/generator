'use strict';

const Assert = require('yeoman-assert');
const Path   = require('path');
const Yo     = require('yeoman-test');

describe('lob:release', () => {

  beforeEach((done) => {
    Yo.run(Path.join(__dirname, '../generators/release'))
      .on('end', done);
  });

  it('adds generate-changelog dependency', () => {
    Assert.fileContent('package.json', /"generate-changelog":/);
  });

  it('creates release scripts', () => {
    var script = (type, abbreviation) => {
      return `"release:${type}": "changelog -${abbreviation} && git add CHANGELOG.md && git commit -m 'updated CHANGELOG.md' && npm version ${type} && git push origin && git push origin --tags"`
    };

    Assert.fileContent('package.json', script('patch', 'p'));
    Assert.fileContent('package.json', script('minor', 'm'));
    Assert.fileContent('package.json', script('major', 'M'));
  });

});
