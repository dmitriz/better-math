# better-math
Mathematical operations performed reliably and intuitively


[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) 
[![MIT License](https://img.shields.io/npm/l/better-math.svg?style=flat-square)](http://opensource.org/licenses/MIT) 
[![npm downloads](https://img.shields.io/npm/dm/better-math.svg?style=flat-square)](https://www.npmjs.com/package/better-math)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard) [![Greenkeeper badge](https://badges.greenkeeper.io/dmitriz/better-math.svg)](https://greenkeeper.io/)


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


## Install

```sh
$ npm install --save better-math
```


## Usage

```js
var math = require('better-math')

math.add(0.1, 0.2) // => 0.3
math.add(0.1, -0.2) // => -0.1
```


## API

### math.add (number1, number2)

#### number1, number2

Type: `real number` for both arguments *strictly enforced* with *no exceptions!*

No `Infinities`, no `NaN`s, no `null`, no strings (not even `'1'`!):

```js
  if (!_.isFinite(x) || !_.isFinite(y)) throw Error('Both arguments must be finite numbers')
```


## Status
Currently `.add` is implemented and [**thoroughly tested**](https://github.com/dmitriz/better-math/blob/master/test.js)


## Credit
- This library is a tiny wrapper around the wonderful
[arbitrary-precision decimal arithmetic library Big.js](https://github.com/MikeMcl/big.js/) that deserves most credit
- The (also wonderful)) [LoDash](https://lodash.com/) is used for type checking


## License

MIT © [Dmitri Zaitsev](https://github.com/dmitriz)
