'use strict';

const Assert = require('yeoman-assert');
const Path   = require('path');
const Yo     = require('yeoman-test');

describe('lob:config', () => {

  describe('yes', () => {

    beforeEach((done) => {
      Yo.run(Path.join(__dirname, '../generators/config'))
        .withPrompts({ config: true })
        .on('end', done);
    });

    it('creates config/index.js', () => {
      Assert.file('config/index.js');
    });

    it('creates config/development.js', () => {
      Assert.file('config/development.js');
    });

    it('creates config/production.js', () => {
      Assert.file('config/production.js');
    });

    it('creates config/staging.js', () => {
      Assert.file('config/staging.js');
    });

    it('creates config/test.js', () => {
      Assert.file('config/test.js');
    });

  });

  describe('no', () => {

    beforeEach((done) => {
      Yo.run(Path.join(__dirname, '../generators/config'))
        .withPrompts({ config: false })
        .on('end', done);
    });

    it('does not generate a config directory', () => {
      Assert.noFile([
        'config/index.js',
        'config/development.js',
        'config/production.js',
        'config/staging.js',
        'config/test.js'
      ]);
    });

  });

});
