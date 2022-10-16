# Khmer Number

The smallest Khmer conversion functions.

## Khmer Numerals -> ASCII

```js
const result = toASCII('០១២៣៤៥៦៧៨៩')
// => 0123456789

const result = toASCII('០១២៣៤៥៦៧៨៩abc123')
// => 0123456789abc123
```

## ASCII -> Khmer Numerals

```js
const result = toKhmer('0123456789')
// => ០១២៣៤៥៦៧៨៩

const result2 = toKhmer('0123456789abc')
// => ០១២៣៤៥៦៧៨៩abc
```


## License

MIT
