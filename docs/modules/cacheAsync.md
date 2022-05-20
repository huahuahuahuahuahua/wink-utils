[wink-utils](../README.md) / [Modules](../modules.md) / cacheAsync

# Module: cacheAsync

## Table of contents

### Type aliases

- [TAnyFunction](cacheAsync.md#tanyfunction)

### Functions

- [OldcacheAsync](cacheAsync.md#oldcacheasync)
- [UpdateCacheAsync](cacheAsync.md#updatecacheasync)
- [fetchData](cacheAsync.md#fetchdata)

## Type aliases

### TAnyFunction

Ƭ **TAnyFunction**: (...`args`: `any`[]) => `void`

#### Type declaration

▸ (...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Defined in

[cacheAsync.ts:1](https://github.com/huahuahuahuahuahua/wink-utils/blob/78e35a6/src/cacheAsync.ts#L1)

## Functions

### OldcacheAsync

▸ **OldcacheAsync**(`fn`): (`str`: `string` \| `number`) => `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`TAnyFunction`](cacheAsync.md#tanyfunction) |

#### Returns

`fn`

▸ (`str`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` \| `number` |

##### Returns

`Promise`<`any`\>

#### Defined in

[cacheAsync.ts:3](https://github.com/huahuahuahuahuahua/wink-utils/blob/78e35a6/src/cacheAsync.ts#L3)

___

### UpdateCacheAsync

▸ **UpdateCacheAsync**(`promiseGenerator`, `symbol`): (`params`: `any`) => `Promise`<`unknown`\>

**`msg:`**

**`descripttion:多个相同的请求，请求成功，停止，失败，继续`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promiseGenerator` | `any` | promise function |
| `symbol` | `any` |  |

#### Returns

`fn`

▸ (`params`): `Promise`<`unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

##### Returns

`Promise`<`unknown`\>

#### Defined in

[cacheAsync.ts:26](https://github.com/huahuahuahuahuahua/wink-utils/blob/78e35a6/src/cacheAsync.ts#L26)

___

### fetchData

▸ **fetchData**(`a`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` \| `number` |

#### Returns

`Promise`<`string`\>

#### Defined in

[cacheAsync.ts:66](https://github.com/huahuahuahuahuahua/wink-utils/blob/78e35a6/src/cacheAsync.ts#L66)
