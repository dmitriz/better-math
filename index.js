// index.js
var isFinite = require('lodash/isFinite')
var Big = require('big.js')

module.exports = {
  add: function (x, y) {
    if (!isFinite(x) || !isFinite(y)) throw Error('Both arguments must be finite numbers')
    return Number(Big(x).plus(y))
  }
}
