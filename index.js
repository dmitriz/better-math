// index.js
var _ = require('lodash')
var Big = require('big.js')

module.exports = {
  add: function (x, y) {

    return Number(Big(x).plus(y))
  }
}
