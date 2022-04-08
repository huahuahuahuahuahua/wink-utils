[sings-utils](../README.md) / [Modules](../modules.md) / debounce

# Module: debounce

## Table of contents

### Type aliases

- [TAnyFunction](debounce.md#tanyfunction)

### Variables

- [default](debounce.md#default)

### Functions

- [debounce](debounce.md#debounce)

## Type aliases

### TAnyFunction

Ƭ **TAnyFunction**: (...`args`: `any`[]) => `void`

#### Type declaration

▸ (...`args`): `void`

函数去抖，也就是说当调用动作n毫秒后，才会执行该动作，若在这n毫秒内又调用此动作则将重新计算执行时间。

**`example`**

// Avoid costly calculations while the window size is in flux.
jQuery(window).on('resize', _.debounce(calculateLayout, 150));

// Invoke `sendMail` when clicked, debouncing subsequent calls.
jQuery(element).on('click', _.debounce(sendMail, 300, {
  'leading': true,
  'trailing': false
}));

// Ensure `batchLog` is invoked once after 1 second of debounced calls.
var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
var source = new EventSource('/stream');
jQuery(source).on('message', debounced);

// Cancel the trailing debounced invocation.
jQuery(window).on('popstate', debounced.cancel);

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

返回去抖之后的函数.

#### Defined in

[debounce.ts:43](https://github.com/huahuahuahuahuahua/wink-utils/blob/66836b0/src/debounce.ts#L43)

## Variables

### default

• **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `debounce` | (`func`: [`TAnyFunction`](debounce.md#tanyfunction), `wait`: `number`, `options`: `IOptions`) => [`TAnyFunction`](debounce.md#tanyfunction) |

#### Defined in

[debounce.ts:179](https://github.com/huahuahuahuahuahua/wink-utils/blob/66836b0/src/debounce.ts#L179)

## Functions

### debounce

▸ **debounce**(`func`, `wait?`, `options?`): [`TAnyFunction`](debounce.md#tanyfunction)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `func` | [`TAnyFunction`](debounce.md#tanyfunction) | `undefined` |
| `wait` | `number` | `1000` |
| `options` | `IOptions` | `{}` |

#### Returns

[`TAnyFunction`](debounce.md#tanyfunction)

#### Defined in

[debounce.ts:45](https://github.com/huahuahuahuahuahua/wink-utils/blob/66836b0/src/debounce.ts#L45)
