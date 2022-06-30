[wink-utils](../README.md) / [Modules](../modules.md) / memo

# Module: memo

## Table of contents

### References

- [default](memo.md#default)

### Type aliases

- [TAnyFunc](memo.md#tanyfunc)

### Functions

- [memo](memo.md#memo)

## References

### default

Renames and re-exports [memo](memo.md#memo)

## Type aliases

### TAnyFunc

Ƭ **TAnyFunc**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (...`args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

[memo.ts:3](https://github.com/huahuahuahuahuahua/wink-utils/blob/60986b6/src/memo.ts#L3)

## Functions

### memo

▸ **memo**(`fn`, `hasher?`): (...`argument`: `any`[]) => `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`TAnyFunction`](debounce.md#tanyfunction) |
| `hasher?` | [`TAnyFunc`](memo.md#tanyfunc) |

#### Returns

`fn`

▸ (...`argument`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...argument` | `any`[] |

##### Returns

`any`

| Name | Type |
| :------ | :------ |
| `cache` | {} |

#### Defined in

[memo.ts:5](https://github.com/huahuahuahuahuahua/wink-utils/blob/60986b6/src/memo.ts#L5)
