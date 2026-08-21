# Changelog

## [0.9.2](https://github.com/TheTechNetwork/composerize-ts/compare/composerize-ts-v0.9.1...composerize-ts-v0.9.2) (2026-08-21)


### Bug Fixes

* **deps:** update dependency ip-address to v10.5.0 ([#32](https://github.com/TheTechNetwork/composerize-ts/issues/32)) ([6f5aca3](https://github.com/TheTechNetwork/composerize-ts/commit/6f5aca3555e9e7e7388814ce3425d135fbcaf4c2))

## [0.9.1](https://github.com/TheTechNetwork/composerize-ts/compare/composerize-ts-v0.9.0...composerize-ts-v0.9.1) (2026-08-10)


### Bug Fixes

* drop unmaintained deepmerge-ts and husky dependencies ([#30](https://github.com/TheTechNetwork/composerize-ts/issues/30)) ([240158b](https://github.com/TheTechNetwork/composerize-ts/commit/240158b15ea0193a9bb26a630af8ce3aec022266))

## [0.9.0](https://github.com/TheTechNetwork/composerize-ts/compare/composerize-ts-v0.8.2...composerize-ts-v0.9.0) (2026-08-10)


### ⚠ BREAKING CHANGES

* the generated docker-compose YAML no longer wraps plain scalar strings that contain ':' in single quotes. For example `- '80:80'` is now emitted as `- 80:80`, and `- '/var/run/docker.sock:/tmp/docker.sock:ro'` as `- /var/run/docker.sock:/tmp/docker.sock:ro`. The output is semantically identical and parses to the same values, but consumers that assert the exact output text (snapshot/golden tests, e.g. it-tools) must refresh their expectations.

### Features

* replace abandoned flex-js and yamljs runtime dependencies ([#28](https://github.com/TheTechNetwork/composerize-ts/issues/28)) ([d861e1e](https://github.com/TheTechNetwork/composerize-ts/commit/d861e1e2a8dbb6172a22c7d72d48b7bc5fb2ebbb))

## [0.8.2](https://github.com/TheTechNetwork/composerize-ts/compare/composerize-ts-v0.8.1...composerize-ts-v0.8.2) (2026-08-10)


### Miscellaneous Chores

* release @thetechnetwork/composerize-ts 0.8.2 ([#25](https://github.com/TheTechNetwork/composerize-ts/issues/25)) ([0317a52](https://github.com/TheTechNetwork/composerize-ts/commit/0317a5217e15083ef725bcf14598a6fa30a87c80))

## [0.8.1](https://github.com/TheTechNetwork/composerize-ts/compare/composerize-ts-v0.8.0...composerize-ts-v0.8.1) (2026-08-10)


### Bug Fixes

* **ci:** pin npm 11 for publish (npm@latest breaks Node 22 engine) ([#19](https://github.com/TheTechNetwork/composerize-ts/issues/19)) ([06f29a4](https://github.com/TheTechNetwork/composerize-ts/commit/06f29a4f1260a73ee9d1b8eee0e72de497d1d615))

## [0.8.0](https://github.com/TheTechNetwork/composerize-ts/compare/composerize-ts-v0.7.1...composerize-ts-v0.8.0) (2026-08-10)


### Miscellaneous Chores

* **deps:** update all dependencies to their latest versions ([#15](https://github.com/TheTechNetwork/composerize-ts/issues/15)) ([5632787](https://github.com/TheTechNetwork/composerize-ts/commit/5632787116bfbab69961797028cf1964a31a4140))

## [0.7.0](https://github.com/cgoIT/composerize-ts/compare/v0.6.2...v0.7.0) (2025-02-28)


### Features

* make the generation of the version info in the resulting docker-compose.yml optional ([a33d281](https://github.com/cgoIT/composerize-ts/commit/a33d281564068e14621e8f135a0a301014832236))

## [0.6.2](https://github.com/cgoIT/composerize-ts/compare/v0.6.1...v0.6.2) (2023-04-04)


### Bug Fixes

* replace require with import ([ed0979b](https://github.com/cgoIT/composerize-ts/commit/ed0979bc70d0e9554500f0ef870cf7c54f3a2f2f))

## [0.6.1](https://github.com/cgoIT/composerize-ts/compare/v0.6.0...v0.6.1) (2023-04-04)


### Bug Fixes

* fix invalid main/module settings in package.json ([9e482c4](https://github.com/cgoIT/composerize-ts/commit/9e482c4e390d7977edf5fe2c921052b1af6cb0db))

## [0.6.0](https://github.com/cgoIT/composerize-ts/compare/v0.5.2...v0.6.0) (2023-04-04)


### Features

* **cli:** build a nice cli interface for composerize-ts ([907e681](https://github.com/cgoIT/composerize-ts/commit/907e6810640449c0a0b5944289a2754115ec64a2))


### Bug Fixes

* **options:** correct long-opt value detach/d ([0c8140f](https://github.com/cgoIT/composerize-ts/commit/0c8140f96e95c69f5a6d0b233dfed8173302af6b))
* **parser:** don't use errors but more messages to make parsing of partly incorrect cmds possible ([c126ec5](https://github.com/cgoIT/composerize-ts/commit/c126ec518984f1ce81554b71611dbad189fec2af))

## [0.5.2](https://github.com/cgoIT/composerize-ts/compare/v0.5.1...v0.5.2) (2023-04-03)


### Bug Fixes

* **module:** export all types which are included in exported functions ([c38c1d5](https://github.com/cgoIT/composerize-ts/commit/c38c1d5c4c5c543963bdcfff666afd3060f10ccb))

## [0.5.1](https://github.com/cgoIT/composerize-ts/compare/v0.5.0...v0.5.1) (2023-04-03)


### Bug Fixes

* fix library to be used as commonjs and esm module ([f01d96f](https://github.com/cgoIT/composerize-ts/commit/f01d96f07ebbdf208b943abdcfb7682226eb0228))

## [0.5.0](https://github.com/cgoIT/composerize-ts/compare/v0.4.0...v0.5.0) (2023-04-03)


### Features

* **options:** add a lot of new options ([6d071ed](https://github.com/cgoIT/composerize-ts/commit/6d071edc85136b5f97658b7905115ae1dee53e58))
* **options:** add new options ([26f1a2a](https://github.com/cgoIT/composerize-ts/commit/26f1a2aefd518cd436c0113c5b588d8a5b3cae86))
* **options:** add new options ([826e3be](https://github.com/cgoIT/composerize-ts/commit/826e3be192bbbe2c32cd45f8c1a3d66088ae3961))


### Bug Fixes

* **parser:** correct handling of quoted option values ([82c143a](https://github.com/cgoIT/composerize-ts/commit/82c143a32a6dc3d6cac796f86066872cd88e3535))
* **parser:** fix unit test ([5a20aca](https://github.com/cgoIT/composerize-ts/commit/5a20acade8c5ff9635bed93c8fb9472f45a6a4e1))

## [0.4.0](https://github.com/cgoIT/composerize-ts/compare/v0.3.0...v0.4.0) (2023-04-02)


### Features

* **options:** add new options ([907402e](https://github.com/cgoIT/composerize-ts/commit/907402e9eb824040fe1b7653c6ff3b7970cdfeba))

## [0.3.0](https://github.com/cgoIT/composerize-ts/compare/v0.2.0...v0.3.0) (2023-03-31)


### Features

* **options:** add new option network ([d43452f](https://github.com/cgoIT/composerize-ts/commit/d43452f98d63614867761913713a93f8dc65fdc7))
* **options:** add new options ([346b1c7](https://github.com/cgoIT/composerize-ts/commit/346b1c722dbfaf804f364b497fe7ba4b48a6294f))
* **options:** publish ports ([fbabf7f](https://github.com/cgoIT/composerize-ts/commit/fbabf7f6b905c58b1c7de11e308ca0985f9d258e))


### Bug Fixes

* **parse:** allow = between long-opt option and value ([28024b7](https://github.com/cgoIT/composerize-ts/commit/28024b759d967613b123331ae31834b18e72d8de))

## [0.2.0](https://github.com/cgoIT/composerize-ts/compare/v0.1.4...v0.2.0) (2023-03-31)


### Miscellaneous Chores

* release version 0.2.0 ([e7b4970](https://github.com/cgoIT/composerize-ts/commit/e7b49700332b608bf4bc9ac76c87cd2e5e49a38b))

## [0.1.4](https://github.com/cgoIT/composerize-ts/compare/v0.1.3...v0.1.4) (2023-03-31)


### Bug Fixes

* **release-please:** remove non-free npmjs feature ([9039ccb](https://github.com/cgoIT/composerize-ts/commit/9039ccb5ef0bd0b44412ed638c56871564d32cf2))
* **release-please:** remove non-free npmjs feature ([3caaeb5](https://github.com/cgoIT/composerize-ts/commit/3caaeb57702b764d12c3a8a8da136e2af6cd2e12))

## [0.1.3](https://github.com/cgoIT/composerize-ts/compare/v0.1.2...v0.1.3) (2023-03-31)


### Bug Fixes

* **package:** add missing files to package ([7153c07](https://github.com/cgoIT/composerize-ts/commit/7153c07067f49c419939d1e86627b9e78cf32bca))

## [0.1.2](https://github.com/cgoIT/composerize-ts/compare/v0.1.1...v0.1.2) (2023-03-31)


### Bug Fixes

* **release-please:** skip corepack enable if not yet released ([3f730db](https://github.com/cgoIT/composerize-ts/commit/3f730db95757a82afea444876718c6ac539a75cf))

## [0.1.1](https://github.com/cgoIT/composerize-ts/compare/v0.1.0...v0.1.1) (2023-03-31)


### Bug Fixes

* **ci:** make pnpm workable in release-please ([16b2513](https://github.com/cgoIT/composerize-ts/commit/16b25137176c63c3590a8147b564ae6a659b2627))

## [0.1.0](https://github.com/cgoIT/composerize-ts/compare/v0.0.1...v0.1.0) (2023-03-31)


### Features

* This is the first commit of this tiny tool ([2c66333](https://github.com/cgoIT/composerize-ts/commit/2c663334e58578d580e0e338810823edd751dc17))
