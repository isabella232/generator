'use strict';

module.exports = {
  ci: require('./generators/ci'),
  config: require('./generators/config'),
  lint: require('./generators/lint'),
  node_version: require('./generators/node-version'),
  release: require('./generators/release'),
  test: require('./generators/test')
};
