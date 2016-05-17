// index.js
var isFinite = require('lodash/isFinite')
var some = require('lodash/some')

var Big = require('big.js')

// console.log(isFinite(1, 1))

module.exports = {
  forceFinite: forceFinite,
  add: function (x, y) {
    forceFinite(x, y)
    return Number(Big(x).plus(y))
  }
}

function forceFinite () {
  if (some(arguments, function (arg) { return !isFinite(arg) })) {
    throw Error('Finite number must be provided instead of ' + JSON.stringify(arguments))
  }
}
