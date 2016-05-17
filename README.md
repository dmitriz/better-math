# better-math
Mathematical operations performed reliably and intuitively

## Why?

- No ugly approximation:

```js
	0.1 + 0.2 // => 0.30000000000000004
	math.add(0.1, 0.2) // => 0.3
```

- No messy unpredictable type conversion:

```js
	1 + '1' // => '11'
	true - 1 // => 0
	[] + 1.1 // => '1.1'
	[] - 1.1 // => '-1.1'
	{} + 1.1 // => 1.1

	math.add(1, '1') // => Uncaught Error: Both arguments must be finite numbers
	math.add(true, -1) // => Uncaught Error: Both arguments must be finite numbers
	math.add([], 1.1) // => Uncaught Error: Both arguments must be finite numbers
	math.add([], 1.1) // => Uncaught Error: Both arguments must be finite numbers
	math.add({}, 1.1) // => Uncaught Error: Both arguments must be finite numbers
```


## API

### maths.add (number1, number2)

#### number1, number2

Type: `real number` for both arguments *strictly enforced* with *no exceptions!*

No `Infinities`, no `NaN`s, no `null`, no strings (not even `'1'`!):

```js
  if (!isFinite(x) || !isFinite(y)) throw Error('Both arguments must be finite numbers')
```


## Status
Currently `.add` is implemented and **thoroughly tested**

## Credit
- This library is a tiny wrapper around the wonderful
(arbitrary-precision decimal arithmetic library Big.js)[https://github.com/MikeMcl/big.js/] that deserves most credit
- The (also wonderful))[LoDash](https://lodash.com/) is used for type checking

## License

MIT © [Dmitri Zaitsev](https://github.com/dmitriz)
