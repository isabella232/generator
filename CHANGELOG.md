## 2.0.0 (2019-03-28)

##### Chores

* **yarn:**  convert npm to yarn ([2042f14a](https://github.com/lob/generator/commit/2042f14a0d6b5d5933bb84eb932e55670c3084c4))
* **dependencies:**  remove nodejitsu from npm-shrinkwrap JIRA: ENG-759 ([f8b33151](https://github.com/lob/generator/commit/f8b331514f9a6d22263693f3e8fb599545d5d048))

##### Bug Fixes

* **node:**  bump to safe node version ([04480ae2](https://github.com/lob/generator/commit/04480ae226b6ad1605fa4ede82383f47aa244566))

#### 1.1.3 (2016-6-22)

##### New Features

* **release:** remove npm 3 install from circle config ([8c35cd1f](https://github.com/lob/generator/commit/8c35cd1f104e624673e4a60a2f8c8b5529ebd67b))

##### Bug Fixes

* **node-version:** use template to ensure newline character at EOF ([e1b5d459](https://github.com/lob/generator/commit/e1b5d459c15ade7987cbeb9764ced5621372341a))
* **ci:** set NODE_ENV to test in travis.yml ([9514738d](https://github.com/lob/generator/commit/9514738d8481d12825551c69f1882693bd76a02d))

#### 1.1.2 (2016-6-1)

##### Bug Fixes

* **node-version:** Add trailing newline to generated .node-version file. ([23b3e66e](https://github.com/lob/generator/commit/23b3e66e7022fae5c43cab5d26a7f9a44bd4d943))

#### 1.1.1 (2016-4-25)

##### Bug Fixes

* **test:** send NODE_ENV to 'test' in test scripts ([471e0085](https://github.com/lob/generator/commit/471e0085ac557ba60415227ff68e641f40944adb))

### 1.1.0 (2016-4-20)

##### New Features

* **config:** creates a lob:config sub-generator ([b0c2a299](https://github.com/lob/generator/commit/b0c2a29991a50b452c0299ccc036717f4cd429b8))

#### 1.0.1 (2016-3-29)

##### Bug Fixes

* **lint:** allow global expect ([3ac9712a](https://github.com/lob/generator/commit/3ac9712a8f9d9f0d061d55a4c69f94b476002c9c))

## 1.0.0 (2016-3-23)

##### Chores

* **deps:** add shrinkwrap ([d50080d0](https://github.com/lob/generator/commit/d50080d0e68b8e2228d613e59a7678f39b04ff73))

##### Documentation Changes

* **readme:** document installation, usage, and extension ([50792ce6](https://github.com/lob/generator/commit/50792ce62c782402dd43754aa79a2d997b0bbe69))

##### New Features

* **lint:** use eslint-config-lob v2.0.0 ([91ce8018](https://github.com/lob/generator/commit/91ce8018cb1c47944ef5ae956d968cbc9d4216a0))
* **ci:** creates a lob:ci sub-generator ([b84e614b](https://github.com/lob/generator/commit/b84e614b85c7684e75ae1e21fe195e3fc4236fa7))
* **test:** creates lob:test sub-generator ([4ee21fe6](https://github.com/lob/generator/commit/4ee21fe689ec9539ccad9a4dbbbb9dc40f494d02))
* **node-version:** creates lob:node-version sub-generator ([1e5746b6](https://github.com/lob/generator/commit/1e5746b6ef355a7a9b60ff4eca43f3bce8e5c104))
* **release:** creates lob:release sub-generator ([26cc779f](https://github.com/lob/generator/commit/26cc779f49338c90f4ff8b1098cafd28b431a2a4))
* **eslint:** adds eslint generator ([6cf7a1d8](https://github.com/lob/generator/commit/6cf7a1d8e625672f3cd56672f30a4e9b331c2fd5))

##### Bug Fixes

* **test:** rename test-no-cover npm script to test:raw ([4659b240](https://github.com/lob/generator/commit/4659b24072fbf4765afff06d2e0147b022d8fd8e))
* **yo-lob:** run subgens from main gen ([16f4e0de](https://github.com/lob/generator/commit/16f4e0de7fc46c18fe42a14d1cfca5e0377c6c95))
* **build:** use open source ci ([73f598f7](https://github.com/lob/generator/commit/73f598f7b99747236d99d57bc0d2bdd7ff25ccb4))

##### Refactors

* **deps:** use standalone lodash.merge ([3fb58945](https://github.com/lob/generator/commit/3fb5894599eca0e00baee406750238268f78cebc))
* **lint:** rename 'eslint' subgen to 'lint' ([676c1fdd](https://github.com/lob/generator/commit/676c1fdd9ed2f41306b6233018bf9bfae558792b))

##### Code Style Changes

* **variables:** convert variables to es6 ([5a8c2145](https://github.com/lob/generator/commit/5a8c214540b488d063c38cab847eb4886597f1ee))

