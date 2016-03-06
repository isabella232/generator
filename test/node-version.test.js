'use strict';

const Assert = require('yeoman-assert');
const Path   = require('path');
const Yo     = require('yeoman-test');

describe('lob:node-version', () => {

  beforeEach((done) => {
    Yo.run(Path.join(__dirname, '../generators/node-version'))
      .withPrompts({ version: '4' })
      .on('end', done);
  });

  it('creates .node-version file', () => {
    Assert.fileContent('.node-version', '4');
  });

});
