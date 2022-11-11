# Khmer Number

The smallest (0.25kB) and fastest Khmer number conversion functions. 

## Installation

```shell
npm install khmernumber
```

## Usage

```js
import { toASCII, toKhmer } from "khmernumber";
```

## Khmer Numerals -> ASCII

```js
const result = toASCII("០១២៣៤៥៦៧៨៩");
// => 0123456789

const result = toASCII("០១២៣៤៥៦៧៨៩abc123");
// => 0123456789abc123
```

## ASCII -> Khmer Numerals

```js
const result = toKhmer("0123456789");
// => ០១២៣៤៥៦៧៨៩

const result2 = toKhmer("0123456789abc");
// => ០១២៣៤៥៦៧៨៩abc
```


## Benchmark

```
khmernumber: 0.686ms
  toASCII x 2,926,953 ops/sec ±1.87% (91 runs sampled)
  toKhmer x 2,446,022 ops/sec ±1.29% (91 runs sampled)
  String.replace: Khmer -> ASCII x 622,731 ops/sec ±1.32% (88 runs sampled)
  String.replace: ASCII -> Khmer x 816,557 ops/sec ±0.33% (97 runs sampled)
```

## Related

- [seanghay/khmerword](https://github.com/seanghay/khmerword)
- [seanghay/khmercal](https://github.com/seanghay/khmercal)

## License

MIT
