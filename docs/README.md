wink-utils / [Modules](modules.md)

<!--
 * @Author: t_winkjqzhang
 * @Date: 2022-04-02 11:58:36
 * @LastEditTime: 2022-04-14 01:40:14
 * @Description: Do not edit
-->

# wink-utils

使用公共库

## 示例代码

## 文件（模块）说明

| 路径 | 解释 | 包含 |
| :----- | :----- | :----- |
| [dist/UrlGetRequest.js](docs/modules/UrlGetRequest.md) | 暂无解释 | [default](docs/modules/UrlGetRequest.md#default)<br /> [UrlGetRequest( url: string, variable: string )](docs/modules/UrlGetRequest.md#UrlGetRequest) |
| [dist/cacheAsync.js](docs/modules/cacheAsync.md) | 暂无解释 | [OldcacheAsync( fn: TAnyFunction )](docs/modules/cacheAsync.md#OldcacheAsync)<br /> [UpdateCacheAsync( promiseGenerator: any, symbol: any )](docs/modules/cacheAsync.md#UpdateCacheAsync)<br /> [fetchData( a:  )](docs/modules/cacheAsync.md#fetchData) |
| [dist/changefilesize.js](docs/modules/changefilesize.md) | 暂无解释 | [default](docs/modules/changefilesize.md#default)<br /> [changefilesize( limit: number )](docs/modules/changefilesize.md#changefilesize) |
| [dist/cloneDeep.js](docs/modules/cloneDeep.md) | 暂无解释 | [default](docs/modules/cloneDeep.md#default)<br /> [cloneDeep( obj: any )](docs/modules/cloneDeep.md#cloneDeep) |
| [dist/debounce.js](docs/modules/debounce.md) | 暂无解释 | [default](docs/modules/debounce.md#default)<br /> [debounce( func: TAnyFunction, wait: number, options: IOptions )](docs/modules/debounce.md#debounce) |
| [dist/formatnumber.js](docs/modules/formatnumber.md) | 暂无解释 | [default](docs/modules/formatnumber.md#default)<br /> [formatNumber( num: number )](docs/modules/formatnumber.md#formatNumber) |
| [dist/index.js](docs/modules/index.md) | 暂无解释 | [TAnyFunction](docs/modules/index.md#TAnyFunction)<br /> [UrlGetRequest](docs/modules/index.md#UrlGetRequest)<br /> [changefilesize](docs/modules/index.md#changefilesize)<br /> [cloneDeep](docs/modules/index.md#cloneDeep)<br /> [debounce](docs/modules/index.md#debounce)<br /> [formatNumber](docs/modules/index.md#formatNumber)<br /> [isObject](docs/modules/index.md#isObject)<br /> [throttle](docs/modules/index.md#throttle) |
| [dist/isObject.js](docs/modules/isObject.md) | 暂无解释 | [default](docs/modules/isObject.md#default)<br /> [isObject( obj: object )](docs/modules/isObject.md#isObject) |
| [dist/main.js](docs/modules/main.md) | 暂无解释 | [default](docs/modules/main.md#default)<br /> [main()](docs/modules/main.md#main) |
| [dist/throttle.js](docs/modules/throttle.md) | 暂无解释 | [default](docs/modules/throttle.md#default)<br /> [throttle( func: TAnyFunction, wait: number, options: IOptions )](docs/modules/throttle.md#throttle) |

## 版本更新

# 工具库更新日志

## [1.0.5](https://github.com/huahuahuahuahuahua/wink-utils/compare/v1.0.4...v1.0.5) (2022-04-17)

## [1.0.4](https://github.com/huahuahuahuahuahua/wink-utils/compare/v1.0.2...v1.0.4) (2022-04-17)

### Features

* **src:** 增加cloneDeep方法，修复throttle ([413bebe](https://github.com/huahuahuahuahuahua/wink-utils/commit/413bebee7125d643d49a6357531dc1e6aef22701))

## [1.0.2](https://github.com/huahuahuahuahuahua/wink-utils/compare/v1.0.1...v1.0.2) (2022-04-13)

### Bug Fixes

* **src:** throttle接收Func类型错误 ([47aa9a7](https://github.com/huahuahuahuahuahua/wink-utils/commit/47aa9a70aae77789f34b87b61257a29e03f34ec6))

## [1.0.1](https://github.com/huahuahuahuahuahua/wink-utils/compare/5ff4a4fd68dd2d8e01b30ebc8713ca0d51d016c8...v1.0.1) (2022-04-13)

### Bug Fixes

* **docs:** html不会自动转为md文件问题 ([5ff4a4f](https://github.com/huahuahuahuahuahua/wink-utils/commit/5ff4a4fd68dd2d8e01b30ebc8713ca0d51d016c8))
