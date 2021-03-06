### 0.7.2 (2015-01-13)


#### Bug Fixes

* **view-strategy:** dynamic strategy hook results should be relative to view-model ([ae6cf40c](http://github.com/aurelia/templating/commit/ae6cf40cbaffc7504867100e10e709a780231d82))


### 0.7.1 (2015-01-12)


#### Bug Fixes

* **view-engine:** double check existing on async load ([e257198b](http://github.com/aurelia/templating/commit/e257198b36c4423d5db6cf1f2ac71dc10abe53c0))


## 0.7.0 (2015-01-12)


#### Bug Fixes

* **behavior:** removed behavior base class ([2121d137](http://github.com/aurelia/templating/commit/2121d13752ffa6936a89f6b01fe00945d126310a))
* **package:** update Aurelia dependencies ([c78936bf](http://github.com/aurelia/templating/commit/c78936bf39d5a81d084c1252c6b72913dd8fd4e4))
* **view:** process bindings before behavior binds ([4e26198b](http://github.com/aurelia/templating/commit/4e26198b16e13e1b9002235ab6bc07673f3243c2))


#### Features

* **property:**
  * add options property ([b8627249](http://github.com/aurelia/templating/commit/b8627249b7dcd71f45b676e6fd680d1d20b524cf))
  * add load responsibility from behavior ([f8790e42](http://github.com/aurelia/templating/commit/f8790e4224f065cd83009bc16dab7a84adfb3038))
* **view-compiler:** update to new binding language interface ([8fb4f7ca](http://github.com/aurelia/templating/commit/8fb4f7ca4f2125e47a6312604f47df3563c3e318))


### 0.6.1 (2015-01-08)


#### Bug Fixes

* **behavior-instance:** classic loop, function var bug ([359749a4](http://github.com/aurelia/templating/commit/359749a43b8cdfc669f4f7c7a9796db3a31d67cd))


## 0.6.0 (2015-01-07)


#### Bug Fixes

* **composition-engine:**
  * more consistent api ([ab419d1a](http://github.com/aurelia/templating/commit/ab419d1a32f0329be5c50f5049d40e66b6db3ad1))
  * do not require view resources ([82bbbdad](http://github.com/aurelia/templating/commit/82bbbdad07fc8a1470cf4331129571380cc99dd2))


#### Features

* **view-strategy:** allow strategies to be made relative via compose ([53f25495](http://github.com/aurelia/templating/commit/53f2549589091dcc5a7a54297d080184d7f2c8be))


## 0.5.0 (2015-01-06)


#### Bug Fixes

* **all:** rename Filter to ValueConverter ([f0963214](http://github.com/aurelia/templating/commit/f0963214a34478dbf5de3e67376bdd29de90817a))
* **resource-coorindator:** return full info for view model load ([78d1b875](http://github.com/aurelia/templating/commit/78d1b875db07fd20050e7582ccb09abd8637ee15))
* **view-factory:** incorrect loop variable name ([1e1dbff6](http://github.com/aurelia/templating/commit/1e1dbff6213cad44715c70185f2ece7cf3209632))


#### Features

* **build:** update compile, switch to register modules, switch to core-js format ([a2b2e63f](http://github.com/aurelia/templating/commit/a2b2e63fe729a9cf206ca71748505c81cdbec2dd))
* **composition-engine:** encapsulate dynamic composition logic in a service ([51638f65](http://github.com/aurelia/templating/commit/51638f65ce0c129e41aa7f3aed10bcd3985d7df9))
* **view-engine:** enable resource renaming ([83683d92](http://github.com/aurelia/templating/commit/83683d921d125507ba574091bcf7e3c422b45288))
* **view-resources:** auto-import own local resources ([9f770029](http://github.com/aurelia/templating/commit/9f77002950aeb8fab347297a5a669efc9ff993f5))


## 0.4.0 (2014-12-22)


#### Bug Fixes

* **view-compiler:** instruction target null class fixed ([655a8938](http://github.com/aurelia/templating/commit/655a8938a80f3bcda0bb13ff006a0bcb106d088f))


### 0.3.2 (2014-12-18)


#### Bug Fixes

* **resource-registry:** symbol was not correctly exported ([bb395edf](http://github.com/aurelia/templating/commit/bb395edf701d58dc814859975f219739174c4a39))


### 0.3.1 (2014-12-18)


#### Bug Fixes

* **package:** update path to the latest version ([a173b15c](http://github.com/aurelia/templating/commit/a173b15cf1d50677dfafb3143bc19d0e6b6720b8))
* **view-engine:** update to use path.relativeToFile ([fa05b092](http://github.com/aurelia/templating/commit/fa05b092b350bbb47e44001322f2e58a7b868165))


#### Features

* **ViewResources:** enable DI of ViewResources ([f5b37e10](http://github.com/aurelia/templating/commit/f5b37e10bada8063a78c02e1b53ab1357ba9668e))


## 0.3.0 (2014-12-17)


#### Bug Fixes

* **package:** updated dependencies to latest versions ([cdcfd6dd](http://github.com/aurelia/templating/commit/cdcfd6dd425f76e17689e645a5aad2f323a4fd40))


### 0.2.1 (2014-12-12)


#### Bug Fixes

* **package:** update dependencies to latest ([c5ba425c](http://github.com/aurelia/templating/commit/c5ba425c1faa51955609067023a486b69c11a528))


## 0.2.0 (2014-12-11)


#### Bug Fixes

* **package:** update dependencies to latest versions ([6d3a3b96](http://github.com/aurelia/templating/commit/6d3a3b966f7dbf94a88de5cf440cad5894962f3a))
* **view-engine:** rename dx-import to import ([fd3ddaf9](http://github.com/aurelia/templating/commit/fd3ddaf90f96271ce545305db5f6adc0533f50b6))


## 0.1.0 (2014-12-11)


#### Bug Fixes

* **package:** add missing polyfills ([bd751f7c](http://github.com/aurelia/templating/commit/bd751f7c2a40e7025ac35dfd563024f608c35474))

