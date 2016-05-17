// test.js
var fn = require('./')
// var Big = require('big.js')

describe('Number subtraction', function () {
  it('should perform exact decimal addition', function () {
    expect(0.1 + 0.2).not.toBe(0.3)
    expect(fn.add(0.1, 0.2)).toBe(0.3)
    expect(fn.add(0.01, 0.02)).toBe(0.03)
    expect(fn.add(1.11, 2.22)).toBe(3.33)
  })

  it('should perform exact decimal subtraction', function () {
    expect(0.3 - 0.1).not.toBe(0.2)
    expect(fn.add(0.3, -0.1)).toBe(0.2)
    expect(fn.add(0.13, -0.11)).toBe(0.02)
    expect(fn.add(1.11, -2.22)).toBe(-1.11)
    expect(fn.add(1.22, -2.11)).toBe(-0.89)
  })
})
