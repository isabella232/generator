'use strict';

const Assert = require('yeoman-assert');
const Path   = require('path');
const Yo     = require('yeoman-test');

describe('lob:ci', () => {

  describe('CircleCI', () => {

    beforeEach((done) => {
      Yo.run(Path.join(__dirname, '../generators/ci'))
        .withPrompts({ ci: 'CircleCI', version: '4' })
        .on('end', done);
    });

    it('configures continuous integration with Circle', () => {
      Assert.fileContent('circle.yml', /version: 4/);
    });

  });

  describe('Travis', () => {

    beforeEach((done) => {
      Yo.run(Path.join(__dirname, '../generators/ci'))
        .withPrompts({ ci: 'Travis', version: '4' })
        .on('end', done);
    });

    it('configures continuous integration with Travis', () => {
      Assert.fileContent('.travis.yml', /- 4/);
    });

  });

});
