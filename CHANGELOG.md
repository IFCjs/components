# Changelog

## [2.5.0](https://github.com/ThatOpen/engine_components/compare/v2.4.0...v2.5.0) (2025-02-18)


### Features

* **core:** add section mesh generation component ([46ee63e](https://github.com/ThatOpen/engine_components/commit/46ee63e17253c9b1501ce47391164a101ed0e862))
* **front:** adds event on length measurements deletion ([554e3a6](https://github.com/ThatOpen/engine_components/commit/554e3a6a9e2d67d8338dcec7f1757f80651824e0))


### Bug Fixes

* **core:** ids facet bounds checking was inverted ([2c7461f](https://github.com/ThatOpen/engine_components/commit/2c7461ff5a4d1d783548391e0415a83e937f0474))
* **core:** ids property facet was failing when it doesn't have to ([5786e57](https://github.com/ThatOpen/engine_components/commit/5786e5727c3d4250519e97849690397c86aaddf5))
* FaceMeasurement for Multiple Models [#533](https://github.com/ThatOpen/engine_components/issues/533) ([#565](https://github.com/ThatOpen/engine_components/issues/565)) ([914b449](https://github.com/ThatOpen/engine_components/commit/914b4497604db2cd4129ddca5a4daec938a28906))
* **front:** Revert "Use RawShaderMaterial for transparent objects to improve culling ([#532](https://github.com/ThatOpen/engine_components/issues/532))" ([4930288](https://github.com/ThatOpen/engine_components/commit/4930288c12d45a9f6a75603fe5601b223fefc293))
* mobile device orthographic camera zoom ([#558](https://github.com/ThatOpen/engine_components/issues/558)) ([29ebd0d](https://github.com/ThatOpen/engine_components/commit/29ebd0de11fc5fb53260b95a9e22ca77955e513a))

## [2.4.0](https://github.com/ThatOpen/engine_components/compare/v2.3.0...v2.4.0) (2024-11-28)


### Features

* adds BCFTopics tutorial ([474c725](https://github.com/ThatOpen/engine_components/commit/474c725d6175f0bde50483bf1b6d02dd203b73a8))
* **core:** add enabled state to components with ui ([0a56f67](https://github.com/ThatOpen/engine_components/commit/0a56f67e32fead76fa0af0447055ccca5ba98a0a))
* **core:** add export-import features to config ([e1b84e6](https://github.com/ThatOpen/engine_components/commit/e1b84e6d3e2ff149573d54af426ed7fa7a56888c))
* **core:** add non-min and min bundle to build ([4dfd344](https://github.com/ThatOpen/engine_components/commit/4dfd344451aa1e09e977ba9b8f580c5b52f9f0a2))
* **core:** add optional disabled state to components with ui ([c0f5916](https://github.com/ThatOpen/engine_components/commit/c0f5916bc5f3e32f054687e36102108f472020bf))
* **core:** add set method to configurator ([f2ae396](https://github.com/ThatOpen/engine_components/commit/f2ae39674cd2c68e10af232911b9b43808317b90))
* **core:** adds better typing for IDS facets ([6995f7a](https://github.com/ThatOpen/engine_components/commit/6995f7a0e881b9b295e311719a3f4b60fe94a0c0))
* **core:** adds IfcPropertiesManager tutorial ([f01c475](https://github.com/ThatOpen/engine_components/commit/f01c47518fa0557218d9349e5b9fa8641c00f08e))
* **core:** adds viewpoints example and tutorial ([153c21b](https://github.com/ThatOpen/engine_components/commit/153c21b70f8593d9dbbbe2056197128a2cb18c49))
* **core:** allow to export / import classifications ([3346a39](https://github.com/ThatOpen/engine_components/commit/3346a3962024fac981a11500fba06a0c0f8f4e8b))
* **core:** allow to override raycaster mouse position ([59916b4](https://github.com/ThatOpen/engine_components/commit/59916b431593b9dfe3ae2559911dece3ef49b05d))
* **core:** allows to define a custom name to Classifier.bySpatialStructure ([a5d806a](https://github.com/ThatOpen/engine_components/commit/a5d806a1503850a3a5f370c53137cb861cbff325))
* **core:** create event manager ([4bf8ff2](https://github.com/ThatOpen/engine_components/commit/4bf8ff26157bcdb38410bb714d632c1b5ca268a1))
* **core:** IfcRelationsIndexer is between 2 and 5 times faster when processing a model ([3894a5c](https://github.com/ThatOpen/engine_components/commit/3894a5c7f132f1d7b81e13f20261cc8aa215260e))
* **core:** improve configurator second type ([19cc299](https://github.com/ThatOpen/engine_components/commit/19cc299d4ef4b4fef148bcc6a62f72569d8aac17))
* **core:** improve UIElement type ([cc6253b](https://github.com/ThatOpen/engine_components/commit/cc6253bc199e102079cedd5b6e0bb13869a4d13c))
* **core:** make configurator types optional ([b76522e](https://github.com/ThatOpen/engine_components/commit/b76522e539c464454e16dd265e38311f44905482))
* **core:** remove unused coordinate property from ifc settings ([2b23f80](https://github.com/ThatOpen/engine_components/commit/2b23f80e3d617aa7fddf66ff3cb696334f101ce5))
* **front:** Add keydown event for Lengthmeasurement ([#466](https://github.com/ThatOpen/engine_components/issues/466)) ([3bfdcbf](https://github.com/ThatOpen/engine_components/commit/3bfdcbf77d19185855a329f15edf181bb267b5db))
* **front:** add non-min and min bundle to build ([2048aac](https://github.com/ThatOpen/engine_components/commit/2048aac10cba7742d14588e372c9b8eead3743de))
* **front:** add remove method to highlighter ([1ff19a5](https://github.com/ThatOpen/engine_components/commit/1ff19a50c8c992a0a37ee8f0f539b41b8b04d34a))
* **front:** Add Threashold to onMouseMove to supress small movements ([#467](https://github.com/ThatOpen/engine_components/issues/467)) ([b5c8365](https://github.com/ThatOpen/engine_components/commit/b5c836587cac41d6b922c7c2bfac5dcd9201884a))
* **front:** allow to apply filter to highlight clear ([23bd49f](https://github.com/ThatOpen/engine_components/commit/23bd49f3d701a9cacda6760da062d372c7382970))
* **front:** allow to get bounding boxes of unstreamed items ([ba8a389](https://github.com/ThatOpen/engine_components/commit/ba8a389ae11673ab216d615cabe55a13b066810f))
* **front:** allow to use highlighter without color ([006b4a1](https://github.com/ThatOpen/engine_components/commit/006b4a1c51a241e3451c8eb488440624222189ed))
* **front:** improve highlighter event handling ([4ddf977](https://github.com/ThatOpen/engine_components/commit/4ddf977b909282cb77e2b0a492544acc8b205d35))
* **front:** improve ifc streamer setvisibiility logic ([25ee0aa](https://github.com/ThatOpen/engine_components/commit/25ee0aa398cf91543aca20211ababf897f841b5c))
* **front:** parallelize fragment file streaming ([c80748f](https://github.com/ThatOpen/engine_components/commit/c80748f863c6568925428606665dcd6d0a361ba4))
* **front:** support multiple test platform components ([bd31da8](https://github.com/ThatOpen/engine_components/commit/bd31da8b91b310ef4dcd00960717b31864d7e4a8))
* **front:** test platform component ([12b8e93](https://github.com/ThatOpen/engine_components/commit/12b8e93e6475e34ce2d9a9c79a434fbf6d1a3df0))


### Bug Fixes

* **core:** add guard check for disposing simple planes ([ca1ef1f](https://github.com/ThatOpen/engine_components/commit/ca1ef1fb3a15fff9566c6cbb7173608938ed36f2))
* **core:** add guard when reading ifc organization ([55494b5](https://github.com/ThatOpen/engine_components/commit/55494b55c683f2aacb1870bce34367d8d75291c2))
* **core:** also load properties on classifier tutorial ([e47d497](https://github.com/ThatOpen/engine_components/commit/e47d49740f0fac2d1bc7bbcc8b932bc0c764f038))
* **core:** blob wasn't allowing to generate viewpoint screenshot in NodeJS ([1b94642](https://github.com/ThatOpen/engine_components/commit/1b9464223c6f27f9069eb5f63fb19c2a47e114aa))
* **core:** correct geometry splits tiling bug ([ac32b51](https://github.com/ThatOpen/engine_components/commit/ac32b51e21d3ee57212208c751e4c0332b2e382d))
* **core:** default topic stage was set to the default priority ([196da1a](https://github.com/ThatOpen/engine_components/commit/196da1a042665b85fef8a4757b9beb65eb16b512))
* **core:** deletes extension in ifc-property-query export ([0b8cd48](https://github.com/ThatOpen/engine_components/commit/0b8cd482625e970bcecefcd439f89e9797ef4b45))
* **core:** error thrown when deleting an entity after its creation ([eb9e0cd](https://github.com/ThatOpen/engine_components/commit/eb9e0cd1e15a9be8b00de90e085e22038ee489dd))
* **core:** IFC file containing "$" in header fails to load ([#510](https://github.com/ThatOpen/engine_components/issues/510)) ([c882d13](https://github.com/ThatOpen/engine_components/commit/c882d13612649d2ccf5923a953552460a5be8666))
* **core:** make geometry tiler split geometries according to limit ([ed12267](https://github.com/ThatOpen/engine_components/commit/ed12267bfef13941d354b34939e178417f0fadd1))
* **core:** make raycaster compatible with thouch screens ([4e6676b](https://github.com/ThatOpen/engine_components/commit/4e6676b385fccb0c98f07aa8ae247eee20c86841))
* **core:** make streamer events async, various streaming fixes ([fd4304f](https://github.com/ThatOpen/engine_components/commit/fd4304fb8855270dfdf70d68ddecf6b57fbbe78e))
* **core:** missing information when importing IDS files ([a40a3cc](https://github.com/ThatOpen/engine_components/commit/a40a3cce1a0995b8fcc4ca0c187a6934b25f8fe0))
* **core:** missing relation between IfcPropertySet and other entities in new definitions ([938d6a8](https://github.com/ThatOpen/engine_components/commit/938d6a80c6e3abe745509c0f7b7140777da03c15))
* **core:** prevent json stringify limit when exporting classifications ([5c2eaa5](https://github.com/ThatOpen/engine_components/commit/5c2eaa52c6f7d7f8f73afa162aa08589a55dc521))
* **core:** Property Facet in IDS throwing error when NominalValue is null ([d8d2cdc](https://github.com/ThatOpen/engine_components/commit/d8d2cdc9d598533867e64c55401e930f1dc5c1ab))
* **core:** solve bug when using nested configs ([695b226](https://github.com/ThatOpen/engine_components/commit/695b2260412d12acc8dd6d22da87c8ceebc80a95))
* **core:** solve configurator export bug ([4d4df75](https://github.com/ThatOpen/engine_components/commit/4d4df75cb33b9e10ed4df0199e7faee51728d58e))
* **core:** stream remaining geometries ([b61d3a7](https://github.com/ThatOpen/engine_components/commit/b61d3a7ceea2884fb842758e652cb4a7ad35b550))
* **core:** type psets not reviewed on IDS PropertyFacet ([4aff276](https://github.com/ThatOpen/engine_components/commit/4aff2763713c08a8112b349199785e440727383a))
* **front:** correct another outliner disposal bug ([e1a1c72](https://github.com/ThatOpen/engine_components/commit/e1a1c72cdb43afd0195bee18c0e5c5ebcb1bd672))
* **front:** correct outliner disposal ([7c57c46](https://github.com/ThatOpen/engine_components/commit/7c57c467f0fe52d64518584d4105c5fee70c5d9f))
* **front:** correct outliner position in moved models ([20d2c59](https://github.com/ThatOpen/engine_components/commit/20d2c5956b688da83717cfd86faa2f4a25a2631c))
* **front:** correct small bug with filter highlight logic ([0b01f71](https://github.com/ThatOpen/engine_components/commit/0b01f71aea188561000fa6eaf4436ebe32d2238f))
* **front:** more fixes to filter highlight logic ([1b20e73](https://github.com/ThatOpen/engine_components/commit/1b20e73531f1671c2d3f5dd497da947e28949645))
* **front:** more fixes to highlight logic ([f5694d1](https://github.com/ThatOpen/engine_components/commit/f5694d1bf1b5205f07557b2c52122a6206b6c870))
* **front:** more fixes to highlight logic ([27e4bc2](https://github.com/ThatOpen/engine_components/commit/27e4bc2a890631cb7c9a2d8a30dec02cfe3a5201))


### Miscellaneous Chores

* release 2.4.0 ([b2e8cf8](https://github.com/ThatOpen/engine_components/commit/b2e8cf89f72b6b1055e2c56e0a35375fa7353846))

## [2.3.0](https://github.com/ThatOpen/engine_components/compare/v2.2.0...v2.3.0) (2024-10-07)


### Features

* **core:** add clipper config ([288cb3d](https://github.com/ThatOpen/engine_components/commit/288cb3def42af773a1d9bba8ac8e4013d4047623))
* **core:** add grids config ([f99e137](https://github.com/ThatOpen/engine_components/commit/f99e13730f31776e3f0f525057ceb6db3377cce9))
* **core:** add minimap config ([47f95a3](https://github.com/ThatOpen/engine_components/commit/47f95a38e095388ee7477ae6344d7d2ba5088242))
* **core:** adds argument to specify the name of the ifc loaded ([2a23a2f](https://github.com/ThatOpen/engine_components/commit/2a23a2f16da67bc2607dba57f42da71c02e2b57b))
* **core:** adds the ability to get IfcGuids from a FragmentIdMap ([dff9d2f](https://github.com/ThatOpen/engine_components/commit/dff9d2f14f1a64c85da90249cea684df8224470c))
* **core:** centralize configuration in component ([df3350d](https://github.com/ThatOpen/engine_components/commit/df3350d5a1bd6e05c662179e9af4d68e8e8a7bce))
* **core:** clean up config manager ([468d425](https://github.com/ThatOpen/engine_components/commit/468d42528d77f77ca01ddfe7b3953cb029a063f5))
* **core:** connect all existing configs with manager ([fde9faa](https://github.com/ThatOpen/engine_components/commit/fde9faa16ded3f8d0ff17c2d2f83afc31e589c15))
* **core:** improve configurable behavior ([292300c](https://github.com/ThatOpen/engine_components/commit/292300c82e058a98ead658898f4480117463472e))
* **front:** add streamed properties caching ([331bd69](https://github.com/ThatOpen/engine_components/commit/331bd6916e8a6f601516d3e66b372500f927c8af))
* **front:** implement fragment geometry splitting ([9fb76dc](https://github.com/ThatOpen/engine_components/commit/9fb76dcca1f602228bff8bcc936a9c50ee738946))
* **front:** implement fragment load cancel ([f9b8b4e](https://github.com/ThatOpen/engine_components/commit/f9b8b4e351da462eb76243a4037393a8463d8adc))
* **front:** make streamer file cacher public ([a523c01](https://github.com/ThatOpen/engine_components/commit/a523c0142a746d189736fd750717289b43f4254a))
* **front:** make streaming url more flexible ([75ffbfa](https://github.com/ThatOpen/engine_components/commit/75ffbfa0ddc09e84c6992a3f0bbb40f9e3202392))
* **front:** support file as tile response type ([7b24223](https://github.com/ThatOpen/engine_components/commit/7b24223a55172eea7221bc2c8e3dfb346516e109))
* **front:** use file system api for tiles caching ([07bdbd3](https://github.com/ThatOpen/engine_components/commit/07bdbd3e0dacc8e9a8c985f3777d6c9a5c86b7be))


### Bug Fixes

* **chore:** fix type problems ([2beaffe](https://github.com/ThatOpen/engine_components/commit/2beaffe6b87af38f6f1766fa39ab2aced01c7ac6))
* **core:** add guard for cullers pixel reading ([fdacb77](https://github.com/ThatOpen/engine_components/commit/fdacb77a35f3deb801b3e15ede922ea54f82e340))
* **core:** add guard when getting all properties ([3048618](https://github.com/ThatOpen/engine_components/commit/3048618600c112e4fe4cedc5026165e442871ed3))
* **core:** dispose mesh culler interval ([d702cd7](https://github.com/ThatOpen/engine_components/commit/d702cd7683364e0678a24264816806f51c80a531))
* **core:** IfcPropertiesManager.setData properly assigns the entity in the model properties ([ed779b4](https://github.com/ThatOpen/engine_components/commit/ed779b4f9d5017d48a0a44fd44e034cd7b7b425e))
* **core:** incorrect topic type and status on loading ([cb961a9](https://github.com/ThatOpen/engine_components/commit/cb961a99b6e7afafd5bedcba482377c4c05bf666))
* **core:** reset culler state after read pixels failed ([bded3c3](https://github.com/ThatOpen/engine_components/commit/bded3c375f80d5ae00c0015b9eb92af51e4437b1))
* **core:** world deletes it-self from the worlds list to prevent unused references ([d8598f9](https://github.com/ThatOpen/engine_components/commit/d8598f9771c13732299248abfeba0dbf74cbaab2))
* **front:** make streamer url public ([2796114](https://github.com/ThatOpen/engine_components/commit/2796114aa35a425a045f6a2253c682943fbfc634))
* **front:** prevent URL from being null ([5bed53b](https://github.com/ThatOpen/engine_components/commit/5bed53b7a947b39765b77b7020fbfdd96f2d7d81))
* **front:** remove url setter and getter ([8be541e](https://github.com/ThatOpen/engine_components/commit/8be541e5707b4bb7ea463fd780afa8b94b7a43e0))
* **front:** Update currentPlan of Plans component so it is not always null ([#480](https://github.com/ThatOpen/engine_components/issues/480)) ([62f9d25](https://github.com/ThatOpen/engine_components/commit/62f9d251f492ef0940c70af9259968ed78324b75))

## [2.2.0](https://github.com/ThatOpen/engine_components/compare/v2.1.0...v2.2.0) (2024-08-18)


### Features

* allow custom fetch function ([e5764ff](https://github.com/ThatOpen/engine_components/commit/e5764ffcf047ae1d65844aae0eb32979f18338ad))
* **core:** add includedCategories option to IFCLoader ([771c8ee](https://github.com/ThatOpen/engine_components/commit/771c8ee31840146d899c37629129221d80f90ff4))
* **core:** adds 4 more types of relations in the IfcRelationsIndexer ([0b8e98f](https://github.com/ThatOpen/engine_components/commit/0b8e98f360cf6617eb409460db5179431c91897e))
* **core:** adds a new created pset with the IfcPropertiesManager to the relations index ([000bc06](https://github.com/ThatOpen/engine_components/commit/000bc060a82338febf9f7e21db4da4ac06c82824))
* **core:** adds a way to find related entites based on inverse attributes to IfcRelationsIndexer ([86c5cc0](https://github.com/ThatOpen/engine_components/commit/86c5cc0f51d7a2e9551efafa8051e7efe16db137))
* **core:** adds Declares, HasContext, Controls, IsNestedBy and Nests to IfcRelationsIndexer ([65db4fb](https://github.com/ThatOpen/engine_components/commit/65db4fb3389fc8a25c27d21c7f6f4a60102351a0))
* **core:** adds GUID to FragmentIdMap functionality to FragmentsManager ([5de15cc](https://github.com/ThatOpen/engine_components/commit/5de15ccf03bb0495025b56b15d7c8c7fb94b9787))
* **core:** adds new relation in IfcRelationsIndexer ([23c99ee](https://github.com/ThatOpen/engine_components/commit/23c99ee54aa30046e84bda902d45b171ceb504bf))
* **core:** allow the mesh culler to update instanced meshes count ([961d03d](https://github.com/ThatOpen/engine_components/commit/961d03d97972ed2d4ed38d4861d82aec68761d17))
* **core:** allows the FragmentsManager to transform objects into the base coordinate system ([c0d160b](https://github.com/ThatOpen/engine_components/commit/c0d160b7df0fd1fee15b02a7ab850da89bd0ae30))
* **core:** BCF Integration ([#474](https://github.com/ThatOpen/engine_components/issues/474)) ([27f3e30](https://github.com/ThatOpen/engine_components/commit/27f3e3038703a1b7b007476a5856c5de16b733ee))
* **core:** fast cast shadows ([f726fc3](https://github.com/ThatOpen/engine_components/commit/f726fc3aa03057680ab0e8e5aa2459739a8c2f47))
* **core:** implement model cloning and subsets ([4aba42e](https://github.com/ThatOpen/engine_components/commit/4aba42ef51c3ecd911d9a3eb917885df0ceffdfc))
* **front:** add highlight autotoggle feature ([845e695](https://github.com/ThatOpen/engine_components/commit/845e695f4fe0d57a0c5576ac2878485f8af8b44b))
* **front:** add sections ([0fab35c](https://github.com/ThatOpen/engine_components/commit/0fab35c6de2667863e99015f019d4b376cf8e647))
* **front:** add selectable items to highlighter ([68a0440](https://github.com/ThatOpen/engine_components/commit/68a044060939759ab01e9f5e88ccb46663414f88))
* **front:** allow decimal control in simple dimension line ([169dc01](https://github.com/ThatOpen/engine_components/commit/169dc016699b0be82a3f5bf87a02a5bc98fe94c7))
* **front:** allow static elements when streaming ([974e254](https://github.com/ThatOpen/engine_components/commit/974e2546052a7f7b43568253c053bdf72bb87675))
* **front:** allow to customize vertex picker preview ([18e0042](https://github.com/ThatOpen/engine_components/commit/18e0042d88055fb96ebd124bce73d685ff5b2805))
* **front:** allows to specify when select and hover are enabled in the highlighter ([24b4280](https://github.com/ThatOpen/engine_components/commit/24b42801223b416ca2b73dd25e5a69271b178ec4))
* **front:** implement visibility for area measurements ([5633e42](https://github.com/ThatOpen/engine_components/commit/5633e42764ecdb3bd1eaa4971deee75881fe8eb0))
* **front:** misc improvements to streamer ([4abff07](https://github.com/ThatOpen/engine_components/commit/4abff07731ad83ed269fadb181beea725f4fe154))
* **front:** outliner component ([edcfbca](https://github.com/ThatOpen/engine_components/commit/edcfbcaf0dabc5b41e8a3eb234e216857a000db5))
* store spatial elements within fragment group ([6ec2e7b](https://github.com/ThatOpen/engine_components/commit/6ec2e7b27c5234f39dc37876201915e7d6b0c6a5))


### Bug Fixes

* add window to setInterval to avoid typescript complains ([bb43eef](https://github.com/ThatOpen/engine_components/commit/bb43eefbd5a178828944c6725451e88e9d46fb27))
* allow to delete all clipping planes without destroying floor plans ([80c72af](https://github.com/ThatOpen/engine_components/commit/80c72af10394e9d143371d77a52aee338dd0cd86))
* **core:** accepts Vector3 to apply the base coordinate system in FragmentsManager ([498df6d](https://github.com/ThatOpen/engine_components/commit/498df6db422df487a5c550e14229ae48c52a989a))
* **core:** camera felt heavy on close distances ([5ceb4e6](https://github.com/ThatOpen/engine_components/commit/5ceb4e6ecdaafcd703e6b5f4ab2abec5f1612fdc))
* **core:** correct bounding boxer behavior for fragment meshes ([17a0fba](https://github.com/ThatOpen/engine_components/commit/17a0fba6590776a361354ac0deac2563f2385248))
* **core:** correct indexer bug skipping nested spatial elements ([13c92dd](https://github.com/ThatOpen/engine_components/commit/13c92dd2b299b95a10062a6ffb2c6eb8247f74bf))
* **core:** IfcPropertiesManager not working for IFC4X3_ADD2 schema ([e2ac2fe](https://github.com/ThatOpen/engine_components/commit/e2ac2feab35389627d211f88157ef4b3a13f8b1b))
* **core:** IfcRelationsIndexer wasn't processing all relations ([54ef882](https://github.com/ThatOpen/engine_components/commit/54ef8825b8232e2e95953706822f6c5769b053c6))
* **core:** improve ifc memory clean logic ([8d3099c](https://github.com/ThatOpen/engine_components/commit/8d3099cd9fd634fded495e78752700197e199e2c))
* **core:** updates base coordination matrix from FragmentsManager ([6fe6a82](https://github.com/ThatOpen/engine_components/commit/6fe6a8257ee3faa5489d5a46c4840e4e62eaf2fa))
* **core:** use customLocateHandler in IfcLoader ([9e8cb41](https://github.com/ThatOpen/engine_components/commit/9e8cb41da8917a79a8ae559394203e397b96fb41))
* correct highlighter not working with exploded items ([882e872](https://github.com/ThatOpen/engine_components/commit/882e872053e7b0062315e043627bdedd0d5167e2))
* correct ifcloader disposing bug ([35bfd05](https://github.com/ThatOpen/engine_components/commit/35bfd0543744418f5ded9114181d1eaf41489de9))
* correct IfcPropertiesTiler progress event ([fe7c112](https://github.com/ThatOpen/engine_components/commit/fe7c112d7968a24cb6c5ed0cbb793f79f70c06ff))
* correct indexer check bug ([b4cab8e](https://github.com/ThatOpen/engine_components/commit/b4cab8ea75313c8833553287e9370916b135265c))
* correct visibility issue when updating edges planes ([db352b7](https://github.com/ThatOpen/engine_components/commit/db352b77bc9a1d15a59120d7dc25cdf659ef1a3d))
* correct web-ifc memory leak when disposing ([4f56f19](https://github.com/ThatOpen/engine_components/commit/4f56f1919f770ba972e0afe5ecf2668b5c6ff4dd))
* force context release when disposing renderers ([11e0860](https://github.com/ThatOpen/engine_components/commit/11e0860e2efe815fc0bd868a90b84ffe1ce8ddd6))
* **front:** apply model coordination to edges ([44a8b60](https://github.com/ThatOpen/engine_components/commit/44a8b60c5b28540d0b2c58d573534387255b6865))
* **front:** correct face measurement position when model has transform ([086855d](https://github.com/ThatOpen/engine_components/commit/086855d1bf93c2e1a555c3ee2b9b754e66913919))
* **front:** correct sections camera dimensioning ([9df0679](https://github.com/ThatOpen/engine_components/commit/9df067914f0728d82826e4445ed137fb05db6019))
* **front:** correct streamer error when deleted non-streamed model ([863d24b](https://github.com/ThatOpen/engine_components/commit/863d24b2ffa2d35660105224b4f7d813440ae992))
* **front:** correct tiles clean cache time computation ([90a4fdd](https://github.com/ThatOpen/engine_components/commit/90a4fdd262178fbb8a27aead3aa920813305d40c))
* **front:** fix edges clipping plane visibiility ([d94d9d4](https://github.com/ThatOpen/engine_components/commit/d94d9d41f0360f7837622d2d462f8e703286b517))
* **front:** fix highlighter color reset logic with backup color ([5ae34a0](https://github.com/ThatOpen/engine_components/commit/5ae34a0cfca6e15b28d6d475ccb7d0bd226b67d1))
* **front:** make highlightByID toggle only when picking ([e5b8790](https://github.com/ThatOpen/engine_components/commit/e5b87904414268ffd3edcc5e860781f4c9f2b942))
* **front:** solve outline rendertarget clear ([b1bb30a](https://github.com/ThatOpen/engine_components/commit/b1bb30a478358703299b8eb608afd01adaf85048))
* hide vertex picker preview when disabling it ([bed797f](https://github.com/ThatOpen/engine_components/commit/bed797f8b353061a2ff5fde19c7ea178542224fa))
* **main:** make isStreamed property available in fragment load event ([9ca135e](https://github.com/ThatOpen/engine_components/commit/9ca135eb3c3c8eb17fcdf45fbd3764a31a01ece3))
* **main:** prevent postprocess renderer from being resized to 0 ([eea990c](https://github.com/ThatOpen/engine_components/commit/eea990cc8523225dff8d786da39a23195538f203))
* solve area measurement breaking when hitting "enter" with 1 point ([5b21744](https://github.com/ThatOpen/engine_components/commit/5b21744f135d28bf811588b0101437ff635ec04f))
* solve clipping fills outline bug ([2070c08](https://github.com/ThatOpen/engine_components/commit/2070c08254a77e5a7270ab6f565691b00b847356))

## [2.1.0](https://github.com/ThatOpen/engine_components/compare/v2.0.1...v2.1.0) (2024-07-10)


### Features

* add indexedDB cleaner, fix lost geometries in streamer ([30e8ef0](https://github.com/ThatOpen/engine_components/commit/30e8ef0dc1a87daab555847ea0e4e48ebfcd46dc))
* clipping fills highlight ([09b464d](https://github.com/ThatOpen/engine_components/commit/09b464db1ffdcbc60bdf4b4c838af5d403f10e5f))
* **core:** adds ModelIdMap and its conversion to/from FragmentIdMap ([55258be](https://github.com/ThatOpen/engine_components/commit/55258be95f92ec4e05d97425d9c7f81056fd6590))
* **core:** adds name to SimpleWorld and creation events to Worlds ([9c39280](https://github.com/ThatOpen/engine_components/commit/9c392804d4260b2ae5a9f4a87f1e77562a7e2a68))
* **core:** updates classifier to allow spatial structure grouping ([038629e](https://github.com/ThatOpen/engine_components/commit/038629eac49d0188bca8337fd75dcdce12c705ea))
* **core:** updates IfcMetadataReader ([704f45b](https://github.com/ThatOpen/engine_components/commit/704f45b8c89f59b2ef35be668bf15f31f5de7cd5))
* expose streamer objects ([988f92e](https://github.com/ThatOpen/engine_components/commit/988f92efd787c496707071ded182ceeddcd97995))
* improves some methods ([55b802a](https://github.com/ThatOpen/engine_components/commit/55b802a443553b5a00a31f812ad1100b155005e1))
* move volume computation logic to core ([d2a4ed3](https://github.com/ThatOpen/engine_components/commit/d2a4ed3399faae95e35c9f803ec2289728dc6f5f))
* update fragments to support globalId ([3401fb2](https://github.com/ThatOpen/engine_components/commit/3401fb20ec9066a937b3bba8e997661b2c2c38aa))


### Bug Fixes

* add guard check for clipping planes object materials ([8edc0cc](https://github.com/ThatOpen/engine_components/commit/8edc0cc04a3f6fa2a4fc6eb409dac9782aa3d7d9))
* add support for decimeters and centimeters ([722e8cb](https://github.com/ThatOpen/engine_components/commit/722e8cb3518a52b47c58d563c99f1eb7eb5af627))
* **core:** updates package to auto get wasm on IfcLoader ([b187466](https://github.com/ThatOpen/engine_components/commit/b187466d8dfd79984098589374405d83140910dc))
* correct camera and grid disposal logic ([fead481](https://github.com/ThatOpen/engine_components/commit/fead481f02f39c3ea1779c267cf4b30d6c9437b6))
* correct culler when displaying coordinated models ([471e8f2](https://github.com/ThatOpen/engine_components/commit/471e8f2f189e098c7026c621d3bebd176cb01063))
* correct hider hide all / show all logic ([782a0b3](https://github.com/ThatOpen/engine_components/commit/782a0b32273edbe8186eb8a4ce40568cd621260f))
* correct marker bug for working with multiple worlds ([54834e8](https://github.com/ThatOpen/engine_components/commit/54834e8a433a97ebff310206798eebe29696f886))
* correct multiple streamed model coordination ([a5220a7](https://github.com/ThatOpen/engine_components/commit/a5220a714e2f8c8cfcd7da3b0f16bb0e88b714ba))
* correct world event disposal logic ([ee5c0fb](https://github.com/ThatOpen/engine_components/commit/ee5c0fba3698568d354836eae14ebd26baef8080))
* **FaceMeasurement:** handle world.isDisposing when setting visibility ([#416](https://github.com/ThatOpen/engine_components/issues/416)) ([68b40c1](https://github.com/ThatOpen/engine_components/commit/68b40c1f433dad22852fa0fbbcf346b569d5428a))
* **front:** custom highlighter colors were overwritten by select and hover ([d95e168](https://github.com/ThatOpen/engine_components/commit/d95e1680d1d869abef3078801b34a57dc242b048))
* make classifier take ifc spaces into account for spatial structure ([e54e13b](https://github.com/ThatOpen/engine_components/commit/e54e13ba53eef49e23d96f4b328e7370008ad73f))
* **properties-utils:** fix decimiter units ([#440](https://github.com/ThatOpen/engine_components/issues/440)) ([3c83e02](https://github.com/ThatOpen/engine_components/commit/3c83e028ac028023d3c4c0bf797627efd172097d))
* remove incorrect import extension ([682a325](https://github.com/ThatOpen/engine_components/commit/682a3251f658c19a23bb81c35ec3630fa850a65f))
* solve clip planes deletAll infinite loop ([8e40173](https://github.com/ThatOpen/engine_components/commit/8e40173689279757731c207db70b5ea113c75c3d))
* solve postproduction custom pass quality degradation when resizing ([2506de6](https://github.com/ThatOpen/engine_components/commit/2506de6ebd2292e6350487278e5578509d7a333a))
* substitute "pointermove" by "cursormove" for touchscreens ([9e4a126](https://github.com/ThatOpen/engine_components/commit/9e4a126945aae305e1907d9c4d6af926e0ad0f91))
* updates MeasurementUtils to only return volume ([79b252c](https://github.com/ThatOpen/engine_components/commit/79b252c3d5b5fb242d0d996603dc02849e09b1bf))

## [2.0.1](https://github.com/ThatOpen/engine_components/compare/v1.5.0...v2.0.1) (2024-05-22)


### Features

* add angle measurement ([70a57c9](https://github.com/ThatOpen/engine_components/commit/70a57c99e564f94279c1c9dcde4ae0ba7c3df1b1))
* add civil components ([3834944](https://github.com/ThatOpen/engine_components/commit/3834944e58ceb14ca99777a19d8e40ed153c46c1))
* add culler to plans example ([5a96f9c](https://github.com/ThatOpen/engine_components/commit/5a96f9cbe8ea9585f7f70504233c74f5c48b717e))
* add edges clipper tutorial ([05cd9c8](https://github.com/ThatOpen/engine_components/commit/05cd9c8d0be28aac225255cf769fa0a3089e932f))
* add facedimension tutorial ([5bec282](https://github.com/ThatOpen/engine_components/commit/5bec282f8d5fad186f5d553cf09363853cc961c0))
* add fragment bounding box ([1cb8fe9](https://github.com/ThatOpen/engine_components/commit/1cb8fe9b234fc0d583929b553664d445d0ff39b3))
* add fragment classifier ([2bff19c](https://github.com/ThatOpen/engine_components/commit/2bff19c7bffffc8611574fd1594cd808fa8594ec))
* add fragment colorize feature ([0c109b3](https://github.com/ThatOpen/engine_components/commit/0c109b33e321d19d629a96b4bddc1f650f6f9019))
* add fragment exploder ([1a31345](https://github.com/ThatOpen/engine_components/commit/1a31345e0b112aa1b29cf72f631d2681b277a0a2))
* add fragment hider ([853fb89](https://github.com/ThatOpen/engine_components/commit/853fb897e484869f41923d93c1d84702f333c5c3))
* add fragment ifc loader example ([3252f56](https://github.com/ThatOpen/engine_components/commit/3252f566141b592aa8994206d6fc6d64fa86e815))
* add fragment streamer ([9bea629](https://github.com/ThatOpen/engine_components/commit/9bea629b7ea2f242cd956c50c4aff595c654b812))
* add highlighter ([d2bcb7e](https://github.com/ThatOpen/engine_components/commit/d2bcb7e4af90e49ba03de6cc4ecf7f42c0ee349b))
* add json exporter tutorial ([85dbf40](https://github.com/ThatOpen/engine_components/commit/85dbf40173d3621b7732cb1d5a27e5d5f5389bcf))
* add measurement utils tutorial ([c9333e9](https://github.com/ThatOpen/engine_components/commit/c9333e945250aede5bfb001d3ba6239bb37782a1))
* add measurements ([173c4f3](https://github.com/ThatOpen/engine_components/commit/173c4f3f7d694b865161ea36bb0438d211c756d7))
* add minimap ([16a17c3](https://github.com/ThatOpen/engine_components/commit/16a17c3a24e084025d2d07c76cd417ee7d98cad6))
* add minimap tutorial ([e0db231](https://github.com/ThatOpen/engine_components/commit/e0db231156d776490173fdeb3cd645bcb2005d73))
* add orthoperspective camera tutorial ([4c16880](https://github.com/ThatOpen/engine_components/commit/4c16880d71f87ba4d7337e838f57413a8400a5eb))
* add plans tutorial ([d90272b](https://github.com/ThatOpen/engine_components/commit/d90272b9d15e9d65e4b9b8b8cd6bc06bd5409d61))
* add relations map to streamed properties ([d6acb57](https://github.com/ThatOpen/engine_components/commit/d6acb577adca4b1bda0a1522a60e68a39fe74c76))
* add shadow dropper ([6d2282e](https://github.com/ThatOpen/engine_components/commit/6d2282ef9c21a65b762ecf29f7deb08281b9634c))
* add simple world tutorial ui ([41e353e](https://github.com/ThatOpen/engine_components/commit/41e353e377f5b40c22a34e783ca1fa7c8c023307))
* add streamed properties ([af39121](https://github.com/ThatOpen/engine_components/commit/af39121cf3cf8f8dcd61b4dfd42f51978383b5c5))
* add support for shared world items ([f6b716c](https://github.com/ThatOpen/engine_components/commit/f6b716c06ee64230af7011c0462a583585b6177f))
* add various front components ([69e2a8d](https://github.com/ThatOpen/engine_components/commit/69e2a8d69800fbd89e056b6d0999c028388edf2d))
* add volume dimension tutorial ([cdcef4c](https://github.com/ThatOpen/engine_components/commit/cdcef4c3714a6596057ce9d4d27bd78eba74c474))
* bounding boxes tutorial ([779f962](https://github.com/ThatOpen/engine_components/commit/779f962a460a50fc2a277deb14d8836e4f646905))
* bump version ([f4c2f76](https://github.com/ThatOpen/engine_components/commit/f4c2f7611eb9bf2920399aec49b1226035b159ce))
* civil tutorials ([#365](https://github.com/ThatOpen/engine_components/issues/365)) ([63b26aa](https://github.com/ThatOpen/engine_components/commit/63b26aaff4b00239da695a28dde8bc647bf9cbd3))
* classifier tutorial ([f0f863f](https://github.com/ThatOpen/engine_components/commit/f0f863f62dac676c4a0d0dee0969f772e44db6c5))
* converted the repository to a monorepo ([#363](https://github.com/ThatOpen/engine_components/issues/363)) ([15f407a](https://github.com/ThatOpen/engine_components/commit/15f407a9f19989f839b705c85ca97629516b2af5))
* **core:** changes and improves IfcPropertiesIndexer to IfcRelationsIndexer ([#380](https://github.com/ThatOpen/engine_components/issues/380)) ([bd68aa6](https://github.com/ThatOpen/engine_components/commit/bd68aa64ce62ee270bb8f6acdaa832a2c61428ce))
* **core:** improves IfcRelationsIndexer.processFromWebIfc ([#384](https://github.com/ThatOpen/engine_components/issues/384)) ([8b1ab2f](https://github.com/ThatOpen/engine_components/commit/8b1ab2f42c0ccc227d54d58de612c426806948fb))
* **core:** updates IfcRelationsIndexer ([fd8eb82](https://github.com/ThatOpen/engine_components/commit/fd8eb82ed2aa3035c6e6e97ad482ab13556c08b2))
* **core:** updates IfcRelationsIndexer to allow indexations from WebIfc ([#381](https://github.com/ThatOpen/engine_components/issues/381)) ([107d765](https://github.com/ThatOpen/engine_components/commit/107d765a4a9956f0d8bd0e26706ff77ae26bd280))
* decouple css 2d renderer from core renderer ([867c8ec](https://github.com/ThatOpen/engine_components/commit/867c8ec6856f538c2136d12a12ea6a050a0b9992))
* exploder tutorial ([ac5bdb2](https://github.com/ThatOpen/engine_components/commit/ac5bdb2b932a70a963d82489ac2caaad00cc3ac1))
* expose civil components ([fde895b](https://github.com/ThatOpen/engine_components/commit/fde895b54236564eddc23983960b8b592f5724a3))
* finish civil component examples ([b2fea99](https://github.com/ThatOpen/engine_components/commit/b2fea99043f804f395eb63192b2112b53988f79b))
* finish clipper and materials examples ([76301df](https://github.com/ThatOpen/engine_components/commit/76301df490842eb5f2bb93dd2816ec21274ed9e6))
* finish fragments tutorials ([d89966f](https://github.com/ThatOpen/engine_components/commit/d89966f4e86ce86bf1725974199f60854916807b))
* finish refactoring the repo ([909108a](https://github.com/ThatOpen/engine_components/commit/909108acf0d15def874d5ff08962972fa4936602))
* first implementation of color-based highlihgter ([9278242](https://github.com/ThatOpen/engine_components/commit/92782422be5c5b50cf16d155510f6885a2ca500c))
* fix civil line width aspect ([a2c83a5](https://github.com/ThatOpen/engine_components/commit/a2c83a5aabdeea3b9984345a5334f1b302cf5d4f))
* fix front build errors ([95d0632](https://github.com/ThatOpen/engine_components/commit/95d063236583b6b08417c217dbeacb29cf9db81e))
* fix simple renderer resize event ([e44e32a](https://github.com/ThatOpen/engine_components/commit/e44e32a2f097ae2eb3fd01827c73dcadbf943962))
* implement clipper ([b105266](https://github.com/ThatOpen/engine_components/commit/b105266c408a94eca91b1f3bb893474d4e03a5bc))
* implement culler ([2dc87d8](https://github.com/ThatOpen/engine_components/commit/2dc87d8c23188aa8f275289c72f7724e41d2947f))
* implement fragment ifc loader ([7c8ef69](https://github.com/ThatOpen/engine_components/commit/7c8ef69b4d8a0d10cba6a4856f73a3e230007639))
* implement fragment manager ([4601946](https://github.com/ThatOpen/engine_components/commit/4601946e41abde5dab47cd1f3982500ad29eda03))
* implement grid ([bf4a18c](https://github.com/ThatOpen/engine_components/commit/bf4a18c1f27e054b1678cd875cf8096606bc8e9b))
* implement html renderer ([680e3d6](https://github.com/ThatOpen/engine_components/commit/680e3d6d5dbeab78836684d194152368b3c67cb6))
* implement materials ([ead30d4](https://github.com/ThatOpen/engine_components/commit/ead30d48ded9b183a5b8c9f21a27ae8d4978b61c))
* implement raycaster ([6506e94](https://github.com/ThatOpen/engine_components/commit/6506e9428b51c570c12b8468b47456a0e717d7b5))
* improve indexer tutorial ([2ff8d9c](https://github.com/ThatOpen/engine_components/commit/2ff8d9cdb57c2d256c35ca4df057906aeae854bc))
* improve orthoperspective camera tutorial ([8155778](https://github.com/ThatOpen/engine_components/commit/8155778a79847f68a39c71bb125bbac7ba7847f8))
* integrated vite ([#359](https://github.com/ThatOpen/engine_components/issues/359)) ([48a20ef](https://github.com/ThatOpen/engine_components/commit/48a20efe483425ade798c962a7f965b35a0bdd9b))
* make first world example work ([d0aca80](https://github.com/ThatOpen/engine_components/commit/d0aca800809c4e1de2892f97bf06a85ef2f2d99f))
* make worlds type generic ([817907d](https://github.com/ThatOpen/engine_components/commit/817907d2d711b77b39a043ca47b443391a851fcc))
* more dimension tools ([3547b8f](https://github.com/ThatOpen/engine_components/commit/3547b8f1e7af50c7acd0c62734f609967735af53))
* progress with civil tutorials ([e67e980](https://github.com/ThatOpen/engine_components/commit/e67e980d7d6b9972464bbb16574969f01d1a741e))
* push last minute changes ([3c39e13](https://github.com/ThatOpen/engine_components/commit/3c39e13ff2dbd7a64ec5fcab5f3020f05b50dd44))
* push progress ([b86e2c4](https://github.com/ThatOpen/engine_components/commit/b86e2c4edd7bae9846d1c3e0a5057ba361a9bd48))
* reimplement zoom to selection ([45b74f4](https://github.com/ThatOpen/engine_components/commit/45b74f47e300b857732eca485aa434aeea08439b))
* restructure repo ([bd3b964](https://github.com/ThatOpen/engine_components/commit/bd3b964c455d2c82d7c368285c21e8a55741fe78))
* set up geometry streaming examples ([4fec74d](https://github.com/ThatOpen/engine_components/commit/4fec74d74657745144c12f31db608a5741b200fc))
* set up scoped publishing ([5acce7f](https://github.com/ThatOpen/engine_components/commit/5acce7faa3ca20bcd31d86fc1378e59794d8e755))
* start big refactor ([cf2e2f7](https://github.com/ThatOpen/engine_components/commit/cf2e2f7cec8b35d13f525f3e6d3da7eb1d31de67))
* update fragment dependency ([ce092f0](https://github.com/ThatOpen/engine_components/commit/ce092f056a24cd82bfb607421366ca899293f115))
* update indices in streamed properties ([09ee838](https://github.com/ThatOpen/engine_components/commit/09ee838d273aa937c3bd14bacb6345e1d43c257f))
* update postproduction renderer example ([6f12b9d](https://github.com/ThatOpen/engine_components/commit/6f12b9d63cf4d5ceb055a217bf0b63edf82c512d))
* update shadow dropper tutorial ([aee26f9](https://github.com/ThatOpen/engine_components/commit/aee26f9bef52e668f9853488bbe66344e557b770))
* updates FragmentManager.load ([#385](https://github.com/ThatOpen/engine_components/issues/385)) ([cfb7a04](https://github.com/ThatOpen/engine_components/commit/cfb7a04e47043ae89868ef01b7b144eed8f92823))


### Bug Fixes

* **core:** updates IfcRelationsIndexer tutorial ([e19954b](https://github.com/ThatOpen/engine_components/commit/e19954be12fc81431905c990f5a1ebcb6fc96135))
* correct FragmentIfcLoader example ([fc953a6](https://github.com/ThatOpen/engine_components/commit/fc953a6fce8e2160b690a58333a65144a9ac1914))
* correct geometry tiler ([d1352d8](https://github.com/ThatOpen/engine_components/commit/d1352d87cb81b1ab1f0ed7c2bc82050682d4ddfe))
* improve fragment streamer behavior ([4a03c7c](https://github.com/ThatOpen/engine_components/commit/4a03c7cd21aa11bb6e18b3b4c866d3b02e8529a8))
* improve marker example ([125fe02](https://github.com/ThatOpen/engine_components/commit/125fe02b20dee5705d3691ae7acfb1bf38c1349c))
* improve measurement face detection ([444e81a](https://github.com/ThatOpen/engine_components/commit/444e81a99a9f68690abe89a3ecfc3715e39e9093))
* improve ortho camera aspect update ([4c7c6fc](https://github.com/ThatOpen/engine_components/commit/4c7c6fc66919e1083ef195ca9969553c31f310ef))
* improve simple renderer resize event ([d5b4f59](https://github.com/ThatOpen/engine_components/commit/d5b4f59244b6ad311ce37ec5b04af363966b6e87))
* regenerate yarn.lock file ([319b2ac](https://github.com/ThatOpen/engine_components/commit/319b2aca8673c3af789e81a87bc5c718a6f81207))
* solve build errors ([f69926f](https://github.com/ThatOpen/engine_components/commit/f69926fa774f381fc4f08558fe4873526bac3e0b))


### Miscellaneous Chores

* release 2.0.1 ([cb3cb53](https://github.com/ThatOpen/engine_components/commit/cb3cb539c83aaf9d89aa362a53e327d1c50e669c))

## [1.5.0](https://github.com/ThatOpen/engine_components/compare/v1.4.5...v1.5.0) (2024-04-11)


### Features

* add 3d alignment navigator ([0e76a97](https://github.com/ThatOpen/engine_components/commit/0e76a9757cde3e522f6ccd3186988f5f1fdea25a))
* add 3d road marker ([bee851a](https://github.com/ThatOpen/engine_components/commit/bee851a8b627d528c6c9e29d9fed87fbace3048a))
* add basic civil plan annotations ([#336](https://github.com/ThatOpen/engine_components/issues/336)) ([5d9ddc8](https://github.com/ThatOpen/engine_components/commit/5d9ddc83986851fc152ed3e26d9a66d55447354b))
* add basic LOD system using OBBs ([a4faf2f](https://github.com/ThatOpen/engine_components/commit/a4faf2f1080822a409ebaaaf8684b46c385ee7f4))
* add category filter to road cross section ([0d28358](https://github.com/ThatOpen/engine_components/commit/0d283587a0ca1535202a6be1a6f4a32adbbbd9be))
* add plan / elevation marker ([e793f4e](https://github.com/ThatOpen/engine_components/commit/e793f4e804f6bf7b4774362b4dc8a94841bd1b29))
* add reverse reference to civil items ([77221c2](https://github.com/ThatOpen/engine_components/commit/77221c2aee67bcf555af6ec95e650f10d7ffeee1))
* anchor position ([#333](https://github.com/ThatOpen/engine_components/issues/333)) ([5c0ebba](https://github.com/ThatOpen/engine_components/commit/5c0ebba19134925b7259ab4f3d4be4060a1ff850))
* constant KPs and KP-Station Manager ([#351](https://github.com/ThatOpen/engine_components/issues/351)) ([2bdf974](https://github.com/ThatOpen/engine_components/commit/2bdf974f0176f1987bad46406e01982fa639c548))
* coordinate elevation view with plan view ([7d4ed39](https://github.com/ThatOpen/engine_components/commit/7d4ed394db255b99721b32705431b7319982a3a6))
* finish splitting down civil ([ffd67e0](https://github.com/ThatOpen/engine_components/commit/ffd67e0df57fc984156befa844fc0cea8aae7beb))
* finish streaming tutorial ([652ecd7](https://github.com/ThatOpen/engine_components/commit/652ecd729bb9fcafa4a974ec981af97581d0717f))
* first version of road cross section ([613dec1](https://github.com/ThatOpen/engine_components/commit/613dec1308726b91aadff1e354ca6d698366b2bb))
* improve 2d civil view navigation ([#325](https://github.com/ThatOpen/engine_components/issues/325)) ([c72e6cf](https://github.com/ThatOpen/engine_components/commit/c72e6cf6c7a1a06ef53ef41edf2d3246c70d7590))
* improve alignment curves appearance ([8bc0f54](https://github.com/ThatOpen/engine_components/commit/8bc0f546fae1e41c5798ef3ba76471622ed01263))
* improve civil plan highlighter ([bc118db](https://github.com/ThatOpen/engine_components/commit/bc118db1e564a79a7773a02e18db9191c8949f17))
* improve coordination logic ([ec14e54](https://github.com/ThatOpen/engine_components/commit/ec14e5425b66bbfac85806305f5c8ee7a3c259a0))
* improve tiles, make tutorial ([eedaa55](https://github.com/ThatOpen/engine_components/commit/eedaa559bc4491441b8392ff98deb69d372acf95))
* improve vertical alignment style ([bc9bd41](https://github.com/ThatOpen/engine_components/commit/bc9bd41238d630f03416deb8e9d918a423da28dd))
* KP Manager + Supporting Plan-Navigator + Cleanup ([#355](https://github.com/ThatOpen/engine_components/issues/355)) ([46d8a94](https://github.com/ThatOpen/engine_components/commit/46d8a94a88505473033cf3d08d9cc0ccf90f353a))
* make 2d scene XY scale editable ([0575471](https://github.com/ThatOpen/engine_components/commit/0575471033d3996210c5ed21f3c681b6784ca81f))
* make cross section work with marker ([8ce261d](https://github.com/ThatOpen/engine_components/commit/8ce261d24288d03dd6a71cc603d7839a8ceb5603))
* marker info elevation ([#354](https://github.com/ThatOpen/engine_components/issues/354)) ([1f762af](https://github.com/ThatOpen/engine_components/commit/1f762af388936822512d00f6be08f12789640c7c))
* markers elevation ([#357](https://github.com/ThatOpen/engine_components/issues/357)) ([ceb9c51](https://github.com/ThatOpen/engine_components/commit/ceb9c5161a08d7ee6300371f63470876c0ab02ce))
* Markup Tool Labels ([#356](https://github.com/ThatOpen/engine_components/issues/356)) ([705cfe5](https://github.com/ThatOpen/engine_components/commit/705cfe5cef101a76882c5fc50788c0d9dcf19258))
* more improvements for highlighter ([be2d44d](https://github.com/ThatOpen/engine_components/commit/be2d44d424ddc7c05ac2aa9e073f4f5fbe8cb217))
* rename civil classes ([83e7092](https://github.com/ThatOpen/engine_components/commit/83e70928147ebc10ca55c748518cfefe99c55096))
* revert anchor position ([#333](https://github.com/ThatOpen/engine_components/issues/333)) to manually pick changes ([7d42dca](https://github.com/ThatOpen/engine_components/commit/7d42dca582c290d527505b5d75cddd122a30784a))
* start spitting down civil ([4b9b086](https://github.com/ThatOpen/engine_components/commit/4b9b0863ea992da9f331e22b2dfc853b696e5cb1))
* update fragments ([06d60f6](https://github.com/ThatOpen/engine_components/commit/06d60f6a6f6bffcac6fe9d3d22f8fb88d4431125))


### Bug Fixes

* add ifc items to components mesh set ([c758266](https://github.com/ThatOpen/engine_components/commit/c7582668833ca57c82966226fca326af7d893cf4))
* Clearing Clusters ([#353](https://github.com/ThatOpen/engine_components/issues/353)) ([ff322f8](https://github.com/ThatOpen/engine_components/commit/ff322f85e8c0679e1c88cfc2da42132b2a05274d))
* correct horizontal alignment measurement marks ([fc3de10](https://github.com/ThatOpen/engine_components/commit/fc3de10825e8ae6bece26784a23585a0406033dc))
* correct infinite 2d grid ([55e66cf](https://github.com/ThatOpen/engine_components/commit/55e66cfa9fb7884de6e2b3c31196f1c94b3630a6))
* correct navigator ([51158ec](https://github.com/ThatOpen/engine_components/commit/51158ec961492a94d53c874874409ac5291f427e))
* correct some of the previous PR's mistakes ([dd1e7ae](https://github.com/ThatOpen/engine_components/commit/dd1e7aec2670b360e903033f969fc34ac9a4194b))
* get rid of error when removing streamed model from scene ([#346](https://github.com/ThatOpen/engine_components/issues/346)) ([81d5279](https://github.com/ThatOpen/engine_components/commit/81d5279c99c404882c57160fba14d49ddb778863))
* ifcPropertiesProcessor.getProperties ([#321](https://github.com/ThatOpen/engine_components/issues/321)) ([9aa8ba1](https://github.com/ThatOpen/engine_components/commit/9aa8ba1d8bd1bb7faca86cf0cb12f52101217057))
* improve coordinate, correct excluded categories ([699ce7d](https://github.com/ThatOpen/engine_components/commit/699ce7d49c45473d15386b6b879aaf3627a68867))
* make fragment loading continue when data not found ([9abb99c](https://github.com/ThatOpen/engine_components/commit/9abb99ce95c7a4d8bbe3886ef78cacbdb38fb248))
* restore camera animation navigation ([3531943](https://github.com/ThatOpen/engine_components/commit/3531943dab4a46513314d8b3a197555fc0bd99b2))
* revert juan breaking PR ([62257c0](https://github.com/ThatOpen/engine_components/commit/62257c0efb7a1c69260470cd8168e83472cea135))
* revert previous broken commit ([d805404](https://github.com/ThatOpen/engine_components/commit/d80540413880e6f9b3318d8ba1576522426de526))
* revert web-ifc dependency due to streammeshes missing ([cab60f5](https://github.com/ThatOpen/engine_components/commit/cab60f569ef44f248b8f2ce7061b782de6a5287d))
* solve face measurement component bugs ([3e41b37](https://github.com/ThatOpen/engine_components/commit/3e41b3776da8a996a9956e39386d0c39c33d39e5))
* various corrections ([03c70f4](https://github.com/ThatOpen/engine_components/commit/03c70f422ba64ad024b54bc353029ce2264740b5))

## [1.4.5](https://github.com/ThatOpen/engine_components/compare/v1.3.0...v1.4.5) (2024-02-28)


### Features

* add catch for property streaming ([5bca000](https://github.com/ThatOpen/engine_components/commit/5bca0002d341a14e53ad326c3494279c9cc3919f))
* BIM tiles ([#301](https://github.com/ThatOpen/engine_components/issues/301)) ([83f37b7](https://github.com/ThatOpen/engine_components/commit/83f37b759b081e58972f20527a770ec1602ce14b))
* moved mapbox to peer dependencies ([#265](https://github.com/ThatOpen/engine_components/issues/265)) ([91d69a9](https://github.com/ThatOpen/engine_components/commit/91d69a9010bd2d207b102919a0b4319222d5eaa4))
* remove merged fragments ([#295](https://github.com/ThatOpen/engine_components/issues/295)) ([27cfe4c](https://github.com/ThatOpen/engine_components/commit/27cfe4cdcf95cb8c0fcf70f295fec0bb57f82f99))
* road navigator ([#287](https://github.com/ThatOpen/engine_components/issues/287)) ([93206b9](https://github.com/ThatOpen/engine_components/commit/93206b93d95b256c39daa24818c25afd6b89157d))
* Set log level of FragmentIfcLoader ([#273](https://github.com/ThatOpen/engine_components/issues/273)) ([d7b5817](https://github.com/ThatOpen/engine_components/commit/d7b5817aae86c5342025960f0b4e4ee37458889d))
* Set log level of FragmentIfcLoader ([#281](https://github.com/ThatOpen/engine_components/issues/281)) ([8a7be0a](https://github.com/ThatOpen/engine_components/commit/8a7be0a5f879d886e34cc662a70b44e5eaafd8b0))
* smart measurement tools ([#284](https://github.com/ThatOpen/engine_components/issues/284)) ([ae100d0](https://github.com/ThatOpen/engine_components/commit/ae100d09039094dc49e5510ce6e13b993a6712f2))
* updated properties manager example ([#285](https://github.com/ThatOpen/engine_components/issues/285)) ([aee490a](https://github.com/ThatOpen/engine_components/commit/aee490ae7f5700a266a436e20c892a47b8ca684c))


### Bug Fixes

* add streaming file sample ([32a188e](https://github.com/ThatOpen/engine_components/commit/32a188e4a2d459da35cb2335171105c8a8fe7a52))
* components.dispose failed when ui disabled ([#267](https://github.com/ThatOpen/engine_components/issues/267)) ([83fc9ec](https://github.com/ThatOpen/engine_components/commit/83fc9eccc60ce439d3b6a04f1ee12c13c993021a))
* correct highlihgter update ([d976752](https://github.com/ThatOpen/engine_components/commit/d976752ad99357f1c55ee50b675a132b74d7cfe9))
* FragmentClassifier.byPredefineType returns a set of strings ([#266](https://github.com/ThatOpen/engine_components/issues/266)) ([b836e28](https://github.com/ThatOpen/engine_components/commit/b836e28016ce3a10b8b2f0ce89654a003aec8a83))
* FragmentTree must not be a tool ([#270](https://github.com/ThatOpen/engine_components/issues/270)) ([50c0f3f](https://github.com/ThatOpen/engine_components/commit/50c0f3fa7a514e480f060f460434b562edbadfe6))
* length measurement visualization ([#268](https://github.com/ThatOpen/engine_components/issues/268)) ([8997b2a](https://github.com/ThatOpen/engine_components/commit/8997b2a73ba9e724d04bffe4deb90ed52d7e6e86))
* Optional categories reset after initial loading in FragmentIfcLoader ([#269](https://github.com/ThatOpen/engine_components/issues/269)) ([29313fb](https://github.com/ThatOpen/engine_components/commit/29313fbc9e6ce5a06d9017e4a829564cd0007e53))
* restore n8ao version ([4e5da6a](https://github.com/ThatOpen/engine_components/commit/4e5da6acc51086f5ec3f034c972e665e24ce697d))
* updated annotation components ([#254](https://github.com/ThatOpen/engine_components/issues/254)) ([9d17a04](https://github.com/ThatOpen/engine_components/commit/9d17a049b8dd3c5df677963c1a91758f06fbbef5))
* used internal variables on component dispose ([#271](https://github.com/ThatOpen/engine_components/issues/271)) ([8ac695d](https://github.com/ThatOpen/engine_components/commit/8ac695d05c28e651caa03b53f3d8e078fa543269))


### Miscellaneous Chores

* release 1.4.5 ([0e00623](https://github.com/ThatOpen/engine_components/commit/0e0062393cfcb4bf6860549eb932dace362c8e23))

## [1.3.0](https://github.com/ThatOpen/engine_components/compare/v1.2.0...v1.3.0) (2024-01-07)


### Features

* **components:** Implemented setup on ScreenCuller ([#243](https://github.com/ThatOpen/engine_components/issues/243)) ([ff3328a](https://github.com/ThatOpen/engine_components/commit/ff3328aaa8d483cb6fab94a531581bd4c439606d))


### Bug Fixes

* **components:** 184 - Fixed navigation break on first person mode ([#236](https://github.com/ThatOpen/engine_components/issues/236)) ([28e7890](https://github.com/ThatOpen/engine_components/commit/28e7890f89e4132194abe49295b0e450d67c9b75))
* **components:** 224 - QuerySelector failing on SimpleUICard ([#228](https://github.com/ThatOpen/engine_components/issues/228)) ([d797b0d](https://github.com/ThatOpen/engine_components/commit/d797b0d4b26dd255b79ca8e6c4375583fac2da4c))
* **components:** fragment highlighter meshes added to screen culler ([#238](https://github.com/ThatOpen/engine_components/issues/238)) ([8f29abf](https://github.com/ThatOpen/engine_components/commit/8f29abfde5429b53a4cae16167f67721ae4b5d3d))
* **components:** slot parent missing in ui components ([#239](https://github.com/ThatOpen/engine_components/issues/239)) ([c671e18](https://github.com/ThatOpen/engine_components/commit/c671e1829120b1ad5bdfef0fd2d194909148a29f))
* publish npm package on successful release-please execution ([#200](https://github.com/ThatOpen/engine_components/issues/200)) ([570dac3](https://github.com/ThatOpen/engine_components/commit/570dac3bb5b679ec84315f3f08a588f011217d51))
* screen culler buggy when multiple models loaded ([#242](https://github.com/ThatOpen/engine_components/issues/242)) ([7d2fc5a](https://github.com/ThatOpen/engine_components/commit/7d2fc5a61bf59f088e11a57216db95c2854b678f))
* setup events in length measurements when ui is disabled ([#241](https://github.com/ThatOpen/engine_components/issues/241)) ([e54121a](https://github.com/ThatOpen/engine_components/commit/e54121a5a9d1557a11b9f2bfb3186a54d4551d91))

## [1.2.0](https://github.com/ThatOpen/engine_components/compare/v1.1.8...v1.2.0) (2023-12-01)


### Features

* update patch version ([fbc3ab0](https://github.com/ThatOpen/engine_components/commit/fbc3ab08d3a5a614c8706833f5502d3ecd29f651))


### Bug Fixes

* 135 - Isolate CSS Styles ([#191](https://github.com/ThatOpen/engine_components/issues/191)) ([68c1d81](https://github.com/ThatOpen/engine_components/commit/68c1d8121958c152a63ef088c56b2233ac363ff8))
* **workflow:** remove "type" key from publish-npm.yml ([e0a8cb0](https://github.com/ThatOpen/engine_components/commit/e0a8cb018a531184cf1630bc67f7e34e5ab2b3ce))
