// test.js
var fn = require('./')

/**
 * Finite number guard
 */
describe('Finite number guard', function () {
  it('should throw errors for types other than finite numbers', function () {
    expect(function () { return fn.forceFinite(NaN) }).toThrow()
    expect(function () { return fn.forceFinite(Infinity) }).toThrow()
    expect(function () { return fn.forceFinite('11') }).toThrow()
    expect(function () { return fn.forceFinite(-1, '11') }).toThrow()
    expect(function () { return fn.forceFinite([-1, '11']) }).toThrow()
    expect(function () { return fn.forceFinite(undefined) }).toThrow()
    expect(function () { return fn.forceFinite(null) }).toThrow()
    expect(function () { return fn.forceFinite({}, 2.2) }).toThrow()
    expect(function () { return fn.forceFinite({}, []) }).toThrow()
    expect(function () { return fn.forceFinite([]) }).toThrow()
  })
  it('should accept finite numbers', function () {
    expect(function () { return fn.forceFinite(1, 2) }).not.toThrow()
    expect(function () { return fn.forceFinite(-1) }).not.toThrow()
    expect(function () { return fn.forceFinite(-0) }).not.toThrow()
    expect(function () { return fn.forceFinite(-12.33) }).not.toThrow()
    expect(function () { return fn.forceFinite(12.3, 0.5, 0.202) }).not.toThrow()
  })
})

/**
 * Addition
 */
describe('Integer addition', function () {
  it('should add integers', function () {
    expect(fn.add(1, 2)).toBe(3)
    expect(fn.add(199, 3)).toBe(202)
    expect(fn.add(-402, 3)).toBe(-399)
  })
  it('should add plus and minus zero', function () {
    expect(fn.add(21, 0)).toBe(21)
    expect(fn.add(-2, -0)).toBe(-2)
  })
})

describe('Decimal real number and and subtract', function () {
  it('should perform exact decimal addition', function () {
    expect(0.1 + 0.2).not.toBe(0.3)
    expect(fn.add(0.1, 0.2)).toBe(0.3)
    expect(fn.add(0.10, 0.2)).toBe(0.3)
    expect(fn.add(0.01, 0.02)).toBe(0.03)
    expect(fn.add(1.11, 2.22)).toBe(3.33)
  })
  it('should perform exact decimal subtraction', function () {
    expect(0.3 - 0.1).not.toBe(0.2)
    expect(fn.add(0.31, -0.1)).toBe(0.21)
    expect(fn.add(0.13, -0.11)).toBe(0.02)
    expect(fn.add(1.113, -2.223)).toBe(-1.11)
    expect(fn.add(1.22, -2.11)).toBe(-0.89)
  })
  it('should add/subtract minus 0', function () {
    expect(fn.add(1.22, -0)).toBe(1.22)
    expect(fn.add(-21.99, -0)).toBe(-21.99)
  })
})

describe('Treat numerical non-numbers as illegal', function () {
  it('should throw error if one argument is plus/minus Infinity', function () {
    expect(function () { return fn.add(1, 2) }).not.toThrow()
    expect(function () { return fn.add(1, Infinity) }).toThrow()
    expect(function () { return fn.add(-1.3, -Infinity) }).toThrow()
    expect(function () { return fn.add(Infinity, -0) }).toThrow()
    expect(function () { return fn.add(-Infinity, 0) }).toThrow()
  })
  it('should throw error if one argument is NaN', function () {
    expect(function () { return fn.add(-1, NaN) }).toThrow()
    expect(function () { return fn.add(NaN, NaN) }).toThrow()
    expect(function () { return fn.add(NaN, Infinity) }).toThrow()
    expect(function () { return fn.add(NaN, -0) }).toThrow()
  })
})

describe('Treat types other than number as illegal', function () {
  it('should throw error if one argument is null or undefined', function () {
    expect(function () { return fn.add() }).toThrow()
    expect(function () { return fn.add(1) }).toThrow()
    expect(function () { return fn.add(-1.2) }).toThrow()
    expect(function () { return fn.add(1, null) }).toThrow()
    expect(function () { return fn.add(null, null) }).toThrow()
  })
  it('should throw error if one argument is boolean', function () {
    expect(function () { return fn.add(1, true) }).toThrow()
    expect(function () { return fn.add(false, 2.2) }).toThrow()
    expect(function () { return fn.add(true, true) }).toThrow()
  })
  it('should throw error if one argument is boolean', function () {
    expect(function () { return fn.add(1, true) }).toThrow()
    expect(function () { return fn.add(false, 2.2) }).toThrow()
    expect(function () { return fn.add(true, true) }).toThrow()
  })
  it('should throw error if one argument is string', function () {
    expect(function () { return fn.add(1, '') }).toThrow()
    expect(function () { return fn.add('1', 1) }).toThrow()
    expect(function () { return fn.add(-33.3, '-3.2') }).toThrow()
  })
  it('should throw error if one argument is array', function () {
    expect(function () { return fn.add(1, []) }).toThrow()
    expect(function () { return fn.add([1, 2], 1) }).toThrow()
    expect(function () { return fn.add([-1], -3.2) }).toThrow()
  })
  it('should throw error if one argument is object', function () {
    expect(function () { return fn.add({}, {}) }).toThrow()
    expect(function () { return fn.add(11, {}) }).toThrow()
    expect(function () { return fn.add({a: 5}, 1) }).toThrow()
    expect(function () { return fn.add(0, {aa: -3.2, 4: '1'}) }).toThrow()
  })
})
