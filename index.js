'use strict';

module.exports = {
  lint: require('./generators/lint'),
  node_version: require('./generators/node-version'),
  release: require('./generators/release'),
  test: require('./generators/test/')
};
